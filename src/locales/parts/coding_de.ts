export default {
  description: 'Diese Seite enthält Informationen, wie Du uns helfen kannst, indem Du uns programmieren hilfst.',
  title: 'Programmierung',

  // ########################################################

  gitListTitle: 'GIT Grundsätze &amp; Kommandos',
  gitListDescription: 'Hier findest Du die am häufigsten verwendetsten GIT-Kommandos, einige Informationen bezüglich unserer Repositories und eine Beschreibung der Grund-Workflows für die Verwendung von GIT',
  gitList: [
    {
      title: 'GIT-Kommandos',
      value: `${''}Oft benutzte GIT-Kommandos:<br/><pre>git config --global user.name &lt;username&gt;</pre><pre>git config --global user.email &lt;email&gt;</pre><pre>git add --all</pre><pre>git push origin dev</pre><pre>git status</pre><pre>git branch</pre><pre>git checkout</pre><pre>git clone</pre><pre>git pull</pre><pre>git stash</pre><pre>git stash pop</pre><a href='http://atlassian.com/git/tutorial/git-basics' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Basic GIT Tutorial</a>`
    },
    {
      title: 'Code das erste Mal auschecken',
      value: `${''}<ol><li>Gehe im Windows-Datei-Explorer auf das Verzeichnis auf deiner lokalen Maschine, das Du als Zielverzeichnis für das Projekt ausgewählt hast, das Du gleich auschecken willst.</li><li>Schreibe <pre>git clone &lt;URL des Repositories&gt;</pre> Du findest die URL des Repositories, das Du gerne auschecken würdest, auf Atlassian Stash in der oberen rechten Ecke jeder Seite innerhalb des jeweiligen Projekts. Als Beispiel: Wenn ich unser Homepage-Projekt auschecken wollte, dann würde das so aussehen: <pre>git clone https://psilo@www.unterrainer.info:8443/scm/uioh/homepage-mvc.git</pre></li><li>Du hast das Projekt erfolgreich ausgecheckt.</li></ol>`
    },
    {
      title: 'Änderungen verwerfen',
      value: `${''}<ol><li>Wenn Du uncommittete Changes hast und diese verwerfen willst (unter Beibehaltung deiner Commits), schreibe <pre>git reset --hard<br/>git pull</pre></li><li>Wenn Du auch die committeten Changes reverten willst, verwende <pre>git reset --hard origin/&lt;branch&gt;<br/>git pull</pre></li></ol>`
    },
    {
      title: 'Generelle Informationen betreffend Repositories von Unterrainer Informatik OG',
      value: `${''}<ul><li>Unsere Projekte haben alle zwei Branches. Einen master- und einen dev-branch.</li><li>Du darfst nur auf den remote dev-branch eines Projektes pushen, auf das Du Zugriff hast.</li><li>Nur Psilo darf auf den remote master-branch pushen und mergen. Du hast dafür keine Berechtigungen.</li><li>Nachdem Du deine Arbeit abgeschlossen hast, starte einen pull-request, damit Psilo deine Änderungen am remote dev-branch ansehen und eventuell auf den remote master-branch mergen kann..</li><li>Du darfst auch zusätzliche remote-branches anlegen, aber bitte sprich vorher kurz mit Psilo darüber.</li></ul>`
    },
    {
      title: 'Installation von GIT auf deiner lokalen Maschine',
      value: `${''}<ul><li>Installiere GIT auf deinem Rechner.</li><li>Wenn Du die eine oder andere Auswahl während der Installation treffen musst, dann nimm immer die vorgeschlagene. Diese Einstellungen funktionieren. AUSSER...</li><li>...wenn Du nach dem Windows-Integration-Level gefragt wirst, würde ich die zweite Option nehmen.</li><li>Beende nun einfach die Installation, indem Du immer die voreingestellten Werte auswählst.</li><li>Wenn die Installation beendet ist, rechts-klicke irgendwo in Windows und wähle den Punkt 'git bash' aus.</li><li>Schreibe <pre>git config --global http.sslVerify false</pre> Das ist notwendig, da wir ein ungültiges CA-Zertifikat auf unserer Seite verwenden.</li><li>Schreibe <pre>git config --global user.name &lt;dein GIT-User-Name&gt;</pre> um global den Namen deines Benutzers für alle Repositories zu setzen (das erspart dir später einiges an Tipparbeit).</li><li>Schreibe <pre>git config --global user.email &lt;deine GIT-User- EMail&gt;</pre> um global die Email deines Benutzers für alle Repositories zu setzen (das erspart dir später einiges an Tipparbeit).</li><li>Du bist fertig.</li></ul>`
    },
    {
      title: 'Installation',
      value: `${''}<ol><li>Installiere zuerst GIT auf deiner lokalen Maschine.</li><li>Installiere a GIT-Plugin für VS2012.</li><li>Installiere Atlassian SourceTree.</li><li>Benütz den Link, den ich Dir geschickt habe (für Atlassian Stash) und setze dein Passwort um deinen Benutzer dort zu initialisieren.</li><li>Navigiere zum Repository deiner Wahl.</li><li>Wähle das Projekt aus, das Du verwenden willst.</li><li>Drücke den 'clone'-Knopf in der rechten oberen Ecke.</li><li>Wähle einen Ziel-Ordner in SourceTree aus und starte das Klonen.</li><li>Sei geduldig. Das kann eine Weile dauern.</li><li>Nun hast Du eine lokale Kopie des Repositories und bist bereit loszulegen.</li><li>Alternativ kannst Du das auch händisch machen, wie zum Beispiel unter 'Code das erste Mal auschecken'.</li></ol>`
    },
    {
      title: 'Dateien hinzufügen',
      value: `${''}Du kannst dein Lieblings-VS2012-GIT-Plugin verwenden, SourceTree, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <pre>git checkout &lt;branchName&gt;</pre> eingibst.</li><li>Gib <pre>git add &lt;fileName&gt;</pre> oder <pre>git add &lt;directory&gt; -r</pre> ein, wobei -r bedeutet, dass alle Dateien rekursiv hinzugefügt werden. <pre>git add --all</pre> würde alle Dateien im momentanen Verzeichnis rekursiv hinzufügen, die nicht im .gitignore-File stehen.</li><li>Die Dateien wurden nun zu deinem Projekt im aktuellen Branch hinzugefügt.</li><li>Vergiss nicht diese Änderungen lokal und remote zu committen.</li></ol>`
    },
    {
      title: 'Dateien löschen',
      value: `${''}Du kannst dein Lieblings-VS2012-GIT-Plugin verwenden, SourceTree, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <pre>git checkout &lt;branchName&gt;</pre> eingibst.</li><li>Gib <pre>git rm &lt;fileName&gt;</pre> oder <pre>git rm &lt;directory&gt; -r</pre> ein, wobei -r bedeutet, dass alle Files rekursiv gelöscht werden.</li><li>Die Dateien wurden nun von deinem Projekt im aktuellen Branch gelöscht.</li><li>Vergiss nicht diese Änderungen lokal und remote zu committen.</li></ol>`
    },
    {
      title: 'Aktualisieren',
      value: `${''}Du kannst dein Lieblings-VS2012-GIT-Plugin verwenden, SourceTree, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <pre>git checkout &lt;branchName&gt;</pre> eingibst.</li><li>Falls Du noch uncommitted changes hast die Du nicht verlieren willst, solltest Du sie vorher 'wegpacken'. Das geschieht mit <pre>git stash</pre></li><li>Gib <pre>git pull</pre> ein. Nun werden alle Dateien von den remote-branches auf dein lokales Repository aktualisiert und gemerged.</li><li>Falls Du uncommitted changes gestasht hattest, dann mergen wir sie jetzt wieder in den upgedateten Code hinein mit <pre>git stash pop</pre></li><li>Du musst eventuell Merge-Konflikte unter Zuhilfenahme deines Lieblings-VS2012-GIT-Plugins, SourceTrees oder <pre>git mergetool</pre> auflösen.</li></ol>`
    },
    {
      title: 'Committing',
      value: `${''}<ol><li>Mach die Änderungen in deinem lokalen Code.</li><li>Wechsle auf dein Lieblings-VS2012-GIT-Plugin.</li><li>Wähle die Files aus, die Du gerade geändert hast.</li><li>Gib einen Commit-Kommentar ein.</li><li>Drücke 'commit'<br/>(Alternativ kannst Du auch eine git-bash öffnen, auf den aktuellen branch wechseln, indem Du <pre>git checkout &lt;branchName&gt;</pre> eingibst und dann <pre>git commit -m '&lt;commit-comment&gt;'</pre> eingibst, um all deine Dateien, die Du gerade geändert hast zu committen.).</li><li>Nun hast Du ein commit-set erstellt. In GIT musst Du dieses jetzt auf den remote-branch pushen, zusammen mit anderen commit-sets, die Du vielleicht vorher auch noch erstellt hast (Ich würde sagen, dass dann mehrere commit-sets ein working-set ergeben).</li><li>Benutze SourceTree oder öffne eine git-bash und gib <pre>git push origin dev</pre> ein (immer angenommen, dass dein remote-repository 'origin' heißt, was der Standard-Name ist und wenn Du auf den dev-branch pushen willst, was Du tun solltest).</li><li>Fahre jetzt fort mit 'Commits auf Remote pushen'.</li></ol>`
    },
    {
      title: 'Commits auf Remote pushen',
      value: `${''}<ol><li>Benutze SourceTree oder öffne eine git-bash und gib <pre>git push origin dev</pre> ein (immer angenommen, dass dein remote-repository 'origin' heißt, was der Standard-Name ist und wenn Du auf den dev-branch pushen willst, was Du tun solltest).</li><li>Deine Änderungen sind nun im dev-branch am remote-repository committed.</li><li>Nun musst Du mir noch sagen, dass Du etwas am dev-branch geändert hast, was Du gerne irgendwann am main-branch (master) am remote-repository sehen würdest, damit ich sie mergen kann. Das kannst Du machen, indem Du einen pull-request stellst.</li><li>Öffne das Repo in Atlassian Stash (die Web-Seite) und wähle dein Projekt aus.</li><li>Drücke den Knopf 'pull-request' in der oberen rechten Ecke.</li><li>Fülle das Formular aus und sende es ab. Ich werde mich dann dem entsprechend verhalten.</li><li>Jetzt bist Du wirklich mit dem commit fertig.</li></ol>`
    }],

  // ########################################################

  infoList: [{
    title: 'GIT Repositories',
    value: `${''}Hier ist der Link auf unsere GIT Repositories (wir verwenden übrigens Stash von Atlassian).<br/>Um darauf wirklich Zugriff zu bekommen, brauchst Du auch noch einen User und ein Paßwort. Beides erhältst Du auf Anfrage von Psilo (falls er das nicht schon erledigt hat --- Bitte überprüfe zuerst deine Emails... Danke).<br/><a href='https://www.unterrainer.info:8443' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Throbax GIT Repositories</a>`
  },
  {
    title: 'Voraussetzungen',
    value: `${''}Du brauchst gute Programmierkenntnisse, eine Einladung von Psilo, um überhaupt auf diese Seite zu gelangen, und Du benötigst auch die Freischaltung auf unsere GIT Repositories von uns. Der Zugriff darauf erfolgt dann ausschließlich über HTTPS.<br/>Weiters benötigst Du die Tools, die weiter unten angegeben sind (Infrastruktur), die Fähigkeit das alles für dich behalten zu können und die ein oder andere Erfahrung mit GIT.`
  },
  {
    title: 'Non-Disclosure Agreement',
    value: `${''}Alles, was Du im Zuge dieses Projektes hören, sehen und produzieren wirst (im Zusammenhang mit dem Spiel und dessen Code natürlich), ist Eigentum von Unterrainer Informatik OG. Bitte respektiere das.<br/>Danke`
  }
  ],

  // ########################################################

  prerequisitesListTitle: 'Voraussetzungen',
  PrerequisitesListDescription: 'Wir haben versucht eine Liste der Dinge aufzustellen, die Du benötigen wirst. Wenn es projektspezifisch ist, dann steht das in der Überschrift. Ansonsten ist die Voraussetzung global gültig.',
  prerequisitesList: [{
    title: '.NET Framework 4.5',
    value: `${''}Aus verschiedensten Gründen (der triftigste davon ist die Task-Parallel-Library) sind wir auf's .NET Framework in der Version 4.5 gewechselt. Dessen Installation sollte kein Problem darstellen.`
  },
  {
    title: 'Visual Studio 2013',
    value: `${''}Jede Version von VS2013 sollte reichen, auch die Express-Version.`
  },
  {
    title: 'XNA 4 (Installation auf VS2012 oder VS2013!)',
    value: `${''}Die Quintessenz ist: Du brauchst auch ein installiertes VS2010.<br/>Ohne diesem kann man leider XNA nicht im VS2012 oder VS2013 betreiben.<br/><a href='https://files.unterrainer.info/guides/Install XNA on VS2012.mht' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Install XNA on VS2012 (eng)</a><br/><a href='https://files.unterrainer.info/guides/XNA Game Studio 4.0.zip' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Du kannst auch gerne diese Files hier verwenden, anstatt VS2010 zu installieren (keine Garantie dass das funktioniert)</a>`
  },
  {
    title: 'GIT GUI für Windows',
    value: `${''}Wir verwenden SourceTree von Atlassian als GUI für GIT. Es ist ein freies Programm, also benutzt es doch auch.<br/><a href='https://files.unterrainer.info/guides/SourceTreeSetup.exe' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Atlassian SourceTree</a>`
  },
  {
    title: 'GIT Credential Winstore',
    value: `${''}Wenn Du es leid bist jedes mal Deine Benutzerdaten einzugeben, dann installiere Dir das folgende Programm. Es macht bei der Installation keine Umstände und wird das nächste Mal, wenn Du mit GIT arbeitest, einfach ein Fenster aufmachen, in dem Du Deine Benutzerdaten eintragen kannst.<br/><a href='https://files.unterrainer.info/guides/git-credential-winstore.exe' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Git-Credential-Winstore</a>`
  },
  {
    title: 'GIT für Windows (Basisinstallation)',
    value: `${''}Dies ist die GIT-Basisinstallation, die Du benötigen wirst, um an diesem oder irgendeinem anderen GIT-Projekt teilzunehmen.<br/><a href='https://files.unterrainer.info/guides/Git-1.9.5-preview20141217.exe' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Git-1.9.5-preview20141217</a><br/><br/>Da wir ein self-signed-certificate verwenden, wirst Du folgendes in einem Command-Prompt eingeben müssen, nachdem Du GIT auf deiner Maschine installiert hast:<br/><pre>git config --global http.sslVerify false</pre>`
  },
  {
    title: 'Throbax WIX-Setup: Tools',
    value: `${''}Hier findest Du das eine oder andere Tool, das Du benötigen wirst um am Setup mitzuwirken.<br/><a href='https://files.unterrainer.info/guides/orca.Msi' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Orca - zum deinstallieren von Setups</a><br/><a href='https://files.unterrainer.info/guides/Wix38.exe' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Wix38 - Die Version, die wir verwenden</a><br/>`
  }]
}
