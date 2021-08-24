import React, {useState, useCallback} from 'react';

function Edit() {
  const [isId, setIsId] = useState();
  const [isName, setIsName] = useState('');
  const [isDescription, setIsDescription] = useState('');

  const updatePost= async()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

const idHandler=useCallback((e)=>{
    setIsId(e.target.value)
},[]);

const nameHandler=useCallback((e)=>{
  setIsName(e.target.value)
},[]);

const descHandler=useCallback((e)=>{
  setIsDescription(e.target.value)
},[]);


  return (
    <div>
      <input value={isId} onChange={idHandler}/>
      <input value={isName} onChange={nameHandler}/>
      <input value={isDescription} onChange={descHandler}/>
      <button onClick={updatePost}>Update</button>
    </div>
  );
}
export default Edit;