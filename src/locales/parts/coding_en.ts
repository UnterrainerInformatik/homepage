export default {
  description: 'This page contains information about how you may contribute to our projects.',
  title: 'Contribute by Coding',
  infoList: [
    {
      title: 'GIT Repositories',
      value: `${''}All our projects are located on GitHub. You may clone our repos and make pull-requests at any time.`,
      buttons: [
        {
          text: 'Our public GitHub repos',
          href: 'https://github.com/UnterrainerInformatik',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Travis',
      value: `${''}We use Travis-CI to build and deploy all of our projects. Travis is a free CI-tool allowing for a wide range of builds.<br />In order to make changes to our builds you'll need an invitation with an existing Travis-CI account. You won't need to edit the builds except when you'd like to build your own fork (or some other project of course) in which case you can email us for setup-instructions.`,
      buttons: [
        {
          text: 'Travis-CI homepage',
          href: 'https://travis-ci.org/',
          color: 'accent'
        }
      ]
    },
    {
      title: 'GIT-SCM',
      value: `${''}To work with the code, you'll need a local GIT installation. You can get that here.`,
      buttons: [
        {
          text: 'Download GIT-SCM',
          href: 'https://git-scm.com/downloads',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Gitkraken',
      value: `${''}For those who prefer a visual GIT manager, this is the top tier. It's even free for personal use.`,
      buttons: [
        {
          text: 'Download Gitkraken',
          href: 'https://www.gitkraken.com/',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Eclipse',
      value: `${''}For Java code we use the Eclipse IDE. Recommended plugin is 'Darkest Dark Theme' and we can only emphasise the use of EclEmma (builtin) and JUnit. We use Project-Lombok in all of our projects as well. So be sure to set that up first.`,
      buttons: [
        {
          text: 'Download Eclipse',
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
      value: `${''}For Javascript or Typescript we use VS-Code. It's our go-to editor for simple text-files as well.`,
      buttons: [
        {
          text: 'Download VS-Code',
          href: 'https://code.visualstudio.com/',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Visual Studio Community Edition',
      value: `${''}Our C# code is written using VS Community Edition.`,
      buttons: [
        {
          text: 'Download VS',
          href: 'https://visualstudio.microsoft.com/downloads/',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Typora',
      value: `${''}When editing markdown files, this is the best WYSIWYG editor out there. And it's free and available for Windows, MacOS and Linux.`,
      buttons: [
        {
          text: 'Download Typora',
          href: 'https://typora.io/',
          color: 'primary'
        }
      ]
    }
  ]
}
