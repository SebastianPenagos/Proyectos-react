import { useState } from "react"

export function TwitterFollowCard({ userName, children, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    const imageSrc = `https://unavatar.io/${userName}`
    const addAt = (username => `@${username}`)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log(isFollowing)
    
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>  
          <img className='tw-followCard-icono' alt='la foto randon' src={imageSrc}/>
          <div className='tw-followCard-info'>
            <strong>{children}</strong>
              <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-follingCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
}

 