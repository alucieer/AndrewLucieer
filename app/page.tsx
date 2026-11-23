import AccessibilityLab from './accessibility-lab';
import CaseStudies from './case-studies';

function ExternalArrowIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Andrew Lucieer, back to top"><span className="wordmark-mark" aria-hidden="true">a<span>.</span></span><span>Andrew Lucieer</span></a>
      <nav className="site-nav" aria-label="Primary navigation"><a href="#work">Work</a><a href="#lab">Accessibility lab</a><a href="#about">About</a><a className="nav-contact" href="mailto:alucieer@gmail.com">Get in touch <span aria-hidden="true">↗</span></a></nav>
    </header>
    <main id="main">
      <section className="hero section-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-topline"><p className="eyebrow"><span className="signal-dot" aria-hidden="true" /> Staff design technologist · Frontend engineer</p><p className="hero-index">Portfolio / 2026</p></div>
        <div className="hero-grid"><div><h1 id="hero-title">Interfaces are only good when <em>everyone</em> can use them.</h1><p className="hero-description">I&apos;m Andrew. I build the systems behind accessible, dependable interfaces—connecting design intent to code that works across teams, products, and people.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore selected work <span aria-hidden="true">↘</span></a><a className="text-link" href="#lab">Try the accessibility lab <span aria-hidden="true">↗</span></a></div></div>
          <div className="hero-art" aria-hidden="true"><div className="art-orbit art-orbit-one"/><div className="art-orbit art-orbit-two"/><div className="art-axis art-axis-x"/><div className="art-axis art-axis-y"/><div className="art-core"><span>Design</span><span className="art-plus">+</span><span>Engineering</span></div><div className="art-node art-node-a">Accessible</div><div className="art-node art-node-b">Reusable</div><div className="art-node art-node-c">Human</div><div className="art-coordinate">01 / 03</div></div>
        </div><div className="hero-footer"><p>Design systems <span>→</span> Accessibility <span>→</span> Product craft</p><a href="#work">Scroll to work <span aria-hidden="true">↓</span></a></div>
      </section>
      <CaseStudies />
      <section className="principle-band" aria-labelledby="principle-title"><div className="section-shell principle-inner"><p className="eyebrow">A working principle</p><h2 id="principle-title">A component isn&apos;t done when it looks right. It&apos;s done when it behaves right, too.</h2><div className="principle-meta"><span>Semantics</span><span>Keyboard access</span><span>Clear feedback</span><span>Consistency at scale</span></div></div></section>
      <section className="lab-section section-shell" id="lab" aria-labelledby="lab-title"><div className="section-heading lab-heading"><div><p className="eyebrow">02 / Built to be used</p><h2 id="lab-title">Accessibility is<br/><em>in the details.</em></h2></div><p className="section-intro">This small React demo shows practical choices: native controls, visible focus, readable states, and a layout that adapts when people change how they view it.</p></div><AccessibilityLab /></section>
      <section className="about-section section-shell" id="about" aria-labelledby="about-title"><div className="about-aside"><p className="eyebrow">03 / About</p><div className="about-monogram" aria-hidden="true">AL<span>↗</span></div></div><div className="about-copy"><h2 id="about-title">I care about what happens <em>after</em> the mockup.</h2><p>I&apos;ve spent 20 years building software, starting in full-stack development and spending the last 11 across frontend engineering, UX, and design systems. At Magnit, I lead accessibility investigations and help turn findings into shared components and guidance. Earlier work includes component libraries, Storybook, prototyping, and mentoring teams through implementation.</p><p>The thread through it all is straightforward: make good design dependable for the next engineer and usable for the next person.</p><div className="about-links"><a href="https://www.linkedin.com/in/andrew-lucieer-7b323646/" target="_blank" rel="noreferrer">LinkedIn <ExternalArrowIcon /></a><a href="https://github.com/alucieer" target="_blank" rel="noreferrer">GitHub <ExternalArrowIcon /></a><a href="mailto:alucieer@gmail.com">Email Andrew <ExternalArrowIcon /></a></div></div></section>
    </main>
    <footer className="site-footer section-shell"><p>Andrew Lucieer <span>© 2026</span></p><p>Made for people, in every mode of use.</p><a href="#top">Back to top ↑</a></footer>
  </>;
}
