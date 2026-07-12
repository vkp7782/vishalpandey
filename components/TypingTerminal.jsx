"use client";

import { useEffect, useState } from "react";

const LINE_DELAY = 320;
const CHAR_DELAY = 18;

export default function TypingTerminal({ lines }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setDone(true);
      return;
    }

    const currentLine = lines[lineIndex].text;

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_DELAY);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, LINE_DELAY);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex, lines]);

  return (
    <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7 sm:text-sm">
      <code>
        {lines.map((line, i) => {
          if (i > lineIndex) return null;
          const text = i === lineIndex ? line.text.slice(0, charIndex) : line.text;
          return (
            <span key={i} className={line.className}>
              {text}
              {i === lineIndex && !done && (
                <span className="animate-blink text-accent dark:text-accent-dark">▍</span>
              )}
              {i < lines.length - 1 && "\n"}
            </span>
          );
        })}
        {done && <span className="animate-blink text-accent dark:text-accent-dark">▍</span>}
      </code>
    </pre>
  );
}
