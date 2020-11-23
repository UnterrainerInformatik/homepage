export default {
  title: 'GIT Grundsätze &amp; Kommandos',
  description: 'Hier findest Du die am häufigsten verwendetsten GIT-Kommandos, einige Informationen bezüglich unserer Repositories und eine Beschreibung der Grund-Workflows für die Verwendung von GIT',
  gitList: [
    {
      title: 'GIT-Kommandos',
      value: `${''}Oft benutzte GIT-Kommandos:<br/><br /><code>git config --global user.name &lt;username&gt;</code><br /><code>git config --global user.email &lt;email&gt;</code><br /><code>git add --all</code><br /><code>git push origin dev</code><br /><code>git status</code><br /><code>git branch</code><br /><code>git checkout</code><br /><code>git clone</code><br /><code>git pull</code><br /><code>git stash</code><br /><code>git stash pop</code><br />`,
      buttons: [
        {
          text: 'Basic GIT Tutorial',
          href: 'https://www.atlassian.com/git/tutorials',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Code das erste Mal auschecken',
      value: `${''}<ol><li>Gehe im Windows-Datei-Explorer auf das Verzeichnis auf deiner lokalen Maschine, das Du als Zielverzeichnis für das Projekt ausgewählt hast, das Du gleich auschecken willst.</li><li>Schreibe <br /><code>git clone &lt;URL des Repositories&gt;</code><br /> Du findest die URL des Repositories, das Du gerne auschecken würdest, auf Atlassian Stash in der oberen rechten Ecke jeder Seite innerhalb des jeweiligen Projekts. Als Beispiel: Wenn ich unser Homepage-Projekt auschecken wollte, dann würde das so aussehen: <br /><code>git clone https://psilo@www.unterrainer.info:8443/scm/uioh/homepage-mvc.git</code><br /></li><li>Du hast das Projekt erfolgreich ausgecheckt.</li></ol>`
    },
    {
      title: 'Änderungen verwerfen',
      value: `${''}<ol><li>Wenn Du uncommittete Changes hast und diese verwerfen willst (unter Beibehaltung deiner Commits), schreibe <br /><code>git reset --hard</code><br /><code>git pull</code><br /></li><li>Wenn Du auch die committeten Changes reverten willst, verwende <br /><code>git reset --hard origin/&lt;branch&gt;</code><br /><code>git pull</code><br /></li></ol>`
    },
    {
      title: 'Generelle Informationen betreffend Repositories von Unterrainer Informatik OG',
      value: `${''}<ul><li>Unsere Projekte haben alle zwei Branches. Einen master- und einen dev-branch.</li><li>Du darfst nur auf den remote dev-branch eines Projektes pushen, auf das Du Zugriff hast.</li><li>Nur Psilo darf auf den remote master-branch pushen und mergen. Du hast dafür keine Berechtigungen.</li><li>Nachdem Du deine Arbeit abgeschlossen hast, starte einen pull-request, damit Psilo deine Änderungen am remote dev-branch ansehen und eventuell auf den remote master-branch mergen kann..</li><li>Du darfst auch zusätzliche remote-branches anlegen, aber bitte sprich vorher kurz mit Psilo darüber.</li></ul>`
    },
    {
      title: 'Installation von GIT auf deiner lokalen Maschine',
      value: `${''}<ul><li>Installiere GIT auf deinem Rechner.</li><li>Wenn Du die eine oder andere Auswahl während der Installation treffen musst, dann nimm immer die vorgeschlagene. Diese Einstellungen funktionieren. AUSSER...</li><li>...wenn Du nach dem Windows-Integration-Level gefragt wirst, würde ich die zweite Option nehmen.</li><li>Beende nun einfach die Installation, indem Du immer die voreingestellten Werte auswählst.</li><li>Wenn die Installation beendet ist, rechts-klicke irgendwo in Windows und wähle den Punkt 'git bash' aus.</li><li>Schreibe <br /><code>git config --global http.sslVerify false</code><br /> Das ist notwendig, da wir ein ungültiges CA-Zertifikat auf unserer Seite verwenden.</li><li>Schreibe <br /><code>git config --global user.name &lt;dein GIT-User-Name&gt;</code><br /> um global den Namen deines Benutzers für alle Repositories zu setzen (das erspart dir später einiges an Tipparbeit).</li><li>Schreibe <br /><code>git config --global user.email &lt;deine GIT-User- EMail&gt;</code><br /> um global die Email deines Benutzers für alle Repositories zu setzen (das erspart dir später einiges an Tipparbeit).</li><li>Du bist fertig.</li></ul>`
    },
    {
      title: 'Installation',
      value: `${''}<ol><li>Installiere zuerst GIT auf deiner lokalen Maschine.</li><li>Installiere a GIT-Plugin für VS2012.</li><li>Installiere Atlassian SourceTree.</li><li>Benütz den Link, den ich Dir geschickt habe (für Atlassian Stash) und setze dein Passwort um deinen Benutzer dort zu initialisieren.</li><li>Navigiere zum Repository deiner Wahl.</li><li>Wähle das Projekt aus, das Du verwenden willst.</li><li>Drücke den 'clone'-Knopf in der rechten oberen Ecke.</li><li>Wähle einen Ziel-Ordner in SourceTree aus und starte das Klonen.</li><li>Sei geduldig. Das kann eine Weile dauern.</li><li>Nun hast Du eine lokale Kopie des Repositories und bist bereit loszulegen.</li><li>Alternativ kannst Du das auch händisch machen, wie zum Beispiel unter 'Code das erste Mal auschecken'.</li></ol>`
    },
    {
      title: 'Dateien hinzufügen',
      value: `${''}Du kannst dein Lieblings-VS2012-GIT-Plugin verwenden, SourceTree, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <br /><code>git checkout &lt;branchName&gt;</code><br /> eingibst.</li><li>Gib <br /><code>git add &lt;fileName&gt;</code><br /> oder <br /><code>git add &lt;directory&gt; -r</code><br /> ein, wobei -r bedeutet, dass alle Dateien rekursiv hinzugefügt werden. <br /><code>git add --all</code><br /> würde alle Dateien im momentanen Verzeichnis rekursiv hinzufügen, die nicht im .gitignore-File stehen.</li><li>Die Dateien wurden nun zu deinem Projekt im aktuellen Branch hinzugefügt.</li><li>Vergiss nicht diese Änderungen lokal und remote zu committen.</li></ol>`
    },
    {
      title: 'Dateien löschen',
      value: `${''}Du kannst dein Lieblings-VS2012-GIT-Plugin verwenden, SourceTree, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <br /><code>git checkout &lt;branchName&gt;</code><br /> eingibst.</li><li>Gib <br /><code>git rm &lt;fileName&gt;</code><br /> oder <br /><code>git rm &lt;directory&gt; -r</code><br /> ein, wobei -r bedeutet, dass alle Files rekursiv gelöscht werden.</li><li>Die Dateien wurden nun von deinem Projekt im aktuellen Branch gelöscht.</li><li>Vergiss nicht diese Änderungen lokal und remote zu committen.</li></ol>`
    },
    {
      title: 'Aktualisieren',
      value: `${''}Du kannst dein Lieblings-VS2012-GIT-Plugin verwenden, SourceTree, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <br /><code>git checkout &lt;branchName&gt;</code><br /> eingibst.</li><li>Falls Du noch uncommitted changes hast die Du nicht verlieren willst, solltest Du sie vorher 'wegpacken'. Das geschieht mit <br /><code>git stash</code><br /></li><li>Gib <br /><code>git pull</code><br /> ein. Nun werden alle Dateien von den remote-branches auf dein lokales Repository aktualisiert und gemerged.</li><li>Falls Du uncommitted changes gestasht hattest, dann mergen wir sie jetzt wieder in den upgedateten Code hinein mit <br /><code>git stash pop</code><br /></li><li>Du musst eventuell Merge-Konflikte unter Zuhilfenahme deines Lieblings-VS2012-GIT-Plugins, SourceTrees oder <br /><code>git mergetool</code><br /> auflösen.</li></ol>`
    },
    {
      title: 'Committing',
      value: `${''}<ol><li>Mach die Änderungen in deinem lokalen Code.</li><li>Wechsle auf dein Lieblings-VS2012-GIT-Plugin.</li><li>Wähle die Files aus, die Du gerade geändert hast.</li><li>Gib einen Commit-Kommentar ein.</li><li>Drücke 'commit'<br/>(Alternativ kannst Du auch eine git-bash öffnen, auf den aktuellen branch wechseln, indem Du <br /><code>git checkout &lt;branchName&gt;</code><br /> eingibst und dann <br /><code>git commit -m '&lt;commit-comment&gt;'</code><br /> eingibst, um all deine Dateien, die Du gerade geändert hast zu committen.).</li><li>Nun hast Du ein commit-set erstellt. In GIT musst Du dieses jetzt auf den remote-branch pushen, zusammen mit anderen commit-sets, die Du vielleicht vorher auch noch erstellt hast (Ich würde sagen, dass dann mehrere commit-sets ein working-set ergeben).</li><li>Benutze SourceTree oder öffne eine git-bash und gib <br /><code>git push origin dev</code><br /> ein (immer angenommen, dass dein remote-repository 'origin' heißt, was der Standard-Name ist und wenn Du auf den dev-branch pushen willst, was Du tun solltest).</li><li>Fahre jetzt fort mit 'Commits auf Remote pushen'.</li></ol>`
    },
    {
      title: 'Commits auf Remote pushen',
      value: `${''}<ol><li>Benutze SourceTree oder öffne eine git-bash und gib <br /><code>git push origin dev</code><br /> ein (immer angenommen, dass dein remote-repository 'origin' heißt, was der Standard-Name ist und wenn Du auf den dev-branch pushen willst, was Du tun solltest).</li><li>Deine Änderungen sind nun im dev-branch am remote-repository committed.</li><li>Nun musst Du mir noch sagen, dass Du etwas am dev-branch geändert hast, was Du gerne irgendwann am main-branch (master) am remote-repository sehen würdest, damit ich sie mergen kann. Das kannst Du machen, indem Du einen pull-request stellst.</li><li>Öffne das Repo in Atlassian Stash (die Web-Seite) und wähle dein Projekt aus.</li><li>Drücke den Knopf 'pull-request' in der oberen rechten Ecke.</li><li>Fülle das Formular aus und sende es ab. Ich werde mich dann dem entsprechend verhalten.</li><li>Jetzt bist Du wirklich mit dem commit fertig.</li></ol>`
    }]
}
