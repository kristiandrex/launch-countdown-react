import { ReactComponent as IconFacebook } from "assets/icon-facebook.svg";
import { ReactComponent as IconPinterest } from "assets/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "assets/icon-instagram.svg";

function App() {
  return (
    <>
      <header>
        <h1>We&apos;re launching soon</h1>
      </header>
      <main>
        <div className="timer">
          <div className="timer-item">
            <div className="card">08</div>
            <div className="title">Days</div>
          </div>
          <div className="timer-item">
            <div className="card">23</div>
            <div className="title">Hours</div>
          </div>
          <div className="timer-item">
            <div className="card">55</div>
            <div className="title">Minutes</div>
          </div>
          <div className="timer-item">
            <div className="card">41</div>
            <div className="title">Seconds</div>
          </div>
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
