# STS Lern-App (PWA)

Diese Web-App wurde aus der Datei `STS-T-06_Quiz_Meteorologie.html` erzeugt.

## Enthalten
- PWA-Startseite (`index.html`)
- Offline-Cache über `service-worker.js`
- Installierbar auf Smartphones (wenn der Host PWA-Funktionen zulässt)
- Quiz-Daten in `quiz-data.json`
- Modi:
  - Komplettes Quiz
  - Prüfungsmodus (20 Zufallsfragen)
  - Gelb markierte Skriptstellen
  - Falsche Fragen wiederholen

## Quiz-Daten erweitern
Weitere Quizze können in `quiz-data.json` nach demselben Schema ergänzt werden.

## Hosting
- Für volle PWA-Funktionalität sind Hosts wie GitHub Pages oder Netlify am besten.
- Auf SharePoint läuft die App in vielen Fällen als Webseite, aber Installations-/Offline-Funktionen können je nach Umgebung eingeschränkt sein.
