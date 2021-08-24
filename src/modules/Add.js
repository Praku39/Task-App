import React, {useState, useCallback} from 'react';

function Add() {

  const [isId, setIsId] = useState();
  const [isName, setIsName] = useState('');
  const [isDescription, setIsDescription] = useState('');

  const idHandler=useCallback((e)=>{
    setIsId(e.target.value)
},[]);

const nameHandler=useCallback((e)=>{
  setIsName(e.target.value)
},[]);

const descHandler=useCallback((e)=>{
  setIsDescription(e.target.value)
},[]);

  const addPost= async()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        id: isId,
        title: isName,
        body: isDescription,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  .then((response) => response.json())
  .then((json) => console.log(json));
    
}

  return (
    <div>
     <input value={isId} onChange={idHandler}/>
      <input value={isName} onChange={nameHandler}/>
      <input value={isDescription} onChange={descHandler}/>
      <button onClick={addPost}>Add</button>
    </div>
  );
}
export default Add;