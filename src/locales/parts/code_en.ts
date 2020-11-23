import variables from '@/locales/variables'

export default {
  description: `${''}In order to give back, we've freed some of our libraries and put them at your disposal.`,
  title: 'Free Code For Free People',
  points: [{
    title: 'Unlicense',
    value: `${''}Essentially you may do anything you want with it. We won't ask.<p>You can do anything with the code including commercial applications or re-selling as long as you don't blame us if something goes awry.`
  }, {
    title: 'Free Java Libraries',
    value: `${''}Over time we've used and written many Java libraries. Some of them are here at your disposal.`
  }, {
    title: 'Free C# Libraries',
    value: `${''}During our time as game-developers we've accumulated quite some code that we are prepared to share with you.`
  }, {
    title: 'Public Maven Listings',
    value: `${''}Our Java libraries have a public Maven repository each you may use to integrate them into your own code.`,
    buttons: [
      {
        text: 'Maven Search',
        href: variables.adrMavenSearch,
        color: 'accent'
      }
    ]
  }, {
    title: 'Public Nuget Listings',
    value: `${''}Our C# libraries have a public Nuget repository each you may use to integrate them into your own code.`,
    buttons: [
      {
        text: 'Nuget Search',
        href: variables.adrNugetSearch,
        color: 'accent'
      }
    ]
  }, {
    title: 'Public Github Repositories',
    value: `${''}All our libraries have a public repository on Github you may use to push or pull at your leasure. Please help keep the code tested and up-to-date.<p>We will organize the releases on Maven / Nuget.`,
    buttons: [
      {
        text: 'Public Github Repos',
        href: variables.adrGithub,
        color: 'accent'
      }
    ]
  }]
}
