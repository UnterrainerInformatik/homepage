export default {
  description: '',
  title: 'About us',
  contactPrelude: 'In case you want to contact us, please write us an email. Our address is:',
  email: 'office@unterrainer.info',
  emailBody: '',
  emailSubject: 'Feedback via homepage',
  personalEmailBody: '',
  personalEmailSubject: 'Question via homepage',
  impressumTitle: 'Legal Notice',
  impressum: `${''}<b style='font-size: large'>Unterrainer Informatik OG</b><br /><i>Offene Gesellschaft</i><br /><br /><b>Software-engineering and Consulting</b><br /><br />UID-Nr: ATU66981117<br />FN: FN 374582 g<br />FB-Court: Landesgericht Steyr<br /><br />Sitz: 4470 Enns<br />Königgutstraße 4 | Austria<br />E-Mail: office@unterrainer.info<br /><br /><i>Member of the WKÖ, WKOÖ<br />Bezirkshauptmannschaft Linz-Land<br />Shareholders (CEOs): Gerald Unterrainer (50%), Günter Unterrainer (50%)<br />Purpose: Information about our products<br /></i>`,
  lastChanges: 'Last changes on this site: ',
  members: [
    {
      title: 'Psilo',
      value: `${''}Lead programmer, software engineering, homepage.`,
      mail: 'psilo@unterrainer.info'
    }, {
      title: 'Wyzau',
      value: `${''}Creative content, game mechanics, balancing, music.`,
      mail: 'wyzau@unterrainer.info'
    }, {
      title: 'LeRoi',
      value: `${''}Creative content, music.`,
      mail: 'leroi@unterrainer.info'
    }, {
      title: 'Olard',
      value: `${''}Friend and Java-nerd.`,
      mail: 'olard@unterrainer.info'
    }
  ],
  resourcesTitle: 'Resources that where very helpful creating this page',
  resources: [
    {
      title: 'Material Design',
      value: `${''}The design rules that apply to every Android device were used in creating this website. It is a very nice concept and helps to improve readability a lot.`,
      buttons: [
        {
          text: 'See for yourself',
          href: 'https://material.io/design',
          color: 'primary'
        }
      ]
    }, {
      title: 'Material Design Icons',
      value: `${''}This is the icon-set we used on this website. Nice icons for everyone.`,
      buttons: [
        {
          text: 'Have a look',
          href: 'https://material.io/resources/icons/',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'Vue.js',
      value: `${''}After Angular.js we moved to another framework that helps to produce a single-page application. After evaluating we went for the real thing and used Vue.js since it's a fully blown framework with tons of features.`,
      buttons: [
        {
          text: 'Start using it yourself',
          href: 'https://vuejs.org/',
          color: 'primary'
        }
      ]
    }, {
      title: 'Vuetify',
      value: `${''}When working with Vue.js we needed some add-on to enforce the Material-Design look, so we went for Vuetify. It's the most mature framework offering tons of components and other solutions for your everyday website-building.`,
      buttons: [
        {
          text: 'Visit the page',
          href: 'https://vuetifyjs.com/en/',
          color: 'primary'
        }
      ]
    }, {
      title: 'Vuex',
      value: `${''}When building a website you sometimes like to have website-scoped variable without the pain of passing those variables around. That's where Vuex comes in. It offers a nice and maintainable way of getting and setting website-scoped variables.`,
      buttons: [
        {
          text: 'Check it out',
          href: 'https://vuex.vuejs.org/',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'vue-i18n',
      value: `${''}Our website is localized meaning that its content is available in more than a single language. To do this without boilerplate-code we used the vue-i18n plugin.`,
      buttons: [
        {
          text: 'Try it yourself',
          href: 'https://kazupon.github.io/vue-i18n/',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'vue-router',
      value: `${''}Since Vue.js creates single-page applications we needed a router of some sort to help us keep track of and navigate to the various pages we wanted to create. Vue-router is a basic Vue.js component designed to do exactly that.`,
      buttons: [
        {
          text: 'Read up',
          href: 'https://router.vuejs.org/',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'vue-axios',
      value: `${''}Sometimes you just need to call a web-service. To do that we use vue-axios.`,
      buttons: [
        {
          text: 'Visit the page',
          href: 'https://www.npmjs.com/package/vue-axios',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'vue-gravatar',
      value: `${''}When displaying email-addresses we use this Gravatar plugin. Gravatar is a service where you may save images in association with your email-addresses. It even supports different images for different ratings ('R', 'G', and so on). This plugin gets the correct image for the entered email-address.`,
      buttons: [
        {
          text: 'Try it',
          href: 'https://www.npmjs.com/package/vue-gravatar',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'Node.js',
      value: `${''}This is the web-server we use to send you these pages. It's a very light-weight server completely written in javascript.`,
      buttons: [
        {
          text: 'Visit the page',
          href: 'https://nodejs.org/',
          color: 'primary'
        }
      ]
    }, {
      title: 'Docker and Docker-Compose',
      value: `${''}This is the framework our server runs on. We use docker-containers that contain the web-server and docker-compose to setup the networking stuff correctly.`,
      buttons: [
        {
          text: 'Docker',
          href: 'https://www.docker.com/',
          color: 'primary'
        },
        {
          text: 'Docker-Compose',
          href: 'https://docs.docker.com/compose/',
          color: 'primary'
        }
      ]
    }, {
      title: 'Traefik',
      value: `${''}To route your requests to our web-server we use Traefik running in a docker container, set up using docker-compose, as a reverse-proxy. It works most excellently with docker and gets our Let's Encrypt certificates as well. We can only recomment it.`,
      buttons: [
        {
          text: 'Visit the page',
          href: 'https://traefik.io/',
          color: 'primary'
        }
      ]
    }, {
      title: `${''}Let's Encrypt`,
      value: `${''}Since our website uses SSL encryption and therefore is reachable via HTTPS, we need a service to provide us with the proper SSL certificates. Let's Encrypt does this very well and is completely free to use.`,
      buttons: [
        {
          text: 'Start using it yourself',
          href: 'https://letsencrypt.org/',
          color: 'primary'
        }
      ]
    }
  ]
}
