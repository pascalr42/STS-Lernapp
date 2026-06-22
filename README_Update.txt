# Mobile-Optimierung für die STS Lern-App

## Enthaltene Dateien
- `index.html` → komplett mobil optimierte Version
- `service-worker.js` → neue Cache-Version, damit das Update sicher ausgeliefert wird

## Was wurde verbessert?
1. **Kein Überdecken mehr auf dem Handy**
   - Die linke/obere Steuerkarte (`.panel`) ist auf Mobilgeräten **nicht mehr sticky**.
2. **Buttons auf Handy besser bedienbar**
   - Größere Touch-Flächen
   - Toolbar auf Mobilgeräten oben im Inhaltsbereich stabil nutzbar
   - Schwebender „Auswerten“-Button bleibt verfügbar, wenn Fragen sichtbar sind
3. **Umlaute / Sonderzeichen-Reparatur**
   - Zur Laufzeit wird `quiz-data.json` auf typische Mojibake-Fehler geprüft und repariert
   - Beispiele: `PrÃ¼fung` → `Prüfung`, `schwierige â€“` → `schwierige –`
4. **UTF-8 explizit abgesichert**
   - HTML enthält zusätzlich einen `Content-Type` Meta-Tag für UTF-8

## So spielst du das Update ein
1. Die vorhandene `index.html` im GitHub-Repository **ersetzen**.
2. Die vorhandene `service-worker.js` **ersetzen**.
3. Änderungen committen / hochladen.
4. Wenn die App schon installiert ist: einmal im Browser neu laden oder App schließen und neu öffnen.

## Hinweis zu dauerhaft kaputten Umlauten
Wenn Texte in `quiz-data.json` bereits falsch gespeichert wurden, repariert die App viele typische Fälle automatisch. Sauberer ist es trotzdem, wenn `quiz-data.json` selbst als **UTF-8** gespeichert ist.
