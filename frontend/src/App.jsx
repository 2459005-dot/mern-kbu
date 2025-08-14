import { useState } from 'react'
import Book from './components/Book'
import PostForm from './components/PostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Book />
        <PostForm />
    </div>
  )
}

export default App
