#!/bin/bash
# migrate-to-neoswiss.sh — Batch migrate old Tailwind pages to canonical format
# Rewrites <head> CSS/JS imports and wraps body content
# Usage: bash scripts/migrate-to-neoswiss.sh [file1.html file2.html ...]

for f in "$@"; do
  [ ! -f "$f" ] && echo "SKIP: $f not found" && continue

  # Determine depth for relative paths
  depth=$(echo "$f" | tr -cd '/' | wc -c)
  prefix=""
  for ((i=0; i<depth; i++)); do prefix="../$prefix"; done
  [ -z "$prefix" ] && prefix="./"

  echo "Migrating: $f (depth=$depth, prefix=$prefix)"

  # Replace old CSS imports with neoswiss
  sed -i '' "s|href=\"${prefix}estilos/variables.css\"|href=\"${prefix}estilos/neoswiss-system.css?v=4\"|g" "$f"
  sed -i '' "s|href=\"${prefix}estilos/base.css\"||g" "$f"
  sed -i '' "s|href=\"${prefix}estilos/components.css[^\"]*\"||g" "$f"
  sed -i '' "s|href=\"${prefix}dist/output.css[^\"]*\"|href=\"${prefix}estilos/home.css?v=4\"|g" "$f"

  # Remove old script tags for components (shell.js handles them now)
  sed -i '' "s|<script src=\"${prefix}components/SiteHeader.js[^\"]*\" defer></script>||g" "$f"
  sed -i '' "s|<script src=\"${prefix}components/SiteFooter.js[^\"]*\" defer></script>||g" "$f"
  sed -i '' "s|<script src=\"${prefix}js/icons.js[^\"]*\" defer></script>||g" "$f"
  sed -i '' "s|<script src=\"${prefix}js/modal-system.js[^\"]*\" defer></script>||g" "$f"

  # Fix body class (remove Tailwind body classes)
  sed -i '' 's|class="bg-\[var(--bg-body)\] text-slate-100 font-sans antialiased"||g' "$f"
  sed -i '' 's|class="bg-slate-900 text-white font-sans antialiased"||g' "$f"
  sed -i '' 's|class="text-slate-100 font-sans antialiased"||g' "$f"

  # Fix theme-color
  sed -i '' 's|content="#111621"|content="#0A122A"|g' "$f"

  # Fix brand terms
  sed -i '' 's/Diagnóstico [Gg]ratuito/Diagnóstico Sin Riesgo/g' "$f"
  sed -i '' 's/Diagnostico [Gg]ratuito/Diagnóstico Sin Riesgo/g' "$f"
  sed -i '' 's/diagnostico gratuito/diagnóstico sin riesgo/g' "$f"
  sed -i '' 's/Sin compromiso/Sin fricción/g' "$f"
  sed -i '' 's/sin compromiso/sin fricción/g' "$f"
  sed -i '' 's/24 horas/2 días hábiles/g' "$f"

  # Add import map if missing
  if ! grep -q "importmap" "$f"; then
    sed -i '' "s|</head>|<script type=\"importmap\">{\"imports\":{\"firebase/app\":\"https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js\",\"firebase/firestore\":\"https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js\"}}</script>\n</head>|" "$f"
  fi

  # Add shell bootstrap if missing
  if ! grep -q "initShell" "$f"; then
    slug=$(basename "$(dirname "$f")")
    [ "$slug" = "." ] && slug=$(basename "$f" .html)
    sed -i '' "s|</body>|<script type=\"module\">import{initShell}from'${prefix}js/blueprint/shell.js?v=4';initShell({pageSlug:'${slug}'});</script>\n</body>|" "$f"
  fi

  # Add triple-toggle + site-footer if missing
  if ! grep -q "triple-toggle" "$f"; then
    sed -i '' 's|</main>|</main>\n<triple-toggle></triple-toggle>\n<offline-pill></offline-pill>\n<consent-banner></consent-banner>\n<site-footer></site-footer>|' "$f"
  fi

  # Add bg-mesh if missing
  if ! grep -q "bg-mesh" "$f"; then
    sed -i '' 's|<body[^>]*>|&\n<div class="bg-mesh" aria-hidden="true"></div>|' "$f"
  fi

  echo "  ✓ Done"
done

echo ""
echo "Migration complete. Files modified: $#"
