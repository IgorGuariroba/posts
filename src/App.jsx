import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Igor Guariroba"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam debitis, doloribus autem, eos, in molestias neque consectetur ex facilis corporis recusandae sed voluptas? Necessitatibus atque ducimus autem error aliquid."
        />
      <Post 
            author="Fulano"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam debitis, doloribus autem, eos, in molestias neque consectetur ex facilis corporis recusandae sed voluptas? Necessitatibus atque ducimus autem error aliquid."    
      />
      <Post />
      <Post />
    </div>
  )
}
