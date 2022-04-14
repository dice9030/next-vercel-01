// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../../styles/Home.module.css'
// import Link from 'next/link'
// import { Navbar } from '../../components/Navbar'
import { MainLayout } from '../../components/layout/MainLayout'
export default function Home() {
    
  return (
  <MainLayout>
      <h1>Contact</h1>
        <h1 className="title">
          Contacto  Page
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/contact.js</code>
        </p>
  </MainLayout>
  )
}
