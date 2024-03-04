import Category from './Category'
import Desc from './Desc'
import Footer from './Footer'
import Middle from './Middle'
import ShuffleHero from './ShuffleHero'
import './intro.css'
import { useState, useEffect } from 'react'

export default function Intro() {
      useEffect(() => {
        if(screen.width > 768) return;
        else {
          document.getElementById("hamburger").style.right = "-300px"
          document.getElementById("ham-close").style.display = "none"
          document.getElementById("ham-open").style.display = "block"
        }
      })

  return (
    <div id='intro-h' className='mt-[75px]'>
        <ShuffleHero />
        <Category />
        <Footer />
    </div>
  )
}