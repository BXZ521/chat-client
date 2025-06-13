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
- Eigenen Benutzernamen in der config.json eintragen (Attribut: Author)
- IP-Adresse in der config.json prüfen (Attribut: ServerAddress). Es sollte die eingetragen werden, auf die das der Server hört. (Mittels `ipconfig` in der cmd kann die IP des eigenen Gerätes angezeigt werden)
### App starten
- App im Entwicklermodus starten `npm start`
- Läuft im Browser unter der URL: [http://localhost:3000](http://localhost:3000)

## Beschreibung der Technologie
Für das Frontend der Web-App musste eine Programmiersprache und ein Framework ausgewählt werden. Zum einen sollte etwas Vertrautes benutzen verwendet werden, damit schneller Code geschrieben und dieser leichter verstanden werden kann. Zum anderen sollte eine weitverbreitete Technologie verwendet werden, da es für eine solche große Communities und Dokumentationen gibt. Das in der Vorlesung vorgestellte Framework Flutter war neu und die Syntax war schwer zu verstehen. Daher wurde sich gegen die Verwendung von Flutter entschieden. Letztendlich wurde sich für die Programmiersprache JavaScript in Kombination mit der Bibliothek und Framework React entschieden. In JavaScript gab es bereits gute Vorkenntnisse seitens der Entwickler und React ist eine weitverbreitete Technologie die einerseits neu, aber auch interessant zu lernen war. Da ein Interesse bestand, in diese unbekannte Technologie einzusteigen wurde sich für React entschieden. Zusätzlich wurde die dort verwendete Syntax als verständlicher als die von Flutter empfunden.
Um die Entwicklungsgeschwindigkeit zu verkürzen, wurde zusätzlich zu JavaScript und React die Laufzeitumgebung Node.js verwendet. Es ermöglicht Codeanpassungen an der GUI direkt im Browser sichtbar zu machen.

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
Die Funktion App() returnt am Ende ein HTML, welches die GUI-Elemente definiert. Dieses beginnt mit dem Anwenden des eingestellten Theme und dem Teil der angezeigt wird, wenn eine Verbindung zum Server besteht.
Darunter ist die Menuleiste mit den enthaltenen Buttons definiert.
Anschließend folgt die Chatbox, welche eine Funktion verwendet, um die Nachrichten anzuzeigen. Innerhalb ist eine Prüfung, um nach Tags zu filtern und die Definition des Aufbaus einer Chat-Nachricht.
Unterhalb davon befindet sich der Auto-Scroll-Anchor.
Als nächstes folgt die Implementierung für den Input einer Nachricht und der Senden-Button.
Als letztes wird die Ansicht definiert, welche angezeigt wird, wenn der Server nicht verbunden ist.
Unterhalb der App() Funktion befindet sich abschließend die Methode zum Formatieren des DateTime-Formats in ein benutzerfreundlicheres Format (dd.mm.yyyy HH:MM).

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
### App/Projekt erstellen
Es wird die Verwendung von Visual Studio 2022 empfohlen!
#### Voraussetzungen
- **.NET 8 SDK installieren**  
  - Bei Verwendung von **Visual Studio 2022** sollte während der Installation die Arbeitslast **"ASP.NET und Webentwicklung"** ausgewählt werden  
  - Ohne Visual Studio kann das aktuelle [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) separat heruntergeladen und installiert werden
#### In Visual Studio 2022
- Im Startbildschirm Repository klonen auswählen
- `https://github.com/BXZ521/FHDW-CHAT-Backend` als Repositoryspeicherort auswählen
- Gewünschten lokalen Speicherpfad auswählen
    - Optional hierfür vorher ein Verzeichnis anlegen
- Mit `STRG + 0, STRG + G` das Fenster Git Änderungen aufrufen und zum Branch `bealsc_websockets` wechseln
- Aktuellste  Änderungen pullen
#### Alternativ per Git-Befehle
- Folgendes im gewünschten Verzeichnis ausführen:
    - Projekt klonen:  
      `git clone https://github.com/BXZ521/FHDW-CHAT-Backend`
    - Ins Projektverzeichnis wechseln:  
      `cd FHDW-CHAT-Backend`
    - Auf den aktuellen Branch wechseln:  
      `git checkout bealsc_websockets`
    - Aktuellen Stand holen:  
      `git pull`
### App starten

#### In Visual Studio 2022
- Das Projekt in Visual Studio 2022 öffnen (z. B. per `.sln`-Datei)
- Projekt auswählen und mit `F5` oder `Strg + F5` starten
- Der Server läuft lokal und ist dann unter z. B. [http://localhost:5125](http://localhost:5125) zu erreichen.
- Websocket Endpunkt:
`ws://localhost:5125/chat`
#### Mit der Kommandozeile (.NET CLI)
Im Backend-Projektverzeichnis (dort, wo sich die `.csproj` befindet) folgende Befehle ausführen:

```bash
# Abhängigkeiten laden
dotnet restore

# Optional: Projekt kompilieren
dotnet build

# Server starten
dotnet run
```
## Beschreibung der Architektur
### Models.ChatMessage.cs

Die Klasse `ChatMessage` beschreibt eine einzelne Nachricht im Chat. Sie besteht aus vier Attributen: `Author`, `Message`, `TimeStamp` und `Addressee`. Jede Instanz dieser Klasse entspricht also einer Chatnachricht, wie sie im Chatverlauf verarbeitet und gespeichert wird.

#### Attribute:

- **Author** (`string`):  
  Der Name der Person, die die Nachricht gesendet hat. Wird z. B. verwendet, um eigene Nachrichten von denen anderer Nutzer zu unterscheiden.

- **Message** (`string`):  
  Der eigentliche Inhalt der Nachricht.

- **TimeStamp** (`string`):  
  Der Zeitpunkt, zu dem die Nachricht gesendet wurde.

- **Addressee** (`string`):  
  Der Empfänger der Nachricht. Standardmäßig wird `"/@alle"` verwendet. Für gezielte Nachrichten an einzelne Nutzer wird `"/@Benutzername"` angegeben.

#### Beispielhafte JSON-Repräsentation:

```json
{
  "Author": "Tim",
  "Message": "Hallo Benjamin",
  "TimeStamp": "2025-05-30T14:45:31.4378781Z",
  "Addressee": "/@alle"
}
```
### chatlog.json

Die Datei `chatlog.json` enthält ein JSON-Array aus mehreren `ChatMessage`-Objekten. Sie speichert den vollständigen Chatverlauf und wird bei jeder neuen Nachricht automatisch aktualisiert und erweitert.

### Controllers.WebSocketController.cs
### Program.cs
### launchSettings.json

Für den Betrieb des WebSocket-Servers ist insbesondere die `applicationUrl` relevant, da sie die Adresse bestimmt, unter der das Backend erreichbar ist.

Relevante URLs für den lokalen Betrieb:  
- **HTTP:** `http://localhost:5125`  
- **HTTPS:** `https://localhost:7101`  
  (alternativ ebenfalls: `https://localhost:5125`)

Für die WebSocket-Verbindung ergeben sich daraus folgende Adressen:  
- **WebSocket (unverschlüsselt):** `ws://localhost:5125`  
- **WebSocket Secure (verschlüsselt):** `wss://localhost:7101` (alternativ auch `wss://localhost:5125`)

Um eine Verbindung zum Backend über WebSocket herzustellen, sollten die `ws://`- oder `wss://`-Adressen verwendet werden.
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
Wenn das Frontend das Backend nicht erreichen kann wird eine entsprechende Meldung angezeigt. In diesem Fall muss das Frontend oder das Backend neu gestartet werden. Die IP-Adresse und der Benutzername sollten auch auf korrektheit geprüft werden.
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
- CSS (Lightmode)
### Benjamin
- CSS (Einführung Suffixes zu kompakter Darkmode Einführung)
- Einführung der Buttonleiste und Light/ Darkmode Toggle Funktionalität (inklusive Systemstandard initial)
## Backend
### Benjamin
### Tim

# Herausforderungen
Während der Entwickelung der Web-App sind einige Herausforderungen aufgetreten, welche bewältigt werden mussten, um das Projekt gemäß den Anforderungen umzusetzen. Diese sind im Folgenden beschreiben und die Lösungen werden im nachfolgenden Kapitel „Erfolgsfaktoren“ behandelt.
Zum einen musste sich zu Beginn der Implementierung, in die noch bis dahin unbekannte Technologie React eingearbeitet werden, zum Beispiel wie eine Web-App mit React aufgebaut ist, und wie Variablen und Funktionen definiert und verwendet werden.
Weiterhin war dies die anfangs implementierte REST-API, welche zwar eine Kommunikation zwischen Front- und Backend ermöglichte, allerdings nicht in Echtzeit, da sich der angezeigte Chatverlauf nur dann aktualisiert, wenn der Client explizit eine Anfrage an den Server schickt.
Eine weitere Herausforderung stellte Git dar. Nach dem erstellen der Git-Repositorys begann die gemeinsame Arbeit m Code, doch es traten Probleme beim Pullen und Pushen von Code auf, was die gemeinsame Entwicklung erschwerte. Um weitere mögliche Probleme zu umgehen, wurde die Arbeit mit Git auf ein notwendiges Minimum beschränkt. Somit konnte dennoch gemeinsam am Code gearbeitet werden.
Als die wahrscheinlich größte Herausforderung erwies sich die Verbindung mehrerer Clients mit dem Server. Die in der Vorlesung implementierte Web-App verwendete den localhost, um Front oder Backend anzusprechen. Für die Chat-Funktionalität zwischen sollten mehreren Clients, welche auf unterschiedlichen Hardware-Geräten laufen, mit dem Server verbunden werden. Diese konnten allerdings nicht auf den localhost zugreifen, was die Verbindung verhinderte.

# Erfolgsfaktoren
Um die Web-App dennoch erfolgreich umzusetzen, wurden die oben genannten Herausforderungen größtenteils bewältigt.
Durch das Auseinandersetzen mit React und dessen unkomplizierte Syntax konnte bereits nach kurzer Einarbeitungszeit in ausreichender Geschwindigkeit funktionsfähiger Code geschrieben werden. Im Internet ließen sich viele Quellen zu verschiedenen Anwendungsfällen finden, was zur Verkürzung der Einarbeitungszeit beitrug.
Das Problem der mit der REST-API konnte durch die Verwendung von Websockets gelöst werden. Durch diese wird eine durchgehende Verbindung zwischen Client und Server hergestellt, was die Kommunikation in Echtzeit ermöglicht. Der Einbau dieser Technologie in die bereits bestehende Web-App erwies sich nicht als problematisch, da sich Erweiterungen leicht in die Architektur integrieren lassen und ein Teil der Logik wiederverwendet werden konnte.
Um weitere Probleme mit Git zu umgehen, fand die Arbeit am Code großenteils auf einem Branch statt. Dies erforderte ein hohes Maß an Absprache bezüglich Änderungen, die der andere Entwickler nicht mitbekommt. Anfangs musste ein zweites Repository angelegt werden, da es im ersten zu vielen Problem kam. Die Nutzung eines neuen Repositorys und gute Absprache führten letztendlich zu einer akzeptablen gemeinsamen Arbeit am Code unter der Nutzung von Git.
Die Herausforderung der Verbindung mehrerer Clients mit dem Server erwies sich als schwieriger zu bewältigen. Nach viel Recherche im Internet gab es Überlegungen den Server auf einem PC laufen zu lassen und über Portfreigabe des angeschlossenen Routers erreichbar zu machen. Durch Brainstorming mit Fachkundigen entstand die Idee ein lokales Netzwerk (Hotspot) mit einem Laptop oder Mobiltelefon aufzusetzen, da die Portfreigabe eines Routers von uns im Netzwerk der FHDW als bürokratisch schwierig empfunden wurde. Durch die Verbindung aller Geräte mit dem lokalen Netzwerk und dem Nutzen dessen IP-Adresse, wurde die Verbindung zwischen den Clients und dem Server möglich. Testen des Systems ergab, dass es sowohl mit Laptops und mit Mobiltelefonen mit iOS oder Android funktioniert. 

# Selbstkritik
- Absturz bei zu langer Nachricht
- nur primitives Atdding --> beutzerverwaltung
- klauen von Identitäten --> echte Verwaltung von benutzern
- eingriff in Chatlog und datensicherheit
- Git funktioniert immer noch nicht
- nr Lokales Netzwerk un wenn server on ist

# Geplante Erweiterungen
- Emoji-Unterstützung via Picker
- Nachrichten bearbeiten/löschen
- Individuelle Benutzerprofile
- Einstellungsmöglichkeiten für die Web-App allgemein und das Benutzerprofil
- Atdding stabilier machen (mit User-Directory um Atdding zu ermöglichen und dabei die Kernfunktionalität sicher beizubehalten) 

# Mögliche Erweiterungen
- Online-Status
- Profilbild
- Upload und Versand von verschiedenen Dateiformaten (z.B. PDFs, Bilder)
- Minigames wie Tetris, Schach
- Accounts mit Login
- Alternatives speichern des Chatverlaufs (verschlüsselt)
- KI-Chat
- Hintergrund-Bild des Chat-Fensters personalisieren
