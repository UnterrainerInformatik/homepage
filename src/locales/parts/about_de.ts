export default {
  description: '',
  title: 'Über uns',
  contactPrelude: 'Für den Fall, dass Du mit uns in Kontakt treten willst, ist hier unsere Email Adresse:',
  email: 'office@unterrainer.info',
  emailBody: '',
  emailSubject: 'Feedback via Homepage',
  personalEmailBody: '',
  personalEmailSubject: 'Frage via Homepage',
  wettercomLinkDescription: 'Wir benutzen ',
  impressumTitle: 'Impressum',
  impressum: `${''}<b style='font-size: large'>Unterrainer Informatik OG</b><br /><i>Offene Gesellschaft</i><br /><br /><b>Softwareentwicklung und Consulting</b><br /><br />UID-Nr: ATU66981117<br />FN: FN 374582 g<br />FB-Gericht: Landesgericht Steyr<br /><br />Sitz: 4470 Enns<br />Königgutstraße 4 | Austria<br />E-Mail: office@unterrainer.info<br /><br /><i>Mitglied der WKÖ, WKOÖ<br />Bezirkshauptmannschaft Linz-Land<br />Geschäftsführende Gesellschafter: Gerald Unterrainer (50%), Günter Unterrainer (50%)<br />Unser Anliegen: Information über unsere Produkte<br /></i>`,
  LastChanges: 'Letzte Änderungen auf dieser Seite: ',
  members: [
    {
      title: 'Psilo',
      value: `${''}Programmierung, Softwareentwicklung, Hompage.`,
      mail: 'psilo@unterrainer.info'
    }, {
      title: 'Wyzau',
      value: `${''}Kreativer Inhalt, Spielmechanik, Balancing, Musik.`,
      mail: 'wyzau@unterrainer.info'
    }, {
      title: 'LeRoi',
      value: `${''}Kreativer Inhalt, Musik.`,
      mail: 'leroi@unterrainer.info'
    }, {
      title: 'Olard',
      value: `${''}Freund und Java Nerd.`,
      mail: 'olard@unterrainer.info'
    }],
  resourcesTitle: 'Quellen, die uns beim Erstellen dieser Seite sehr geholfen haben',
  resources: [
    {
      title: 'Material Design',
      value: `${''}Wir haben beim Bau dieser Webseite die Designregeln, die zur Anwendung kommen, wenn man Applikationen für Android baut, verwendet. Es ist ein wirklich gutes Konzept und es hilft wirklich dabei die Lesbarkeit zu erhöhen.`,
      buttons: [
        {
          text: 'Schau es Dir mal an',
          href: 'https://material.io/design',
          color: 'primary'
        }
      ]
    }, {
      title: 'Material Design Icons',
      value: `${''}Das sind die Icons, die wir auf dieser Webseite verwenden. Nette Icons für alle.`,
      buttons: [
        {
          text: 'Mal ansehen',
          href: 'https://material.io/resources/icons/',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'Vue.js',
      value: `${''}Nach Angular.js haben wir auf ein anderes Framework gewechselt, dass uns bei der Produktion dieser Single-Page Applikation unterstützt. Nachdem wir uns einiges angesehen hatten, haben wir uns dazu entschieden gleich ein ordentliches System zu verwenden und sind auf Vue.js umgestiegen, da es ein großen Framework ist mit einer Tonne von Features.`,
      buttons: [
        {
          text: 'Verwende es auch',
          href: 'https://vuejs.org/',
          color: 'primary'
        }
      ]
    }, {
      title: 'Vuetify',
      value: `${''}Wenn man mit Vue.js arbeitet, braucht man ein Add-On, das einen beim Material-Design Look unterstützt. Das ist Vuetify. Es ist das kompletteste dieser Frameworks und bietet eine Menge Komponenten und Lösungen für den täglichen Gebrauch beim Webseiten-Bau.`,
      buttons: [
        {
          text: 'Besuch die Seite',
          href: 'https://vuetifyjs.com/en/',
          color: 'primary'
        }
      ]
    }, {
      title: 'Vuex',
      value: `${''}Wenn man eine Webseite baut hätte man oft gerne Variablen, die über die gesamte Webseite gelten, ohne diese vor und zurück übergeben zu müssen. Hier kommt Vuex ins Spiel. Es bietet einen komfortablen und wartbaren Weg Variablen innerhalb der gesamten Webseite zu benützen.`,
      buttons: [
        {
          text: 'Probier es aus',
          href: 'https://vuex.vuejs.org/',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'vue-i18n',
      value: `${''}Unsere Webseite is mehrspachig. Das heißt, dass man sie in mehr als einer Sprache abrufen kann. Um dies ohne Boilerplate-Code zu erreichen, haben wir das vue-i18n plugin verwendet.`,
      buttons: [
        {
          text: 'Benutze es auch',
          href: 'https://kazupon.github.io/vue-i18n/',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'vue-router',
      value: `${''}Nachdem Vue.js ja Single-Page Applikationen baut, brauchten wir einen Router, der uns dabei hilft den Überblick über die Einzelseiten zu bewahren und zu jeder Seite navigieren zu können. Vue-Router ist eine Komponente des Vue.js frameworks und macht genau das.`,
      buttons: [
        {
          text: 'Les es Dir durch',
          href: 'https://router.vuejs.org/',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'vue-axios',
      value: `${''}Manchmal muss man einfach einen Web-Service aufrufen. Dies machen wir mit Vue-Axios.`,
      buttons: [
        {
          text: 'Besuch die Seite',
          href: 'https://www.npmjs.com/package/vue-axios',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'vue-gravatar',
      value: `${''}Zum Darstellen von Emailadressen nehmen wir dieses Gravatar Plugin. Gravatar is ein Service, der es erlaubt zu seinen Emailadressen Profilbilder zu hinterlegen. Es unterstützt sogar verschiedene Bilder für unterschiedliche Altersfreigaben ('R', 'G', und so weiter). Dieses Plugin holt das korrekte Bild für die eingegebene Emailadresse.`,
      buttons: [
        {
          text: 'Versuch es',
          href: 'https://www.npmjs.com/package/vue-gravatar',
          color: 'primary'
        }
      ],
      sub: true
    }, {
      title: 'Node.js',
      value: `${''}Das ist der Web-Server, den wir benutzen, um Dir diese Seiten zu schicken. Es ist ein sehr schlanker Server, der komplett in Javascript geschrieben wurde.`,
      buttons: [
        {
          text: 'Besuch die Seite',
          href: 'https://nodejs.org/',
          color: 'primary'
        }
      ]
    }, {
      title: 'Docker und Docker-Compose',
      value: `${''}Dies ist ein Framework, auf dem unser Server läuft. Wir verwenden Docker-Container die zum Beispiel den Webserver beinhalten und Docker-Compose um das nötige Setup zu machen.`,
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
      value: `${''}Um Deine Requests zu unserem Webserver zu routen, nehmen wir Treafik, der in einem Docker-Container läuft und mittels Docker-Compose eingerichtet wurde, als einen Reverse-Proxy. Es arbeitet hervorragend mit Docker zusammen und besorgt uns auch die nötigen Let's Encrypt Zertifikate. Wir können es nur empfehlen.`,
      buttons: [
        {
          text: 'Besuch die Seite',
          href: 'https://traefik.io/',
          color: 'primary'
        }
      ]
    }, {
      title: `${''}Let's Encrypt`,
      value: `${''}Da unsere Webseite SSL-Verschlüsselung benutzt und deswegen unter HTTPS erreichbar ist, brauchen wir einen Service, der uns mit den korrekten SSL-Zertifikaten versorgt. Let's Encrypt macht das hervorragend und is darüber hinaus auch gratis.`,
      buttons: [
        {
          text: 'Beginne es selbst zu nutzen',
          href: 'https://letsencrypt.org/',
          color: 'primary'
        }
      ]
    }
  ]
}
