import styles from '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  
}

export default MyApp
