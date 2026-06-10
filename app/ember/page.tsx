'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display, Raleway } from 'next/font/google'
import styles from './ember.module.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const TABS = ['Starters', 'Mains', 'Seafood', 'Desserts']

const MENU_ITEMS = [
  {
    name: 'Mezze Platter',
    desc: 'Hummus, tzatziki, dolmades, feta & grilled pita',
    price: '$24',
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99ca3a3b3?w=600&q=80',
    alt: 'Mezze Platter',
  },
  {
    name: 'Saganaki Flambé',
    desc: 'Pan-fried kefalograviera, honey, sesame & lemon',
    price: '$19',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    alt: 'Saganaki',
  },
  {
    name: 'Lamb Cutlets',
    desc: 'Marinated lamb, herb crust, pomegranate jus',
    price: '$42',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    alt: 'Lamb Cutlets',
  },
  {
    name: 'Horiatiki Salad',
    desc: 'Tomatoes, cucumber, olives, feta, oregano & olive oil',
    price: '$18',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    alt: 'Greek Salad',
  },
  {
    name: 'Moussaka',
    desc: 'Layered eggplant, spiced beef & béchamel',
    price: '$34',
    img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&q=80',
    alt: 'Moussaka',
  },
  {
    name: 'Baklava Royale',
    desc: 'Layered filo, walnuts, rose syrup & pistachio',
    price: '$14',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
    alt: 'Baklava',
  },
]

export default function EmberPage() {
  const [activeTab, setActiveTab] = useState('Starters')

  return (
    <div className={`${styles.page} ${playfair.variable} ${raleway.variable}`}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <Link href="#" className={styles.navLogo}>ELA</Link>
        <ul className={styles.navLinks}>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#delivery">Order</a></li>
          <li><a href="#hours">Hours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className={styles.navCta}>Find Us</a>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero} id="home">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Restaurant interior"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroTag}>Est. 2019 &nbsp;·&nbsp; Fine Dining &nbsp;·&nbsp; Mediterranean</p>
          <h1 className={styles.heroTitle}>
            ELA
            <span className={styles.heroTitleSub}>Where Every Meal Tells a Story</span>
          </h1>
          <p className={styles.heroSub}>Award-winning cuisine crafted with passion &amp; the finest ingredients</p>
          <div className={styles.heroBtns}>
            <a href="#contact" className={styles.btnPrimary}>Reserve a Table</a>
            <a href="#delivery" className={styles.btnOutline}>Order Online</a>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={styles.about} id="about">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p className={styles.sectionTag}>Our Story</p>
            <h2 className={styles.sectionTitle}>Born from<br />Passion &amp; Fire</h2>
            <div className={styles.goldLine} />
            <p>
              ELA was founded on a single belief: that great food is more than sustenance — it is an
              experience that stirs the soul. Inspired by generations of Mediterranean cooking
              traditions, our kitchen brings together the best of old-world flavors and modern
              culinary artistry.
            </p>
            <p>
              Every dish on our menu is a love letter to the land, the sea, and the skilled hands
              that have shaped our culinary heritage. We source locally, cook with intention, and
              serve with pride.
            </p>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <div className={styles.statNum}>6+</div>
                <div className={styles.statLabel}>Years of Excellence</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>48</div>
                <div className={styles.statLabel}>Signature Dishes</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>4★</div>
                <div className={styles.statLabel}>Chef&apos;s Awards</div>
              </div>
            </div>
          </div>
          <div className={styles.aboutImgWrap}>
            <div style={{ position: 'relative', height: 550, width: '100%' }}>
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Our Kitchen"
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.9)' }}
              />
            </div>
            <div className={styles.aboutImgOverlay}>
              <p>&ldquo;Food is the universal language of love&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className={styles.menu} id="menu">
        <div className={styles.menuHeader}>
          <p className={styles.sectionTag}>Culinary Creations</p>
          <h2 className={styles.sectionTitle}>Our Menu</h2>
          <div className={styles.menuHeaderGoldLine} />
          <p className={styles.menuMuted}>
            Crafted from the finest seasonal ingredients, every dish is a masterpiece designed to
            delight your senses.
          </p>
        </div>
        <div className={styles.menuTabWrap}>
          <div className={styles.menuTabs}>
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`${styles.menuTab} ${activeTab === tab ? styles.menuTabActive : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.menuGrid}>
          {MENU_ITEMS.map((item) => (
            <div key={item.name} className={styles.menuItem}>
              <Image
                src={item.img}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s', filter: 'brightness(0.7)' }}
                sizes="(max-width: 900px) 50vw, 33vw"
              />
              <div className={styles.menuOverlay}>
                <div className={styles.menuItemName}>{item.name}</div>
                <div className={styles.menuItemDesc}>{item.desc}</div>
                <div className={styles.menuItemPrice}>{item.price}</div>
              </div>
              <button className={styles.menuAdd} aria-label={`Add ${item.name}`}>+</button>
            </div>
          ))}
        </div>
        <div className={styles.menuViewAll}>
          <a href="#" className={styles.btnOutline}>View Full Menu</a>
        </div>
      </section>

      {/* ── DELIVERY ── */}
      <section className={styles.delivery} id="delivery">
        <div className={styles.deliveryInner}>
          <div>
            <p className={styles.sectionTag}>Order &amp; Delivery</p>
            <h2 className={styles.sectionTitle}>Brought to<br />Your Door</h2>
            <div className={styles.goldLine} />
            <p className={styles.deliveryMuted}>
              Enjoy the ELA experience from the comfort of your home. We deliver fresh, hot, and
              beautifully presented meals within a 10km radius — or pick up in-store.
            </p>
            <div className={styles.deliveryFeatures}>
              <div className={styles.deliveryFeature}>
                <h4>Fast Delivery</h4>
                <p>30–45 minute delivery within our zone</p>
              </div>
              <div className={styles.deliveryFeature}>
                <h4>Free on $60+</h4>
                <p>Free delivery on orders over $60</p>
              </div>
              <div className={styles.deliveryFeature}>
                <h4>Click &amp; Collect</h4>
                <p>Ready in 20 minutes, skip the queue</p>
              </div>
              <div className={styles.deliveryFeature}>
                <h4>Catering</h4>
                <p>Events &amp; corporate packages available</p>
              </div>
            </div>
            <div className={styles.deliveryApps}>
              <p className={styles.deliveryAppsLabel}>Also available on</p>
              <div className={styles.appButtons}>
                <a href="#" className={styles.appBtn}>🛵 DoorDash</a>
                <a href="#" className={styles.appBtn}>🚴 Uber Eats</a>
                <a href="#" className={styles.appBtn}>🍕 Menulog</a>
              </div>
            </div>
          </div>
          <div className={styles.deliveryVisual}>
            <div className={styles.deliveryMapPlaceholder}>
              <span>Delivery Zone Map</span>
            </div>
            <p className={styles.deliveryZoneNote}>Delivering across [Your Suburb] and surrounds</p>
          </div>
        </div>
      </section>

      {/* ── HOURS ── */}
      <section className={styles.hours} id="hours">
        <div className={styles.hoursInner}>
          <div className={styles.hoursHeader}>
            <p className={styles.sectionTag}>When to Visit</p>
            <h2 className={styles.sectionTitle}>Operating Hours</h2>
            <div className={styles.hoursHeaderGoldLine} />
          </div>
          <div className={styles.hoursGrid}>
            <div className={styles.hoursCard}>
              <div className={styles.hoursDay}>Monday — Tuesday</div>
              <div className={styles.hoursTime}>Closed</div>
              <span className={`${styles.hoursStatus} ${styles.hoursClosed}`}>Closed</span>
            </div>
            <div className={styles.hoursCard}>
              <div className={styles.hoursDay}>Wednesday — Thursday</div>
              <div className={styles.hoursTime}>5:00pm — 10:00pm</div>
              <span className={`${styles.hoursStatus} ${styles.hoursOpen}`}>Open</span>
            </div>
            <div className={styles.hoursCard}>
              <div className={styles.hoursDay}>Friday — Saturday</div>
              <div className={styles.hoursTime}>12:00pm — 11:00pm</div>
              <span className={`${styles.hoursStatus} ${styles.hoursOpen}`}>Open</span>
            </div>
          </div>
          <div className={styles.hoursSpecial}>
            <h4>Sunday Lunch</h4>
            <p>Sunday 12:00pm — 9:00pm &nbsp;·&nbsp; Family roast specials available</p>
          </div>
          <p className={styles.hoursNote}>
            Public holiday hours may vary. Follow us on Instagram for updates.
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contact} id="contact">
        <div className={styles.contactInner}>
          <div>
            <p className={styles.sectionTag}>Find Us</p>
            <h2 className={styles.sectionTitle}>Come Dine<br />With Us</h2>
            <div className={styles.goldLine} />
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>📍</div>
              <div>
                <h4>Address</h4>
                <p>299 Charles St<br />North Perth WA 6006</p>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>📞</div>
              <div>
                <h4>Reservations</h4>
                <a href="tel:+61398765432">(03) 9876 5432</a>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@elarestaurant.com.au">hello@elarestaurant.com.au</a>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>🅿️</div>
              <div>
                <h4>Parking</h4>
                <p>Free parking available at rear entrance. Accessible parking on-site.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className={styles.contactMapHead}>Find Us</h3>
            <div className={styles.contactMapWrap}>
              <iframe
                src="https://maps.google.com/maps?q=299+Charles+St,+North+Perth,+WA+6006&output=embed"
                width="100%"
                height="420"
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
          <div className={styles.footerLogo}>ELA</div>
          <div className={styles.footerLinks}>
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">Events</a>
            <a href="#">Catering</a>
            <a href="#">Gift Cards</a>
            <a href="#">Privacy</a>
          </div>
          <div className={styles.footerSocial}>
            <a href="#" className={styles.socialBtn}>ig</a>
            <a href="#" className={styles.socialBtn}>fb</a>
            <a href="#" className={styles.socialBtn}>tw</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 ELA Restaurant. All rights reserved. &nbsp;·&nbsp; Ember Theme</p>
        </div>
      </footer>

    </div>
  )
}
