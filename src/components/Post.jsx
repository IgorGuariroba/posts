import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";


import styles from "./Post.module.css";


export function Post({ author, content, publisheAt }) {

  const [comments, setCommets] = useState([
    'Post muito top, hein?'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormated = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setCommets([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment =>{
      return comment != commentToDelete;
    })

    setCommets(commentsWithoutDeleteOne);
  }

  function handleNewCommentIvalid(){
    event.target.setCustomValidity('Este campo é obrigatorio!')
  }

  const isNewCommentEmpty = newCommentText.length === 0;


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
          if (cont.type == 'paragrath') {
            return <p key={cont.content}>{cont.content}</p>
          }

          if (cont.type == 'link') {
            return <p key={cont.content}><a href="#">{cont.content}</a></p>
          }
        })}

        <p>
          <a href="#">#nova</a>{' '}
          <a href="#">#desing</a>{' '}
          <a href="#">#feitopormim</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentIvalid}
          required
        />

        <footer>
          <button 
          type="submit"
          disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article >
  )
}
