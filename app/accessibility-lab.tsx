'use client';

import { useState } from 'react';

export default function AccessibilityLab() {
  const [contrast, setContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [updates, setUpdates] = useState(true);
  const [saved, setSaved] = useState(false);

  return <div className="lab-frame">
    <div className="lab-controls">
      <div><p className="lab-kicker">LIVE COMPONENT / 01</p><h3>Preference panel</h3><p>Use Tab to move through the controls. Try changing the view, then save your preference.</p></div>
      <fieldset className="view-controls"><legend>Preview options</legend><button type="button" aria-pressed={contrast} onClick={() => setContrast(!contrast)}><span className="control-glyph" aria-hidden="true">◐</span> High contrast</button><button type="button" aria-pressed={largeText} onClick={() => setLargeText(!largeText)}><span className="control-glyph" aria-hidden="true">Aa</span> Larger text</button></fieldset>
      <div className="lab-annotation"><span className="annotation-line" aria-hidden="true"/><p>Real buttons. Clear labels. Visible states. No custom keyboard rules to memorize.</p></div>
    </div>
    <div className={'lab-preview' + (contrast ? ' high-contrast' : '') + (largeText ? ' large-text' : '')}>
      <div className="preview-window"><div className="preview-topbar"><span className="preview-logo" aria-hidden="true">◍</span><span>Example interface</span><span className="preview-topbar-lines" aria-hidden="true">•••</span></div><div className="preview-body"><p className="preview-eyebrow">ACCOUNT / PREFERENCES</p><h4>Stay in the loop</h4><p className="preview-description">Choose whether to receive updates about changes to your account.</p><form onSubmit={(event) => { event.preventDefault(); setSaved(true); }}><label className="check-row"><input type="checkbox" checked={updates} onChange={(event) => { setUpdates(event.target.checked); setSaved(false); }}/><span><strong>Product updates</strong><small>Occasional notes about improvements and new features.</small></span></label><button className="preview-save" type="submit">Save preference <span aria-hidden="true">→</span></button><p className="save-status" role="status" aria-live="polite">{saved ? 'Preference saved. Product updates ' + (updates ? 'on.' : 'off.') : '\u00a0'}</p></form></div></div>
      <p className="preview-caption">Try keyboard navigation and browser zoom, too. The demo uses native form controls and announces the saved result.</p>
    </div>
  </div>;
}
