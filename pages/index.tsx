import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'
import { Navbar } from '../components/Navbar'
// import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <MainLayout>
        <h1>Index Page</h1>
        <h1 className="title">
              {/* Ir a  <a href='/about'>Home</a> */}
            Ir a <Link href='/about'>About</Link>
            </h1>

            <p className="description">
              Get started by editing{' '}
              <code className="code">pages/index.js</code>
            </p>

    </MainLayout>
  )
}
