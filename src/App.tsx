import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Vite + React + TypeScript</h1>
        <p className="subtitle">A simple starter template</p>
      </header>
      <main className="app-main">
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Count: {count}
          </button>
          <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        </div>
      </main>
    </div>
  )
}

export default App
