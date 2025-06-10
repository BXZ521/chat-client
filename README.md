# Links zu den Git-Repositorys
- Frontend: [https://github.com/BXZ521/chat-client](https://github.com/BXZ521/chat-client)
- Backend: [https://github.com/BXZ521/FHDW-CHAT-Backend](https://github.com/BXZ521/FHDW-CHAT-Backend)

# Projektbeschreibung Chat-System
 
## Gruppenmitglieder:
Benjamin A. Schmitz,
Tim L. Stöcker
 
## Idee
Unsere Projektidee ist die Entwicklung eines Chat-Systems, bei dem mehrere Clients über einen zentralen Server miteinander kommunizieren können. Dabei entsteht eine einfache, textbasierte Web-Applikation, die es ermöglicht, in Echtzeit Nachrichten zwischen verschiedenen Teilnehmern auszutauschen.
 
## Mehrwert
- Echtzeit-Kommunikation zwischen mehreren Nutzern
- Verständnis und Anwendung moderner Webarchitekturen mit einer Web-API
- Privater Chat
- Skalierbar
- Eigenständige und individuelle Weiterentwickelung
- Dadurch freie und günstige Customization
 
## Anforderungen
### Funktionale Anforderungen
- Aufbau einer Verbindung zwischen Client und Server
- Senden und Empfangen von Nachrichten in Echtzeit
- Automatische Aktualisierung des Chats in allen verbundenen Browsern ohne manuelles Neuladen
- Darstellung der Nachrichten in chronologischer Reihenfolge
- Darstellung des Benutzernamen
 
### Nicht-funktionale Anforderungen
- Stabiler Serverbetrieb
- Gute Performance bei mehreren gleichzeitigen Nutzern
- Intuitive und benutzerfreundliche Oberfläche
- Erweiterbarkeit für zukünftige Features
- Kostengünstiger Betrieb des Systems
 
### Mögliche Erweiterungen (Nice to have) ??? todo
- Anzeige von Profilbild, Nickname und ggf. Online-Status
- Dark Mode / Theme-Switcher
- Chatverlauf speichern (z.B. JSON, SQLite, MySQL)
- Upload und Versand von versschiedenen Dateiformaten (z.B. PDFs, Bilder)
- Direkte Anzeige hochgeladener oder verlinkter Bilder im Chatverlauf
- integrierung von kleinen Spielen, Features oder einem Chatbot (z.B. mittels ChatGPT)
- Emoji-Unterstützung via Picker
- Nachrichten bearbeiten/löschen
- Push Notifications bei neuen Nachrichten
- Mobile-optimiertes Design (Responsive Webdesign)
 
## Zusammenhang zur Aufgabenstellung ??? todo
Die Idee entspricht der Anforderung, eine Web-Applikation mit Client-Server-Kommunikation zu entwickeln. Der Fokus liegt auf der Interaktion zwischen mehreren Clients über einen zentralen Server - ein typisches Beispiel für moderne, verteilte Web-Systeme.
 
## Eingesetzte Technologien todo: Warum haben wir uns dafür entschieden
- **Frontend (Client)**: React, JavaScript
- **API-Kommunikation**: Websockets
- **Backend (Server)**: C#, .NET Core
- **Datenübertragung**: Websockets für Basisfunktionen und Echtzeitübertragung von Nachrichten
- **Dateihandling**: ggf. `cURL` für Datei-Uploads
- **Speichern des Chatverlaufs**: JSON-Format in einer Log-Datei
- **Versionsverwaltung & Doku**: Git & GitHub (inkl. Markdown-Doku)

# Frontend

## Installationsanweisungen
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) todo
### App erstellen
- Ziel-Verzeichnis festlegen
- nodeJS herunterladen und installieren von [https://nodejs.org/en](https://nodejs.org/en)
- Folgendes im Verzeichnis ausführen:
	- Projekt clonen `git clone https://github.com/BXZ521/chat-client`
	- Abhängigkeien installieren `npm i`
	- Icons importieren `npm install react-icons`
	- auf den aktuellen Branch wechseln `git checkout tist_frontend`
	- aktuellen Stand pullen `git pull`
- eingetragene IP Adresse im Frontend prüfen. Es sollte die sein, auf die das der Server hört. (mittels `ipconfig` in der cmd kann die IP des eigenen Gerätes angezeigt werden)
### App starten
- App im Entwicklermodus starten `npm start`
- Läuft im Browser unter der URL: [http://localhost:3000](http://localhost:3000)

## Beschreibung der Architektur
### App.js
- Websockets
- Elemente (CSS in der App.css bzw. Darkmode.css)
- function formatTime
### App.css
- Style für alle Elemente
- leicht anpassbar
### Darkmode.css
- Wie App.css nur mit dunkleren Farben
### index.js
- definiert das root-element
- verwendet <Strictmode> um Fehler frühzeitig zu entdecken

## Versionen


# Backend

## Installationsanweisungen


## Beschreibung der Architektur


## Versionen

# Lokales Netzwerk aufsetzen
1. Hotspot eines beliebigen Gerätes öffnen
2. Frontend- und Backend-Geräte mit diesem Netzwerk verbinden
3. Die IPv4-Adresse dieses Netzwerks herausfinden (cmd: `ipconfig`)
4. Diese IPv4 an den entsprechenden Stellen im Frontend und Backend anpassen
5. Frontend und Backend starten und testen

# Bedienungsanleitung

## Start in die App
Zunächst muss der Chat im Browser unter der URL: [http://localhost:3000](http://localhost:3000) aufgerufen werden.
Wenn das Frontend das Backend nicht erreichen kann wird eine entsprechende Meldung angezeigt. 
In diesem Fall muss das Frontend oder das Backend neu gestartet werden.
Wenn die Verbindung erfolgreich ist, wird automatisch der bisherige Chatverlauf geladen und angezeigt.
Anschließend kann am unteren Fensterrand eine neue Nachricht eingegeben werden und mit dem Button rechts daneben oder mit der Enter-Taste abgesendet werden.
Die Nachricht wird in Echtzeit an alle angebundenen Clients übertragen und angezeigt.  

## Informationen einer Nachricht
Jede angezeigte Nachricht enthält folgende Informationen:
- Autor (links oben)
- Zeitstempel (rechts oben)
- Inhalt der Nachricht (zentral)
Selbstverfasste Nachrichten werden rechtsbündig und alle anderen linksbündig dargestellt.
Der Chat erinnert damit an das design und Verhalten von WhatsApp.

## Menuleiste oben
Am oberen Rand des Fensters befindet sich eine Menuleiste.
Dort liegen sich von links nach rechts:
- Ein Button, mit dem vom Light- in den Darkmode und zurück gewechselt werden kann. Der eingestellte Mode bleibt beim Neuladen der Seite bestehen.
Solange kein Mode ausgewählt wurde, wird der aktuell verwendete Mode von Windows übernommen.
- Ein Button ohne Funktion, mit dem zukünftig die Einstellungen der App angepasst werden können.
- Ein Button ohne Funktion, mit dem zukünftig das Benutzer-Profil bearbeitet werden kann.
Desweiteren besteht dort die Möglichkeit einige der oben genannten Erweiterungen und Weiterführende zu integrieren.

# Entwicklungsprozess
## Arbeit mit Github und Absprache
## Begin mit Backend
## Testen verschiedener Technologien, warum haben wir diese verwendet?
### REST API -> Websockets
### Flutter -> React
### Internet -> LAN-Hotspot
## Chat-Design

# Herausforderungen
- REST API genügt nicht
- Networking mehrere Clients auf verschiedenen Geräten
- Einarbeitung in die verwendeten Technologien
- Anwendungsprobleme mit Github

# Erfolgsfaktoren
- Frag die KI
- Viel Einarbeiten und Recherchieren
- Verwendung von Websockets
- Erstellen eines lokalen Netzwerks
- Github alternative

# Aufgabenverteilung innerhalb des Entwicklerteams
## Frontend
##Backend


# Geplante Erweiterungen. 
- Emoji-Unterstützung via Picker
- Nachrichten bearbeiten/löschen
- Minigames wie Tetris

# Mögliche Erweiterungen
- Online-Status
- Profilbild, Nickname
- Upload und Versand von verschiedenen Dateiformaten (z.B. PDFs, Bilder)
- Schach App
- Accounts mit Login
- Alternatives speichern des Chatverlaufs (verschlüsselt)
- KI-Chat