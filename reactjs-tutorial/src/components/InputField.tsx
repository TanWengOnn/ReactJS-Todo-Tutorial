// Install ES7 React/Redux/GraphQL/React-Native snippets Extention
// In the file type in "rafce"

import React from 'react'
import './style.css'

interface Props {
    todo: string;
    // Hover over the "setTodo" fucntion to get the type
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form className="input">
        <input type="input" 
        value={todo}
        onChange={(e) => { setTodo(e.target.value) }}
        placeholder='Enter a task' className='input__box'/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
