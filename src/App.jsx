import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [counter, setCounter] = useState({
    Score : 76,
    Wicket : 2,
    Ball : 50 ,
  });

  const handlechange = (value,str) => {
    if(str==="add1"){
      setCounter({ ... counter, Score: counter.Score+value})
    }
    if(str==="add4"){
      setCounter({ ... counter, Score: counter.Score+value})
    }
    if(str==="add6"){
      setCounter({ ... counter, Score: counter.Score+value})
    }
    if(str==="addWicket1"){
      setCounter({ ... counter, Wicket: counter.Wicket+value})
    }
    if(str==="addball1"){
      setCounter({ ... counter, Ball: counter.Ball+value})
    }
    // setCounter({ ... counter, Score: counter.Score+value})
  }

  return (
     <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              counter.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              counter.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              counter.Ball
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => { if(counter.Score<=0) {return;} handlechange(1,"add1")}}>Add 1</button>
        <button className="addScore4" onClick={() => { handlechange(4,"add4")}}>Add 4</button>
        <button className="addScore6" onClick={() => { handlechange(6,"add6")}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => { if(counter.Wicket>=12) {return;} handlechange(1,"addWicket1")}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => { handlechange(1,"addball1")}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
    
  );
}

export default App;
