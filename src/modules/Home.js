 
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Table from '../components/Table'
import history from '../routes/history';

function HomePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setData(result.data);
    })();
  }, []);

  const addHandler = useCallback(() => {
    history.push('/add');
  }, []);

  const editHandler = useCallback(() => {
    history.push('/edit');
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Table data={data}/>
      <h1 onClick={addHandler}>Add</h1>
      <h1 onClick={editHandler}>Edit</h1>
    </div>
  );
}
export default HomePage;