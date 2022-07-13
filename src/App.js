
import { useState, useEffect } from 'react'
import './App.css'
import Answer from './components/Answer'
import Question from './components/Question'
import Points from './components/Points'


export default function App() {

  const [trivia, setTrivia] = useState([])


  useEffect(() => {
    fetch('http://jservice.io/api/random')
      .then(res => res.json())
      .then(json => {
        setTrivia(json[0])
      }
      )
  }, [])


  // const fetchBlogs = () => {
  //   fetch('http://jservice.io/api/random')
  //     .then(res => res.json())
  //     .then(json => {
  //       setTrivia(json[0])
  //     }
  //     )
     
  // };

  return (
    <div className='App'>
      <form className="gameBoard">
        <header className='jeopardy-game'>Jeopardy Game</header>
        <Points
          value={trivia.value}
          score={0}
        />
        <Question
          key={trivia.id}
          question={trivia.question}
        />
        <Answer
          answer={trivia.answer}

        />
      </form>
    </div >
  )
}