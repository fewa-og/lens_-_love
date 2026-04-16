# Selbsteinschätzung: Projekt "Lens & Love"

Dieses Dokument dient als Vorbereitung für die Präsentation und Bewertung des Projekts "Lens & Love".

## 1. Konzept
*ID: Idee beschrieben, Wireframes skizziert und ins Repo geladen.*

- **Erreicht:** Das Thema "Hochzeits- und Porträtfotografie" wurde klar definiert. Eine Kurzbeschreibung findet sich im README.md.
- **Übertroffen:** Die Wireframes wurden nicht nur skizziert, sondern als professionelles XML-Format für Draw.io erstellt, welches alle drei Hauptseitentypen (Intro, About, Galerie) detailliert abbildet.
- **Nicht erreicht:** -
- **Kommentar:** Die Planung half massiv dabei, die Struktur der Raster-Seite von der Inhalts-Seite (Typ 1) sauber zu trennen.
- **Meine Note:** 6.0

---

## 2. Styleguide
*ID: Anwendung von Logo, Farben, Typografie und Abständen festgelegt und dokumentiert.*

- **Erreicht:** Ein konsistenter Styleguide wurde erstellt (Farben: #8B5CF6, #F59E0B; Fonts: Playfair Display & Inter). Alle Layout-Abstände (4rem/2rem) wurden im README dokumentiert und im Code angewendet.
- **Übertroffen:** Der Styleguide wurde direkt in SCSS-Variablen und Mixins übersetzt, was eine zentrale Steuerung des Designs ermöglicht.
- **Nicht erreicht:** -
- **Kommentar:** Das Design wirkt durch die harmonische Farbpalette und die konsequenten Abstände sehr premium und modern.
- **Meine Note:** 6.0

---

## 3. Layout und Semantik
*ID: Sinnvoller Aufbau, Semantik (HTML5), zwei Seiten-Typen (Grid/Flex).*

- **Erreicht:** Zwei Seitentypen wurden umgesetzt: Eine Lauftext-Seite (About/Intro) und eine Raster-Seite (Portfolio). HTML5-Semantik (header, main, footer, section) wurde konsequent genutzt.
- **Übertroffen:** Einsatz von fortgeschrittenen HTML5-Medien-Tags (`<picture>` für Responsive Images, `<figure>`/`<figcaption>` für Bildbeschreibungen und `<video>` für den Hero-Hintergrund). Zudem Kombination von CSS Grid (Galerie) und Flexbox (Navigation/Layout).
- **Nicht erreicht:** -
- **Kommentar:** Die Galerie nutzt ein "Masonry-ähnliches" Raster mit `grid-column: span 2`, was visuell spannender ist als ein einfaches Standard-Raster.
- **Meine Note:** 6.0

---

## 4. Responsive Design
*ID: Breakpoints definiert, Media Queries für Mobile/Tablet/Desktop, Burger-Icon.*

- **Erreicht:** Die Webseite ist voll responsiv. Auf Smartphones werden Formulare untereinander dargestellt, Gaps verkleinert und Bilder angepasst.
- **Übertroffen:** Implementierung einer dynamischen Burger-Navigation via Javascript, die sicherstellt, dass die Bedienung auf Mobile flüssig bleibt. Layout-Anpassungen für das Grid (Raster wird einspaltig auf Mobile).
- **Nicht erreicht:** -
- **Kommentar:** Mit Tailwind-Utilities wurden präzise Breakpoints gesetzt, die einen nahtlosen Übergang zwischen den Geräten ermöglichen.
- **Meine Note:** 6.0

---

## 5. Umfang und Inhalte
*ID: Gemäss Anforderungen, inkl. Formulare (Login/Passwort/Kontakt), fehlerfreie Texte.*

- **Erreicht:** Alle geforderten Seiten (Intro, About, Rasterseite, Login-Modal, Passwort vergessen) sind vorhanden. Das Kontaktformular ist funktionsfähig.
- **Übertroffen:** Das Kontaktformular speichert Daten im `LocalStorage` als Bestätigung (Pseudo-Speicherung). Das Login ist als modernes Modal realisiert, das den Status (Eingeloggt als...) seitübergreifend hält.
- **Nicht erreicht:** -
- **Kommentar:** Die Texte wurden auf Qualität und Fehler geprüft und passen zum Look & Feel eines Fotografie-Portfolios.
- **Meine Note:** 6.0

---

## 6. Publikation
*ID: Hosting gewählt, Webserver veröffentlicht, Links getestet.*

- **Erreicht:** Die Webseite wurde via GitHub Pages veröffentlicht und ist unter der bereitgestellten URL erreichbar.
- **Übertroffen:** -
- **Nicht erreicht:** -
- **Kommentar:** Alle internen Verlinkungen wurden auf der Live-Umgebung erfolgreich getestet.
- **Meine Note:** 6.0

---

## 7. Optimierung (Bonus-Level 4)
*ID: Automatisierung, Medien-Inhalte (Video/Animation), CSS-Preprocessor.*

- **Erreicht:** -
- **Übertroffen:** 
  1. **Video:** Ein immersives Hintergrund-Video-Loop wurde auf der Startseite integriert (HTML5 Video mit mp4/webm).
  2. **Preprocessor:** Verwendung von **SCSS** mit Variablen, Mixins und Nesting zur Strukturierung des CSS.
  3. **Automatisierung:** Ein Node.js Task Runner (`npm run build:css`) wurde eingerichtet, um den SCSS-Code automatisiert zu kompilieren.
- **Nicht erreicht:** -
- **Kommentar:** Diese Features heben das Projekt auf Level 4 (Note 6 Bereich).
- **Meine Note:** 6.0

---

## 8. Lernprodukt
*ID: Funktionierend, angemessener Umfang, Termine eingehalten, Arbeitsprozess sichtbar.*

- **Erreicht:** Das Projekt wurde pünktlich abgeschlossen. Der Arbeitsprozess ist durch die Commit-Historie im Git-Repository klar nachvollziehbar.
- **Übertroffen:** Das Projekt geht weit über ein "Minimum Viable Product" hinaus und bietet ein visuell hochwertiges Gesamterlebnis.
- **Nicht erreicht:** -
- **Kommentar:** Das Endprodukt erfüllt alle technischen und gestalterischen Ziele.
- **Meine Note:** 6.0

---

**Gesamteinschätzung:**
Durch die konsequente Umsetzung der Basis-Anforderungen sowie die Integration von Bonus-Features (SCSS, Video-Background, Task-Runner) betrachte ich die Lernziele als vollumfänglich und auf hohem Niveau erreicht.
