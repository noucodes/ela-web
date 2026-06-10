'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import styles from './flora.module.css'

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

const CATS = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

const MENU_ITEMS = [
  {
    cat: 'Starters',
    name: 'Mezze Platter',
    desc: 'Hummus, tzatziki, dolmades, feta, warm pita & olives',
    tags: [{ label: 'Vegetarian' }, { label: 'Shareable' }],
    price: '$24',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80',
    alt: 'Mezze',
  },
  {
    cat: 'Starters',
    name: 'Saganaki Flambé',
    desc: 'Pan-fried cheese, thyme honey, sesame & lemon zest',
    tags: [{ label: 'Vegetarian' }, { label: "Chef's Pick" }],
    price: '$19',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80',
    alt: 'Saganaki',
  },
  {
    cat: 'Mains',
    name: 'Slow-Roasted Lamb Shoulder',
    desc: '12-hour roasted lamb, roasted vegetables, gravy jus & lemon potatoes',
    tags: [{ label: 'Signature' }],
    price: '$46',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80',
    alt: 'Lamb',
  },
  {
    cat: 'Starters',
    name: 'Horiatiki Salad',
    desc: 'Heirloom tomatoes, cucumber, kalamata olives, barrel-aged feta & oregano',
    tags: [{ label: 'Vegetarian' }, { label: 'GF' }],
    price: '$18',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80',
    alt: 'Salad',
  },
  {
    cat: 'Mains',
    name: 'Classic Moussaka',
    desc: 'Eggplant layers, spiced ground beef, béchamel & kefalograviera',
    tags: [{ label: 'House Classic' }],
    price: '$34',
    img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=200&q=80',
    alt: 'Moussaka',
  },
  {
    cat: 'Desserts',
    name: 'Baklava with Ice Cream',
    desc: 'Crispy filo, walnuts & pistachios, rose water syrup & vanilla ice cream',
    tags: [{ label: 'Dessert' }],
    price: '$14',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80',
    alt: 'Baklava',
  },
]

export default function FloraPage() {
  const [activeCat, setActiveCat] = useState('All')

  const filtered =
    activeCat === 'All' ? MENU_ITEMS : MENU_ITEMS.filter((m) => m.cat === activeCat)

  return (
    <div className={`${styles.page} ${cormorant.variable} ${dmSans.variable}`}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <Link href="#" className={styles.navLogo}>
          ELA <span className={styles.navLogoAccent}>Kitchen</span>
        </Link>
        <ul className={styles.navLinks}>
          <li><a href="#about">Our Story</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#delivery">Order</a></li>
          <li><a href="#hours">Hours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className={styles.navCta}>Book a Table</a>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero} id="home">
        <div className={styles.heroLeft}>
          <p className={styles.heroEyebrow}>Authentic · Fresh · Mediterranean</p>
          <h1 className={styles.heroTitle}>
            Food Made<br />
            with <em className={styles.heroTitleEm}>Love</em><br />
            &amp; Tradition
          </h1>
          <p className={styles.heroSub}>
            We believe the best meals start with honest ingredients, cooked slowly and served with
            genuine hospitality. Welcome to ELA Kitchen.
          </p>
          <div className={styles.heroBtns}>
            <a href="#contact" className={styles.btnGreen}>Reserve a Table</a>
            <a href="#delivery" className={styles.btnGhost}>Order Online</a>
          </div>
          <div className={styles.heroBadges}>
            <div className={styles.heroBadge}><span>6+</span><small>Years Open</small></div>
            <div className={styles.heroBadge}><span>48</span><small>Menu Items</small></div>
            <div className={styles.heroBadge}><span>4.9★</span><small>Rating</small></div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '600px' }}>
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
              alt="Restaurant Interior"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className={styles.heroTagFloat}>
            <small>Now Open For Dinner</small>
            <p>Wed – Sun from 12pm</p>
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
                alt="Kitchen"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.aboutImgSub}>
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                alt="Food"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.aboutImgSub}>
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80"
                alt="Dish"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div>
            <p className={styles.sectionTag}>About Us</p>
            <h2 className={styles.sectionTitle}>
              A Story of<br />
              <em className={styles.sectionTitleEm}>Family, Fire</em><br />
              &amp; Flavour
            </h2>
            <div className={styles.divider} />
            <div className={styles.aboutText}>
              <p>
                ELA Kitchen was born from a grandmother&apos;s recipe book and a dream to share
                real Mediterranean cooking with our community. What started as a family dinner
                table tradition has grown into a restaurant that honours those roots every single
                day.
              </p>
              <p>
                Our head chef trained in Athens and has spent over 20 years refining the art of
                Mediterranean cuisine. Every ingredient is sourced from trusted local farmers and
                importers who share our commitment to quality.
              </p>
            </div>
            <div className={styles.chefQuote}>
              <blockquote>
                &ldquo;The secret ingredient is always the same — it&apos;s the love you put into
                it.&rdquo;
              </blockquote>
              <cite>— Head Chef &amp; Founder</cite>
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
                Our <em className={styles.sectionTitleEm}>Menu</em>
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
                      <span key={t.label} className={styles.tag}>{t.label}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.menuCardPrice}>{item.price}</div>
              </div>
            ))}
          </div>
          <div className={styles.menuViewAll}>
            <a href="#" className={styles.btnSolid}>View Full Menu &amp; Pricing</a>
          </div>
        </div>
      </section>

      {/* ── DELIVERY ── */}
      <section className={styles.delivery} id="delivery">
        <div className={styles.deliveryInner}>
          <div>
            <p className={styles.sectionTag}>Order &amp; Delivery</p>
            <h2 className={styles.sectionTitle}>
              ELA at <em className={styles.sectionTitleEm}>Home</em>
            </h2>
            <div className={styles.divider} />
            <p className={styles.deliveryMuted}>
              Bring the ELA experience home. We deliver freshly prepared meals in our eco-friendly
              packaging, ensuring every dish arrives as beautiful as it left our kitchen.
            </p>
            <div className={styles.deliveryInfo}>
              <div className={styles.deliveryPill}><span>30–45m</span><small>Average Delivery</small></div>
              <div className={styles.deliveryPill}><span>Free</span><small>On orders over $60</small></div>
              <div className={styles.deliveryPill}><span>10km</span><small>Delivery radius</small></div>
              <div className={styles.deliveryPill}><span>20m</span><small>Click &amp; Collect</small></div>
            </div>
            <div className={styles.deliveryAppsRow}>
              <a href="#" className={styles.appLink}>🛵 DoorDash</a>
              <a href="#" className={styles.appLink}>🚴 Uber Eats</a>
              <a href="#" className={styles.appLink}>🍕 Menulog</a>
            </div>
          </div>
          <div className={styles.deliveryVisual}>
            <h4>How It Works</h4>
            <div className={styles.orderStep}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepText}>
                <h5>Browse Our Menu</h5>
                <p>Choose from our full menu online or via app</p>
              </div>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepText}>
                <h5>Place Your Order</h5>
                <p>Customise your dishes, add special requests</p>
              </div>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepText}>
                <h5>We Prepare Fresh</h5>
                <p>Our chefs cook every order to order</p>
              </div>
            </div>
            <div className={styles.orderStep}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepText}>
                <h5>Enjoy at Home</h5>
                <p>Hot, fresh delivery straight to your door</p>
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
              We&apos;re open for lunch and dinner through the week. Reservations recommended for
              Friday &amp; Saturday evenings.
            </p>
            <div style={{ marginTop: '2rem' }}>
              {[
                { day: 'Monday — Tuesday', val: null },
                { day: 'Wednesday — Thursday', val: '5:00pm – 10:00pm' },
                { day: 'Friday', val: '12:00pm – 11:00pm' },
                { day: 'Saturday', val: '12:00pm – 11:00pm' },
                { day: 'Sunday', val: '12:00pm – 9:00pm' },
              ].map(({ day, val }) => (
                <div key={day} className={styles.hoursRow}>
                  <span className={styles.hoursDayName}>{day}</span>
                  {val ? (
                    <span className={styles.hoursTimeVal}>{val}</span>
                  ) : (
                    <span className={styles.hoursClosedTag}>Closed</span>
                  )}
                </div>
              ))}
            </div>
            <p className={styles.hoursNote}>Kitchen closes 30 minutes before closing time.</p>
          </div>
          <div style={{ position: 'relative', height: 500, width: '100%' }}>
            <Image
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80"
              alt="Restaurant Ambiance"
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
              Visit or<br /><em className={styles.sectionTitleEm} style={{ color: '#a8d5a2' }}>Reach Out</em>
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
                title="ELA Kitchen Location"
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
              ELA <span className={styles.footerLogoAccent}>Kitchen</span>
            </div>
            <p>
              Authentic Mediterranean cuisine made with passion, tradition, and the finest fresh
              ingredients. Dine with us or order to your door.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h5>Explore</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Menu</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Catering</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h5>Order</h5>
            <ul>
              <li><a href="#">Order Online</a></li>
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
          <p>&copy; 2026 ELA Kitchen. Flora Theme.</p>
          <div className={styles.footerSocial}>
            <a href="#">ig</a>
            <a href="#">fb</a>
            <a href="#">tw</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
