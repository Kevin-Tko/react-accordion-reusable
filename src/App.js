import { useState } from "react";

const banking = [
    {
        title: "Where do I work?",
        text: "Faulu Microfinance Bank.",
    },
    {
        title: "How long long have I worked in the banking industry?",
        text: "Six years...One year Customer Service || Two years Bank Teller || Three years Treasury Operations.",
    },
    {
        title: "What are my main skills in the banking operations?",
        text: "Liquidity management || Cashflow management || Risk management || Payments Processing || Debt and Investment management || Process Automation",
    },
    {
        title: "What tools do I use for my daily operations?",
        text: "Microsoft Excel and Google Sheets || Power BI || T24 core banking system || SWIFT system || Dhow CSD || KEPSS CBK system",
    },
];
const softwareDev = [
    {
        title: "Where do I work?",
        text: "Freelance and open to fulltime work",
    },
    {
        title: "How long long have I been a software developer?",
        text: "I have been doing freelance work in software development for the last one year",
    },
    {
        title: "What pragramming languages do I know ?",
        text: "HTML5 || CSS3 || Javascript || React & Redux || Python || NodeJS || Django || MYSQL",
    },
    {
        title: "What tools and frameworks do I use?",
        text: "VS Code || Github & GIT || AWS || Netlify || Jupyter Notebooks || Mysql Workbench",
    },
];

export default function App() {
    return (
        <div>
            <div className="app">
                <Accordion job={banking} />
                <Accordion job={softwareDev} />
            </div>
        </div>
    );
}

function Accordion({ job }) {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        // <div className="container">
        <div className="accordion-box">
            {job.map((faq, idx) => (
                <AccordionItem
                    title={faq.title}
                    num={idx + 1}
                    key={faq.title}
                    onOpenItem={setSelectedItem}
                    selected={selectedItem}
                >
                    {faq.text}
                </AccordionItem>
            ))}
        </div>
        // </div>
    );
}

function AccordionItem({ title, text, num, onOpenItem, selected, children }) {
    const isOpen = num === selected;

    function handleOpenFaq() {
        onOpenItem(num !== selected ? num : null);
    }

    return (
        <div
            className={`accordion ${isOpen ? "open" : ""}`}
            onClick={handleOpenFaq}
        >
            <p className="number">{num < 9 ? `0${num}` : num}</p>
            <h2 className="title">{title}</h2>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <p className="text">{children}</p>}
        </div>
    );
}
