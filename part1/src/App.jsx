import Hello from "./Hello";
import styling from "./App.css"
import ReactLogo from "./assets/react.svg";

const App = () => {
    return (
      <div className={styling}>
        <a >
            <img src={ReactLogo} className="logo react"></img>
        </a>
        <h1>Greetings</h1>
        <Hello name="Joni"/>
        <Hello name="Markku"/>
      </div>
    )
  }


  export default App;