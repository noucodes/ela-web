'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import styles from './ela.module.css'

const NAV_LINKS = [
  { href: '#about', label: 'Our Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#order', label: 'Pre-Order' },
  { href: '#hours', label: 'Hours' },
  { href: '#contact', label: 'Find Us' },
]

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

const CATS = ['All', 'Breakfast', 'Pastries', 'Gyros & Meats', 'A La Carte', 'Takeaway']

const MENU_ITEMS = [
  {
    cat: 'Breakfast',
    name: 'Greek Freddo Espresso',
    desc: 'Cold-shaken espresso over ice, served the Greek way — strong, frothy & sweet',
    tags: [{ label: 'Morning', spicy: false }, { label: 'Signature', spicy: false }],
    price: '$6',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&q=80',
    alt: 'Greek Coffee',
  },
  {
    cat: 'Pastries',
    name: 'Loukoumades',
    desc: 'Traditional Greek honey donuts drizzled with thyme honey, cinnamon & crushed walnuts',
    tags: [{ label: 'Sweet', spicy: false }, { label: 'Vegetarian', spicy: false }],
    price: '$14',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80',
    alt: 'Loukoumades',
  },
  {
    cat: 'Pastries',
    name: 'Spanakopita',
    desc: 'Crispy golden filo filled with spinach, barrel-aged feta & fresh dill',
    tags: [{ label: 'Vegetarian', spicy: false }, { label: 'Pastry', spicy: false }],
    price: '$8',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=80',
    alt: 'Spanakopita',
  },
  {
    cat: 'Gyros & Meats',
    name: 'Chicken Charcoal Gyros',
    desc: 'Free-range chicken off the spit, tzatziki, tomato, red onion & chips in warm pita',
    tags: [{ label: 'Street Food', spicy: false }, { label: 'Popular', spicy: false }],
    price: '$16',
    img: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=200&q=80',
    alt: 'Gyros',
  },
  {
    cat: 'A La Carte',
    name: 'Horiatiki Salad',
    desc: 'Heirloom tomatoes, cucumber, kalamata olives, barrel-aged feta & dried oregano',
    tags: [{ label: 'Vegetarian', spicy: false }, { label: 'GF', spicy: false }],
    price: '$18',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80',
    alt: 'Greek Salad',
  },
  {
    cat: 'Takeaway',
    name: 'Family Dip & Meat Tray',
    desc: 'Tzatziki, hummus & taramasalata with marinated lamb, pita & olives — feeds four',
    tags: [{ label: 'Takeaway', spicy: false }, { label: 'Family', spicy: false }],
    price: '$48',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80',
    alt: 'Dips Tray',
  },
]

export default function ElaPage() {
  const [activeCat, setActiveCat] = useState('All')
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const filtered =
    activeCat === 'All' ? MENU_ITEMS : MENU_ITEMS.filter((m) => m.cat === activeCat)

  return (
    <div className={`${styles.page} ${isDark ? styles.darkTheme : ''} ${cormorant.variable} ${dmSans.variable}`}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <Link href="#" className={styles.navLogo}>
          ELA <span className={styles.navLogoAccent}>Greek</span>
        </Link>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <div className={styles.navRight}>
          <button
            className={styles.themeBtn}
            onClick={() => setIsDark(v => !v)}
            aria-label="Toggle theme"
          >
            {isDark ? '☀' : '☾'}
          </button>
          <a href="#order" className={styles.navCta}>Pre-Order Now</a>
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
          <a href="#order" className={styles.mobileNavCta} onClick={closeMenu}>Pre-Order Now</a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className={styles.hero} id="home">
        <div className={styles.heroLeft}>
          <p className={styles.heroEyebrow}>Greek Street Food · North Perth · Est. 2026</p>
          <h1 className={styles.heroTitle}>
            Come,<br />
            Eat <em className={styles.heroTitleEm}>Well,</em><br />
            Stay Awhile
          </h1>
          <p className={styles.heroSub}>
            Ela — Greek for &ldquo;come here.&rdquo; Three generations of Greek-Australian food
            heritage, served fresh from 6am every morning on Charles Street.
          </p>
          <div className={styles.heroBtns}>
            <a href="#order" className={styles.btnBlue}>Pre-Order Today</a>
            <a href="#menu" className={styles.btnGhost}>See the Menu</a>
          </div>
          <div className={styles.heroBadges}>
            <div className={styles.heroBadge}><span>3rd</span><small>Generation</small></div>
            <div className={styles.heroBadge}><span>5</span><small>Menu Streams</small></div>
            <div className={styles.heroBadge}><span>6am</span><small>Opens Daily</small></div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '600px' }}>
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
              alt="ELA Greek Restaurant"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.heroTagFloat}>
            <small>Open Mon – Fri</small>
            <p>6:00am – 5:00pm</p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={styles.about} id="about">
        <div className={styles.aboutInner}>
          <div className={styles.aboutImages}>
            <div className={styles.aboutImgMain}>
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80"
                alt="ELA Kitchen"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.aboutImgSub}>
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                alt="Greek Food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.aboutImgSub}>
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80"
                alt="Fresh Dish"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div>
            <p className={styles.sectionTag}>Our Story</p>
            <h2 className={styles.sectionTitle}>
              Three Generations<br />
              of <em className={styles.sectionTitleEm}>Greek-Australian</em><br />
              Food Heritage
            </h2>
            <div className={styles.divider} />
            <div className={styles.aboutText}>
              <p>
                It started with a young man who arrived in Australia at 14 with nothing but
                determination. He found work in the Greek-owned milk bars that defined 1950s
                Australian street food — businesses built by Greek immigrants who fed a nation.
                He went on to own his own milk bar in Homebush, Sydney, serving hamburgers and
                fish and chips to his community.
              </p>
              <p>
                ELA is that story carried forward — from grandfather to father to us. The name
                is Greek for &ldquo;come here.&rdquo; <em>Ela re</em> means &ldquo;come here,
                buddy&rdquo; — a warm, informal invitation. That&apos;s exactly what we are:
                your corner spot for honest Greek food, made fresh every morning.
              </p>
            </div>
            <div className={styles.chefQuote}>
              <blockquote>
                &ldquo;My father fed his community from a milk bar. We do the same — just with
                loukoumades and a freddo.&rdquo;
              </blockquote>
              <cite>— Nick Souris, Founder</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className={styles.menu} id="menu">
        <div className={styles.menuInner}>
          <div className={styles.menuTop}>
            <div>
              <p className={styles.sectionTag}>What We Serve</p>
              <h2 className={styles.sectionTitle}>
                The <em className={styles.sectionTitleEm}>Menu</em>
              </h2>
            </div>
            <div className={styles.menuCats}>
              {CATS.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.menuCat} ${activeCat === cat ? styles.menuCatActive : ''}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.menuGrid}>
            {filtered.map((item) => (
              <div key={item.name} className={styles.menuCard}>
                <div className={styles.menuCardImgWrap}>
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="90px"
                  />
                </div>
                <div className={styles.menuCardBody}>
                  <div className={styles.menuCardName}>{item.name}</div>
                  <div className={styles.menuCardDesc}>{item.desc}</div>
                  <div className={styles.menuCardTags}>
                    {item.tags.map((t) => (
                      <span key={t.label} className={`${styles.tag} ${t.spicy ? styles.tagSpicy : ''}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.menuCardPrice}>{item.price}</div>
              </div>
            ))}
          </div>
          <div className={styles.menuViewAll}>
            <a href="#order" className={styles.btnSolid}>Pre-Order for Collection</a>
          </div>
        </div>
      </section>

      {/* ── PRE-ORDER ── */}
      <section className={styles.delivery} id="order">
        <div className={styles.deliveryInner}>
          <div>
            <p className={styles.sectionTag}>Pre-Order &amp; Collection</p>
            <h2 className={styles.sectionTitle}>
              Fresh to <em className={styles.sectionTitleEm}>Order,</em><br />
              Ready to Go
            </h2>
            <div className={styles.divider} />
            <p className={styles.deliveryMuted}>
              Order by 4:00 PM and collect your freshly prepared meal at a time that suits you.
              No rush, no reheating — everything is cooked to order so it arrives at its best.
            </p>
            <div className={styles.deliveryInfo}>
              <div className={styles.deliveryPill}><span>4pm</span><small>Order Cutoff</small></div>
              <div className={styles.deliveryPill}><span>Fresh</span><small>Cooked to Order</small></div>
              <div className={styles.deliveryPill}><span>6am</span><small>Earliest Collection</small></div>
              <div className={styles.deliveryPill}><span>5pm</span><small>Latest Collection</small></div>
            </div>
            <div className={styles.deliveryAppsRow}>
              <a href="#" className={styles.appLink}>🛵 DoorDash</a>
              <a href="#" className={styles.appLink}>🚴 Uber Eats</a>
              <a href="#" className={styles.appLink}>🍕 Menulog</a>
            </div>
          </div>
          <div className={styles.deliveryVisual}>
            <h4>How Pre-Order Works</h4>
            <div className={styles.orderStep}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepText}>
                <h5>Browse &amp; Choose</h5>
                <p>Pick your items online or give us a call</p>
              </div>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepText}>
                <h5>Order Before 4pm</h5>
                <p>Place your order for next-day or same-day collection</p>
              </div>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepText}>
                <h5>We Cook Fresh</h5>
                <p>Your order is prepared fresh — never batch-cooked or reheated</p>
              </div>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepText}>
                <h5>Collect &amp; Enjoy</h5>
                <p>Pick up at 299 Charles St, North Perth — it&apos;s ready when you are</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOURS ── */}
      <section className={styles.hours} id="hours">
        <div className={styles.hoursInner}>
          <div>
            <p className={styles.sectionTag}>When to Visit</p>
            <h2 className={styles.sectionTitle}>
              Opening <em className={styles.sectionTitleEm}>Hours</em>
            </h2>
            <div className={styles.divider} />
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.8, marginTop: '1rem' }}>
              We open early so you can start your day right. Night trading is coming soon — follow
              us on Instagram for updates.
            </p>
            <div style={{ marginTop: '2rem' }}>
              {[
                { day: 'Monday — Friday', val: '6:00am – 5:00pm' },
                { day: 'Saturday', val: null },
                { day: 'Sunday', val: null },
              ].map(({ day, val }) => (
                <div key={day} className={styles.hoursRow}>
                  <span className={styles.hoursDayName}>{day}</span>
                  {val ? (
                    <span className={styles.hoursTimeVal}>{val}</span>
                  ) : (
                    <span className={styles.hoursClosedTag}>Coming Soon</span>
                  )}
                </div>
              ))}
            </div>
            <p className={styles.hoursNote}>Hours may vary on public holidays. Follow @ela.perth for updates.</p>
          </div>
          <div style={{ position: 'relative', height: 500, width: '100%' }}>
            <Image
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80"
              alt="ELA Ambiance"
              fill
              style={{ objectFit: 'cover', borderRadius: 4 }}
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactInner}>
          <div>
            <p className={`${styles.sectionTag} ${styles.contactSectionTag}`}>Get in Touch</p>
            <h2 className={`${styles.sectionTitle} ${styles.contactSectionTitle}`}>
              Visit Us on<br /><em className={styles.sectionTitleEm} style={{ color: '#A8C5E0' }}>Charles Street</em>
            </h2>
            <div className={`${styles.divider} ${styles.contactDivider}`} />
            <div className={styles.contactDetails}>
              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>📍</div>
                <div className={styles.detailText}>
                  <h5>Location</h5>
                  <p>299 Charles St<br />North Perth WA 6006</p>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>📸</div>
                <div className={styles.detailText}>
                  <h5>Instagram</h5>
                  <a href="https://instagram.com/ela.perth" target="_blank" rel="noopener noreferrer">@ela.perth</a>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>✉️</div>
                <div className={styles.detailText}>
                  <h5>Email</h5>
                  <a href="mailto:hello@elagreek.com.au">hello@elagreek.com.au</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactMapBox}>
            <h3>Find Us</h3>
            <div className={styles.contactMapWrap}>
              <iframe
                src="https://maps.google.com/maps?q=299+Charles+St,+North+Perth,+WA+6006&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="ELA Greek Location"
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
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              ELA <span className={styles.footerLogoAccent}>Greek</span>
            </div>
            <p>
              Greek street food with a family soul. From morning coffee and loukoumades to
              charcoal gyros and fresh a la carte — all made with love on Charles Street.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h5>Explore</h5>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#menu">The Menu</a></li>
              <li><a href="#order">Pre-Order</a></li>
              <li><a href="#contact">Find Us</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h5>Order</h5>
            <ul>
              <li><a href="#">Pre-Order Online</a></li>
              <li><a href="#">DoorDash</a></li>
              <li><a href="#">Uber Eats</a></li>
              <li><a href="#">Menulog</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h5>Info</h5>
            <ul>
              <li><a href="#">Allergens</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 ELA Greek. North Perth WA. All rights reserved.</p>
          <div className={styles.footerSocial}>
            <a href="https://instagram.com/ela.perth" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="#">fb</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
