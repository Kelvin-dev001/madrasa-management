import { useState } from "react";
import Button from "../UI/Button";

export default function AIChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function sendMessage() {
    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div>
      <h3>AI Chat</h3>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <Button onClick={sendMessage}>Send</Button>
    </div>
  );
}