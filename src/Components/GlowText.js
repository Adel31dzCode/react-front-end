// GlowingText.jsx
import { useEffect, useState } from "react";

const GlowingText = () => {
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  const letters = ["A", "d", "e", "l", "3", "1", "_", "d", "z"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (forward) {
          if (prev >= letters.length - 1) {
            setForward(false);
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setForward(true);
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 800);

    return () => clearInterval(interval); // تنظيف
  }, [forward, letters.length]);

  return (
    <h1 id="big_name_interface" data-aos="fade-up">
      {letters.map((letter, i) => (
        <span key={i} className={forward ? (i <= index ? "glow" : "") : (i >= index ? "glow" : "")}>
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default GlowingText;
