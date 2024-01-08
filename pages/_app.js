import styles from '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { Karla, Poppins } from 'next/font/google'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion"

const poppins = Poppins({ subsets: ['latin'], weight:['400', '600', '800'] })

function MyApp({ Component, pageProps }) {

  return <main className={poppins.className}>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </main>
  
}

export default MyApp
