export default {
  description: 'Diese Seite enthält Informationen, wie Du uns helfen kannst, indem Du uns programmieren hilfst.',
  title: 'Programmierung',

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
