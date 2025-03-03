"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./gs.css"; // Import the updated CSS

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm Alpha, your AI assistant. How can I help?" },
  ]);
  const [input, setInput] = useState("");
  const [faqOpen, setFaqOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "I'm here to help!" }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      {/* AI Avatar */}
      <div className="ai-avatar">
        <img src="/ai-avatar.png" alt="AI Avatar" className="avatar-image" />
      </div>

      {/* Chat Box */}
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="send-btn" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>

      {/* FAQ Section (Right Side) */}
      <div className={`faq-section ${faqOpen ? "open" : ""}`}>
        <button className="faq-toggle" onClick={() => setFaqOpen(!faqOpen)}>
          {faqOpen ? "❌ Close FAQ" : "❓ FAQ"}
        </button>

        {faqOpen && (
          <div className="faq-content">
            <h3>Frequently Asked Questions</h3>
            <ul>
              <li><strong>How does this chatbot work?</strong> <br /> It uses AI to provide real-time responses.</li>
              <li><strong>Can I talk about medical issues?</strong> <br /> Yes, but always consult a doctor for serious concerns.</li>
              <li><strong>Is my data safe?</strong> <br /> Yes, we do not store personal data.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
