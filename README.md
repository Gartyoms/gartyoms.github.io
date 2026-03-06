# 🧰 ToolBox Online

**Strumenti gratuiti online per tutti** — Un sito web statico, mobile-first e dark mode con calcolatori di utilità generale ed elettronica.

🌐 **Visita il sito →** https://www.toolboxonline.it

---

## ✨ Caratteristiche

- 🌙 **Dark Mode** con design moderno e glassmorphism
- 📱 **Mobile-First** — 100% responsive su ogni dispositivo
- ⚡ **Zero dipendenze** — HTML, CSS e JavaScript puri
- 🚀 **Velocissimo** — nessun framework, caricamento istantaneo
- 🔒 **Privacy** — tutti i calcoli avvengono nel browser, nessun dato inviato a server

---

## 🛠️ Strumenti Disponibili

### 📝 Utility Generali

| Strumento | Descrizione |
|-----------|-------------|
| **Contatore di Parole** | Conta parole, caratteri, frasi, paragrafi e tempo di lettura |
| **Generatore di Password** | Password sicure con lunghezza e complessità personalizzabili |
| **Convertitore di Unità** | Lunghezza, peso, temperatura e velocità |
| **Generatore Lorem Ipsum** | Paragrafi, frasi o parole di testo placeholder |

### ⚡ Elettronica — Base

| Strumento | Descrizione |
|-----------|-------------|
| **Legge di Ohm** | Calcola V, I, R, P — inserisci 2 valori, ottieni gli altri |
| **Codice Colori Resistori** | Leggi il valore di un resistore dalle bande colorate (4 bande) |
| **Resistore per LED** | Calcola il resistore giusto per un LED con preset per colori |
| **Partitore di Tensione** | Calcola Vout con schema SVG interattivo |
| **Costante di Tempo RC** | Tau, frequenza di taglio, tabella carica/scarica 1τ–5τ |

### ⚡ Elettronica — Avanzata

| Strumento | Descrizione |
|-----------|-------------|
| **Serie / Parallelo** | Resistenze e condensatori in serie o parallelo (fino a 10) |
| **555 Timer** | Modo Astabile e Monostabile — frequenza, duty cycle, tempi |
| **Filtri RC** | Passa basso, passa alto, passa banda e notch |
| **Reattanza e Impedenza** | XC, XL, impedenza Z, risonanza e angolo di fase |
| **Convertitore dB** | dB ↔ rapporto tensione/potenza, dBm ↔ Watt |
| **Frequenza / Periodo** | Hz ↔ periodo, omega, lunghezza d'onda EM e sonora |
| **Potenza e Dissipazione** | Potenza resistori, regolatori lineari, temperatura di giunzione |

### 📐 Geometria e Fisica

| Strumento | Descrizione |
|-----------|-------------|
| **Area e Perimetro** | 8 forme: cerchio, rettangolo, triangolo, quadrato, trapezio, parallelogramma, esagono, ellisse |
| **Volume e Superficie** | 7 solidi: cubo, parallelepipedo, sfera, cilindro, cono, piramide, toro |
| **Teorema di Pitagora** | Ipotenusa o cateto, visualizzazione SVG, area, perimetro, angolo |
| **Moto Rettilineo** | MRU e MRUA — velocità, accelerazione, spazio, tempo |
| **Calcolatore Balistico** | Moto parabolico con drag, vento, 4 pianeti, grafico traiettoria |

### 💰 Finanza & Utility

| Strumento | Descrizione |
|-----------|-------------|
| **Calcolatore IVA** | Aggiungi o scorpora IVA con aliquote italiane (4%, 5%, 10%, 22%) |
| **Interessi Composti** | Simulazione crescita investimenti con versamenti periodici e grafico |
| **Generatore QR Code** | QR Code da testo, URL, email, telefono, WiFi — scarica in PNG |
| **Convertitore Basi** | Binario ↔ Ottale ↔ Decimale ↔ Esadecimale con visualizzazione bit |

### 💻 Informatica

| Strumento | Descrizione |
|-----------|-------------|
| **Tabella ASCII** | Tabella interattiva dei 128 caratteri con ricerca, filtri e conversione istantanea |
| **Generatore Hash** | MD5, SHA-1, SHA-256, SHA-512 da testo — 100% lato client (Web Crypto API) |
| **Convertitore Colori** | HEX ↔ RGB ↔ HSL ↔ CMYK con preview, palette e contrasto WCAG |
| **Encoder / Decoder Testo** | Base64, URL encoding, HTML entities, ROT13, binario, esadecimale |

### 📝 Blog di Elettronica

| Articolo | Argomento |
|----------|----------|
| **Come Funziona il Partitore di Tensione** | Formula, esempi pratici 12V→5V, 5 errori comuni |
| **Guida al 555 Timer** | Astabile, Monostabile, pinout, 5 errori da evitare |
| **Filtri RC Spiegati Semplice** | Passa basso, passa alto, passa banda, notch |
| **Resistore per LED** | Formula, tabella colori LED, FAQ |

---

## 🚀 Come Usare

### Online (GitHub Pages)
Basta visitare il sito — tutto funziona nel browser!

### In Locale
```bash
git clone https://github.com/gartyoms/gartyoms.github.io.git
cd gartyoms.github.io
# Apri index.html nel browser oppure:
npx -y http-server . -p 8080
```

---

## 📁 Struttura del Progetto

```
gartyoms.github.io/
├── index.html              # Homepage con tutte le card
├── style.css               # Design system completo
├── favicon.svg             # Icona del sito
├── word-counter.html       # Contatore parole
├── password-generator.html # Generatore password
├── unit-converter.html     # Convertitore unità
├── lorem-generator.html    # Generatore Lorem Ipsum
├── ohm-calculator.html     # Legge di Ohm
├── resistor-colors.html    # Codice colori resistori
├── led-resistor.html       # Resistore per LED
├── voltage-divider.html    # Partitore di tensione
├── rc-calculator.html      # Costante di tempo RC
├── series-parallel.html    # Serie / Parallelo R e C
├── 555-timer.html          # 555 Timer
├── filters.html            # Filtri RC
├── reactance.html          # Reattanza e impedenza
├── db-calculator.html      # Convertitore dB
├── frequency-calculator.html # Frequenza / Periodo
├── power-dissipation.html  # Potenza e dissipazione
├── area-perimeter.html     # Area e perimetro (8 forme)
├── volume-surface.html     # Volume e superficie (7 solidi)
├── pythagoras.html         # Teorema di Pitagora
├── motion.html             # Moto rettilineo (MRU/MRUA)
├── ballistic.html          # Calcolatore balistico avanzato
├── iva-calculator.html     # Calcolatore IVA
├── compound-interest.html  # Interessi composti
├── qr-generator.html       # Generatore QR Code
├── base-converter.html     # Convertitore basi numeriche
├── ascii-table.html        # Tabella ASCII interattiva
├── hash-generator.html     # Generatore hash
├── color-converter.html    # Convertitore colori
├── text-encoder.html       # Encoder/decoder testo
├── blog.html               # Indice del blog
├── blog-partitore-tensione.html  # Articolo: Partitore
├── blog-555-timer-guida.html     # Articolo: 555 Timer
├── blog-filtri-rc.html           # Articolo: Filtri RC
├── blog-resistore-led.html       # Articolo: Resistore LED
├── privacy.html            # Informativa sulla Privacy (GDPR)
├── ads.txt                 # File ads.txt per Google AdSense
└── CNAME                   # Dominio personalizzato (toolboxonline.it)
```

---

## 🎨 Tech Stack

- **HTML5** — struttura semantica e SEO-friendly
- **CSS3** — variabili custom, gradients, animazioni, glassmorphism
- **JavaScript** — vanilla, nessun framework


---

## 📄 Licenza

Questo progetto è rilasciato con licenza **[CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/)** (Creative Commons Attribution - NoDerivatives 4.0).

- ✅ Puoi **visualizzare** e **condividere** il progetto
- ✅ Devi dare **attribuzione** all'autore originale
- ❌ **Non puoi modificare**, adattare o creare opere derivate

---

> Fatto con ❤️ per aiutare studenti, maker e appassionati di elettronica.
