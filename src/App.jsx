import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Clock3, Dumbbell, MapPin, Menu, ShieldCheck, Users, X } from 'lucide-react';
import WordRise from './components/WordRise.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Seo from './components/Seo.jsx';
import { siteConfig, whatsappUrl, directionsUrl } from './config/siteConfig.js';

const standardPlans = [
  { name: 'MEN', rows: [['1 Month', '₹2,999'], ['3 Months', '₹6,499'], ['6 Months', '₹9,999'], ['1 Year', '₹14,999']] },
  { name: 'WOMEN', rows: [['1 Month', '₹2,999'], ['3 Months', '₹5,499'], ['6 Months', '₹7,999'], ['1 Year', '₹11,999']] },
  { name: 'COUPLES', rows: [['Yearly Couple Offer', '₹21,999']] }
];
const diwaliPlans = [
  { name: 'MEN', rows: [['1 Month', '₹2,500'], ['3 Months', '₹5,500'], ['6 Months', '₹8,500'], ['1 Year', '₹14,000 + 2 months extra']] },
  { name: 'WOMEN', rows: [['1 Month', '₹1,500'], ['3 Months', '₹4,500'], ['6 Months', '₹7,500'], ['1 Year', '₹11,000 + 2 months extra']] },
  { name: 'COUPLES', rows: [['Yearly Couple Offer', '₹19,999 + 2 months extra']] }
];
const galleryPhotos = [
  ['Premium Gym Machine Area', 'gym-gallery-1.png'],
  ['Strength Training Floor', 'gym-gallery-2.png'],
  ['Premium Gym Interior', 'gym-gallery-3.png'],
  ['Treadmill Studio', 'gym-gallery-4.png'],
  ['Dark-Themed Training Space', 'gym-gallery-5.png'],
  ['Lat Pulldown Station', 'gym-gallery-6.png'],
  ['Upscale Gym Interior', 'gym-gallery-7.png'],
  ['Dumbbell Rack', 'gym-gallery-8.png'],
  ['Weight Machine Area', 'gym-gallery-9.png']
];
const equipment = [
  ['Strength machine placeholder', 'Strength', 'Replace with a real photo and verified equipment details.'],
  ['Free weights placeholder', 'Free weights', 'Add the available dumbbells, plates, and barbells.'],
  ['Cardio equipment placeholder', 'Cardio', 'Replace with a photo of the cardio area.'],
  ['Cable station placeholder', 'Strength', 'Add a short description of the station and its use.'],
  ['Functional training placeholder', 'Functional', 'Replace with a real image of the functional area.'],
  ['Training floor placeholder', 'Training space', 'Describe the space and equipment available to members.']
];
const trainers = [
  { name: 'TRAINER NAME', role: 'TITLE / SPECIALIZATION', bio: 'Trainer profile coming soon. Add the trainer’s photo, name, and details here.' },
  { name: 'TRAINER NAME', role: 'TITLE / SPECIALIZATION', bio: 'Trainer profile coming soon. Add the trainer’s photo, name, and details here.' }
];
function Header() {
  const [open, setOpen] = useState(false);
  const links = [['About', '/#about'], ['Membership', '/#membership'], ['Gallery', '/equipment'], ['Visit', '/#visit']];
  return <header className="site-header"><a className="brand" href="/" aria-label="VINCIT FITNESS home"><span className="brand-mark"><Dumbbell size={21}/></span><span>VINCIT<span className="brand-dot">.</span><small>FITNESS CLUB</small></span></a><nav className={`desktop-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}<a className="nav-cta" href="/#membership" onClick={() => setOpen(false)}>JOIN THE CLUB <ArrowUpRight size={15}/></a></nav><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></header>;
}
function Modal({ title, onClose, children }) {
  useEffect(() => { const key = e => e.key === 'Escape' && onClose(); window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key); }, [onClose]);
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}><section className="modal-panel" role="dialog" aria-modal="true" aria-label={title}><div className="modal-head"><span>{title}</span><button onClick={onClose} aria-label="Close dialog"><X/></button></div><div className="modal-content">{children}</div></section></div>;
}
function EquipmentPage() {
  return <><Seo title="Equipment Gallery" path="/equipment" description="Explore the VINCIT FITNESS equipment gallery. Images and equipment details are editable placeholders until verified gym photos are added."/><main className="subpage page-width"><div className="section-kicker">VINCIT FITNESS / THE FLOOR</div><WordRise as="h1">EQUIPMENT GALLERY.</WordRise><p className="subpage-intro">Explore the training spaces, machines, and gym interiors in our photo gallery.</p><div className="equipment-grid">{galleryPhotos.map(([name, image], i) => <article className="equipment-card stack-card" key={image}><img src={`/images/${image}`} alt={name} loading="lazy"/><div className="card-copy"><span className="card-label">GYM GALLERY / 0{i + 1}</span><WordRise as="h2">{name}</WordRise><p>Explore the VINCIT FITNESS training space and equipment.</p></div></article>)}</div><div className="subpage-cta"><WordRise as="h2">WANT TO SEE IT IN PERSON?</WordRise><WhatsAppButton message="Hi VINCIT FITNESS, I would like to arrange a gym tour and ask about the equipment."/></div></main></>;
}
function HorizontalTextFlow() {
 const sectionRef = useRef(null);
 const trackRef = useRef(null);
 useEffect(() => {
  const section = sectionRef.current;
  const track = trackRef.current;
  if (!section || !track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx = gsap.context(() => {
   const distance = () => Math.max(0, track.scrollWidth - section.clientWidth);
   gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
     trigger: section,
     start: 'top top',
     end: () => `+=${Math.max(distance(), window.innerWidth * 0.8)}`,
     scrub: 0.7,
     pin: true,
     anticipatePin: 1,
     invalidateOnRefresh: true
    }
   });
  }, section);
  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh, { once: true });
  return () => { window.removeEventListener('load', refresh); ctx.revert(); };
 }, []);
 return <section className="text-flow-section" ref={sectionRef} aria-label="The VINCIT training mindset">
  <div className="text-flow-top page-width"><span className="section-kicker">THE VINCIT PHILOSOPHY</span><span className="flow-note">KEEP MOVING / KEEP BUILDING</span></div>
  <div className="text-flow-window"><div className="text-flow-track" ref={trackRef}>
   <span>In every bottle, discover the</span>
   <svg className="flow-curve" viewBox="0 0 100 48" aria-hidden="true"><path d="M2 40 C22 2 42 2 50 24 S78 46 98 8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><circle cx="50" cy="24" r="4" fill="currentColor"/></svg>
   <span className="flow-outline">undeniable</span><span>Real Magic</span>
   <svg className="flow-spark" viewBox="0 0 44 44" aria-hidden="true"><path d="M22 1 L26 17 L43 22 L26 27 L22 43 L18 27 L1 22 L18 17 Z" fill="currentColor"/></svg>
   <span>of sharing pure</span><span className="flow-outline">Refreshment</span>
   <svg className="flow-curve flow-curve-tall" viewBox="0 0 70 60" aria-hidden="true"><path d="M3 50 C8 4 62 4 67 50" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/><path d="M14 43 C20 18 50 18 56 43" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
   <span>that brings us</span><span className="flow-outline">Together</span><span className="flow-end-mark">✳</span>
  </div></div>
 </section>;
}

function HomePage() {
 const [activePlan, setActivePlan] = useState(null); const [termsOpen, setTermsOpen] = useState(false);
 return <><Seo title="Built by Discipline" path="/"/><main>
  <section className="hero" id="home"><div className="hero-video-wrap"><video className="hero-video" autoPlay muted loop playsInline preload="auto" poster={siteConfig.heroPosterSrc} disablePictureInPicture aria-label="Configurable gym background video"><source src={siteConfig.heroVideoSrc} type="video/mp4"/></video><div className="hero-shade"/></div><div className="hero-content page-width"><div className="eyebrow">VINCIT FITNESS · TRAINING FOR EVERY LEVEL</div><WordRise as="h1">BUILT BY DISCIPLINE.</WordRise><p className="hero-copy">Less noise. More work. A space to build strength, sharpen focus, and show up for yourself.</p><div className="hero-actions"><a className="button button-light" href="#membership">FIND YOUR MEMBERSHIP <ArrowUpRight size={17}/></a><a className="button button-ghost" href="/equipment"><ArrowUpRight size={15}/> EXPLORE THE GYM</a></div></div><div className="hero-bottom page-width"><span>01 — SHOW UP</span><a href="#about">SCROLL TO EXPLORE <ArrowDownRight size={16}/></a><span>TRAIN WITH PURPOSE</span></div></section>
  <section className="section about-section page-width" id="about"><div className="section-kicker">01 / THE VINCIT MINDSET</div><div className="about-grid"><WordRise as="h2">YOUR WORK. YOUR STRENGTH.</WordRise><div className="about-copy"><p className="large-copy">Progress isn't a shortcut. It's a promise you keep to yourself.</p><p>VINCIT FITNESS is designed around focused training, good coaching, and a community that respects the process. Whether you're taking your first step or refining your next personal best, start where you are and keep moving.</p></div></div><div className="stats-row"><div><strong>01 —</strong><p>SHOW UP CONSISTENTLY</p></div><div><strong>02 —</strong><p>TRAIN WITH INTENTION</p></div><div><strong>03 —</strong><p>TRACK YOUR PROGRESS</p></div></div></section>
  <HorizontalTextFlow/>
  <section className="section gallery-section page-width"><div className="section-heading"><div><div className="section-kicker">02 / INSIDE THE SPACE</div><WordRise as="h2">BUILT FOR THE WORK.</WordRise></div><a className="text-link" href="/equipment">VIEW EQUIPMENT GALLERY <ArrowUpRight size={16}/></a></div><div className="gallery-grid">{galleryPhotos.slice(0, 3).map(([title, image], i) => <article className={`gallery-card stack-card gallery-${i + 1}`} key={image}><img src={`/images/${image}`} alt={title} loading="lazy"/><div className="gallery-overlay"><span>VINCIT FITNESS / 0{i + 1}</span><WordRise as="h2">{title}</WordRise></div></article>)}</div></section>
  <section className="manifesto"><div className="manifesto-image"/><div className="manifesto-overlay"/><div className="manifesto-content page-width"><div className="section-kicker">NO SHORTCUTS. NO NOISE.</div><WordRise as="h2">THE ONLY WAY IS THROUGH.</WordRise><p>Every rep is a vote for the person you're becoming.</p><a href="#membership" className="button button-light">START YOUR JOURNEY <ArrowUpRight size={17}/></a></div></section>
  <section className="section membership-section page-width" id="membership"><div className="section-heading"><div><div className="section-kicker">03 / MEMBERSHIP</div><WordRise as="h2">CHOOSE YOUR COMMITMENT.</WordRise></div><p>Simple options. Clear goals. Choose a starting point and we'll help you take the next step.</p></div><div className="pricing-group"><div className="pricing-group-heading"><span className="card-label">REGULAR MEMBERSHIP</span><h3>Standard Pricing</h3></div><div className="plans-grid">{standardPlans.map(plan => <article className="plan-card stack-card" key={plan.name}><div className="plan-top"><span>MEMBERSHIP RATES</span><ArrowUpRight size={19}/></div><WordRise as="h2">{plan.name}</WordRise><ul className="price-list">{plan.rows.map(([period, price]) => <li key={period}><span>{period}</span><strong>{price}</strong></li>)}</ul><button className="button button-light plan-button" onClick={() => setActivePlan(plan)}>ENQUIRE ABOUT PLAN <ArrowRight size={16}/></button></article>)}</div></div><div className="pricing-group diwali-group"><div className="pricing-group-heading"><span className="card-label">LIMITED-TIME FESTIVE DEALS</span><h3>Diwali Membership Offers</h3><p>Join during the Diwali offer and get extra value on yearly memberships.</p></div><div className="plans-grid">{diwaliPlans.map(plan => <article className="plan-card stack-card" key={plan.name}><div className="plan-top"><span>DIWALI SPECIAL</span><ArrowUpRight size={19}/></div><WordRise as="h2">{plan.name}</WordRise><ul className="price-list">{plan.rows.map(([period, price]) => <li key={period}><span>{period}</span><strong>{price}</strong></li>)}</ul><button className="button button-light plan-button" onClick={() => setActivePlan(plan)}>CLAIM THIS OFFER <ArrowRight size={16}/></button></article>)}</div></div><p className="pricing-note">Please confirm offer validity and membership terms with the gym before joining.</p></section>
  <section className="section contract-section"><div className="page-width contract-grid"><div><div className="section-kicker">04 / CLEAR FROM DAY ONE</div><WordRise as="h2">KNOW THE TERMS.</WordRise><p className="contract-intro">A good membership starts with clear expectations. Review the draft terms and confirm the final policy with the gym before joining.</p><button className="button button-outline" onClick={() => setTermsOpen(true)}>VIEW MEMBERSHIP TERMS <ArrowUpRight size={16}/></button></div><div className="terms-list">{[['01','MEMBERSHIP & PAYMENT','Confirm plan duration, fees, taxes, and payment dates in writing.'],['02','CANCELLATION & FREEZING','Add the verified notice period, freeze eligibility, and refund policy.'],['03','HEALTH & SAFETY','Follow staff instructions and equipment guidance.'],['04','FACILITY ETIQUETTE','Return equipment and respect members and staff.']].map(([n,t,d]) => <article className="term-item" key={n}><span>{n}</span><div><WordRise as="h3">{t}</WordRise><p>{d}</p></div><ShieldCheck size={19}/></article>)}</div></div></section>
  <section className="section visit-section page-width" id="visit"><div className="section-kicker">05 / COME THROUGH</div><WordRise as="h2">YOUR NEXT REP STARTS HERE.</WordRise><div className="visit-grid"><article className="visit-card"><MapPin/><span>FIND US</span><WordRise as="h3">{siteConfig.gymAddress}</WordRise><p>Replace the placeholder with the verified street address.</p><a className="text-link" href={directionsUrl()} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight size={15}/></a></article><article className="visit-card"><Clock3/><span>OPENING HOURS</span><WordRise as="h3">YOUR TIME TO TRAIN</WordRise><p>{siteConfig.businessHours}</p><a className="text-link" href={whatsappUrl('Hi VINCIT FITNESS, could you share your opening hours?')} target="_blank" rel="noreferrer">ASK ABOUT HOURS <ArrowUpRight size={15}/></a></article><article className="visit-card"><Users/><span>FIRST VISIT</span><WordRise as="h3">LET'S GET STARTED</WordRise><p>Ask about a tour, a trial session, or the right membership for your goals.</p><a className="text-link" href={whatsappUrl('Hi VINCIT FITNESS, I would like to arrange a visit and learn about membership options.')} target="_blank" rel="noreferrer">BOOK A VISIT <ArrowUpRight size={15}/></a></article></div><div className="map-panel">{siteConfig.googleMapsEmbedUrl ? <iframe title="VINCIT FITNESS location map" src={siteConfig.googleMapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/> : <div className="map-placeholder"><MapPin size={30}/><p>Google Maps embed URL not configured yet.</p><span>Add the verified embed URL in <code>src/config/siteConfig.js</code>.</span></div>}<a className="button button-light map-directions" href={directionsUrl()} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight size={16}/></a></div></section>
  <section className="final-cta"><div className="page-width final-cta-inner"><div><div className="section-kicker">THE NEXT MOVE IS YOURS</div><WordRise as="h2">READY TO GET TO WORK?</WordRise></div><div><p>Ask a question, arrange a visit, or find a plan that fits your goals.</p><WhatsAppButton message="Hi VINCIT FITNESS, I’m interested in joining. Please share membership details."/></div></div></section>
 </main><footer className="site-footer"><a className="brand" href="/"><span className="brand-mark"><Dumbbell size={20}/></span><span>VINCIT<span className="brand-dot">.</span><small>FITNESS CLUB</small></span></a><p>SHOW UP. PUT IN THE WORK. REPEAT.</p><div className="footer-links"><a href="/#about">ABOUT</a><a href="/#membership">MEMBERSHIP</a><a href="/equipment">EQUIPMENT</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} VINCIT FITNESS</span><span>MADE FOR THE PROCESS</span><a href="#terms" onClick={e => {e.preventDefault();setTermsOpen(true)}}>MEMBERSHIP TERMS</a></div></footer>
 {activePlan && <Modal title={`ENQUIRE — ${activePlan.name}`} onClose={() => setActivePlan(null)}><p className="modal-intro">You selected the <strong>{activePlan.name}</strong> membership. Send an enquiry to confirm availability and membership details.</p><WhatsAppButton message={`Hi VINCIT FITNESS, I'm interested in the ${activePlan.name} membership. Please share the pricing and current offer details.`}/><p className="modal-small">No payment is collected on this website.</p></Modal>}
 {termsOpen && <Modal title="MEMBERSHIP TERMS" onClose={() => setTermsOpen(false)}><p className="modal-intro">This is a draft checklist, not a legal contract. Replace it with the gym's approved terms before publishing.</p><ul className="modal-terms"><li><strong>Fees:</strong> confirm fees, taxes, payment schedule, and joining fee.</li><li><strong>Duration:</strong> state membership start/end dates and renewal terms.</li><li><strong>Cancellation:</strong> specify notice, freezing, refunds, and exceptions.</li><li><strong>Safety:</strong> explain orientation and safe equipment use.</li><li><strong>Privacy:</strong> describe how member contact details are handled.</li></ul><WhatsAppButton message="Hi VINCIT FITNESS, please share your official membership terms and cancellation policy."/></Modal>}
 </>;
}
export default function App() {
 const path = window.location.pathname.replace(/\/$/, '') || '/';
 return <><Header/>{path === '/equipment' ? <EquipmentPage/> : <HomePage/>}<WhatsAppButton floating message="Hi VINCIT FITNESS, I’d like to know more about the gym."/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({ '@context':'https://schema.org', '@type':'ExerciseGym', name:siteConfig.brand, description:siteConfig.defaultDescription, url:siteConfig.productionDomain, address: siteConfig.gymAddress !== 'Gym address to be confirmed' ? { '@type':'PostalAddress', streetAddress:siteConfig.gymAddress } : undefined, email:siteConfig.email || undefined })}}/></>;
}
