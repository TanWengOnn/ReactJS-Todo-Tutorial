// Install ES7 React/Redux/GraphQL/React-Native snippets Extention
// In the file type in "rafce"

import React, { useRef } from 'react'
import './style.css'

interface Props {
    todo: string;
    // Hover over the "setTodo" fucntion to get the type
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" 
    onSubmit={(e)=> {
      handleAdd(e)
      inputRef.current?.blur();
    }}>
        <input ref={inputRef} type="input" 
        value={todo}
        onChange={(e) => { setTodo(e.target.value) }}
        placeholder='Enter a task' className='input__box'/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
