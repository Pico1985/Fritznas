# FRITZConnect PWA

Progressive Web App für den Zugriff auf das FRITZ!Box NAS – funktioniert auf iPhone, Android und Desktop, kein App Store nötig.

## Funktionen
- Login mit FRITZ!Box Zugangsdaten (MyFRITZ! oder Heimnetz)
- Dateibrowser mit Ordnernavigation + Breadcrumb
- Bildvorschau mit progressivem Laden + Thumbnail-Cache
- Dateien hochladen (Upload)
- Dateien herunterladen
- Teilen via iOS-Teilen-Dialog (WhatsApp, Mail, AirDrop etc.)
- Neuer Ordner erstellen (WebDAV MKCOL)
- Dateien und Ordner verschieben (WebDAV MOVE)
- Umbenennen (WebDAV MOVE innerhalb desselben Ordners)
- Löschen (WebDAV DELETE)
- Mehrfachauswahl (Edit-Modus)
- Offline-fähig durch Service Worker

## Deployment (3 Optionen)

### Option A – GitHub Pages (empfohlen, kostenlos)
1. Kostenloses GitHub-Konto erstellen unter https://github.com
2. Neues Repository anlegen, z.B. "fritzconnect"
3. Alle Dateien aus diesem Ordner hochladen (index.html, manifest.json, sw.js, icons/)
4. Im Repository → Settings → Pages → Branch: main → Save
5. App ist erreichbar unter: https://DEIN-NAME.github.io/fritzconnect

### Option B – Lokaler Webserver auf dem FRITZ!Box NAS
1. Dateien auf deinen USB-Stick/NAS kopieren
2. In der FRITZ!Box-Oberfläche unter Heimnetz → Netzwerk → USB-Geräte
   den Webserver aktivieren (falls vorhanden)
3. App läuft dann unter http://fritz.box/nas/fritzconnect/

### Option C – Lokaler PC als Server (nur Heimnetz)
1. Node.js installieren von https://nodejs.org
2. In diesem Ordner in der Kommandozeile ausführen:
   npx serve .
3. App läuft dann unter http://localhost:3000

## iPhone – Als App installieren
1. Safari öffnen und zur App-URL navigieren
2. Teilen-Symbol (□↑) antippen
3. "Zum Home-Bildschirm" wählen
4. "Hinzufügen" bestätigen
→ Die App erscheint jetzt wie eine echte App auf deinem Home-Bildschirm

## CORS-Hinweis
Die FRITZ!Box erlaubt standardmäßig keine WebDAV-Anfragen von externen
Webseiten (CORS-Einschränkung). Wenn die App von GitHub Pages aus auf
dein NAS zugreift, kann es zu CORS-Fehlern kommen.

Lösung: Die App auf dem NAS selbst hosten (Option B), dann gibt es
keine Cross-Origin-Probleme. Alternativ: FRITZ!Box-Firmware-Update
prüfen, neuere Versionen haben verbesserte CORS-Unterstützung.

## Dateistruktur
fritzconnect-pwa/
├── index.html      ← komplette App (HTML + CSS + JavaScript)
├── manifest.json   ← PWA-Konfiguration
├── sw.js           ← Service Worker (Offline-Cache)
├── icons/
│   ├── icon-192.png  ← App-Icon (192×192 px)
│   └── icon-512.png  ← App-Icon (512×512 px)
└── README.md

## Icons erstellen
Erstelle zwei PNG-Dateien mit rotem Hintergrund (#e6002d) und dem
Text "FRITZ!NAS" in weiß:
- icons/icon-192.png (192×192 Pixel)
- icons/icon-512.png (512×512 Pixel)
Kostenlos möglich mit: https://www.canva.com oder https://favicon.io
