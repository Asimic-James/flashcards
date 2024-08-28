import './index.css'
import { useState } from 'react';

export default function App() {
  return (
    <div className="App"> 
      <Flashcards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What language runs in the browser?",
    answer: "JavaScript (ES6+)",
  },
  {
    id: 2,
    question: "What are the building blocks of web development?",
    answer: "HTML, CSS, and JavaScript",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX syntax",
  },
  { 
    id: 4,
    question: 'What are the fundamental building blocks of React?',
    answer: 'Components, Props, and State',
  },
  {
    id: 5,
    question: "State the difference between Local and Global State",
    answer: "Local state is data that is local to a component and global state is data that is shared across all components",
  },
  {
    id: 6,
    question: "What are the difference between States and Props in React?",
    answer: "States are immutable, while props are mutable and can be changed",
  },
  {
    id: 7,
    question: "What's the name of the function we use to validate user input in React?",
    answer: "Form validation and input validation",
  },
  {
    id: 8,
    question: "What's the name of the function we use to fetch data from an API in React?",
    answer: "Data fetching and API calls",
  },
  {
    id: 9,
    question: "Explain Short Circuiting in React",
    answer: "Short circuiting is a technique used to optimize the rendering of components in React, by skipping unnecessary renders.",
  },
  {
    id: 10,
    question: "What's the name of the function we use to manage state in React?",
    answer: "State management and re-rendering",
  },
  {
    id: 11,
    question: "List the 3 states of Promise in React",
    answer: "Pending, Fulfilled, and Rejected states",
  },
  {
    id: 12,
    question: "What do you understand by Async, Await, and Promises in React?",
    answer: "Async and Await are used to handle asynchronous operations in React, while Promises are used to handle asynchronous operations in JavaScript",
  },
  {
    id: 13,
    question: "What's the name of the function we use to manage authentication in React?",
    answer: "Authentication and authorization",
  },
  {
    id: 14,
    question: "Major difference between Vanilla JS and React JS?",
    answer: "Vanilla JS is used to build static websites, while React JS is used to build dynamic websites, applications, and web applications",
  },
  {
    id: 15,
    question: "What's the difference between useContext and useReducer in React?",
    answer: "useContext is used to manage context in a context provider, while useReducer is used to manage state in a reducer function that is passed as a prop",
  },
  {
    id: 16,
    question: "Explain the difference between context and provider in React?",
    answer: "Context is used to pass data through the component tree, while Provider is used to provide data to the components in the tree",
  },
  {
    id: 17,
    question: "Functions of usesState and useMemo in React?",
    answer: "They are used to manage state and memoize values respectively",
  },
  {
    id: 18,
    question: "What's the difference between useEffect and useLayoutEffect in React?",
    answer: "useEffect is used to manage side effects, while useLayoutEffect is used to manage layout effects, such as scrolling",
  },
  {
    id: 19,
    question: "What is method chaining in React?",
    answer: "It is a way of chaining multiple methods together, where the result of one method is passed as an argument to the next method",
  },
  {
    id: 20,
    question: "What is the difference between Functions and Classes in React?",
    answer: "Functions are used to manage state, while Classes are used to manage state in a class-based component",
  },
];
 

function Flashcards() {

  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className='flashcards'>
      <span className='description'> 
        <h1 className='title'>React Flashcards</h1>
        <p>Ready to test your knowledge...?</p>
      </span>
        {questions.map(question => (
          <div key={question.id} 
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? 'selected' : 'flashcard'}>
            <h2>
              {question.id === selectedId ? <b>{question.answer}</b> : question.question}
            </h2>
          </div>
        ))}
    </div>
  );
}