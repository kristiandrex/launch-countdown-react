import { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "styles/Card.css";

export function getNextNumber(number) {
  return number === 0 ? 59 : number - 1;
}

export const timeoutDuration = 500;

function Card({ number, title }) {
  const [currentNumber, setCurrentNumber] = useState(number);
  const [nextNumber, setNextNumber] = useState(getNextNumber(number));
  const elementRef = useRef(null);
  const isInitial = useRef(true);

  const currentString = String(currentNumber).padStart(2, "0");
  const nextString = String(nextNumber).padStart(2, "0");

  useEffect(() => {
    let timeout;

    if (isInitial.current) {
      isInitial.current = false;
    } else {
      elementRef.current.classList.add("flip");

      timeout = setTimeout(() => {
        setCurrentNumber((value) => getNextNumber(value));
        setNextNumber((value) => getNextNumber(value));
        elementRef.current.classList.remove("flip");
      }, timeoutDuration);
    }

    return () => clearTimeout(timeout);
  }, [number]);

  return (
    <div className="card" ref={elementRef}>
      <div className="shape">
        <div className="front">{currentString}</div>
        <div className="back">{nextString}</div>
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

Card.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default memo(Card);
