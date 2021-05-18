import styles from './styles.module.scss'

function Header() {
   return (
      <div className={styles.header}>
         <h1 className={styles.name}>Dance Revolution</h1>
         <span className={styles.author}>by Nikita Pozdnyakov</span>
      </div>
   )
}

export default Header
