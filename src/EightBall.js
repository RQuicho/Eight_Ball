import React, {useState} from 'react';
import defaultAnswers from './defaultAnswers';
import './EightBall.css';

const EightBall = ({answers = defaultAnswers}) => {
  // randomly selects message and color from given array
  const randIdx = Math.floor(Math.random() * answers.length);
  const randMsg = () => answers[randIdx].msg;
  const randColor = () => answers[randIdx].color;

  const [isShown, setIsShown] = useState(false); // toggles hiding an element
  const [msg, setMsg] = useState(randMsg());
  const [color, setColor] = useState(randColor());

  const firstQuestion = () => {
    setIsShown(true);
  }

  // new random message and colors appear
  const otherQuestions = () => {
    setMsg(randMsg());
    setColor(randColor());
  }
 
  return (
    <div onClick={firstQuestion}>
      {!isShown && (
        <div className='firstQ' style={{background: 'black', color: 'white'}}>
          <h1 className='firstQ-text'>Think of a Question</h1>
        </div>
      )}
      
      {isShown && (
        <div className='otherQs' style={{background: color, color: 'white'}} onClick={otherQuestions}>
          <h1 className='otherQs-text'>{msg}</h1>
        </div>
      )}
    </div>
  )
}

export default EightBall;