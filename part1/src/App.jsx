import Hello from "./Hello";
import "./App.css"
import MyLogo from "./assets/mylogo.svg";
import Question from "./components/Question";


const App = () => {
    return (
      <div>
        <a >
            <img src={MyLogo} className="logo"></img>
        </a>
        <h1>Greetings</h1>
        <Question />
      </div>
    )
  }


  export default App;