import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../comps/NavBar'
import NavMenuButton from '../comps/NavMenuButton'
import IntroCard from '../comps/IntroCard'

export default function Home() {
  return <div>
      <NavBar> </NavBar>
      <NavMenuButton></NavMenuButton>
      <IntroCard></IntroCard>
    </div>
  
}
