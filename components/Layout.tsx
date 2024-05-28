import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import Testimonal from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Sponsors from '@/components/Sponsors'
import { Container } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export default function Layout(props: { children: any }) {
  return (
    <>
    
      <>
       <Navbar/>

      </>
      {props.children}
      <Footer/>
    </>
 
  )
}
