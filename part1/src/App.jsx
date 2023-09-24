import "./App.css"
import MyLogo from "./assets/mylogo.svg";
import Question from "./components/Question";
import Who from "./components/Who";


const App = () => {
    return (
      <div>
        <a >
            <img src={MyLogo} className="logo"></img>
        </a>
        <h1>Greetings</h1>
        <Who className="card" />
        <Question />
      </div>
    )
  }


  export default App;