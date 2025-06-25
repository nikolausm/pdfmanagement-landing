# PdfManagement Landing Page

## Über das Projekt

Dies ist die offizielle Landing Page für **PdfManagement** - die Enterprise Document Intelligence Platform von Minicon eG. Die Seite präsentiert die umfassenden Funktionen des Systems zur intelligenten Dokumentenverarbeitung.

## Features der Landing Page

- ✨ Modernes, responsives Design
- 🚀 Optimiert für Performance
- 📱 Mobile-first Ansatz
- 🎨 Tailwind CSS für Styling
- 💫 Smooth Scroll und Animationen
- 📝 Kontaktformular mit Validierung
- 🛒 Integrierte Preispläne mit Kaufoption

## Technologie-Stack

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Font Awesome Icons

## Installation & Deployment

### Lokale Entwicklung

1. Repository klonen:
```bash
git clone https://github.com/nikolausm/pdfmanagement-landing.git
cd pdfmanagement-landing
```

2. Mit einem lokalen Server starten (z.B. Live Server in VS Code)

### GitHub Pages Deployment

1. In den Repository-Einstellungen zu "Pages" navigieren
2. Source: "Deploy from a branch" wählen
3. Branch: "main" und Folder: "/ (root)" auswählen
4. Save klicken

Die Seite ist dann verfügbar unter: `https://nikolausm.github.io/pdfmanagement-landing/`

## Struktur

```
pdfmanagement-landing/
├── index.html      # Haupt-HTML-Datei
├── script.js       # JavaScript für Interaktivität
└── README.md       # Diese Datei
```

## Anpassungen

### Kontaktformular

Das Kontaktformular zeigt derzeit nur eine Alert-Box. Für die Produktion sollte eine Server-Integration implementiert werden:

```javascript
// In script.js ersetzen:
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

### Preise

Die Preise können in der `index.html` im Pricing-Abschnitt angepasst werden.

### Farben & Branding

Das Farbschema verwendet hauptsächlich:
- Primär: Blue-800 (#1e3a8a)
- Sekundär: Blue-900 (#1e3c8a)
- Akzent: Orange-500 (#f97316)

## SEO

Die Seite ist optimiert für Suchmaschinen mit:
- Semantischem HTML
- Meta-Beschreibungen
- Strukturierten Überschriften
- Performance-Optimierung

## Browser-Kompatibilität

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)

## Lizenz

© 2025 Minicon eG. Alle Rechte vorbehalten.

## Kontakt

**Minicon eG**  
E-Mail: info@minicon.de  
Website: www.minicon.de  
Telefon: +49 (0) 123 456789

---

Entwickelt von Michael Nikolaus