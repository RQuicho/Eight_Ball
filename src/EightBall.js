import React, {useState} from 'react';
import defaultAnswers from './defaultAnswers';

const EightBall = ({answers = defaultAnswers}) => {
  const randIdx = Math.floor(Math.random() * answers.length);
  const randMsg = () => answers[randIdx].msg;
  const randColor = () => answers[randIdx].color;

  const [isShown, setIsShown] = useState(false);
  const [msg, setMsg] = useState(randMsg());
  const [color, setColor] = useState(randColor());

  const firstQuestion = () => {
    setIsShown(true);
  }

  const otherQuestions = () => {
    setMsg(randMsg());
    setColor(randColor());
  }
 
  return (
    <div onClick={firstQuestion}>
      {!isShown && (
        <div style={{background: 'black', color: 'white'}}>
          <h1>Think of a Question</h1>
        </div>
      )}
      
      {isShown && (
        <div style={{background: color, color: 'white'}} onClick={otherQuestions}>
          <h1>{msg}</h1>
          <h1>{color}</h1>
        </div>
      )}
    </div>

    // <div style={{background: color, color: 'white'}} onClick={askQuestion}>
    //   <h1>{msg}</h1>
    //   <h1>{color}</h1>
    // </div>
  )
}

export default EightBall;