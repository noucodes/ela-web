'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Oswald, Inter } from 'next/font/google'
import styles from './about.module.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500'],
})

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#menu', label: 'Menu' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export default function AboutPage() {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`${styles.page} ${isDark ? styles.darkTheme : ''} ${oswald.variable} ${inter.variable}`}>

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
          <button
            className={styles.themeBtn}
            onClick={() => setIsDark(v => !v)}
            aria-label="Toggle theme"
          >
            {isDark ? '☀' : '☾'}
          </button>
          <Link href="/#contact" className={styles.navCta}>Book Now</Link>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
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
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="ELA Restaurant"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>έλα — Greek for &ldquo;Come Here&rdquo;</p>
          <h1 className={styles.heroTitle}>
            A FAMILY<br />
            <span className={styles.heroTitleOutline}>LEGACY</span>
          </h1>
          <p className={styles.heroSub}>
            ELA is more than a place to enjoy great food — it&apos;s the continuation
            of a family legacy that spans generations.
          </p>
        </div>
      </div>

      {/* ── STORY ── */}
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <div>
            <p className={styles.sectionLabel}>Our Story</p>
            <h2 className={styles.sectionTitle}>
              FROM MILK<br />BARS TO <span className={styles.titleOutline}>ELA</span>
            </h2>
            <div className={styles.goldLine} />
            <p className={styles.bodyText}>
              Our story began when Nick&apos;s father arrived in Australia as a young teenager,
              bringing with him the determination and values shared by many Greek immigrants
              of the era. He started working in Greek-owned milk bars — iconic establishments
              that became a cornerstone of Australian culture throughout the 1950s.
            </p>
            <p className={styles.bodyText}>
              Through hard work and dedication, he eventually owned his own milk bar in
              Homebush, Sydney, serving classic favourites such as hamburgers and fish and
              chips to the local community.
            </p>
            <p className={styles.bodyText}>
              Inspired by this rich heritage, Nick created ELA as a tribute to the traditions,
              hospitality, and entrepreneurial spirit passed down through his family.
            </p>
          </div>
          <div className={styles.storyImageStack}>
            <div className={styles.storyImgMain}>
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="ELA Restaurant interior"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.storyImgFloating}>
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                alt="Mediterranean food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.storyTag}>
              <small>Est.</small>
              <p>2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <div className={styles.quote}>
        <p className={styles.quoteText}>
          &ldquo;Ela&rdquo; — the Greek word for &ldquo;come here&rdquo; — a simple
          invitation that reflects the warmth, generosity, and sense of belonging that
          have always been at the heart of Greek hospitality.
        </p>
        <p className={styles.quoteAuthor}>The Meaning Behind ELA</p>
      </div>

      {/* ── VALUES ── */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <div className={styles.valuesHeader}>
            <p className={styles.sectionLabel}>What We Stand For</p>
            <h2 className={styles.sectionTitle}>
              OUR <span className={styles.titleOutline}>VALUES</span>
            </h2>
          </div>
          <div className={styles.valuesGrid}>
            {[
              {
                num: '01',
                title: 'Heritage',
                desc: "Rooted in Australia's Greek milk bar culture and the immigrant spirit of the 1950s, every dish honours where we came from.",
              },
              {
                num: '02',
                title: 'Community',
                desc: 'ELA was built on the same belief that sustained the family milk bar — that food brings people together.',
              },
              {
                num: '03',
                title: 'Hospitality',
                desc: "True Greek hospitality means guests feel like family. 'Ela' — come here — is not just our name, it's our welcome.",
              },
              {
                num: '04',
                title: 'Family',
                desc: "From grandfather to father, father to son, and now to Nick's children — ELA is a living tribute to three generations.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className={styles.valueCard}>
                <div className={styles.valueNum}>{num}</div>
                <h4 className={styles.valueTitle}>{title}</h4>
                <p className={styles.valueDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEGACY ── */}
      <section className={styles.legacy}>
        <div className={styles.legacyInner}>
          <div className={styles.storyImageStack}>
            <div className={styles.storyImgMain}>
              <Image
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80"
                alt="Restaurant ambiance"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div>
            <p className={styles.sectionLabel}>Three Generations</p>
            <h2 className={styles.sectionTitle}>
              A STORY OF<br /><span className={styles.titleOutline}>LEGACY</span>
            </h2>
            <div className={styles.goldLine} />
            <p className={styles.bodyText}>
              Today, ELA proudly celebrates the journey from grandfather to father,
              from father to son, and now to Nick&apos;s children. It is a story of
              migration, family, community, and a shared love of food that connects
              generations.
            </p>
            <p className={styles.bodyText}>
              Rooted in the traditions of Australia&apos;s Greek milk bar culture while
              embracing the future, ELA honours the past while creating new memories
              for generations to come.
            </p>
            <div style={{ display: 'flex', gap: '3rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Grandfather', sub: 'The dream begins' },
                { label: "Nick's Father", sub: 'Homebush milk bar' },
                { label: 'Nick & Family', sub: 'ELA Restaurant' },
              ].map(({ label, sub }) => (
                <div key={label}>
                  <div className={styles.legacyGeneration}>{label}</div>
                  <div className={styles.legacySub}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            COME<br /><span className={styles.titleOutline}>DINE WITH US</span>
          </h2>
          <p className={styles.ctaSub}>
            Experience the warmth of Greek hospitality and the flavours of a family
            tradition decades in the making.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/#contact" className={styles.btnGold}>Reserve a Table</Link>
            <Link href="/#menu" className={styles.btnOutline}>View Menu</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <Image src="/logo.png" alt="ELA Greek Street Bites" width={543} height={460} style={{ height: '70px', width: 'auto', mixBlendMode: 'multiply' }} />
        </div>
        <div className={styles.footerLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#menu">Menu</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <p className={styles.footerCopy}>&copy; 2026 ELA Restaurant</p>
      </footer>

    </div>
  )
}
