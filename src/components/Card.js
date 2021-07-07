import { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "styles/Card.css";

export function getNextNumber(number) {
  return number === 0 ? 59 : number - 1;
}

export const animationDuration = 500;

function Card({ number, title }) {
  const [currentNumber, setCurrentNumber] = useState(number);
  const [nextNumber, setNextNumber] = useState(getNextNumber(number));

  const elementRef = useRef(null);
  const isInitial = useRef(true);

  const currentString = String(currentNumber).padStart(2, "0");
  const nextString = String(nextNumber).padStart(2, "0");

  useEffect(() => {
    if (!isInitial.current) {
      elementRef.current?.classList.add("flip");

      const timeout = setTimeout(() => {
        setCurrentNumber((value) => getNextNumber(value));
        setNextNumber((value) => getNextNumber(value));

        elementRef.current?.classList.remove("flip");
      }, animationDuration);

      return () => clearTimeout(timeout);
    }

    isInitial.current = false;
  }, [number]);

  return (
    <div className="card" ref={elementRef}>
      <div className="container">
        <div className="front">
          <div className="top">
            <span className="number">{currentString}</span>
          </div>
          <div className="bottom">
            <span className="number">{currentString}</span>
          </div>
        </div>
        <div className="back">
          <div className="top">
            <span className="number">{nextString}</span>
          </div>
          <div className="bottom">
            <span className="number">{nextString}</span>
          </div>
        </div>
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
