import React, { useEffect, useState } from 'react';

const titles = [
  "Fresher Frontend Developer",
  "React JS Developer",
  "Frontend Web Developer",
  "Open to Opportunities",
];

const TypingEffect = ({ speed = 80, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    let typingSpeed = speed;

    if (isDeleting) {
      typingSpeed /= 2;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayedText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, speed, pause]);

  return (
    <p style={{ fontFamily: 'fantasy' }} className="head-HeadColor text-[2rem] mt-4">
      {displayedText}
      <span className="animate-pulse text-white">|</span>
    </p>
  );
};

export default function TypingTitle() {
  return <TypingEffect />;
}
