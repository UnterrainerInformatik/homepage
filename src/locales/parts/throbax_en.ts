import variables from '@/locales/variables'

export default {
  description: `${''}${variables.linkBarThrobax16x16}<div class='center'>${variables.throbaxVideoTeaser}</div><br/><div style='text-align: justify;'>Throbax TD is the game, we are developing at the moment.<br />You control a classic real-time-strategy type hero who can build towers and cast spells. The towers, more or less, fire automatically at your enemies, as long as they have enough energy. You have to master wave after wave of different enemies in each level in order to unlock the next one.<br />By destroying enemies you gain money, enabling you to build more towers, and points, which you can use to upgrade them.</div><br />You may find additional information on our blogspot site.`,
  buttons: [
    {
      text: 'The Throbax Blogspot site',
      href: 'https://throbax.blogspot.co.at/p/the-game.html',
      color: 'accent'
    },
    {
      text: 'The Throbax TD STEAM-store page',
      href: variables.throbaxSteamStorePage,
      color: 'primary'
    }
  ],
  title: 'Throbax TD',
  points: [{
    title: 'Completely written in C#, utilizing XNA',
    value: `${''}We started over from scratch and wrote our own gaming engine for this product. The graphics-engine, path-finding, particle-engine, lightning-generator, menu system, everything was developed by us.`
  }, {
    title: '100% Indie',
    value: `${''}We are a very small group and we don't live on programming games at the moment. Who knows what tomorrow will bring, but right now we all have daytime jobs which makes this title 100% independent.`
  }, {
    title: 'Original artwork',
    value: `${''}All the pictures, sprites, effects, the music, everything is developed and created by us. There is no third party involved.`
  }, {
    title: 'Known gameplay, good story',
    value: `${''}The idea behind this game is not to invent something breathtaking new, but to take a known gameplay and add a good story to it. We believe that there are enough gamers out there who want to play a good, straight-forward strategy game.`
  }, {
    title: 'STEAM Greenlight SUCCESS!',
    value: `${''}Our campaign on STEAM Greenlight has been a success!<br/><p><center><a href='${variables.steamLinkThrobax}' target='_blank'><img src='https://files.unterrainer.info/logos/steam_greenlit_banner_smaller.png' class='borderLess' alt='STEAM Greenlight' width='270px'/></a></center></p>Some time ago we were trying to get our game featured on STEAM. For that we had to go through their greenlight-process and thanks to you, we've been accepted!<br />A thousand thanks to you all for voting in our favor...<br />It's an understatement to say that we're overwhelmed by your support!<br /><br />Thanks!`
  }, {
    title: 'RELEASE',
    value: `${''}Throbax TD has now officially started the early-access phase and can be purchased on STEAM.<br/><p><center><a href='${variables.throbaxSteamStorePage}' target='_blank'>${variables.throbaxSteamStoreImage}</a></center><p>Of course there is a demo-version to download on the store page.<p>We would be happy to get your feedback.`,
    buttons: [
      {
        text: 'feedback!',
        href: variables.throbaxFeedbackMailTo,
        color: 'accent'
      }
    ]
  }]
}
