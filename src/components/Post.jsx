import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";


import styles from "./Post.module.css";

export function Post({author,content,publisheAt}) {
  const publishedDateFormated = format(publisheAt,"d 'de' LLLL 'às' HH:mm'h'",{
    locale:ptBR
  })

  const publishedRelativeToNow = formatDistanceToNow(publisheAt,{
    locale:ptBR,
    addSuffix:true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
            <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>


        <time
         title={publishedDateFormated} 
         dateTime={publisheAt.toISOString()}>
          {publishedRelativeToNow}
          </time>
      </header>

      <div className={styles.content}>
        {content.map(cont => {
          if(cont.type == 'paragrath'){
              return <p>{cont.content}</p>
          }

          if(cont.type == 'link'){
              return <p><a href="#">{cont.content}</a></p>
          }
        })}
        
        <p>
          <a href="#">#nova</a>{' '}
          <a href="#">#desing</a>{' '}
          <a href="#">#feitopormim</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        placeholder="Deixe um comentario"
        />

      <footer>
        <button type="submit">Publicar</button>
      </footer>

      </form>

      <div className={styles.commentList}>
        <Comment  />
        <Comment  />
        <Comment  />
      </div>
    </article >
  )
}
