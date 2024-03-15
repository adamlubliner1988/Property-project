import React from 'react'
import Link from 'next/link'
const HomePage = () => {
  return (
    <div>
        <h1 className="3xl">Welcom</h1>
        <Link href="/properties">Show properties</Link>
    </div>
  )
}

export default HomePage