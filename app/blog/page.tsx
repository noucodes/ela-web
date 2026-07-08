'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import styles from './blog.module.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

const POSTS = [
  {
    slug: 'greek-street-food-and-its-history',
    title: 'Greek Street Food & Its History',
    excerpt:
      'From the noisy stalls of the ancient agora to the souvlaki grills of modern Athens, the story of Greek street food is a story of migration, hardship and hospitality — the same story behind ELA.',
    date: 'July 8, 2026',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=900&q=80',
  },
]

export default function BlogIndexPage() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`${styles.page} ${isDark ? styles.darkTheme : ''} ${cormorant.variable} ${dmSans.variable}`}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>
          <Image src="/logo.png" alt="ELA Greek Street Bites" width={543} height={460} style={{ height: '70px', width: 'auto', mixBlendMode: 'multiply' }} priority />
        </Link>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
        </ul>
        <div className={styles.navRight}>
          <span className={styles.navHours}>Mon–Sun · 6am – 5pm</span>
          <button className={styles.themeBtn} onClick={() => setIsDark(v => !v)} aria-label="Toggle theme">
            {isDark ? '☀' : '☾'}
          </button>
          <Link href="/#contact" className={styles.navCta}>Book Now</Link>
          <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* ── MOBILE NAV ── */}
      {menuOpen && (
        <div className={styles.mobileNav}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu}>{label}</Link>
          ))}
          <Link href="/#contact" className={styles.mobileNavCta} onClick={closeMenu}>Book Now</Link>
        </div>
      )}

      {/* ── HERO ── */}
      <section className={styles.indexHero}>
        <p className={styles.indexEyebrow}>The ELA Journal</p>
        <h1 className={styles.indexTitle}>
          Stories from the <em>Street</em>, Served at Our Table
        </h1>
        <p className={styles.indexSub}>
          Notes on the food, history and people behind Greek cooking — the traditions
          we grew up with and the ones we put on your plate.
        </p>
      </section>

      {/* ── POSTS ── */}
      <section className={styles.postGrid}>
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
            <div className={styles.postCardImg}>
              <Image src={post.img} alt={post.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <div className={styles.postCardMeta}>
                <span>{post.date}</span>
                <span className={styles.postCardDot} />
                <span>{post.readTime}</span>
              </div>
              <h2 className={styles.postCardTitle}>{post.title}</h2>
              <p className={styles.postCardExcerpt}>{post.excerpt}</p>
              <span className={styles.postCardReadMore}>Read the Story →</span>
            </div>
          </Link>
        ))}
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerLogoText}>ELA <em>Kitchen</em></div>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/#menu">Menu</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 ELA Restaurant</p>
        </div>
      </footer>

    </div>
  )
}
