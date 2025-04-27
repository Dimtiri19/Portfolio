import React, { useEffect, useState } from 'react'

function Contact() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/contact') // ou ton endpoint
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if (!data) return <div>lol...</div>

  return (
    <div>
      <h1>Contact</h1>
      <p>{data.content}</p>
    </div>
  )
}

export default Contact
