import variables from '@/locales/variables'

export default {
  title: 'Welcome to Unterrainer Informatik!',
  description: 'Together, we craft innovative software solutions with you.',
  servicesBullets: [
    {
      title: 'Game Development',
      value: `${''}${variables.linkBarThrobax16x16}With a small, but experienced team, we are developing games, that are worth spending time on.<br />Our philosophy is, that in times of alternative and open endings, in times of sandbox-games and user generated content, there still is time for old fashioned games.<br />We think beneath all this hype everyone forgets that a game, above all other things, needs to be based on a good idea and needs an interesting story. And we are trying to give exactly that to our games.`
    },
    {
      title: 'Consulting<br/>Softwareengineering and Projectmanagement',
      value: `${''}We have been developing various products on many different platforms and have been trusted with the planning and execution of projects of various scopes.<br />We want to share that experience with you. (Limited to Austria and neighboring countries)`,
      buttons: [
        {
          text: 'contact us',
          href: 'mailto:office@unterrainer.info?subject=Business%20Inquiry',
          color: 'primary'
        }
      ]
    },
    {
      title: 'Consulting<br/>Hardware Infrastructure',
      value: `${''}We have good connections and experience when it comes to administrate hardware-environments as well. Over the years we tended to multiple platforms and sizes of offices and the necessary servers as administrators. If you are struggling to tame your server-environment or simply have some problems with your hardware, a report that we can create together, often is the best first step to regaining control (and it is very inexpensive since the creation process doesn't take up much time). (Limited to Austria and neighboring countries)`,
      buttons: [
        {
          text: 'contact us',
          href: 'mailto:office@unterrainer.info?subject=Business%20Inquiry',
          color: 'primary'
        }
      ]
    },
    {
      title: 'STEAM Greenlight SUCCESS!',
      value: `${''}Our campaign on STEAM Greenlight has been a success!<br/><p><center><a href='${variables.steamLinkThrobax}' target='_blank'><img src='https://files.unterrainer.info/logos/steam_greenlit_banner_smaller.png' class='borderLess' alt='STEAM Greenlight' width='270px'/></a></center></p>Some time ago we were trying to get our game featured on STEAM. For that we had to go through their greenlight-process and thanks to you, we've been accepted!<br />A thousand thanks to you all for voting in our favor...<br />It's an understatement to say that we're overwhelmed by your support!<br /><br />Thanks!`
    },
    {
      title: 'RELEASE',
      value: `${''}Throbax TD has now officially started the early-access phase and can be purchased on STEAM.<br/><p><center><a href='${variables.throbaxSteamStorePage}' target='_blank'>${variables.throbaxSteamStoreImage}</a></center><p>Of course there is a demo-version to download on the store page.<p>We would be happy to get your feedback.`,
      buttons: [
        {
          text: 'feedback!',
          href: variables.throbaxFeedbackMailTo,
          color: 'accent'
        }
      ]
    },
    {
      title: 'FREE TO PLAY!',
      value: `${''}At last our game is FREE TO PLAY!<br/>This is our way of giving back because of your continuing support. Thank you!<br/><p><center><a href='${variables.steamLinkThrobax}' target='_blank'>${variables.throbaxSteamStoreImage}</a></center></p>`
    },
    {
      title: 'Free C# Libraries',
      value: `${''}During our time as game-developers we've accumulated quite some code that we are prepared to share with you.<p><b>For free!</b><br />Under the unlicense which means that you can do anything with the code including commercial applications or re-selling as long as you don't blame us if something goes awry.<p>Feel free to take a look at our 'Free Code' section in the navigation bar.`
    },
    {
      title: 'Free Java Libraries',
      value: `${''}Over time we've used and written many Java libraries. Some of them are here at your disposal.<p><b>For free!</b><br />Under the unlicense which means that you can do anything with the code including commercial applications or re-selling as long as you don't blame us if something goes awry.<p>Feel free to take a look at our 'Free Code' section in the navigation bar.`
    }
  ]
}
