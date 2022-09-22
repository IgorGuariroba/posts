import styles from "./Comment.module.css";


export function Comment(props) {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/65466371?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Guariroba</strong>
              <time title='28 de Setembro as 08:48' dateTime="2022-08-28 08:48:00">Publicado há 1h</time>
            </div>
          </header>

          <p>Muito top parabens</p>
        </div>

        <footer>
          Aplaudir
        </footer>
      </div>
    </div>
  );
}