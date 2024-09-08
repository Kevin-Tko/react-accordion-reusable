import { useState } from "react";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
        title: "How long do I have to return my chair?",
        text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
        title: "Do you ship to countries outside the EU?",
        text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
];

export default function App() {
    return (
        <div>
            <Accordion />
        </div>
    );
}

function Accordion() {
    return (
        <div className="container">
            {faqs.map((faq, idx) => (
                <AccordionItem
                    title={faq.title}
                    text={faq.text}
                    num={idx + 1}
                    key={faq.title}
                />
            ))}
        </div>
    );
}

function AccordionItem({ title, text, num }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleExpand(idx) {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div
            className={`accordion ${isOpen ? "open" : ""}`}
            onClick={handleExpand}
        >
            <p className="number">{num < 9 ? `0${num}` : num}</p>
            <h2 className="title">{title}</h2>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <p className="text">{text}</p>}
        </div>
    );
}
