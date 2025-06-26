import React, { useEffect, useRef, useState } from "react";

interface TypingTextProps {
  text: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = text.split("");
    let i = 0;
    const node = containerRef.current;
    node.innerHTML = "";

    const addNextChar = (index: number) => {
      const nextChar = chars[index] === "\n" ? "<br>" : chars[index];
      node.innerHTML += `<span>${nextChar}</span>`;

      if (index < chars.length - 1) {
        setTimeout(() => {
          addNextChar(index + 1);
        }, 20 + Math.random() * 100);
      } else {
        setTimeout(() => {
          setIsTyping(false);
        }, 20 + Math.random() * 150);
      }
    };

    addNextChar(i);
  }, [text]);

  return (
    <p
      ref={containerRef}
      className={isTyping ? "typing" : ""}
      style={{
        maxWidth: "800px",
        textAlign: "left",
        width: "100%",
        color: "black",
        fontFamily: "monospace",
        fontSize: "1.8rem",
        WebkitFontSmoothing: "antialiased",
        marginBottom: "8rem",
      }}
    />
  );
};

export default TypingText;
