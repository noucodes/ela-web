'use client'

import { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import styles from './ember.module.css'

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

const MENU_ITEMS = [
  {
    name: 'Mezze Platter',
    desc: 'Hummus, tzatziki, dolmades, feta, warm pita & house-marinated olives',
    tags: ['Vegetarian', 'Shareable'],
    price: '$24',
    img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=200&q=80',
  },
  {
    name: 'Saganaki Flambé',
    desc: 'Pan-fried kefalograviera, thyme honey, sesame seeds & fresh lemon',
    tags: ["Chef's Pick", 'Vegetarian'],
    price: '$19',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80',
  },
  {
    name: 'Slow-Roasted Lamb Shoulder',
    desc: '12-hour roasted lamb, roasted vegetables, pomegranate jus & lemon potatoes',
    tags: ['Signature'],
    price: '$46',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80',
  },
  {
    name: 'Horiatiki Salad',
    desc: 'Heirloom tomatoes, cucumber, kalamata olives, barrel-aged feta & oregano',
    tags: ['Vegetarian', 'GF'],
    price: '$18',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80',
  },
  {
    name: 'Classic Moussaka',
    desc: 'Eggplant, spiced ground beef, béchamel & kefalograviera',
    tags: ['House Classic'],
    price: '$34',
    img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=200&q=80',
  },
  {
    name: 'Baklava with Ice Cream',
    desc: 'Crispy filo, walnuts, pistachios, rose syrup & vanilla ice cream',
    tags: ['Dessert'],
    price: '$14',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80',
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
    <div className={`${styles.page} ${isDark ? styles.darkTheme : ''} ${cormorant.variable} ${dmSans.variable}`}>

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
          <button className={styles.themeBtn} onClick={() => setIsDark(v => !v)} aria-label="Toggle theme">
            {isDark ? '☀' : '☾'}
          </button>
          <a href="#contact" className={styles.navCta}>Book Now</a>
          <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
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

      {/* ── HERO — FLORA SPLIT ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.heroEyebrow}>Authentic · Fresh · Mediterranean</p>
          <h1 className={styles.heroTitle}>
            Food Made<br />with <em>Love</em><br />&amp; Tradition
          </h1>
          <p className={styles.heroSub}>
            ELA means &ldquo;come here&rdquo; in Greek. We invite you to sit, eat, and share
            food the way our family has for generations.
          </p>
          <div className={styles.heroBtns}>
            <a href="#contact" className={styles.btnHeroSolid}>Reserve a Table</a>
            <a href="#delivery" className={styles.btnHeroGhost}>Order Online</a>
          </div>
          <div className={styles.heroBadges}>
            <div className={styles.heroBadge}><span>6+</span><small>Years Open</small></div>
            <div className={styles.heroBadge}><span>48</span><small>Menu Items</small></div>
            <div className={styles.heroBadge}><span>4.9★</span><small>Rating</small></div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
            alt="Restaurant Interior"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroTagFloat}>
            <small>Open Daily</small>
            <p>Mon–Sun · 6am – 5pm</p>
          </div>
        </div>
      </section>

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
          <div className={styles.aboutImages}>
            <div className={`${styles.aboutImgMain} ${styles.aboutImgWrap}`}>
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80"
                alt="Our Kitchen"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.aboutImgWrap}>
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                alt="Food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.aboutImgWrap}>
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80"
                alt="Dish"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div>
            <p className={styles.sectionLabel}>About Us</p>
            <h2 className={styles.sectionTitle}>A Story of<br /><em>Family, Fire</em><br />&amp; Flavour</h2>
            <div className={styles.divider} />
            <p className={styles.bodyText}>
              ELA Kitchen was born from a passion that burns brighter every year. Inspired by the vibrant
              street food culture of the Mediterranean, our kitchen is a place where tradition meets
              creative fire.
            </p>
            <p className={styles.bodyText}>
              Our head chef has spent years travelling through Greece, Turkey, and Lebanon —
              absorbing the essence of each cuisine and distilling it into dishes that are bold,
              honest, and unforgettable.
            </p>
            <div className={styles.chefQuote}>
              <blockquote>&ldquo;The secret ingredient is always the same — it&rsquo;s the love you put into it.&rdquo;</blockquote>
              <cite>— Head Chef &amp; Founder</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className={styles.menu} id="menu">
        <div className={styles.menuInner}>
          <div className={styles.menuHeader}>
            <div>
              <p className={styles.sectionLabel}>What We Serve</p>
              <h2 className={styles.sectionTitle}>Our <em>Menu</em></h2>
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
          <div className={styles.menuGrid}>
            {MENU_ITEMS.map((item) => (
              <div key={item.name} className={styles.menuCard}>
                <Image
                  className={styles.menuCardImg}
                  src={item.img}
                  alt={item.name}
                  width={90}
                  height={90}
                  style={{ objectFit: 'cover', borderRadius: '4px' }}
                />
                <div className={styles.menuCardBody}>
                  <div className={styles.menuCardName}>{item.name}</div>
                  <div className={styles.menuCardDesc}>{item.desc}</div>
                  <div className={styles.menuCardTags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.mtag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.menuCardPrice}>{item.price}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#" className={styles.btnRed}>View Full Menu &amp; Pricing</a>
          </div>
        </div>
      </section>

      {/* ── DELIVERY ── */}
      <section className={styles.delivery} id="delivery">
        <div className={styles.deliveryInner}>
          <div>
            <p className={styles.sectionLabel}>Order &amp; Delivery</p>
            <h2 className={styles.sectionTitle}>ELA at<br /><em>Home</em></h2>
            <div className={styles.divider} />
            <p className={styles.bodyText}>
              Bring the ELA experience home. We deliver freshly prepared meals in our eco-friendly
              packaging, ensuring every dish arrives as beautiful as it left our kitchen.
            </p>
            <div className={styles.deliveryInfo}>
              <div className={styles.deliveryPill}><span>30–45m</span><small>Average Delivery</small></div>
              <div className={styles.deliveryPill}><span>Free</span><small>On orders over $60</small></div>
              <div className={styles.deliveryPill}><span>10km</span><small>Delivery radius</small></div>
              <div className={styles.deliveryPill}><span>20m</span><small>Click &amp; Collect</small></div>
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
          <div className={styles.deliveryVisual}>
            <h4>How It Works</h4>
            {[
              { n: '1', title: 'Browse Our Menu', desc: 'Choose from our full menu online or via app' },
              { n: '2', title: 'Place Your Order', desc: 'Customise your dishes, add special requests' },
              { n: '3', title: 'We Prepare Fresh', desc: 'Our chefs cook every order to order' },
              { n: '4', title: 'Enjoy at Home', desc: 'Hot, fresh delivery straight to your door' },
            ].map(({ n, title, desc }) => (
              <div key={n} className={styles.orderStep}>
                <div className={styles.stepNum}>{n}</div>
                <div className={styles.stepText}>
                  <h5>{title}</h5>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOURS ── */}
      <section className={styles.hours} id="hours">
        <div className={styles.hoursInner}>
          <div>
            <p className={styles.sectionLabel}>When to Visit</p>
            <h2 className={styles.sectionTitle}>Opening<br /><em>Hours</em></h2>
            <div className={styles.divider} />
            <p className={styles.bodyText}>
              We&rsquo;re open for breakfast and lunch daily. Join us for morning coffee,
              fresh pastries, and authentic Greek cuisine from 6am every day.
            </p>
            <div>
              {[
                { day: 'Monday — Friday', time: '6:00am – 5:00pm', open: true },
                { day: 'Saturday', time: '6:00am – 5:00pm', open: true },
                { day: 'Sunday', time: '6:00am – 5:00pm', open: true },
                { day: 'Night Trading', time: 'Coming Soon', open: false },
              ].map(({ day, time, open }) => (
                <div key={day} className={styles.hoursRow}>
                  <span className={styles.hoursDayName}>{day}</span>
                  <span className={styles.hoursTimeVal}>{time}</span>
                  <span className={open ? styles.badgeOpen : styles.badgeClosed}>
                    {open ? 'Open' : 'Soon'}
                  </span>
                </div>
              ))}
            </div>
            <p className={styles.hoursNote}>Kitchen closes 30 minutes before closing time. Follow us on Instagram for updates.</p>
          </div>
          <div className={styles.hoursImgWrap}>
            <Image
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80"
              alt="Restaurant Ambiance"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactInner}>
          <div>
            <p className={styles.sectionLabel}>Get in Touch</p>
            <h2 className={styles.sectionTitle}>Visit or<br /><em>Reach Out</em></h2>
            <div className={styles.divider} />
            <div className={styles.contactDetails}>
              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>📍</div>
                <div className={styles.detailText}>
                  <h5>Location</h5>
                  <p>299 Charles St<br />North Perth WA 6006</p>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>📞</div>
                <div className={styles.detailText}>
                  <h5>Phone</h5>
                  <a href="tel:+61398765432">(03) 9876 5432</a>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>✉️</div>
                <div className={styles.detailText}>
                  <h5>Email</h5>
                  <a href="mailto:hello@elarestaurant.com.au">hello@elarestaurant.com.au</a>
                </div>
              </div>
              <div className={styles.contactDetail}>
                <div className={styles.detailIcon}>🅿️</div>
                <div className={styles.detailText}>
                  <h5>Parking</h5>
                  <p>Free parking at rear entrance</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactMapCol}>
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
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogoText}>ELA <em>Kitchen</em></div>
            <p>Authentic Mediterranean cuisine made with passion, tradition, and the finest fresh ingredients. Dine with us or order to your door.</p>
          </div>
          <div className={styles.footerCol}>
            <h5>Explore</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Catering</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h5>Order</h5>
            <ul>
              <li><a href="#delivery">Order Online</a></li>
              <li><a href="#">DoorDash</a></li>
              <li><a href="#">Uber Eats</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Allergens</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 ELA Restaurant</p>
          <div className={styles.footerSocial}>
            <a href="#" className={styles.fsSocBtn}>ig</a>
            <a href="#" className={styles.fsSocBtn}>fb</a>
            <a href="#" className={styles.fsSocBtn}>tw</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
