'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import styles from '../blog.module.css'

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

export default function GreekStreetFoodHistoryPost() {
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

      {/* ── ARTICLE HERO ── */}
      <div className={styles.articleHero}>
        <div className={styles.articleHeroBg}>
          <Image
            src="https://images.unsplash.com/photo-1529042410759-befb1204b468?w=1920&q=80"
            alt="Greek souvlaki grilling over charcoal"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>
        <div className={styles.articleHeroContent}>
          <div className={styles.articleMeta}>
            <span>The ELA Journal</span>
            <span className={styles.articleMetaDot} />
            <span>July 8, 2026</span>
            <span className={styles.articleMetaDot} />
            <span>7 min read</span>
          </div>
          <h1 className={styles.articleTitle}>
            Greek Street Food<br />&amp; Its <em>History</em>
          </h1>
          <p className={styles.articleDek}>
            Long before it had a name, street food was simply how Greeks ate —
            standing up, in a hurry, between the market and the sea. Here&rsquo;s
            how it became one of the world&rsquo;s great cuisines.
          </p>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <article className={styles.article}>
        <div className={styles.articleInner}>
          <Link href="/blog" className={styles.backLink}>← Back to the Journal</Link>

          <p className={styles.articleLead}>
            Walk through any Greek city today and you&rsquo;ll find the same scene that has
            played out for thousands of years: someone cooking quickly, cheaply and well,
            for someone else who is in a hurry to get somewhere. Street food isn&rsquo;t a
            modern invention in Greece — it&rsquo;s one of the oldest threads in the country&rsquo;s
            culinary fabric.
          </p>

          <p className={styles.sectionLabel}>Origins</p>
          <h2>Born in the <em>Agora</em></h2>
          <p>
            The story starts in the agora — the marketplace at the heart of every ancient
            Greek city. Historians and archaeologists have found evidence that vendors sold
            hot food to shoppers, dockworkers and travellers who had no time, or no kitchen,
            to cook for themselves. Small fried fish, barley cakes, and grilled meats on
            skewers were sold straight from braziers set up between market stalls.
          </p>
          <p>
            The Greek word for these skewered, grilled morsels — <em>obeliskos</em> — is
            the direct ancestor of today&rsquo;s souvlaki. Archaeologists have even uncovered
            ancient cooking stands, called <em>eschara</em>, pierced with holes to hold
            skewers over hot coals — essentially the same design used by street vendors in
            Athens today, over two thousand years later.
          </p>

          <div className={styles.articleImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=80"
              alt="Skewered meat grilling over open coals"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className={styles.articleImgCaption}>Grilled skewers over coals — a method largely unchanged since antiquity.</p>

          <p className={styles.sectionLabel}>Empire &amp; Exchange</p>
          <h2>The Ottoman <em>Layer</em></h2>
          <p>
            Greek street food as we recognise it now took on much of its modern shape during
            the centuries of Ottoman rule. Shared trade routes and shared kitchens across the
            Eastern Mediterranean and the Balkans meant that spit-roasting technique, filo
            pastry, and syrup-soaked sweets moved freely between Greek, Turkish and Levantine
            cooks. The vertical rotisserie that became <em>gyros</em> and the horizontal
            skewer that stayed <em>souvlaki</em> both trace back to this same shared
            grilling culture — which is exactly why the two are still argued over in kitchens
            and comment sections to this day.
          </p>
          <p>
            Filo-wrapped pies like <em>tyropita</em> (cheese pie) and <em>spanakopita</em>
            (spinach pie) also flourished in this period — portable, cheap to make, and
            filling enough to carry a labourer through a full day&rsquo;s work. They remain
            some of the most common breakfasts sold from Greek street kiosks, called
            <em> periptera</em>, today.
          </p>

          <div className={styles.pullQuote}>
            <p className={styles.pullQuoteText}>
              Street food was never a shortcut in Greece — it was the honest, faster
              version of the same food eaten at the family table.
            </p>
          </div>

          <p className={styles.sectionLabel}>A Nation of Vendors</p>
          <h2>Koulouri, Loukoumades &amp; the <em>Modern Street</em></h2>
          <p>
            By the 19th and 20th centuries, Greek cities were dense with street vendors selling
            <em> koulouri</em> — a sesame-crusted bread ring, still sold on nearly every Athens
            corner before 9am — alongside roasted chestnuts, corn, and <em>loukoumades</em>,
            honey-soaked dough puffs whose origins are claimed to stretch back to the very first
            Olympic Games, where they were reportedly given to athletes as a reward.
          </p>
          <p>
            The 20th century brought souvlaki and gyro stands into every neighbourhood, serving
            fast, affordable meat wrapped in pita with tomato, onion and tzatziki — a format
            built for workers on a lunch break, not diners with time to spare. It became,
            and remains, the most iconic Greek street food in the world.
          </p>

          <div className={styles.articleImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1400&q=80"
              alt="Fresh Greek mezze spread with pita and dips"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className={styles.articleImgCaption}>Mezze-style sharing plates grew from the same street food instinct — small, fast, and made to be shared.</p>

          <p className={styles.sectionLabel}>The Long Journey</p>
          <h2>From Piraeus to the <em>Antipodes</em></h2>
          <p>
            When Greek families emigrated in waves through the 20th century — many through
            the port of Piraeus, bound for Australia, the United States and beyond — they
            didn&rsquo;t bring restaurants with them first. They brought street food instincts:
            fast, warm, generous food served to whoever walked through the door.
          </p>
          <p>
            In Australia, that instinct took the shape of the milk bar — corner stores where
            Greek immigrant families served hamburgers, fish and chips, and coffee to the local
            community, working long hours to build something for the next generation. It&rsquo;s
            the same story behind ELA: a family that started in a Greek-owned milk bar in
            Homebush, Sydney, and carried that same street food spirit — quick, warm, and made
            for everyone — into the restaurant we run today.
          </p>
          <p>
            That&rsquo;s the thread we try to keep alive on our own menu: dishes built on the
            same principles that fed the agora, the Ottoman-era kitchens, and the milk bars —
            honest food, made fast, meant to be shared.
          </p>

          <div className={styles.tagRow}>
            <span className={styles.tag}>Greek Cuisine</span>
            <span className={styles.tag}>Street Food</span>
            <span className={styles.tag}>History</span>
            <span className={styles.tag}>Heritage</span>
          </div>

          <div className={styles.articleCta}>
            <p>Taste the traditions this story is built on.</p>
            <Link href="/#menu" className={styles.articleCtaBtn}>View Our Menu</Link>
          </div>
        </div>
      </article>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerLogoText}>ELA <em>Kitchen</em></div>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
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
