import variables from '@/locales/variables'

export default {
  description: `${''}${variables.linkBarThrobax16x16}<div class='center'>${variables.throbaxVideoTeaser}</div><br/><div style='text-align: justify;'>Throbax TD ist das Spiel, an dem wir im Moment entwickeln.<br />Es wird ein klassischer Echtzeit-Strategie-title, in dem Du die Kontrolle über einen Helden erhältst, der Türme bauen und Zauber wirken kann. Die Türme feuern automatisch auf die Feinde, solange sie genug Energie haben. Du musst in jedem Level Welle für Welle verschiedenster Feinde besiegen, um das nächste freizuschalten.<br />Zerstörte Feinde bringen Geld, mit dem man neue Türme bauen kann und Punkte, die Du dazu benutzen kannst, Deine Türme aufzurüsten.</div><br />Nähere Informationen findest Du auch auf unserer Blogspot-Seite.`,
  buttons: [
    {
      text: 'Die Throbax Blogspot Seite',
      href: 'https://throbax.blogspot.co.at/p/the-game.html',
      color: 'accent'
    },
    {
      text: 'Die Throbax TD STEAM-Store Seite',
      href: variables.throbaxSteamStorePage,
      color: 'primary'
    }
  ],
  title: 'Throbax TD',
  points: [
    {
      title: 'Komplett in C# geschrieben, unter Verwendung von XNA',
      value: `${''}Wir haben bei Null begonnen und haben für dieses Produkt unsere eigene Engine geschrieben. Die Grafik-Engine, Pfadfinder, Partikel-Engine, Blitz-Generator, Menü-System, alles wurde neu von uns entwickelt.`
    }, {
      title: '100% Indie',
      value: `${''}Wir sind eine kleine Gruppe von Leuten und wir leben im Moment nicht vom Entwickeln von Spielen. Wir wissen nicht ob das morgen immer noch so sein wird, aber im Moment haben wir alle einen Brotberuf und das macht uns 100% unabhängig.`
    }, {
      title: 'Komplette Eigenentwicklung',
      value: `${''}Alle Bilder, Sprites, Effekte, die Musik, alles wurde von uns entwickelt und erstellt. Wir haben keine Verbindung zu irgendeiner Drittfirma.`
    }, {
      title: 'Bekanntes Spielprinzip, gute Geschichte',
      value: `${''}Die Idee hinter diesem Spiel ist nicht etwas komplett und bahnbrechend neues zu erfinden, sondern auf ein bekanntes Spielprinzip zurückzugreifen und dahinter eine interessante Geschichte zu stellen. Wir glauben, dass es da draußen genug Spieler gibt, die ein gutes ehrliches Strategiespiel schätzen werden.`
    }, {
      title: 'STEAM Greenlight ERFOLG!',
      value: `${''}Unsere Kampagne auf STEAM Greenlight war erfolgreich!<br/><p><center><a href='{variables.steamLinkThrobax}' target='_blank'><img src='https://files.unterrainer.info/logos/steam_greenlit_banner_smaller.png' class='borderLess' alt='STEAM Greenlight' width='270px'/></a></center></p>Wir haben uns bei der Vertriebsplattform Steam beworben und mussten deren Greenlight Prozess durchlaufen. Dank Euch wurden wir angenommen!<br />Tausend Dank an alle, die für uns auf Greenlight abgestimmt haben...<br />Es wäre eine Untertreibung zu sagen, dass wir von dieser Unterstützung überwältigt sind!<br /><br />Danke!`
    }, {
      title: 'RELEASE',
      value: `${''}Throbax TD hat nun die Early-Access Phase gestartet und ist ab sofort auf STEAM erhältlich.<br/><p><center><a href='${variables.throbaxSteamStorePage}' target='_blank'>${variables.throbaxSteamStoreImage}</a></center><p>Natürlich gibt es dort auch eine Demo-Version zum Herunterladen.<p>Wir freuen uns auf euer Feedback.`,
      buttons: [
        {
          text: 'Feedback!',
          href: variables.throbaxFeedbackMailTo,
          color: 'accent'
        }
      ]
    }]
}
