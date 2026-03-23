# Scripts

CLI utilities for MetodologIA CMS backend.

## Inventory

| Script | Purpose | Prerequisites |
|--------|---------|---------------|
| `seed-firestore.js` | Seed Firestore emulator with current hardcoded content | Node.js 18+, Firebase Admin SDK |
| `set-admin-claim.js` | Set admin custom claim on a Firebase Auth user | Node.js 18+, Firebase Admin SDK |

## Usage

```bash
# Seed emulator with current site content
node scripts/seed-firestore.js --emulator

# Set admin claim for a user
node scripts/set-admin-claim.js --emulator --email admin@example.com
```
