import PropTypes from "prop-types";
import "styles/Card.css";

function Card({ number, title }) {
  const numberString = String(number).padStart(2, 0);

  return (
    <div className="card">
      <div className="wrapper">{numberString}</div>
      <div className="title">{title}</div>
    </div>
  );
}

Card.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
