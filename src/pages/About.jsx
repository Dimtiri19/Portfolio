import React, { useEffect, useState } from 'react'

function About() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/about') // ou ton endpoint
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) return <div>hello guys...</div>

  return (
    <div>
      <h1>À propos</h1>
      <p>{data.content}</p>
    </div>
  )
}

export default About
