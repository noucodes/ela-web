'use client'

import { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Oswald, Inter } from 'next/font/google'
import styles from './ember.module.css'

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

const MENU_ITEMS = [
  {
    num: '01',
    name: 'Mezze Platter',
    desc: 'Hummus, tzatziki, dolmades, feta, warm pita & house-marinated olives',
    tags: [{ label: 'Veggie', yellow: false }, { label: 'Share', yellow: true }],
    price: '$24',
  },
  {
    num: '02',
    name: 'Saganaki Flambé',
    desc: 'Pan-fried kefalograviera, thyme honey, sesame seeds & fresh lemon',
    tags: [{ label: 'Hot', yellow: false }],
    price: '$19',
  },
  {
    num: '03',
    name: 'Slow-Roasted Lamb Shoulder',
    desc: '12-hour roasted lamb, roasted vegetables, pomegranate jus & lemon potatoes',
    tags: [{ label: 'Signature', yellow: true }],
    price: '$46',
  },
  {
    num: '04',
    name: 'Grilled King Prawns',
    desc: 'Tiger prawns, garlic butter, chilli, parsley & crusty bread',
    tags: [{ label: 'Seafood', yellow: false }, { label: 'GF', yellow: false }],
    price: '$38',
  },
  {
    num: '05',
    name: 'Classic Moussaka',
    desc: 'Eggplant, spiced ground beef, bechamel & kefalograviera',
    tags: [{ label: 'Classic', yellow: true }],
    price: '$34',
  },
  {
    num: '06',
    name: 'Baklava with Ice Cream',
    desc: 'Crispy filo, walnuts, pistachios, rose syrup & vanilla ice cream',
    tags: [{ label: 'Dessert', yellow: false }],
    price: '$14',
  },
  {
    num: '07',
    name: 'Horiatiki Salad',
    desc: 'Heirloom tomatoes, cucumber, kalamata olives, barrel-aged feta & oregano',
    tags: [{ label: 'Veggie', yellow: false }, { label: 'GF', yellow: false }],
    price: '$18',
  },
]

const TICKER_ITEMS = [
  'Morning Coffee & Breakfast',
  'Greek Pastries',
  'Loukoumades',
  'Gyros & Charcoal Meats',
  'À La Carte Lunch',
  'Takeaway Trays',
]

const DELIVERY_CARDS = [
  { icon: '🛵', title: 'Fast Delivery', desc: '30–45 minutes to your door within our zone' },
  { icon: '💰', title: 'Free Delivery', desc: 'On orders over $60. Flat $5 under that.' },
  { icon: '🛍️', title: 'Click & Collect', desc: 'Order ahead, pick up in 20 minutes' },
  { icon: '🎉', title: 'Catering', desc: 'Corporate & event packages available' },
]

const FILTERS = ['All', 'Starters', 'Mains', 'Desserts']
const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All')
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
            <li key={href}><a href={href}>{label}</a></li>
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
          <a href="#contact" className={styles.navCta}>Book Now</a>
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
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a href="#contact" className={styles.mobileNavCta} onClick={closeMenu}>Book Now</a>
        </div>
      )}

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="Restaurant interior"
            fill
            style={{ objectFit: 'cover', objectPosition: 'right center' }}
            priority
          />
          <div className={styles.heroBgGradient} />
          <div className={styles.heroBgFade} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <span>Authentic · Greek Street Food</span>
          </div>
          <h1 className={styles.heroTitle}>
            <div>GREEK</div>
            <div><span className={styles.heroOutline}>STREET</span></div>
            <div><span className={styles.heroAccent}>FOOD.</span></div>
          </h1>
          <p className={styles.heroSubtitle}>
            ELA means &ldquo;come here&rdquo; in Greek. We invite you to sit, eat, and share
            food the way our family has for generations.
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className={styles.btnRed}>Reserve a Table</a>
            <a href="#delivery" className={styles.btnOutlineRed}>Order Online</a>
          </div>
        </div>
        <div className={styles.heroStats}>
          {[
            { num: '48', label: 'Signature\nDishes' },
            { num: '6+', label: 'Years of\nExcellence' },
            { num: '4.9', label: 'Google\nRating' },
            { num: '3', label: "Chef's\nAwards" },
          ].map(({ num, label }) => (
            <div key={num} className={styles.heroStat}>
              <div className={styles.heroStatNum}>{num}</div>
              <div className={styles.heroStatTxt}>
                {label.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TICKER ── */}
      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <Fragment key={i}>
              <span>{item}</span>
              <span className={styles.tickerDot}>◆</span>
            </Fragment>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className={styles.about} id="about">
        <div className={styles.aboutInner}>
          <div>
            <div className={styles.sectionLabel}><span>Our Story</span></div>
            <h2 className={styles.sectionTitle}>
              MORE THAN<br />JUST <span className={styles.titleOutline}>FOOD</span>
            </h2>
            <div className={styles.redLine} />
            <p className={styles.bodyText}>
              ELA was born from a passion that burns brighter every year. Inspired by the vibrant
              street food culture of the Mediterranean, our kitchen is a place where tradition meets
              creative fire.
            </p>
            <p className={styles.bodyText}>
              Our head chef has spent years travelling through Greece, Turkey, and Lebanon —
              absorbing the essence of each cuisine and distilling it into dishes that are bold,
              honest, and unforgettable.
            </p>
            <div className={styles.featureList}>
              {[
                { num: '01', title: 'Morning Coffee & Breakfast', desc: 'Starting your day the Greek way — from 6am every morning' },
                { num: '02', title: 'Pastries & Loukoumades', desc: 'Freshly made Greek pastries and warm honey-drizzled donuts' },
                { num: '03', title: 'Gyros & Charcoal Meats', desc: 'Authentic street food, cooked over charcoal to order' },
                { num: '04', title: 'À La Carte Lunch', desc: 'A full sit-down menu of classic Greek dishes at midday' },
                { num: '05', title: 'Takeaway Trays', desc: 'Dips, marinated meats & more — ready to take home' },
              ].map(({ num, title, desc }) => (
                <div key={num} className={styles.feature}>
                  <div className={styles.featureNum}>{num}</div>
                  <div className={styles.featureBody}>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.aboutVisual}>
            <div style={{ position: 'relative', width: '100%', height: 500 }}>
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Our Kitchen"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.aboutTag}>
              <small>Since</small>
              <p>2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className={styles.menu} id="menu">
        <div className={styles.menuInner}>
          <div className={styles.menuHeader}>
            <div>
              <div className={styles.sectionLabel}><span>What We Serve</span></div>
              <h2 className={styles.sectionTitle}>THE <span className={styles.titleOutline}>MENU</span></h2>
            </div>
            <div className={styles.menuFilter}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`${styles.mf} ${activeFilter === f ? styles.mfActive : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.menuItems}>
            {MENU_ITEMS.map((item) => (
              <div key={item.num} className={styles.menuRow}>
                <span className={styles.menuRowNum}>{item.num}</span>
                <div className={styles.menuRowInfo}>
                  <div className={styles.menuRowName}>{item.name}</div>
                  <div className={styles.menuRowDesc}>{item.desc}</div>
                </div>
                <div className={styles.menuRowTags}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`${styles.mtag} ${tag.yellow ? styles.mtagYellow : ''}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <span className={styles.menuRowPrice}>{item.price}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#" className={styles.btnRed}>View Full Menu</a>
          </div>
        </div>
      </section>

      {/* ── DELIVERY ── */}
      <section className={styles.delivery} id="delivery">
        <div className={styles.deliveryInner}>
          <div>
            <div className={styles.sectionLabel}><span>Order &amp; Delivery</span></div>
            <h2 className={styles.sectionTitle}>
              ORDER<br /><span className={styles.titleOutline}>ONLINE</span>
            </h2>
            <div className={styles.redLine} />
            <div className={styles.deliveryGrid}>
              {DELIVERY_CARDS.map(({ icon, title, desc }) => (
                <div key={title} className={styles.deliveryCard}>
                  <div className={styles.deliveryCardIcon}>{icon}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className={styles.deliveryAppsSec}>
              <p>Also Available On</p>
              <div className={styles.appChips}>
                <a href="#" className={styles.appChip}>🛵 DoorDash</a>
                <a href="#" className={styles.appChip}>🚴 Uber Eats</a>
                <a href="#" className={styles.appChip}>🍕 Menulog</a>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.deliveryZoneTitle}>10KM<br />ZONE</div>
            <p className={styles.deliveryZoneDesc}>
              We deliver fresh, hot meals across a 10km radius. Our drivers know the city like the
              back of their hand — fast, reliable, and always on time.
            </p>
            <div className={styles.deliveryMap}>
              <span>Delivery Zone Map</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOURS ── */}
      <section className={styles.hours} id="hours">
        <div className={styles.hoursInner}>
          <div className={styles.sectionLabel}><span>When to Visit</span></div>
          <h2 className={styles.sectionTitle}>
            OPENING<br /><span className={styles.titleOutline}>HOURS</span>
          </h2>
          <div className={styles.hoursGrid}>
            <div className={styles.hoursCell}>
              <div className={styles.hcDay}>Mon — Fri</div>
              <div className={styles.hcTime}>6am – 5pm</div>
              <span className={`${styles.hcBadge} ${styles.badgeOpen}`}>Open</span>
            </div>
            <div className={styles.hoursCell}>
              <div className={styles.hcDay}>Saturday</div>
              <div className={styles.hcTime}>6am – 5pm</div>
              <span className={`${styles.hcBadge} ${styles.badgeOpen}`}>Open</span>
            </div>
            <div className={styles.hoursCell}>
              <div className={styles.hcDay}>Sunday</div>
              <div className={styles.hcTime}>6am – 5pm</div>
              <span className={`${styles.hcBadge} ${styles.badgeOpen}`}>Open</span>
            </div>
            <div className={`${styles.hoursCell} ${styles.hoursCellFull}`}>
              <div className={styles.hcDay}>Night Trading</div>
              <div className={styles.hcTime}>Coming Soon</div>
              <div className={styles.hcNote}>Evening service will be introduced once operations are established</div>
            </div>
          </div>
          <p className={styles.hoursNote}>
            Follow us on Instagram for updates.
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactInner}>
          <div>
            <div className={styles.sectionLabel}><span>Find Us</span></div>
            <h2 className={styles.sectionTitle}>
              COME<br /><span className={styles.titleOutline}>DINE</span>
            </h2>
            <div className={styles.redLine} />
            <div className={styles.contactInfo}>
              <div className={styles.ciItem}>
                <h4>Address</h4>
                <p>299 Charles St<br />North Perth WA 6006</p>
              </div>
              <div className={styles.ciItem}>
                <h4>Phone</h4>
                <a href="tel:+61398765432">(03) 9876 5432</a>
              </div>
              <div className={styles.ciItem}>
                <h4>Email</h4>
                <a href="mailto:hello@elarestaurant.com.au">hello@elarestaurant.com.au</a>
              </div>
              <div className={styles.ciItem}>
                <h4>Parking</h4>
                <p>Free parking at rear entrance</p>
              </div>
            </div>
          </div>
          <div className={styles.contactMapCol}>
            <h3 className={styles.contactMapHead}>Find Us</h3>
            <div className={styles.contactMapFrame}>
              <iframe
                src="https://maps.google.com/maps?q=299+Charles+St,+North+Perth,+WA+6006&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="ELA Restaurant Location"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/299+Charles+St+North+Perth+WA+6006"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactDirections}
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLogo}>
            <Image src="/logo.png" alt="ELA Greek Street Bites" width={543} height={460} style={{ height: '70px', width: 'auto', mixBlendMode: 'multiply' }} />
          </div>
          <div className={styles.footerLinks}>
            <a href="#menu">Menu</a>
            <Link href="/about">About</Link>
            <a href="#">Events</a>
            <a href="#">Catering</a>
            <a href="#">Privacy</a>
          </div>
          <div className={styles.footerSocial}>
            <a href="#" className={styles.fsSocBtn}>ig</a>
            <a href="#" className={styles.fsSocBtn}>fb</a>
            <a href="#" className={styles.fsSocBtn}>tw</a>
          </div>
        </div>
        <div className={styles.footerBottom}>&copy; 2026 ELA Restaurant</div>
      </footer>

    </div>
  )
}
