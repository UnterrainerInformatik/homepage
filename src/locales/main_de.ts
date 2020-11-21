import variables from '@/locales/variables'

export default {
  title: 'Willkommen bei Unterrainer Informatik OG!',
  description: 'Wir entwickeln Software und Spiele und probieren Sie an diesem Prozess teilhaben zu lassen.',
  servicesBullets: [
    {
      title: 'Spieleentwicklung',
      value: `${''}${variables.linkBarThrobax16x16}Wir entwickeln mit Hilfe eines kleinen aber schlagkräftigen Teams Spiele, mit denen man gerne Zeit verbringt.<br />Wir vertreten die Philosophie, dass in der Zeit der offenen und alternativen Enden, in der Zeit der Sandbox Spiele und des User-Generated Content, immer noch Platz für altmodische Spiele ist.<br />Wir finden, dass über diesen Hype darauf vergessen wird, dass Spiele außerdem auch gute Ideen und eine packende Story brauchen und wir versuchen mit unseren Spielen diese Lücke zu füllen.`
    },
    {
      title: 'Consulting<br/>Softwareentwicklung und Projektmanagement',
      value: `${''}Wir haben langjährige Erfahrung im Bereich Softwareentwicklung auf multiplen Plattformen, sowie der Planung und Durchführung von Softwareprojekten in den unterschiedlichsten Größenordnungen.<br/>Wir sind gerne bereit diese Erfahrungen mit Ihnen zu teilen. (Beschränkt auf Österreich und angrenzende Länder)`
    },
    {
      title: 'Consulting<br/>Infrastruktur',
      value: `${''}Wir haben gute Verbindungen und langjährige Erfahrung im Bereich Administration von Firmen der unterschiedlichsten Betriebsplattformen und Größen. Wir können gerne auch für Ihre Firma einen Bericht erstellen, die Ihnen dabei helfen kann, den Überblick über Ihre Hardware zu erhalten oder wieder zu erlangen. Das ist meistens sehr günstig und bringt in der Regel sehr viel. (Beschränkt auf Österreich und angrenzende Länder)`
    },
    {
      title: 'STEAM Greenlight ERFOLG!',
      value: `${''}Unsere Kampagne auf STEAM Greenlight war erfolgreich!<br/><p><center><a href='${variables.steamLinkThrobax}' target='_blank'><img src='https://files.unterrainer.info/logos/steam_greenlit_banner_smaller.png' class='borderLess' alt='STEAM Greenlight' width='270px'/></a></center></p>Wir haben uns bei der Vertriebsplattform Steam beworben und mussten deren Greenlight Prozess durchlaufen. Dank Euch wurden wir angenommen!<br />Tausend Dank an alle, die für uns auf Greenlight abgestimmt haben...<br />Es wäre eine Untertreibung zu sagen, dass wir von dieser Unterstützung überwältigt sind!<br /><br />Danke!`
    },
    {
      title: 'RELEASE',
      value: `${''}Throbax TD hat nun die Early-Access Phase gestartet und ist ab sofort auf STEAM erhältlich.<br/><p><center><a href='${variables.throbaxSteamStorePage}' target='_blank'>${variables.throbaxSteamStoreImage}</a></center><p>Natürlich gibt es dort auch eine Demo-Version zum Herunterladen.<p>Wir freuen uns auf euer Feedback.`,
      buttons: [
        {
          text: 'Feedback!',
          href: variables.throbaxFeedbackMailTo,
          color: 'accent'
        }
      ]
    },
    {
      title: 'Freie C# Libraries',
      value: `${''}Während unserer Zeit als Spieleentwickler haben wir ganz schön viel Code angehäuft den wir gerne mit Dir teilen würden.<p><b>Gratis!</b><br />Unter der MS-PL Lizenz was bedeutet, dass Du alles damit machen kannst, inklusive kommerzieller Verwertung oder Wiederverkauf, so lange Du uns nicht verklagst, falls etwas schief gehen sollte.<p>Sei herzlich eingeladen einen Blick in unsere 'Freier Code' Sektion in der Navigationsleiste zu werfen.`
    },
    {
      title: 'Freie Java Libraries',
      value: `${''}Über die Zeit haben wir viele Java Libraries benutzt und geschrieben. Einige davon wollen wir Dir hier zur Verfügung stellen.<p><b>Gratis!</b><br />Unter der MS-PL Lizenz was bedeutet, dass Du alles damit machen kannst, inklusive kommerzieller Verwertung oder Wiederverkauf, so lange Du uns nicht verklagst, falls etwas schief gehen sollte.<p>Sei herzlich eingeladen einen Blick in unsere 'Freier Code' Sektion in der Navigationsleiste zu werfen.`
    }]
}
