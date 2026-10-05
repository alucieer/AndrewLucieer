import Image from 'next/image';
import type { ReactNode } from 'react';

type FigureProps = {
  src: string;
  alt: string;
  caption: ReactNode;
  width: number;
  height: number;
  comparison?: boolean;
};

// The six screenshots are static files in public/portfolio. Their captions are
// separate from alt text so each serves its own reader and purpose.
function PortfolioFigure({ src, alt, caption, width, height, comparison = false }: FigureProps) {
  return (
    <figure className={`case-figure${comparison ? ' comparison-figure' : ''}`}>
      <a className="case-image-link" href={src} aria-label={`Open full-size image: ${alt}`}>
        <Image src={src} alt={alt} width={width} height={height} unoptimized />
        <span className="image-open" aria-hidden="true">View full size ↗</span>
      </a>
      <figcaption><p>{caption}</p></figcaption>
    </figure>
  );
}

export default function CaseStudies() {
  return (
    <section className="work-section section-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="work-title">The work behind<br /><em>better interfaces.</em></h2>
        </div>
        <p className="section-intro">Three examples of how I turn design-system thinking and accessibility findings into tools other engineers can use.</p>
      </div>

      <div className="case-stack">
        <article className="case-study" aria-labelledby="design-system-title">
          <header className="case-header">
            <p className="case-index">01 / Design system</p>
            <div>
              <h3 id="design-system-title">One system, five applications.</h3>
              <p className="case-summary">Reusable components, documented decisions, and theme choices that work across newer Angular apps and legacy ones still being upgraded.</p>
            </div>
          </header>
          <div className="case-gallery">
            <PortfolioFigure
              src="/portfolio/buttons.png"
              width={1461}
              height={1329}
              alt="Design system docs showing primary, outlined, text, and elevated button variants with disabled states."
              caption="A design system app I built by hand and maintain across enterprise applications, with separate versions for Angular 21+ and legacy apps still being upgraded. It extends Angular Material with branded themes and variants Material doesn’t provide, like small buttons applied with a single class. Each component links to its code, Figma source, and the Angular Material API reference. It also serves as guardrails for another Claude skill I wrote that generates pages from mockups using the system’s components."
            />
            <PortfolioFigure
              src="/portfolio/light-dark-mode-v2.jpeg"
              width={3456}
              height={1498}
              alt="Form components shown side by side in light and dark mode, including text fields with error and focus states, selects, and a multiselect."
              caption="The same components in light and dark mode, with error, focus, and disabled states carried across both themes. Theming is driven by CSS custom properties, and apps that don’t need dark mode can disable it with a Sass flag, so those styles are never generated at build time. While preparing this image, I found and fixed a contrast issue in the dark mode error state; both themes now pass WAVE contrast checks."
            />
          </div>
        </article>

        <article className="case-study" aria-labelledby="guidance-title">
          <header className="case-header">
            <p className="case-index">02 / Accessibility guidance</p>
            <div>
              <h3 id="guidance-title">Make the right pattern easier to find.</h3>
              <p className="case-summary">Practical guidance pairs common accessibility mistakes with fixes engineers can apply in their own components.</p>
            </div>
          </header>
          <div className="case-gallery">
            <PortfolioFigure
              src="/portfolio/accessibility-guidance.jpeg"
              width={1496}
              height={1296}
              alt="Accessibility guidance page with WCAG 2.1 AA notes and side-by-side Do and Don’t Angular code examples."
              caption="Accessibility guidance I wrote and maintain for engineers building on our design system. Each Do/Don’t pair shows a common mistake, like unfocusable links, unlabeled icon buttons, or orphaned form labels, next to the accessible fix, so teams can avoid common WCAG 2.1 AA failures without having to be accessibility experts."
            />
          </div>
        </article>

        <article className="case-study" aria-labelledby="skill-title">
          <header className="case-header">
            <p className="case-index">03 / Claude Code accessibility skill</p>
            <div>
              <h3 id="skill-title">Turn a failed fix into a stronger check.</h3>
              <p className="case-summary">A repeatable skill for resolving WAVE-reported issues, refined through fresh-agent tests on the same component.</p>
            </div>
          </header>
          <div className="case-gallery">
            <PortfolioFigure
              src="/portfolio/sidesheet-before.jpeg"
              width={3172}
              height={1638}
              comparison
              alt="Settings side sheet before remediation, with numbered markers on unlabeled toggles, unlabeled drag handles, and a low-contrast close button."
              caption="Before: WAVE reports 4 errors and 1 contrast error in the dashboard settings side sheet. The toggles have no labels (1), the drag handles are empty buttons (2), and the close button has very low contrast (3). Numbered markers added to link each WAVE-reported error to its location."
            />

            <section className="refinement" aria-labelledby="refinement-title">
              <p className="eyebrow">Process / Three fresh attempts</p>
              <h4 id="refinement-title">How I refined the skill</h4>
              <p>This component became a test case for improving the skill itself. For each attempt, I reverted the component to its original state and started a fresh Claude Code agent with no shared context, so each run tested only the skill.</p>
              <ol>
                <li><strong>Attempt 1:</strong> The skill couldn’t fix the close button’s contrast, because the low contrast came from opacity, not a raw hex color. I updated the skill’s contrast guidance to handle that case.</li>
                <li><strong>Attempt 2:</strong> The contrast fix worked, but the skill left off the <code>attr.</code> prefix on an <code>aria-label</code> binding. The label rendered the variable names instead of their values. That kind of bug passes a quick glance and fails a screen reader user. I updated the skill’s verification file to check for that specific mistake.</li>
                <li><strong>Attempt 3:</strong> Starting from the same original component, a fresh agent fixed every WAVE-reported error in one pass, with no manual edits.</li>
              </ol>
              <p>Each failure became a permanent check in the skill, so the same mistake won’t happen on the next component. The skill handles what automated checkers can find. It doesn’t add keyboard reordering for the drag handles, which WAVE can’t detect, so that still needs a human.</p>
            </section>

            <PortfolioFigure
              src="/portfolio/sidesheet-after.jpeg"
              width={3174}
              height={1636}
              comparison
              alt="Settings side sheet after remediation, with WAVE reporting 0 errors and the original branded styling unchanged."
              caption="After: a fresh Claude Code session using my skill fixed all 4 errors and the contrast issue in one pass, with no manual edits. The toggles and drag handles now have labels, and the close button meets contrast requirements, with the branded styling unchanged. This was the third attempt; earlier runs exposed gaps that I fixed in the skill itself."
            />
            <PortfolioFigure
              src="/portfolio/skill-verification-diff.jpeg"
              width={1416}
              height={758}
              alt="Diff adding a verification gate to the Claude skill that requires runtime-bound ARIA attributes to use attr. binding and be confirmed in the rendered DOM."
              caption={<>The check I added to the skill after attempt 2. A missing <code>attr.</code> prefix on an <code>aria-label</code> binding compiles cleanly but never reaches the rendered DOM. The skill now confirms the attribute in the DOM, not just in the template. Each failure becomes a permanent check, so the same mistake won’t happen on the next component.</>}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
