import Head from 'next/head'
import Image from 'next/image'
import styles_header from '../styles/Home.module.css'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Studio Mighty Mighty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles_header.header}>
        <div className={styles_header.main_holder}>
          <ul className={styles_header.nav}>
            <li><a href="/"><div></div><span>Work</span></a></li>
            <li><a href="/about"><div></div><span>About</span></a></li>
            <li className={styles_header.active}><a href="/contact"><div></div><span>Contact</span></a></li>
          </ul>
          <div className={styles_header.logo}>
            <a href="/">
              <img src="/mark.svg"/>
            </a>
          </div>
        </div>
      </div>

        <div className={styles.site_header_content}>

          <div className={styles.home_top_section}>
            <div className={styles.mightymighty}>Contact</div>
          </div>


        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}