import { Children } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'DragonForce',
    name: 'DragonForce',
    isFollowing: true
  },
  {
    userName: 'shakira',
    name: 'Shakira',
    isFollowing: false
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: true
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(user => {
          const {userName, name, isFollowing} = user
          return(
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
      
    </section>  
  )
}

   
// Componentes (Crean ELEMENTOS) / Elementos (React renderiza ELEMENTOS)