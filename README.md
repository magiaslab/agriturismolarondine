# Agriturismo La Rondine

Sito web per l'Agriturismo La Rondine, un agriturismo situato in Toscana con appartamenti, cantina e degustazioni di vini.

## 🚀 Tecnologie Utilizzate

- **Astro** - Framework per siti web statici
- **React** - Per componenti interattivi
- **Tailwind CSS** - Per lo styling
- **Swiper** - Per i carousel
- **astro-i18next** - Per l'internazionalizzazione (IT/EN)

## 📦 Dipendenze Principali

- Astro: ^4.16.18
- React: ^18.3.1
- Tailwind CSS: ^3.4.17
- Swiper: ^11.2.10

## 🛠️ Installazione e Sviluppo

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per la produzione
npm run build

# Preview del build
npm run preview
```

## 🌐 Deployment

Il sito è configurato per il deployment su Netlify con:

- **Node.js 20** - Versione LTS supportata
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Redirects**: Configurati per SPA routing

### Configurazione Netlify

Il file `netlify.toml` include:
- Ottimizzazione delle immagini
- Minificazione CSS/JS
- Pretty URLs
- Redirect per SPA

## 📁 Struttura del Progetto

```
src/
├── components/     # Componenti riutilizzabili
├── layouts/        # Layout delle pagine
├── pages/          # Pagine del sito
│   ├── en/         # Pagine in inglese
│   └── ...         # Pagine in italiano
├── assets/         # Immagini e risorse
└── styles/         # File CSS personalizzati
```

## 🔧 Aggiornamenti Recenti

- ✅ Aggiornate dipendenze di sicurezza
- ✅ Risolti warning sugli import non utilizzati
- ✅ Configurato Netlify per Node.js 20
- ✅ Ottimizzata configurazione di build

## 🌍 Internazionalizzazione

Il sito supporta italiano e inglese con:
- Routing automatico (`/en/` per inglese)
- Traduzioni gestite con astro-i18next
- SEO ottimizzato per entrambe le lingue

## 📸 Ottimizzazione Immagini

- Compressione automatica durante il build
- Formati WebP per prestazioni ottimali
- Lazy loading implementato

## 🔒 Sicurezza

- Vulnerabilità di sicurezza risolte
- Dipendenze aggiornate alle ultime versioni stabili
- Configurazione HTTPS forzata su Netlify
