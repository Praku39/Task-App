 
import React, { useCallback } from 'react';
import TableComponent from '../../components/TableComponent/Table';
import history from '../../routes/history';
import {connect} from 'react-redux';
import Button from '../../components/Button/Button';
import styles from './home.module.scss';

function HomePage(props) {

  const addHandler = useCallback(() => {
    history.push('/add');
    window.location.reload(false)
  }, []);

  const editHandler = useCallback(() => {
    history.push('/edit');
    window.location.reload(false)
  }, []);

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTxt}>Home Page</h1>
        <div className={styles.buttonSection}>
          <Button value='Add' url='add' onclick={addHandler}/>
          <Button value='Edit' url='edit' onclick ={editHandler}/>
        </div>
      </div>
      <TableComponent data ={props.users}/>
    </div>
  );
}
const mapStatetoProps=(state)=>{
  return {users:state.users}
}
export default connect(mapStatetoProps)(HomePage) ;