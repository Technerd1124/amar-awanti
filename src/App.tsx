import { useEffect, useState } from 'react';
import amarImage from "./amar.png";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Check,
  Clapperboard,
  ExternalLink,
  Instagram,
  Mail,
  Menu,
  MoveRight,
  PenLine,
  Play,
  Sparkles,
  Target,
  X,
} from 'lucide-react';

type CaseStudy = {
  id: string;
  brand: string;
  handle: string;
  accent: string;
  metric: string;
  label: string;
  audioHook: string;
  audioTranslation: string;
  visualHook: string;
  cover: string;
  stats: string[];
  reasons: string[];
  extraReasons: string[];
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 'scooty',
    brand: 'E-Scooters',
    handle: '@scooty.adda',
    accent: 'teal',
    metric: '1.1M',
    label: 'views on one reel',
    audioHook: '"Cycle-ge helbitte bye-bye, ee gaadi togondaginda 10,000rs saavira save aagta ide!"',
    audioTranslation: 'Say bye-bye to your cycle. Buying this vehicle saves you ₹10,000.',
    visualHook: 'A kid throws down his old cycle, with "TIME TO UPGRADE" appearing on screen.',
    cover: 'https://reelwriter-portfolio-gallery.lovable.app/__l5e/assets-v1/a4f6cf45-2114-4218-88cc-0d9ee70ca463/reel-e-scooters.jpg',
    stats: ['17.2K likes', '13.5K shares', '5.9K saves', '3.8K comments', '+1,455 followers'],
    reasons: [
      'Text hook: "TIME TO UPGRADE" on screen',
      'Real money problem: parents paying ₹10,000 for school vans and buses',
      'Clear payoff: the scooter saves that ₹10,000',
    ],
    extraReasons: [
      'Relatable talent: shot with a school kid, so kids and parents connected',
      'Removed the barrier: no license, registration, or number plate needed',
    ],
    link: 'https://www.instagram.com/reel/DdRGnapPV2Y/',
  },
  {
    id: 'electric',
    brand: 'Electric Cycles',
    handle: '@emviper_bch',
    accent: 'coral',
    metric: '4.0M',
    label: 'views on one reel',
    audioHook: '"Hey, hey, nilsi bro, nilsi! Which bike is that?"',
    audioTranslation: 'Hey, stop bro, stop! Which bike is that?',
    visualHook: 'An e-cycle moving at scooter-like speed, with a biker chasing it in disbelief.',
    cover: 'https://reelwriter-portfolio-gallery.lovable.app/__l5e/assets-v1/67d30786-1a1a-4303-bd84-27e162eb991b/reel-electric-cycles.jpg',
    stats: ['76.3K likes', '56.4K shares', '20.7K saves', '506 comments', '+1,859 followers'],
    reasons: [
      'Curiosity hook: "cycle or bike?" from the first second',
      'Visual and audio together: scooter-speed riding plus sound effects',
      'Pop-culture link: Rocky Bhai\'s bike from KGF',
    ],
    extraReasons: [
      'Story format: one character asks, another explains, so it never feels like an ad',
      'Built-in call to action: the curious guy goes to the store',
      'Highly shareable: 56K shares and 20K saves',
    ],
    link: 'https://www.instagram.com/reel/DYrkJ2ehExe/',
  },
  {
    id: 'rc-cars',
    brand: 'RC Cars',
    handle: '@pocketrcar',
    accent: 'pink',
    metric: '325K+',
    label: 'views on one reel',
    audioHook: '"Paapri, neevu nimma thammange ee RC car-an kodsilla andre, avru aloodu anthu guarantee!"',
    audioTranslation: "Poor sisters, if you don't gift this RC car to your younger brother, he will definitely cry. Guaranteed!",
    visualHook: 'A kid doing stunts and tricks with the RC car — speed, spins and full app control on display.',
    cover: 'https://reelwriter-portfolio-gallery.lovable.app/assets/reel-rc-cars-CDfunwUK.jpg',
    stats: ['12K+ shares', '11K+ likes', '3K saves', '3K comments'],
    reasons: [
      'Emotional hook: spoke directly to sisters, with a playful guilt angle',
      'Perfect timing: built around the Raksha Bandhan gifting season',
      'Clear gift idea: what to buy, and for whom',
    ],
    extraReasons: [
      'Feature demo: app control and remote control',
      'Proof through stunts: performance shown, not just explained',
      'Highly shareable: shares beat likes',
    ],
    link: 'https://www.instagram.com/reel/Dcn2M2Jvg9B/',
  },
  {
    id: 'petrol',
    brand: 'Petrol Pocket Bikes',
    handle: '@pocket_bike46',
    accent: 'orange',
    metric: '4.8M',
    label: 'views on one reel',
    audioHook: '"Nodi bro, petrol bike-ge petrol hakta idini."',
    audioTranslation: "Look bro, I'm putting petrol in my petrol bike.",
    visualHook: "Pouring petrol into the bike's tank — a simple, real action that stops the scroll.",
    cover: 'https://reelwriter-portfolio-gallery.lovable.app/__l5e/assets-v1/2b0c966b-173c-4ce8-92e2-b4eb15d5145d/reel-petrol-pocket-bikes.jpg',
    stats: ['121K likes', '17.7K shares', '10K saves', '647 comments', '+5,106 followers', '2,407 bio link taps'],
    reasons: [
      'Simple, real hook: a plain action that makes people curious',
      'Audio and visual match: the line and the shot say the same thing',
      'Full product walkthrough: features and engine explained clearly',
    ],
    extraReasons: [
      'Engine sound payoff: starting and revving the bike',
      'Authentic feel: a real rider, not an ad',
    ],
    link: 'https://www.instagram.com/reel/DdRFj_YzRTW/',
  },
];

const formula = [
  ['01', 'Relatability', 'Start with a problem or moment the audience lives'],
  ['02', 'Emotion', 'Make people feel something, so they share it'],
  ['03', 'Proof', 'Show the product working: demo, stunts, sound'],
  ['04', 'Branding', 'Make the product and the store memorable'],
  ['05', 'Call to action', 'Give a clear reason to buy or visit the store'],
];

const proofAccounts = [
  {
    handle: '@scooty.adda',
    accent: 'teal',
    link: 'https://www.instagram.com/reel/DdRGnapPV2Y/',
    reach: '854,845',
    follows: '1,455',
    comments: '3.8K',
    shares: '13.5K',
  },
  {
    handle: '@emviper_bch',
    accent: 'coral',
    link: 'https://www.instagram.com/reel/DYrkJ2ehExe/',
    reach: '3,201,320',
    follows: '1,859',
    comments: '506',
    shares: '56.3K',
  },
  {
    handle: '@pocket_bike46',
    accent: 'orange',
    link: 'https://www.instagram.com/reel/DdRFj_YzRTW/',
    reach: '3,523,039',
    follows: '5,106',
    comments: '647',
    shares: '17.7K',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showTop, setShowTop] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <nav className="nav-wrap">
        <div className="nav-inner">
          <button className="brand-mark" onClick={() => scrollTo('top')} aria-label="Back to top">
           ~ Amarendra<span>.</span>
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <button onClick={() => scrollTo('work')}>Selected work</button>
            <button onClick={() => scrollTo('method')}>My method</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button className="nav-contact" onClick={() => scrollTo('contact')}>Let's talk <ArrowUpRight size={15} /></button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero section-pad" id="top">
        <div className="hero-grid">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="eyebrow-dot" /> Content strategist / producer</div>
            <h1>Making brands<br /><em>impossible</em> to scroll past.</h1>
            <p className="hero-lede">I plan, script, direct and track short-form content that turns attention into leads, sales and loyal customers.</p>

            {/* Product categories label + pills */}
            <div className="hero-categories">
              <p className="categories-label">Product categories I worked on at Bharat Cycle Hub (our company's products):</p>
              <div className="categories-pills">
                {['Petrol Pocket Bikes', 'Electric Pocket Bikes', 'Cycles', 'E-Cycles', 'E-Scooters', 'RC Cars', 'Toys'].map((cat: string) => (
                  <span className="cat-pill" key={cat}>{cat}</span>
                ))}
              </div>
            </div>

            <div className="hero-actions">
              <button className="button button-dark" onClick={() => scrollTo('work')}>Explore the work <ArrowDown size={17} /></button>
              <button className="text-link" onClick={() => scrollTo('contact')}>Have a brief? <MoveRight size={17} /></button>
            </div>
          </div>
          <div className="hero-visual reveal-up delay-1">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-card hero-card-main">
              <div className="card-topline"><span>Amarendra / 2025</span><span>01—04</span></div>
              <div className="hero-card-icon"><Clapperboard size={30} /></div>
              <p>Scripts that turn<br /><strong>views into leads.</strong></p>
              <div className="hero-card-footer"><span>Content with a point of view</span><ArrowUpRight size={17} /></div>
            </div>
            <div className="floating-note note-views"><BarChart3 size={17} /><span><b>4.8M</b><small>top reel views</small></span></div>
            <div className="floating-note note-accounts"><Target size={17} /><span><b>22</b><small>accounts managed</small></span></div>
            <div className="hero-sticker">SCROLL<br />FOR PROOF <ArrowDown size={14} /></div>
          </div>
        </div>
        <div className="hero-strip">
          <span>Based in Bangalore</span><span className="strip-line" /><span>Open to roles</span><span className="role-pill">Content strategist</span><span className="role-pill">Scriptwriter</span><span className="role-pill">Social media producer</span>
        </div>
      </section>

      <section className="marquee-band" aria-label="Services">
        <div className="marquee-track"><span>PLAN</span><i>✳</i><span>SCRIPT</span><i>✳</i><span>DIRECT</span><i>✳</i><span>TRACK</span><i>✳</i><span>PLAN</span><i>✳</i><span>SCRIPT</span><i>✳</i><span>DIRECT</span><i>✳</i><span>TRACK</span></div>
      </section>

      {/* ABOUT */}
      <section className="intro section-pad" id="about">
        <div className="section-kicker">01 / The person behind the performance</div>
        <div className="intro-grid">
          <div className="intro-left">
            {/* <img src="/src/amar.png" alt="Amarender Awanti" className="profile-image" /> */}
            <img
  src={amarImage}
  alt="Amarender Awanti"
  className="profile-image"
/>
          </div>
          <div className="intro-right">
            <h2>Not just a writer.<br /><span>A growth-minded maker.</span></h2>
            <div className="intro-body">
              <p className="large-copy">I'm <strong>Amarender Awanti</strong>, a content strategist and producer from Bangalore. At Bharat Cycle Hub, I planned, scripted, and directed content for <strong>22 social accounts</strong> across cycles, e-vehicles, RC cars, and toys.</p>
              <p>I don't just write scripts. I plan, I direct, and I track the result. Every piece is built to earn attention first, then move people closer to a decision.</p>
              <div className="skill-row"><span className="skill-label">Languages</span><span>Kannada · Telugu · English · Hindi · Tamil</span></div>
              <div className="skill-row"><span className="skill-label">Education</span><span>Diploma in Computer Science Engineering (2025) · CGPA 8.4</span></div>
              <div className="tool-list"><span className="skill-label">Tools</span><div>{['Claude', 'ChatGPT', 'Gemini', 'Blowup', 'Grammarly', 'Instagram'].map((tool: string) => <span className="tool-chip" key={tool}>{tool}</span>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="results section-pad">
        <div className="section-heading-row"><div><div className="section-kicker">02 / The scoreboard</div><h2>Results at a glance<span>.</span></h2></div><p className="heading-aside">Attention is nice.<br /><strong>Outcomes are better.</strong></p></div>
        <div className="results-grid">
          <div className="result-card result-teal"><span className="result-index">01</span><strong>8M<span>+</span></strong><p>dashboard views on the main BCH account</p><BarChart3 className="result-icon" size={31} /></div>
          <div className="result-card result-coral"><span className="result-index">02</span><strong>60<span>+</span></strong><p>videos crossed 1M views across all accounts</p><Sparkles className="result-icon" size={31} /></div>
          <div className="result-card result-yellow"><span className="result-index">03</span><strong>4.8M</strong><p>views on my top reel</p><ArrowUpRight className="result-icon" size={31} /></div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="work section-pad" id="work">
        <div className="section-kicker">03 / Selected work</div>
        <div className="work-header"><h2>Proof, not promises<span>.</span></h2><p>Every case shows the hook, the thinking, and the result.</p></div>
        <div className="all-cases">
          {caseStudies.map((study: CaseStudy, index: number) => (
            <div key={study.id} className={`case-study case-${study.accent}`}>
              {/* Sidebar */}
              <div className="case-sidebar">
                <div className="case-index">0{index + 1}</div>
                <div className="case-handle"><Instagram size={16} /> {study.handle}</div>
                <div className="case-metric">{study.metric}</div>
                <div className="case-label">{study.label}</div>
                <div className="reel-mockup">
                  <div className="mockup-top"><span>REEL</span><span>•••</span></div>
                  <div className="mockup-scene">
                    <img src={study.cover} alt={`${study.brand} reel cover`} />
                    <div className="mockup-play"><Play size={22} fill="currentColor" /></div>
                  </div>
                  <div className="mockup-bottom">
                    <span>♡  {study.stats[0].split(' ')[0]}</span>
                    <span>↗  {study.stats[1].split(' ')[0]}</span>
                    <span>⌁  {study.stats[2].split(' ')[0]}</span>
                  </div>
                </div>
                <a className={`ig-button ig-button-${study.accent}`} href={study.link} target="_blank" rel="noreferrer">
                  <Instagram size={15} /> Open on Instagram
                </a>
              </div>

              {/* Content */}
              <div className="case-content">
                <div className="case-brand-row"><span className={`case-brand-badge badge-${study.accent}`}>{study.brand}</span></div>

                {/* Hook section */}
                <div className="hook-section-title">Hook used in this reel</div>
                <div className={`hook-block hook-block-${study.accent}`}>
                  <div className="hook-type-row">
                    <span className="hook-type-badge">Audio Hook</span>
                  </div>
                  <p className="hook-quote">{study.audioHook}</p>
                  <em className="hook-translation">{study.audioTranslation}</em>

                  <div className="hook-type-row hook-type-row-visual">
                    <span className="hook-type-badge hook-type-visual">Visual Hook</span>
                  </div>
                  <p className="hook-visual-text">{study.visualHook}</p>
                </div>

                {/* Results */}
                <div className="stats-section-label">Results</div>
                <div className="stats-row">
                  {study.stats.map((stat: string) => {
                    const [value, ...rest] = stat.split(' ');
                    return <div key={stat}><strong>{value}</strong><span>{rest.join(' ')}</span></div>;
                  })}
                </div>

                {/* Why it went viral */}
                <h3>Why it went viral</h3>
                <div className="reasons-grid">
                  <ul>{study.reasons.map((reason: string) => <li key={reason}><Check size={15} />{reason}</li>)}</ul>
                  <ul>{study.extraReasons.map((reason: string) => <li key={reason}><Check size={15} />{reason}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section className="method section-pad" id="method">
        <div className="method-header"><div><div className="section-kicker light">04 / The operating system</div><h2>My content formula<span>.</span></h2></div><p>Simple enough to repeat.<br /><strong>Sharp enough to work.</strong></p></div>
        <div className="formula-grid">{formula.map(([number, title, copy], index: number) => <div className={`formula-card formula-${index + 1}`} key={title}><span>{number}</span><PenLine size={20} /><h3>{title}</h3><p>{copy}</p></div>)}</div>
        <div className="method-footer"><strong>Plan, Script, Direct, Track:</strong> plan and execution, 100% mine.<em>This formula produced 60+ videos over 1M views and a 4.8M top reel.</em></div>
      </section>

      {/* PROOF: INSTAGRAM INSIGHTS */}
      <section className="proof-section section-pad" id="proof">
        <div className="section-kicker">05 / The receipts</div>
        <div className="work-header">
          <h2>Proof: Instagram Insights<span>.</span></h2>
          <p>Real screenshots from the Instagram dashboard — not estimates.</p>
        </div>
        <div className="proof-grid">
          {proofAccounts.map((acc) => (
            <div key={acc.handle} className={`proof-card proof-${acc.accent}`}>
              <div className="proof-card-top">
                <div className="proof-handle"><Instagram size={15} />{acc.handle}</div>
                <a className="proof-reel-link" href={acc.link} target="_blank" rel="noreferrer">
                  View reel <ExternalLink size={12} />
                </a>
              </div>

              {/* Mocked insights screen */}
              <div className="proof-screen">
                <div className="ps-topbar">
                  <span>Reel insights</span>
                  <span className="ps-chevron">⌃</span>
                </div>
                <div className="ps-metrics-row">
                  <div className="ps-metric"><span className="ps-icon">💬</span><strong>{acc.comments}</strong><small>comments</small></div>
                  <div className="ps-metric"><span className="ps-icon">↗</span><strong>{acc.shares}</strong><small>shares</small></div>
                </div>
                <div className="ps-divider" />
                <div className="ps-label">After viewing</div>
                <div className="ps-big-row">
                  <div className="ps-big-stat">
                    <small>Accounts reached</small>
                    <strong>{acc.reach}</strong>
                  </div>
                  <div className="ps-big-stat">
                    <small>Follows</small>
                    <strong>{acc.follows}</strong>
                  </div>
                </div>
              </div>

              <a className="proof-cta" href={acc.link} target="_blank" rel="noreferrer">
                Open on Instagram <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section-pad" id="contact">
        <div className="contact-orb" />
        <div className="section-kicker">06 / Start a conversation</div>
        <div className="contact-layout">
          <div className="contact-content">
            <h2>Let's make something<br /><em>worth stopping for.</em></h2>
            <p className="contact-copy">I'm ready to help your brand grow through content that gets views, leads, and sales.</p>
            <div className="contact-flex">
              <a href="mailto:amarendraawanti28@gmail.com" className="contact-item"><Mail size={20} /><span><small>Email</small>amarendraawanti28@gmail.com</span><ArrowUpRight size={18} /></a>
              <a href="tel:7795505588" className="contact-item"><span className="contact-symbol">↗</span><span><small>Call</small>7795505588</span><ArrowUpRight size={18} /></a>
              <div className="contact-item"><span className="contact-symbol">◎</span><span><small>Based in</small>Bangalore</span></div>
            </div>
            <div className="contact-footer">
              <div><span>Open to roles</span><strong>Content Strategist · Scriptwriter · Social Media Producer · Content Producer</strong></div>
              <div className="social-links">
                <a href="https://www.instagram.com/scooty.adda" target="_blank" rel="noreferrer">@scooty.adda</a>
                <a href="https://www.instagram.com/emviper_bch" target="_blank" rel="noreferrer">@emviper_bch</a>
                <a href="https://www.instagram.com/pocketrcar" target="_blank" rel="noreferrer">@pocketrcar</a>
                <a href="https://www.instagram.com/pocket_bike46" target="_blank" rel="noreferrer">@pocket_bike46</a>
              </div>
            </div>
          </div>
          <div className="contact-image-wrapper">
          </div>
        </div>
      </section>

      <footer className="footer"><span>Amarender Awanti / Content strategist & producer</span><span>© 2025 · Built for impact</span></footer>
      {showTop && <button className="back-top" onClick={() => scrollTo('top')} aria-label="Back to top"><ArrowUp size={17} /></button>}
    </main>
  );
}

export default App;
