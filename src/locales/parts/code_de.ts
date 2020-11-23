import variables from '@/locales/variables'

export default {
  description: 'Weil wir auch etwas an die Community zurückgeben wollen, haben wir ein paar von unseren Libraries befreit und stellen sie Euch zur Verfügung.',
  title: 'Freier Code für freie Menschen',
  points: [{
    title: 'Unlicense',
    value: `${''}Das bedeutet, dass Du alles damit machen kannst, inklusive kommerzieller Verwertung oder Wiederverkauf, so lange Du uns nicht verklagst, falls etwas schief gehen sollte.`
  }, {
    title: 'Freie Java Libraries',
    value: `${''}Über die Zeit haben wir viele Java Libraries benutzt und geschrieben. Einige davon wollen wir Dir hier zur Verfügung stellen.`
  }, {
    title: 'Freie C# Libraries',
    value: `${''}Während unserer Zeit als Spieleentwickler haben wir ganz schön viel Code angehäuft den wir gerne mit Dir teilen würden.`
  }, {
    title: 'Öffentlicher Maven Eintrag',
    value: `${''}Unsere Java Libraries haben natürlich einen öffentlichen Eintrag auf Maven, den Du verwenden kannst um den Code schnell in Dein Projekt einzubinden.`,
    buttons: [
      {
        text: 'Maven Search',
        href: variables.adrMavenSearch,
        color: 'accent'
      }
    ]
  }, {
    title: 'Öffentlicher Nuget Eintrag',
    value: `${''}Unsere C# Libraries haben natürlich einen öffentlichen Eintrag auf Nuget, den Du verwenden kannst um den Code schnell in Dein Projekt einzubinden.`,
    buttons: [
      {
        text: 'Nuget Search',
        href: variables.adrNugetSearch,
        color: 'accent'
      }
    ]
  }, {
    title: 'Public Github Repositories',
    value: `${''}Alle unsere Libraries haben auch ein öffentliches Repository auf Github auf dem auch Du einfach pushen kannst. Bitte hilf mit den Code getestet und aktuell zu halten.<p>Wir kümmern uns dann um die Releases auf Maven / Nuget.`,
    buttons: [
      {
        text: 'Public Github Repos',
        href: variables.adrGithub,
        color: 'accent'
      }
    ]
  }]
}
