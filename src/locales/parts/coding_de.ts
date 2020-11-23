export default {
  description: 'Diese Seite enthält Informationen, wie Du uns helfen kannst, indem Du mit uns programmierst.',
  title: 'Bei der Entwicklung helfen',
  infoList: [
    {
      title: 'GIT Repositories',
      value: `${''}All unsere Projekte liegen auf GitHub. Du kannst unsere Repos jederzeit klonen und pull-requests stellen.`,
      buttons: [
        {
          text: 'Unsere öffentlichen GitHub repos',
          href: 'https://github.com/UnterrainerInformatik',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Travis',
      value: `${''}Wir verwenden Travis-CI um unsere Projekte zu bauen und zu deployen. Travis ist ein freies CI-Tool, das eine weites Spektrum von Builds unterstützt.<br />Damit Ihr Änderungen an unseren Builds machen könnt, braucht ihr eine Einladung an einen bereits existierenden Travis-CI Account. Du wirst aber keine Builds editieren müssen, außer natürlich Du willst Deinen eigenen Fork bauen (oder natürlich irgendeines Deiner Privatprojekte), in welchem Fall Du gerne ein Email an uns schicken kannst, damit wir Dir beim Einrichten helfen können.`,
      buttons: [
        {
          text: 'Travis-CI Webseite',
          href: 'https://travis-ci.org/',
          color: 'accent'
        }
      ]
    },
    {
      title: 'GIT-SCM',
      value: `${''}Um mit dem Code arbeiten zu können, brauchst Du eine GIT Installation. Diese kanns Du hier finden.`,
      buttons: [
        {
          text: 'GIT-SCM herunterladen',
          href: 'https://git-scm.com/downloads',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Gitkraken',
      value: `${''}Für alle, die einen Visuellen GIT-Manager bevorzugen, ist hier ein Top-Programm. Es ist sogar gratis für private Nutzung.`,
      buttons: [
        {
          text: 'Gitkraken herunterladen',
          href: 'https://www.gitkraken.com/',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Eclipse',
      value: `${''}Für Java Code nehmen wir Eclipse IDE. Ein empfohlenes Plugin ist das 'Darkest Dark Theme' und wir können nur betonen, dass Du EclEmma (eingebaut) und JUnit verwenden solltest. Wir benutzen auch Project-Lombok in all unseren Projekten. Also installiere das bitte vorher.`,
      buttons: [
        {
          text: 'Eclipse herunterladen',
          href: 'https://www.eclipse.org/downloads/',
          color: 'primary'
        },
        {
          text: 'Project-Lombok',
          href: 'https://projectlombok.org/',
          color: 'primary'
        }
      ]
    },
    {
      title: 'VS-Code',
      value: `${''}Für Javascript und Typescript nutzen wir VS-Code. Außerdem verwenden wir diesen Editor auch für einfache Text-Files.`,
      buttons: [
        {
          text: 'VS-Code herunterladen',
          href: 'https://code.visualstudio.com/',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Visual Studio Community Edition',
      value: `${''}Unseren C# Code schreiben wir mit VS Community Edition.`,
      buttons: [
        {
          text: 'VS herunterladen',
          href: 'https://visualstudio.microsoft.com/downloads/',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Typora',
      value: `${''}Wenn man Markdown Files editieren muss, dann ist das der beste WYSIWYG Editor, der zur Verfügung steht. Und er ist gratis und verfügbar für Windows, MacOS und Linux.`,
      buttons: [
        {
          text: 'Typora herunterladen',
          href: 'https://typora.io/',
          color: 'primary'
        }
      ]
    }
  ]
}
