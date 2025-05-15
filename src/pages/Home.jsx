import React, { useEffect, useState } from 'react'

function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/home') // ou ton endpoint
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) return <div>dsdsf...</div>

  return (
    <div>
      <h1>Accueil</h1>
      <p>{data.content}</p>
    </div>
  )
}

export default Home
