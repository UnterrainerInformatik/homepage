export default {
  title: 'GIT Grundsätze &amp; Kommandos',
  description: 'Hier findest Du die am häufigsten verwendetsten GIT-Kommandos, einige Informationen bezüglich unserer Repositories und eine Beschreibung der Grund-Workflows für die Verwendung von GIT',
  gitList: [
    {
      title: 'GIT-Kommandos',
      value: [
        {
          text: `${''}Oft benutzte GIT-Kommandos:`
        },
        {
          code: `${''}git config --global user.name <username>`,
          language: 'git'
        },
        {
          code: `${''}git config --global user.email <email>`,
          language: 'git'
        },
        {
          code: `${''}git add --all`,
          language: 'git'
        },
        {
          code: `${''}git push origin dev`,
          language: 'git'
        },
        {
          code: `${''}git status`,
          language: 'git'
        },
        {
          code: `${''}git branch`,
          language: 'git'
        },
        {
          code: `${''}git checkout`,
          language: 'git'
        },
        {
          code: `${''}git clone`,
          language: 'git'
        },
        {
          code: `${''}git pull`,
          language: 'git'
        },
        {
          code: `${''}git stash`,
          language: 'git'
        },
        {
          code: `${''}git stash pop`,
          language: 'git'
        }
      ],
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
      value: [
        {
          text: `${''}1. Gehe im Windows-Datei-Explorer auf das Verzeichnis auf deiner lokalen Maschine, das Du als Zielverzeichnis für das Projekt ausgewählt hast, das Du gleich auschecken willst`
        },
        {
          text: '2. Schreibe:'
        },
        {
          code: `${''}git clone <URL des Repositories>`,
          language: 'git'
        },
        {
          text: `${''}Du findest die URL des Repositories, das Du gerne auschecken würdest, auf Atlassian Stash in der oberen rechten Ecke jeder Seite innerhalb des jeweiligen Projekts. Als Beispiel: Wenn ich unser Homepage-Projekt auschecken wollte, dann würde das so aussehen:`
        },
        {
          code: `${''}git clone https://psilo@www.unterrainer.info:8443/scm/uioh/homepage-mvc.git`,
          language: 'git'
        },
        {
          text: `${''}3. Du hast das Projekt erfolgreich ausgecheckt.`
        }
      ]
    },
    {
      title: 'Änderungen verwerfen',
      value: `${''}<ol><li>Wenn Du uncommittete Changes hast und diese verwerfen willst (unter Beibehaltung deiner Commits), schreibe <br /><pre><code>git reset --hard</code></pre><pre><code>git pull</code></pre></li><li>Wenn Du auch die committeten Changes reverten willst, verwende <br /><pre><code>git reset --hard origin/&lt;branch&gt;</code></pre><pre><code>git pull</code></pre></li></ol>`
    },
    {
      title: 'Generelle Informationen betreffend Repositories von Unterrainer Informatik',
      value: `${''}<ul><li>Unsere Projekte haben alle zwei Branches. Einen master- und einen dev-branch.</li><li>Du darfst nur auf den remote dev-branch eines Projektes pushen, auf das Du Zugriff hast.</li><li>Nur Psilo darf auf den remote master-branch pushen und mergen. Du hast dafür keine Berechtigungen.</li><li>Nachdem Du deine Arbeit abgeschlossen hast, starte einen pull-request, damit Psilo deine Änderungen am remote dev-branch ansehen und eventuell auf den remote master-branch mergen kann..</li><li>Du darfst auch zusätzliche remote-branches anlegen, aber bitte sprich vorher kurz mit Psilo darüber.</li></ul>`
    },
    {
      title: 'Installation von GIT auf deiner lokalen Maschine',
      value: `${''}<ul><li>Installiere GIT auf deinem Rechner.</li><li>Wenn Du die eine oder andere Auswahl während der Installation treffen musst, dann nimm immer die vorgeschlagene. Diese Einstellungen funktionieren. AUSSER...</li><li>...wenn Du nach dem Windows-Integration-Level gefragt wirst, würde ich die zweite Option nehmen.</li><li>Beende nun einfach die Installation, indem Du immer die voreingestellten Werte auswählst.</li><li>Wenn die Installation beendet ist, rechts-klicke irgendwo in Windows und wähle den Punkt 'git bash' aus.</li><li>Schreibe <br /><pre><code>git config --global http.sslVerify false</code></pre> Das ist notwendig, da wir ein ungültiges CA-Zertifikat auf unserer Seite verwenden.</li><li>Schreibe <br /><pre><code>git config --global user.name &lt;dein GIT-User-Name&gt;</code></pre> um global den Namen deines Benutzers für alle Repositories zu setzen (das erspart dir später einiges an Tipparbeit).</li><li>Schreibe <br /><pre><code>git config --global user.email &lt;deine GIT-User- EMail&gt;</code></pre> um global die Email deines Benutzers für alle Repositories zu setzen (das erspart dir später einiges an Tipparbeit).</li><li>Du bist fertig.</li></ul>`
    },
    {
      title: 'Installation',
      value: `${''}<ol><li>Installiere zuerst GIT auf deiner lokalen Maschine.</li><li>Installiere ein GIT-Plugin für VS.</li><li>Installiere GitKraken.</li><li>Navigiere zum Repository deiner Wahl.</li><li>Wähle das Projekt aus, das Du verwenden willst.</li><li>Drücke den 'clone'-Knopf in der rechten oberen Ecke.</li><li>Wähle einen Ziel-Ordner in GitKraken aus und starte das Klonen.</li><li>Sei geduldig. Das kann eine Weile dauern.</li><li>Nun hast Du eine lokale Kopie des Repositories und bist bereit loszulegen.</li><li>Alternativ kannst Du das auch händisch machen, wie zum Beispiel unter 'Code das erste Mal auschecken'.</li></ol>`
    },
    {
      title: 'Dateien hinzufügen',
      value: `${''}Du kannst deine Lieblings-GIT GUI verwenden, GitKraken, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <br /><pre><code>git checkout &lt;branchName&gt;</code></pre> eingibst.</li><li>Gib <br /><pre><code>git add &lt;fileName&gt;</code></pre> oder <br /><pre><code>git add &lt;directory&gt; -r</code></pre> ein, wobei -r bedeutet, dass alle Dateien rekursiv hinzugefügt werden. <br /><pre><code>git add --all</code></pre> würde alle Dateien im momentanen Verzeichnis rekursiv hinzufügen, die nicht im .gitignore-File stehen.</li><li>Die Dateien wurden nun zu deinem Projekt im aktuellen Branch hinzugefügt.</li><li>Vergiss nicht diese Änderungen lokal und remote zu committen.</li></ol>`
    },
    {
      title: 'Dateien löschen',
      value: `${''}Du kannst deine Lieblings-GIT GUI verwenden, GitKraken, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <br /><pre><code>git checkout &lt;branchName&gt;</code></pre> eingibst.</li><li>Gib <br /><pre><code>git rm &lt;fileName&gt;</code></pre> oder <br /><pre><code>git rm &lt;directory&gt; -r</code></pre> ein, wobei -r bedeutet, dass alle Files rekursiv gelöscht werden.</li><li>Die Dateien wurden nun von deinem Projekt im aktuellen Branch gelöscht.</li><li>Vergiss nicht diese Änderungen lokal und remote zu committen.</li></ol>`
    },
    {
      title: 'Aktualisieren',
      value: `${''}Du kannst deine Lieblings-GIT GUI verwenden, GitKraken, oder...<br/><ol><li>Öffne einen git-bash in deinem momentanen Projekt und wechsle auf den aktuellen branch, indem Du <br /><pre><code>git checkout &lt;branchName&gt;</code></pre> eingibst.</li><li>Falls Du noch uncommitted changes hast die Du nicht verlieren willst, solltest Du sie vorher 'wegpacken'. Das geschieht mit <br /><pre><code>git stash</code></pre></li><li>Gib <br /><pre><code>git pull</code></pre> ein. Nun werden alle Dateien von den remote-branches auf dein lokales Repository aktualisiert und gemerged.</li><li>Falls Du uncommitted changes gestasht hattest, dann mergen wir sie jetzt wieder in den upgedateten Code hinein mit <br /><pre><code>git stash pop</code></pre></li><li>Du musst eventuell Merge-Konflikte unter Zuhilfenahme deiner Lieblings-GIT GUI, GitKrakens oder <br /><pre><code>git mergetool</code></pre> auflösen.</li></ol>`
    },
    {
      title: 'Committing',
      value: `${''}<ol><li>Mach die Änderungen in deinem lokalen Code.</li><li>Wechsle auf deine Lieblings-GIT GUI.</li><li>Wähle die Files aus, die Du gerade geändert hast.</li><li>Gib einen Commit-Kommentar ein.</li><li>Drücke 'commit'<br/>(Alternativ kannst Du auch eine git-bash öffnen, auf den aktuellen branch wechseln, indem Du <br /><pre><code>git checkout &lt;branchName&gt;</code></pre> eingibst und dann <br /><pre><code>git commit -m '&lt;commit-comment&gt;'</code></pre> eingibst, um all deine Dateien, die Du gerade geändert hast zu committen.).</li><li>Nun hast Du ein commit-set erstellt. In GIT musst Du dieses jetzt auf den remote-branch pushen, zusammen mit anderen commit-sets, die Du vielleicht vorher auch noch erstellt hast (Ich würde sagen, dass dann mehrere commit-sets ein working-set ergeben).</li><li>Benutze GitKraken oder öffne eine git-bash und gib <br /><pre><code>git push origin dev</code></pre> ein (immer angenommen, dass dein remote-repository 'origin' heißt, was der Standard-Name ist und wenn Du auf den dev-branch pushen willst, was Du tun solltest).</li><li>Fahre jetzt fort mit 'Commits auf Remote pushen'.</li></ol>`
    },
    {
      title: 'Commits auf Remote pushen',
      value: `${''}<ol><li>Benutze GitKraken oder öffne eine git-bash und gib <br /><pre><code>git push origin dev</code></pre> ein (immer angenommen, dass dein remote-repository 'origin' heißt, was der Standard-Name ist und wenn Du auf den dev-branch pushen willst, was Du tun solltest).</li><li>Deine Änderungen sind nun im dev-branch am remote-repository committed.</li><li>Nun musst Du mir noch sagen, dass Du etwas am dev-branch geändert hast, was Du gerne irgendwann am main-branch (master) am remote-repository sehen würdest, damit ich sie mergen kann. Das kannst Du machen, indem Du einen pull-request stellst.</li><li>Öffne das Repo in Atlassian Stash (die Web-Seite) und wähle dein Projekt aus.</li><li>Drücke den Knopf 'pull-request' in der oberen rechten Ecke.</li><li>Fülle das Formular aus und sende es ab. Ich werde mich dann dem entsprechend verhalten.</li><li>Jetzt bist Du wirklich mit dem commit fertig.</li></ol>`
    },
    {
      title: 'Andere nützliche Kommandos',
      value: `${''}Den Zustand des Indexes ansehen (welche Files wurden geändert oder hinzugefügt/gelöscht, aber noch nicht committed).<br /><pre><code>git status</code></pre><br />Neuen Branch erzeugen, aber noch nicht auschecken.<br /><pre><code>git branch &lt;branch_name&gt;</code></pre><br />Den angegebenen Branch auschecken.<br /><pre><code>git checkout &lt;branch_name&gt;</code></pre><br />Alle Änderungen des Upstreams holen und alle gecachten Branches von der Liste der Upstream Branches entfernen.<br /><pre><code>git fetch --prune</code></pre><br />Lokalen Branch entfernen.<br /><pre><code>git branch -d &lt;branch_name&gt;</code></pre><br />Informationen anzeigen über alle Branches, Upstream und Lokal, und auch anzeigen was im Moment ausgecheckt ist. Netter genereller Überblick über alle Branches.<br /><pre><code>git branch -a</code></pre>`
    }
  ]
}
