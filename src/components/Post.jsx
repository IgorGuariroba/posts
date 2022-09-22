import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/26732044?v=4" />
          <div className={styles.authorInfo}>
            <strong>Tobias Fried</strong>
            <span>rektdeckard</span>
          </div>
        </div>


        <time title='28 de Setembro as 08:48' dateTime="2022-08-28 08:48:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>{props.content}</p>
        <p><a href="#">nova.desing/feitopormim</a></p>
        <p>
          <a href="#">#nova</a>{' '}
          <a href="#">#desing</a>{' '}
          <a href="#">#feitopormim</a>
        </p>
      </div>

    </article>
  )
}
