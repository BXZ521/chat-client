# Links zu den Git-Repositorys
- Frontend (Chat-Client): [https://github.com/BXZ521/chat-client](https://github.com/BXZ521/chat-client)
- Backend (Chat-Server): [https://github.com/BXZ521/FHDW-CHAT-Backend](https://github.com/BXZ521/FHDW-CHAT-Backend)

# Projektbeschreibung Chat-System
 
## Gruppenmitglieder:
- Benjamin Alexander Schmitz
- Tim Luka Stöcker
 
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
 
### Mögliche Erweiterungen (Nice to have)
- Anzeige von Profilbild und ggf. Online-Status
- Chatverlauf speichern (z.B. SQLite, MySQL)
- Upload und Versand von versschiedenen Dateiformaten (z.B. PDFs, Bilder)
- Direkte Anzeige hochgeladener oder verlinkter Bilder im Chatverlauf
- integrierung von kleinen Spielen, Features oder einem Chatbot (z.B. mittels ChatGPT)
- Emoji-Unterstützung via Picker
- Nachrichten bearbeiten/löschen
- Push Notifications bei neuen Nachrichten
 
## Zusammenhang zur Aufgabenstellung todo (der Satz hört sich komisch an)
Die Idee entspricht der Anforderung, eine Web-Applikation mit Client-Server-Kommunikation zu entwickeln. Der Fokus liegt auf der Interaktion zwischen mehreren Clients über einen zentralen Server - ein typisches Beispiel für moderne, verteilte Web-Systeme.
 
## Eingesetzte Technologien
- **Frontend (Client)**: React, JavaScript
- **API-Kommunikation**: Websockets
- **Backend (Server)**: C#, .NET Core
- **Datenübertragung**: Websockets für Basisfunktionen und Echtzeitübertragung von Nachrichten
- **Dateihandling**: ggf. `cURL` für Datei-Uploads
- **Speichern des Chatverlaufs**: JSON-Format in einer Log-Datei
- **Versionsverwaltung & Doku**: Git & GitHub (inkl. Markdown-Doku)

# Frontend

## Installationsanweisungen
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) todo (relevant?)
### App erstellen
- Ziel-Verzeichnis auf dem lokalen Gerät festlegen
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

## Beschreibung der Technologie
Für das Frontend unserer Web-App müssen wir eine Programmiersprache und ein Framework auswählen. Zum einen wollten wir etwas vertrautes benutzen, damit wir schneller Code schreiben und verstehen können. Zum anderen wollten wir eine weitverbreitete Technologie verwenden, da es dazu große Communities und Dokumentationen gibt. Das in der Vorlesung vorgestellte Framework Flutter war neu für uns und wir hatten beide Schwierigkeiten mit dem Verständnis der Syntax. Daher entschieden wir uns gegen die Verwendung von Flutter. Letztendlich entschieden wir uns für die Programmiersprache JavaScript in Kombination mit der Bibliothek und Framework React. In JavaScript waren wir beide bereits geübt und React war neu für uns. Da wir beide ein Interesse hatten in diese für uns unbekannte und weitverbreitete Technologie einzusteigen entschieden wir uns für React. Die dort verwendete Syntax empfanden wir beide als verständlicher als die von Flutter.
Um die Entwicklungsgeschwindigkeit zu verkürzen, verwenden wir zusätzlich zu JavaScript und React die Laufzeitumgebung Node.js. Es ermöglicht Codeanpassungen an der GUI direkt sichtbar zu machen.

## Beschreibung der Architektur
### index.js
In der index.js befindet sich das root-element der Web-App, welches die Attribute, die für alle weiteren Komponenten gelten, definiert. In diesem befindet sich das Element <Strictmode>. Dieses ist eine Komponente aus React und hilft während der Entwicklung, Fehler frühzeitig zu entdecken. Die eigentliche Web-App befindet sich wiederum im <Strictmode> Element.
### App.js
- Websockets
- Elemente (CSS in der App.css bzw. Darkmode.css)
- function formatTime
### App.css
- Style für alle Elemente
- leicht anpassbar
- .dark & .light suffixes

## Versionen

# Backend

## Installationsanweisungen

## Beschreibung der Architektur

## Versionen

# Lokales Netzwerk aufsetzen
1. Hotspot eines beliebigen Gerätes eröffnen
2. Frontend- und Backend-Geräte mit diesem Netzwerk verbinden
3. Die IPv4-Adresse dieses Netzwerks herausfinden (cmd: `ipconfig`)
4. Diese IPv4 an den entsprechenden Stellen im Frontend und Backend anpassen todo (Stellen konkret angeben)
5. Frontend und Backend starten und testen

# Bedienungsanleitung

## Start in die App
Zunächst muss der Chat im Browser unter der URL: [http://localhost:3000](http://localhost:3000) aufgerufen werden.
Wenn das Frontend das Backend nicht erreichen kann wird eine entsprechende Meldung angezeigt. 
In diesem Fall muss das Frontend oder das Backend neu gestartet werden.
Wenn die Verbindung erfolgreich ist, wird automatisch der bisherige Chatverlauf geladen und angezeigt.
Anschließend kann am unteren Fensterrand eine neue Nachricht eingegeben werden und mit dem Button rechts daneben oder mit der Enter-Taste abgesendet werden.
Die Nachricht wird in Echtzeit an alle angebundenen Clients übertragen und angezeigt.  

## Informationen einer Nachricht todo (algemeines über Chat-Box ausführen, ggf. wie die Speicherung ist)
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

## Sonstiges todo
- Responsive Webdesign
- Echtzeit
- Speicherung des Chats
- Verhalten bei n Teilnehmern

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
## Backend

# Geplante Erweiterungen
- Emoji-Unterstützung via Picker
- Nachrichten bearbeiten/löschen
- Minigames wie Tetris
- Individuelle Benutzerprofile
- Einstellungsmöglichkeiten für die Web-App allgemein und das Benutzerprofil

# Mögliche Erweiterungen
- Online-Status
- Profilbild, Nickname
- Upload und Versand von verschiedenen Dateiformaten (z.B. PDFs, Bilder)
- Schach App
- Accounts mit Login
- Alternatives speichern des Chatverlaufs (verschlüsselt)
- KI-Chat
- @dding (mit User-Directory um @dding möglich zu machen und dabei die Kernfunktionalität beizubehalten) 
- Hintergrund-Bild des Chat-Fensters personalisieren
