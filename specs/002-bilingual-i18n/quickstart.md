# Quickstart: Bilingual i18n Testing

## Setup

```bash
# Start local server
npx http-server . -p 8765

# Run bilingual tests
npx playwright test tests/19-bilingual-foundation.spec.js
```

## Manual Test Scenarios

### 1. Toggle Basic Function
1. Open http://localhost:8765/
2. Locate ES|EN toggle between logo and "Ruta" nav link
3. Click "EN" — all translatable text switches to English
4. Click "ES" — reverts to Spanish
5. Verify: no page reload, no JS errors

### 2. Persistence
1. Switch to EN
2. Navigate to /ruta/index.html
3. Verify: page loads in English
4. Close browser tab
5. Reopen http://localhost:8765/
6. Verify: still in English

### 3. Graceful Fallback
1. Switch to EN
2. Navigate to a page NOT yet translated (e.g., a Wave 5 page)
3. Verify: header/footer in English, page body in Spanish, no errors

### 4. Mobile Toggle
1. Resize to 375px width
2. Open hamburger menu
3. Verify: toggle visible and functional

### 5. Accessibility
1. Tab to the toggle — verify focus ring visible
2. Press Enter/Space — verify language switches
3. Verify: `aria-pressed` updates, `html lang` attribute updates
