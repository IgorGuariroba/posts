import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";


import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/65466371?v=4',
      name: 'Igor Guariroba',
      role: 'CTO @Backboard'
    },
    content: [
      {type: 'paragrath', content: 'Fala Galera'},
      {type: 'paragrath', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      {type: 'link', content: 'jane.desing/doctorcare'},
    ],
    publisheAt: new Date('2022-09-24 13:52:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/26732044?v=4',
      name: 'Tobias Fried',
      role: 'rektdeckard'
    },
    content: [
      {type: 'paragrath', content: 'Fala Galera'},
      {type: 'paragrath', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'},
      {type: 'link', content: 'jane.desing/doctorcare'},
    ],
    publisheAt: new Date('2022-09-15 13:52:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
            author={post.author}
            content={post.content}
            publisheAt={post.publisheAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
