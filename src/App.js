//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const initialStateLions = 14;
  const initialStateTigers = 3;
  const [scoreLions, setScoreLions] =useState(initialStateLions); 
  const [scoreTigers, setScoreTigers] =useState(initialStateTigers); 

  const onClickHandler = () =>setScoreLions(scoreLions + 7);
  const onClickHandler2 = () =>setScoreTigers(scoreTigers + 7);

  
  //timer
  // const Timer = ({ seconds }) => {
  //   const [timeLeft, setTimeLeft] = useState(seconds);
  //     useEffect (() => {
  //       if (!timeLeft) return;
  //       const intervalId = setTimeout(() => {
  //         setTimeLeft(timeLeft -1);
  //       }, 1000);

  //       return () => clearInterval(intervalId);
  //     }, [timeLeft]);

      // return (
      //   <div> 
      //       <h1> {timeLeft}</h1>
      //   </div>
      // );
  return (
    <div className="container">
      <section className="scoreboard">
        <div className= "title"> Welcome to the Game!</div>
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"><span>{scoreLions}</span></div>
          </div>
          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"><span>{scoreTigers}</span></div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {onClickHandler}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {() => setScoreLions(scoreLions+ 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {onClickHandler2}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"onClick = {() => setScoreTigers(scoreTigers + 3)}>Away Field Goal</button>
        </div>
        <div className="scoreBoardButtons">
        <button className="downs" onClick = {onClickHandler2}>Down</button>
        <button className="yards-to-go" onClick = {() => setScoreTigers(scoreTigers + 1)}>To Go</button>
        </div>
      </section>
    </div>
  );
}

export default App;
