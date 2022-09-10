import styles from '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion"


function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  
}

export default MyApp
