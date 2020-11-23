export default {
  description: 'This page contains information about how you may contribute to this project by coding.',
  title: 'Contribute by Coding',

  // ########################################################

  infoList: [
    {
      title: 'GIT Repositories',
      value: `${''}This here is the link to our GIT Repositories (we use Stash from Atlassian by the way).<br/>To really get access you need a user and a password, both of which you'll get from Psilo after contacting him about it (if he hasn't already done so --- check your mail first, thx).<br/><a href='https://www.unterrainer.info:8443' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Throbax GIT Repositories</a>`
    },
    {
      title: 'Preconditions',
      value: `${''}You need good programming-skills, an invitation from Psilo, to even reach this page here, and you need access to our GIT repositories. This access is exclusively done over HTTPS<br/>Then you'll need the tools, that are listed later on (the infrastructure), the ability to keep a secret and some minor experience using GIT.`
    },
    {
      title: 'Non-Disclosure Agreement',
      value: `${''}Everything you will hear, see or produce when working on this project (of course only things connected  to the game and the code of the game), is property of Unterrainer Informatik OG. Please respect that.<br/>Thanks`
    }
  ],

  // ########################################################

  prerequisitesListTitle: 'Preconditions',
  PrerequisitesListDescription: `${''}We tried to create a list of things you'll need. If it's specifically for a single project, it shows in the heading, otherwise it's a global precondition valid for all projects.`,
  prerequisitesList: [{
    title: '.NET Framework 4.5',
    value: `${''}Because of various reasons (the most important was the Task-Parallel-Library) we changed to .NET Framework version 4.5. You should have no problem installing that.`
  },
  {
    title: 'Visual Studio 2013',
    value: `${''}Every version of VS2013 will do, even the express-version.`
  },
  {
    title: 'XNA 4 (installation on VS2012 or VS2013!)',
    value: `${''}Long story cut short: You'll need an installed VS2010 in order to get this to work.<br/>Without that you can't run XNA in VS2012 or VS 2013.<br/><a href='https://files.unterrainer.info/guides/Install XNA on VS2012.mht' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Install XNA on VS2012 (eng)</a><br/><a href='https://files.unterrainer.info/guides/XNA Game Studio 4.0.zip' target='_blank' class='btn btn-block btn-xs wrap btn-info'>You may try to use these files instead of installing VS2010 yourself (no guarantee that it will work)</a>`
  },
  {
    title: 'GIT GUI for Windows',
    value: `${''}We use SourceTree from Atlassian as GUI for GIT. It's a free program, so feel free to join.<br/><a href='https://files.unterrainer.info/guides/SourceTreeSetup.exe' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Atlassian SourceTree</a>`
  },
  {
    title: 'GIT Credential Winstore',
    value: `${''}If you get sick of typing your credentials over and over again, just install the following program. It will install smoothly and popup a dialog for you to enter the credentials next time you're working with GIT.<br/><a href='https://files.unterrainer.info/guides/git-credential-winstore.exe' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Git-Credential-Winstore</a>`
  },
  {
    title: 'GIT for Windows (base installation)',
    value: `${''}This is the basic GIT-installation you will need to participate in this and every other GIT-project.<br/><a href='https://files.unterrainer.info/guides/Git-1.9.5-preview20141217.exe' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Git-1.9.5-preview20141217</a><br/><br/>Since our site is self-signed, you'll need to additionally enter the following line in a command-window after installing GIT on your machine:<br/><pre>git config --global http.sslVerify false</pre>`
  },
  {
    title: 'Throbax WIX-Setup: Tools',
    value: `${''}Here are a few tools you may have to use when working on the setup.<br/><a href='https://files.unterrainer.info/guides/orca.Msi' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Orca - to deinstall setups</a><br/><a href='https://files.unterrainer.info/guides/Wix38.exe' target='_blank' class='btn btn-block btn-xs wrap btn-primary'>Wix38 - the version we use</a><br/>`
  }
  ]
}
