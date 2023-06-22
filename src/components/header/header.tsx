import styles from './header.module.css'
import logo from '../../assets/img/logo.png'

export default function Header(){

  return (
    <header>
      <img src={logo} alt="Logo" className={styles.img}/>
    </header>
  );
}

