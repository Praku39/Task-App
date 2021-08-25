import styles from './button.module.scss'

function Button(props){
    const {value, onclick} = props;
    return(
        <button type='button' className={styles.button} onClick={onclick}>
            {value}
        </button>
    )
}

export default Button;