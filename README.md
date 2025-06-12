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

## Beschreibung der Technologie todo (ohne wir, uns, ...)
Für das Frontend unserer Web-App müssen wir eine Programmiersprache und ein Framework auswählen. Zum einen wollten wir etwas vertrautes benutzen, damit wir schneller Code schreiben und verstehen können. Zum anderen wollten wir eine weitverbreitete Technologie verwenden, da es dazu große Communities und Dokumentationen gibt. Das in der Vorlesung vorgestellte Framework Flutter war neu für uns und wir hatten beide Schwierigkeiten mit dem Verständnis der Syntax. Daher entschieden wir uns gegen die Verwendung von Flutter. Letztendlich entschieden wir uns für die Programmiersprache JavaScript in Kombination mit der Bibliothek und Framework React. In JavaScript waren wir beide bereits geübt und React war neu für uns. Da wir beide ein Interesse hatten in diese für uns unbekannte und weitverbreitete Technologie einzusteigen entschieden wir uns für React. Die dort verwendete Syntax empfanden wir beide als verständlicher als die von Flutter.
Um die Entwicklungsgeschwindigkeit zu verkürzen, verwenden wir zusätzlich zu JavaScript und React die Laufzeitumgebung Node.js. Es ermöglicht Codeanpassungen an der GUI direkt sichtbar zu machen.

## Beschreibung der Architektur todo(unvollständig)
### index.js
In der index.js befindet sich das root-element der Web-App, welches die Attribute, die für alle weiteren Komponenten gelten, definiert. In diesem befindet sich das Element <Strictmode>. Dieses ist eine Komponente aus React und hilft während der Entwicklung, Fehler frühzeitig zu entdecken. Die eigentliche Web-App befindet sich wiederum im <Strictmode> Element. Somit enthält dieser Datei keine Logik, aber dennoch ist das gesamte Frontend von ihr abhängig.
### config.json
Die config.json ist eine Konfigurationsdatei, in der Parameter definiert werden, die sich je nach Benutzer oder Netzwerk ändern können. Aktuell sind dort als Parameter der Benutzername („Author“ einer Nachricht) und die IP-Adresse, unter welcher das Backend erreichbar ist (ServerAddress) enthalten.
### App.js
Die App.js ist das Herzstück des Frontend. Es beinhaltet die gesamte Logik zur Kommunikation mit dem Backend, alle sichtbaren GUI-Elemente und weitere Funktionen, die das Verhalten der GUI steuern.
Im oberen Teil befinden sich die notwendigen Imports und anschließend wird die Funktion App() definiert, welche fast den gesamten Teil der Logik beinhaltet. Zunächst werden einige useStates definiert, um Informationen wie den Chatverlauf – der vom Backend gesendet wird -, die vom Benutzer eingegebene Nachricht, oder das aktuelle Theme zu speichern.
Anschließend folgt die Logik zur Kommunikation mit dem Backend. Sie verwendet einen React-Hook, um die Verbindung zum Backend mittels eines WebSockets herzustellen. Dieser Hook enthält weitere Funktionen die das Verhalten beim erfolgreichen Verbinden oder Schließen der Verbindung, empfangen eines aktuelleren Chatverlaufs steuern. In einer separaten Funktion ist die Logik zum Versenden einer neuen Nachricht an das Backend definiert. In dieser wird auch die Untersuchung auf ein Tag vorgenommen und je nach dem der Entsprechende Benutzername dem Tag hinterlegt.
Danach folgt die Methode, welche das automatische Scrollen ermöglicht und die Methode, welche das Theme der Web-App festlegt.
Die Funktion App() returnt am Ende ein HTML, welches die GUI-Elemente definiert.

### App.css
- Style für alle Elemente
- leicht anpassbar
- .dark & .light suffixes

## Beschreibung spezifischerer Funktionalität
### Websockets
### ATdding
### function formatTime

## Versionen

# Backend

## Installationsanweisungen

## Beschreibung der Architektur

## Beschreibung spezifischerer Funktionalität

## Versionen

# Lokales Netzwerk aufsetzen
1. Hotspot eines beliebigen Gerätes eröffnen
2. Frontend- und Backend-Geräte mit diesem Netzwerk verbinden
3. Die IPv4-Adresse dieses Netzwerks herausfinden (cmd: `ipconfig`)
4. Diese IPv4 an den entsprechenden Stellen im Frontend (src/config.json, Attribut: ServerAdress) und Backend (Properties/launchSettings.json, Profile: http und https, Attribut: applicationUrl)
5. Frontend und Backend starten und testen

# Bedienungsanleitung

## Start in die App
Nach dem erfolgreichen Starten des Back- und Frontend, muss zunächst die Web-App im Browser unter der URL: [http://localhost:3000](http://localhost:3000) aufgerufen werden.
Wenn das Frontend das Backend nicht erreichen kann wird eine entsprechende Meldung angezeigt. In diesem Fall muss das Frontend oder das Backend neu gestartet werden.
Wenn die Verbindung erfolgreich ist, wird automatisch der bisherige Chatverlauf geladen und angezeigt. Anschließend kann am unteren Fensterrand eine neue Nachricht eingegeben werden und mit dem Button rechts daneben oder mit der Enter-Taste abgesendet werden. Die Nachricht wird in Echtzeit an alle angebundenen Clients übertragen und angezeigt.  

## Informationen einer Nachricht todo (algemeines über Chat-Box ausführen, ggf. wie die Speicherung ist)
Jede angezeigte Nachricht enthält folgende Informationen:
- Autor (links oben)
- Zeitstempel (rechts oben)
- Inhalt der Nachricht (zentral)
Selbstverfasste Nachrichten werden rechtsbündig und alle anderen linksbündig dargestellt und zusätzlich farblich hervorgehoben. 
Der Chat erinnert damit an das Design und Verhalten von anderen weit verbreiteten Chat-Systemen.

## Menuleiste oben
Am oberen Rand des Fensters befindet sich eine Menuleiste.
Dort liegen sich von links nach rechts:
- Ein Button, mit dem vom Light- in den Darkmode (Theme) und zurück gewechselt werden kann. Das eingestellte Theme bleibt beim Neuladen der Seite bestehen.
Wenn anfangs noch kein Theme ausgewählt wurde, wird das aktuell verwendete Theme von Windows übernommen.
- Ein Einstellungen-Button der bislang nur ein Popup erscheinen lässt. Zukünftig können dort die Einstellungen der App angepasst werden.
- Ein Profil-Button der bislang nur ein Popup mit dem aktuellen Benutzernamen erscheinen lässt. Zukünftig können dort die Einstellungen des Profils angepasst werden.
Desweiteren besteht in dieser Menuleiste die Möglichkeit einige der oben genannten Erweiterungen und Weitere zu integrieren.

## Sonstiges
Nach dem Aufrufen des Clients im Browser verbindet sich dieser automatisch mit dem Server und lädt den - auf dem Server gespeicherten – Chatverlauf und scrollt zur zuletzt geschriebenen Nachricht.
Nach dem Verfassen und Absenden einer Nachricht wird diese in Echtzeit über den Server an alle angeschlossenen Clients weitergeleitet. Bei Erhalt einer neuen Nachricht wird automatisch entsprechend nach unten gescrollt, um die Nachricht innerhalb des Chat-Fensters zu behalten.
Eine weitere Eigenschaft der Web-App ist ein Responsive Webdesign. Dieses erlaubt es die Web-App auch Bildschirme mit unterschiedlichen Größen zu skalieren. Somit könnte die Web-App von der GUI her auch auf einem Mobilgerät bedient werden.
Zusätzlich gibt es die Funktion eines primitiven Adressierens von Nachrichten an bestimmte Benutzer. Die Web-App unterstützt aktuell einen Chatraum, in dem alle Nachrichten wie bei einem Hub an alle weitergeleitet werden und für alle sichtbar sind. Mit dem Tag „/@“ und einem ohne Leerzeichen anschließendem Benutzernamen werden Nachrichten in diesem Chatraum nur an einen spezifischen Nutzer adressiert, so dass nur dieser die Nachricht angezeigt bekommt. Dieses Tag wird in dasselbe Eingabefeld geschrieben, wie die Nachricht. Dabei ist es nicht relevant, an welcher Stelle das Tag kann in der Nachricht steht. Es könnte sich am Anfang, in der Mitte oder am Ende befinden. Wenn eine Nachricht kein Tag beinhaltet, wird diese wie gewöhnlich für alle Benutzer sichtbar.
Darüber hinaus ist der Chat in der Lage mit mehreren Clients gleichzeitig zu kommunizieren, so dass dieser ohne viel Auffand aus einem Privatchat zu einem Gruppenchat skaliert werden kann. Das Verhalten bleibt dabei gleich, nur dass jetzt am linken Rand des Chat-Fensters Nachrichten von mehr als einem Nutzer angezeigt werden.
In dem Fall, dass das Backend nicht erreichbar ist, wird statt dem Chat ein entsprechender Hinweis angezeigt. Zusätzlich gibt es einen Hilfe-Link der zur Antwort auf das Leben, das Universum und den ganzen Rest führt und Das Dino-Game von Chrome, welches wie gewohnt mit der Leertaste bedient werden kann, um sich die Langeweile zu vertreiben.

# Entwicklungsprozess
In diesem Kapitel wird der Entwicklungsprozess der Web-App beschrieben und dabei auf Entscheidungen und deren Folgen eingegangen.

## Implementierung

## Arbeit mit Github und Absprache
## Begin mit Backend
## Testen verschiedener Technologien, warum haben wir diese verwendet?
### REST API -> Websockets
### Flutter -> React
### Internet -> LAN-Hotspot
## Chat-Design

# Aufgabenverteilung innerhalb des Entwicklerteams

## Frontend
### Tim
### Benjamin

## Backend
### Benjamin
### Tim

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

# Selbstkritik
- Absturz bei zu langer Nachricht
- nur primitives Atdding --> beutzerverwaltung
- klauen von Identitäten --> echte Verwaltung von benutzern
- eingriff in Chatlog und datensicherheit

# Geplante Erweiterungen
- Emoji-Unterstützung via Picker
- Nachrichten bearbeiten/löschen
- Minigames wie Tetris
- Individuelle Benutzerprofile
- Einstellungsmöglichkeiten für die Web-App allgemein und das Benutzerprofil
- @dding (mit User-Directory um @dding möglich zu machen und dabei die Kernfunktionalität beizubehalten) 

# Mögliche Erweiterungen
- Online-Status
- Profilbild, Nickname
- Upload und Versand von verschiedenen Dateiformaten (z.B. PDFs, Bilder)
- Schach App
- Accounts mit Login
- Alternatives speichern des Chatverlaufs (verschlüsselt)
- KI-Chat
- Hintergrund-Bild des Chat-Fensters personalisieren
