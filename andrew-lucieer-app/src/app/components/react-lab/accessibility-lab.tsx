import { useState } from 'react';

const storageKey = 'portfolio-accessibility-lab';
const defaults = { contrast: false, largeText: false, updates: true };

function readPreferences(): typeof defaults {
  try {
    const value = JSON.parse(window.localStorage.getItem(storageKey) ?? 'null');
    if (value && typeof value.contrast === 'boolean' &&
        typeof value.largeText === 'boolean' && typeof value.updates === 'boolean') {
      return { contrast: value.contrast, largeText: value.largeText, updates: value.updates };
    }
  } catch {
    // The demo remains usable when storage is blocked or its data is invalid.
  }
  return defaults;
}

export default function AccessibilityLab() {
  const [preferences, setPreferences] = useState(readPreferences);
  const [status, setStatus] = useState('');
  const { contrast, largeText, updates } = preferences;

  function changePreference(key: keyof typeof defaults, value: boolean) {
    setPreferences((current) => ({ ...current, [key]: value }));
    setStatus('');
  }

  function savePreferences() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(preferences));
      setStatus('Preferences saved on this browser. Product updates ' + (updates ? 'on.' : 'off.'));
    } catch {
      setStatus('Preferences could not be saved on this browser.');
    }
  }

  return (
    <div className="lab-frame">
      <div className="lab-controls">
        <h3>Preference panel</h3>
        <p>Use Tab to move through the controls. Save to keep your choices in this browser.</p>
        <fieldset className="view-controls">
          <legend>Preview options</legend>
          <button type="button" aria-pressed={contrast} onClick={() => changePreference('contrast', !contrast)}>
            High contrast
          </button>
          <button type="button" aria-pressed={largeText} onClick={() => changePreference('largeText', !largeText)}>
            Larger text
          </button>
        </fieldset>
      </div>
      <div className={'lab-preview' + (contrast ? ' high-contrast' : '') + (largeText ? ' large-text' : '')}>
        <p className="preview-label">Example interface</p>
        <h4>Stay in the loop</h4>
        <p>Choose whether to receive updates about changes to your account.</p>
        <form onSubmit={(event) => { event.preventDefault(); savePreferences(); }}>
          <label className="check-row">
            <input type="checkbox" checked={updates}
              onChange={(event) => changePreference('updates', event.target.checked)} />
            <span><strong>Product updates</strong><span>Occasional notes about improvements and new features.</span></span>
          </label>
          <button className="preview-save" type="submit">Save preferences</button>
          <p className="save-status" role="status">{status}</p>
        </form>
      </div>
    </div>
  );
}
