import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <hi> Weather App</hi>
        <Weather defaultCity="Prague" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/anastasiia-sherstobitova-4911971b0/"
            target="_blank"
            rel=" noreferrer"
          >
            Anastasiia Sherstobitova
          </a>{" "}
          and is{" "}
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
export default App;
//default city