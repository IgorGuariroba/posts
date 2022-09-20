import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post
        author="Igor Guariroba"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam debitis, doloribus autem, eos, in molestias neque consectetur ex facilis corporis recusandae sed voluptas? Necessitatibus atque ducimus autem error aliquid."
        />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
