import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return (
  <h1>{props.course}</h1>
  )
}

const Part=(props) =>{
  return(
    <p>{props.x1}{props.x2}</p>
  )
}

const Content=(props) =>{
  return(
    props.parts.map(p => <Part x1={p.name} x2={p.exercises}/>)     
  )
}

const Total=(props) =>{
  return(
    <p>Number of exercises: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))