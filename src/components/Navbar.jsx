import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="">
        <nav className="bg-secondary/25 h-[100px] flex justify-center content-center">
            <ul className="flex items-center">
                <li><Link to="/"><img className="w-[4.25em] h-[4.25em] relative right-[50em] bottom-[0.3em]" src="https://s3-alpha-sig.figma.com/img/6f70/1b5c/a0262be6cd47d81d3fe318cc1d5fda4d?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M5pMVNiwWfbwOURUELkiLKtmk2Px6UtvLEjvu5IwUG2JycWgIgmAHedo29OEWVdkdJtE0j81YW7zvFH4RYFPA5mKS-Wg2bMtg96Av1xUk0~VQGH5~V3qGstnebI-MqSwfqYMH-zom-hU7zW3EXTMZLJLu6cCKHFCSY6uoduKB4mR6Pb7y-g6LlXuQ2l5khxOBBGe8TgpzIWvG9bgGmkb7-vC-3vkyIHZoQZ-u4n1jAYrqZhX8VIIjal~PUnHYnSFCjust7bnIDH3N-w10ZlDcFLqyfDyUu7~RInGHnR-sgB57wYiKtNoPksSY79dEkFjZ2CTmqTvq2Jkr7sWlezCZQ__" alt="Doge"></img></Link></li>
                <li><Link to="/gallery/newmeme" className="w-[12.5em] h-[5em] text-center text-bronze text-[32px] font-normal font-[bodoni] relative right-7">Añadir Meme</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
