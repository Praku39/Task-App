import React, {useState, useCallback} from 'react';
import {connect} from 'react-redux'
import {addUserApi} from '../../redux/actions/userActions'
import history from '../../routes/history';
import Button from '../../components/Button/Button';
import styles from './add.module.scss';

function Add(props) {

  const [isId, setIsId] = useState();
  const [isTitle, setIsTitle] = useState('');
  const [isDescription, setIsDescription] = useState('');

  const idHandler=useCallback((e)=>{
    setIsId(e.target.value)
},[]);

const nameHandler=useCallback((e)=>{
  setIsTitle(e.target.value)
},[]);

const descHandler=useCallback((e)=>{
  setIsDescription(e.target.value)
},[]);

const addData=()=>{
  const variable ={
        id: isId,
        title: isTitle,
        body: isDescription,
        userId: 1,
  }
  props.dispatch(addUserApi(variable))
}

const backHandler = useCallback(() => {
  history.push('/');
  window.location.reload(false)
}, []);

  return (
    <div className={styles.wrapper}>
      <Button value='Back' onclick={backHandler}/>
      <div className={styles.formContainer}>
        <h1 className={styles.headerTxt}>Add User</h1>
        <input value={isId} 
          onChange={idHandler}
          placeholder='Please enter your id'
          className={styles.inputWrapper}
        />
        <input value={isTitle} 
          onChange={nameHandler}
          placeholder='Please enter Title'
          className={styles.inputWrapper}
        />
        <textarea value={isDescription}
          onChange={descHandler}
          placeholder='Please Add description'
          className={styles.txtWrapper}
        />
        <Button value='Add' onclick={addData} className={styles.variant}/>
      </div>
    </div>
  );
}
export default connect()(Add);