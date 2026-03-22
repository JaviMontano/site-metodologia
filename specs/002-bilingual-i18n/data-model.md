# Data Model: Bilingual i18n

## Entities

### Translation File
- **Format**: Nested JSON
- **Location**: `/js/i18n/{lang}.json`
- **Languages**: `es`, `en`
- **Key structure**: `{section}.{subsection}.{element}` (dot-notation)
- **Value**: String (plain text or HTML for `data-i18n-html`)

### Language Preference
- **Storage**: localStorage key `lang`
- **Values**: `"es"` | `"en"`
- **Default**: `"es"` (or auto-detected from `navigator.language`)
- **Lifecycle**: Set on first visit (auto-detect or explicit toggle), persists indefinitely

### i18n Module State
- **lang**: Current active language code
- **translations**: In-memory cache of loaded JSON
- **initialized**: Boolean — prevents double-init

## Relationships

```
Translation File (es.json/en.json)
  └── loaded by → i18n Module
                    ├── reads → localStorage (lang preference)
                    ├── traverses → DOM (data-i18n elements)
                    └── called by → SiteHeader (toggle events)
                                    SiteFooter (on init)
                                    Page scripts (dynamic content)
```

## Validation Rules

- Translation keys must match between es.json and en.json (same key set)
- Missing keys in en.json fall back to Spanish HTML content (no error)
- Language code must be exactly "es" or "en" (no variants like "en-US")
- JSON files must be valid JSON (no trailing commas, proper encoding)
