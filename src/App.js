import Card from "components/Card";
import { ReactComponent as IconFacebook } from "assets/icon-facebook.svg";
import { ReactComponent as IconPinterest } from "assets/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "assets/icon-instagram.svg";
import useCountdown from "hooks/useCountdown";

const initialCountdown = {
  days: 8,
  hours: 23,
  minutes: 55,
  seconds: 41
};

function App() {
  const { days, hours, minutes, seconds } = useCountdown(initialCountdown);

  return (
    <>
      <header>
        <h1>We&apos;re launching soon</h1>
      </header>
      <main>
        <div className="timer">
          <Card number={days} title="Days" />
          <Card number={hours} title="Hours" />
          <Card number={minutes} title="Minutes" />
          <Card number={seconds} title="Seconds" />
        </div>
      </main>
      <footer>
        <ul className="social">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopenener"
            >
              <IconFacebook className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer noopenener"
            >
              <IconPinterest className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopenener"
            >
              <IconInstagram className="icon" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
