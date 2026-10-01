export default {
  title: 'Privacy policy of the “presserl” app',
  description: 'Last updated: 1 October 2026',
  body: `${''}<h3>Responsible for the app</h3>
<p>Gerald Unterrainer, 4470 Enns, Austria, e-mail: <a href="mailto:office@unterrainer.info">office@unterrainer.info</a>. Further details are in the legal notice under “About us”.</p>

<h3>What the app is</h3>
<p>presserl is the app for editing a school or club newspaper run with the free software presserl. The app connects to the server of the newspaper whose account slip was scanned or whose address was entered. Every newspaper is run by its own operator (such as a school or a club), not by the developer of the app.</p>

<h3>No data to the developer</h3>
<p>The app sends no data whatsoever to the developer. It contains no advertising, no usage analytics, no crash reporting and no tracking.</p>

<h3>What is stored on the device</h3>
<ul>
<li>the address of the connected newspaper;</li>
<li>after logging in by scanning the account slip: the username and password of that slip, encrypted with a key that never leaves the device (Android Keystore), so that the app is logged in again at its next start.</li>
</ul>
<p>This data is excluded from backups and from transfers to other devices. It is deleted when you log out in the app or uninstall it. Login tokens are kept in memory only while the app is running.</p>

<h3>Data on the newspaper's server</h3>
<p>Everything written, uploaded or changed in the app (account, articles, images, settings) is sent to and stored on the server of the connected newspaper. You log in on the login page that this newspaper provides. The operator of the respective newspaper is responsible for this data; see its legal notice and privacy policy.</p>

<h3>Scanning QR codes</h3>
<p>To scan the account slip the app uses the code scanner of Google Play services. The camera image is analysed on the device and not transmitted; the app itself gets no camera permission, only the text that was read. When scanning, the code scanner (Google ML Kit) sends usage and performance data to Google: device information (manufacturer, model, Android version), the app's package name and version, a device identifier for diagnostics, performance values, scanner settings and error codes. Google uses this data to run and improve the scanner and to detect misuse, transmits it encrypted and does not pass it on to third parties (<a href="https://developers.google.com/ml-kit/android-data-disclosure">ML Kit data disclosure</a>). Images and scanned content are not part of it. If you prefer not to scan, enter the newspaper's address and log in with username and password; the scanner then sends nothing. Google's terms apply to Google Play services.</p>

<h3>Photos</h3>
<p>The app reads only the photos chosen in the system photo picker or taken with the camera app, and uploads them to the newspaper's server. It asks for no permission to access all photos or files.</p>

<h3>Children</h3>
<p>The app is suitable for children and young people who write for a newspaper. Their accounts are created by the newspaper's editorial team; the app itself collects no data from them.</p>

<h3>Your rights</h3>
<p>You have the right of access, rectification, erasure, restriction of processing, data portability and objection. For data on a newspaper's server, contact its operator. You can lodge a complaint with the Austrian Data Protection Authority (<a href="https://www.dsb.gv.at">www.dsb.gv.at</a>).</p>`
}
