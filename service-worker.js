/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d5faf974ba3797f15bc770150e3cf490"
  },
  {
    "url": "article/documents/doc-1.html",
    "revision": "04827c9c5bd4bf0af9fbe3f5763cbc1b"
  },
  {
    "url": "article/documents/index.html",
    "revision": "36ad5126bb4f8e1d6c9cedad1c9f4169"
  },
  {
    "url": "article/essays/20190811.html",
    "revision": "918cd7e00dcc244d71699a537c94aa3b"
  },
  {
    "url": "article/essays/index.html",
    "revision": "8dac993fcaa3bf33873fe121be34ff6b"
  },
  {
    "url": "article/git/index.html",
    "revision": "1a6bcb6f3ba49d493b657f7a1339da17"
  },
  {
    "url": "article/git/page-1.html",
    "revision": "b5819ddfd9c8fff2557adfd9285cc124"
  },
  {
    "url": "article/guide.html",
    "revision": "0c30b59ff3169d41057fe034bbcc61a3"
  },
  {
    "url": "article/javascript/index.html",
    "revision": "068ca35f51da20f9891cc16ec43c3811"
  },
  {
    "url": "article/javascript/js-1.html",
    "revision": "aeda700fb2322047dad9f99444970ea8"
  },
  {
    "url": "article/javascript/js-2.html",
    "revision": "c2109d9b9a9d61bae43bbd3c94f43a2e"
  },
  {
    "url": "article/javascript/js-3.html",
    "revision": "03d99a819eabbf40caec47ec5e779220"
  },
  {
    "url": "article/server-configuration/index.html",
    "revision": "8db331e2797d9fd0f0ff3d5b7273f52c"
  },
  {
    "url": "article/server-configuration/sc-1.html",
    "revision": "8f80db74661f80e864cee99387320c0d"
  },
  {
    "url": "article/server-configuration/sc-2.html",
    "revision": "a5baa0aa1c572c514b12277ce6ec683d"
  },
  {
    "url": "article/server-configuration/sc-3.html",
    "revision": "18822b18876c96548b883d081b5cdb73"
  },
  {
    "url": "article/server-configuration/sc-4.html",
    "revision": "bea6094f08210df8eb2172bf61e8a684"
  },
  {
    "url": "article/server-configuration/sc-5.html",
    "revision": "1a29b231cbbad8178c60267ce4419ad3"
  },
  {
    "url": "article/show-projects/canvas.html",
    "revision": "39046b142e0d9b2ad5590eb55a06ab30"
  },
  {
    "url": "article/show-projects/index.html",
    "revision": "c40153576f0906bb8add2b3588a18aad"
  },
  {
    "url": "article/show-projects/react.html",
    "revision": "5e660f0c9ba89f60d5cc8be60445a725"
  },
  {
    "url": "article/typescript/index.html",
    "revision": "b1bcdfe6e841349f63f6adc226c32a18"
  },
  {
    "url": "article/typescript/ts-1.html",
    "revision": "3346a2e27650488796f680d7f0b3cb35"
  },
  {
    "url": "article/typescript/ts-2.html",
    "revision": "2eb05f2e72a94820a88538b958aef64f"
  },
  {
    "url": "article/typescript/ts-3.html",
    "revision": "570ba4685c7ba953b859ff02e7953763"
  },
  {
    "url": "article/typescript/ts-4.html",
    "revision": "392b0f878ad700126d86a970ade53b40"
  },
  {
    "url": "article/typescript/ts-5.html",
    "revision": "e2e538bb03dee68422f3fade29e946e4"
  },
  {
    "url": "article/typescript/ts-6.html",
    "revision": "e4df9712f3257a42905dcdbe7167af7b"
  },
  {
    "url": "article/typescript/ts-7.html",
    "revision": "baf1d12cf72724212c5dff424db8b3f8"
  },
  {
    "url": "article/wsl/index.html",
    "revision": "98cf1535ad1b993eef177f36b0875cce"
  },
  {
    "url": "article/wsl/wsl-1.html",
    "revision": "72af75590ad37f221df850ef00546054"
  },
  {
    "url": "article/wsl/wsl-2.html",
    "revision": "8def83922214a561dca7329592d15b01"
  },
  {
    "url": "article/wsl/wsl-3.html",
    "revision": "f41deb7ffb9ba92871ee14e8bbdddaf0"
  },
  {
    "url": "article/wsl/wsl-4.html",
    "revision": "28f71a6d4f17349412eddb0e05ca4eb9"
  },
  {
    "url": "article/wsl/wsl-5.html",
    "revision": "8f7a34b3ba5c81556074f64e7ae40593"
  },
  {
    "url": "assets/css/0.styles.d8e45361.css",
    "revision": "9753a41a3b9ecb0d3fafe656d89b5b44"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.abc17e66.js",
    "revision": "a217f041711953ea293a72c3c612a5f9"
  },
  {
    "url": "assets/js/11.53576da1.js",
    "revision": "fbef4adf12ab296f735199086a193406"
  },
  {
    "url": "assets/js/12.8a247e20.js",
    "revision": "935c1b5b2d0d83e4ba80d7f8a9ed9275"
  },
  {
    "url": "assets/js/13.bd03b819.js",
    "revision": "cfbb59f34e4416037b3e3f870e7846b7"
  },
  {
    "url": "assets/js/14.4dee5f19.js",
    "revision": "1578194650449de185007a874bd1020c"
  },
  {
    "url": "assets/js/15.1fd70c80.js",
    "revision": "f6018c9b1e733a9dd8ef7049031aeb61"
  },
  {
    "url": "assets/js/16.94754e23.js",
    "revision": "26570b5aa33fd3bef1e9356f27fd763f"
  },
  {
    "url": "assets/js/17.34c5cdba.js",
    "revision": "15cc01b00da93836325942b4056406d3"
  },
  {
    "url": "assets/js/18.a2c8ac18.js",
    "revision": "2e70d90427b0937af29768df5ff7a316"
  },
  {
    "url": "assets/js/19.7b04f5c3.js",
    "revision": "58596b4e2199971623d4faa8165962d6"
  },
  {
    "url": "assets/js/2.01a06c7c.js",
    "revision": "0c0ba10ce7ce89825c2bb89b77f06587"
  },
  {
    "url": "assets/js/20.d893c3e8.js",
    "revision": "34c663eecd068756dae9c03dc6a39e19"
  },
  {
    "url": "assets/js/21.8d77fcc0.js",
    "revision": "7bed9a74f6f41d7c619fb198bb44a522"
  },
  {
    "url": "assets/js/22.d5e4847c.js",
    "revision": "628685aed6d2d14cf274b7600fdadeff"
  },
  {
    "url": "assets/js/23.5fdaa3f7.js",
    "revision": "a479b34410ea496685dbc9b7c0a05aff"
  },
  {
    "url": "assets/js/24.3ede72da.js",
    "revision": "e7fddb0bddb5f6593e927a7cbaa291b9"
  },
  {
    "url": "assets/js/25.edc7a497.js",
    "revision": "0eec3ec8eaef078268d4494dd87e8657"
  },
  {
    "url": "assets/js/26.3e7e93c8.js",
    "revision": "db03e18a53c62e9885930d821c59af2f"
  },
  {
    "url": "assets/js/27.6422337a.js",
    "revision": "e4fae9fe7f1b2b3c1f9722f4e009c202"
  },
  {
    "url": "assets/js/28.17765666.js",
    "revision": "b8c3158f4d921e9c3fda8810f6cffad3"
  },
  {
    "url": "assets/js/29.415708c6.js",
    "revision": "3b6c4ed29005cbef6b5b14edb5ad410e"
  },
  {
    "url": "assets/js/3.5f944d03.js",
    "revision": "eb3c581b39a0c47520793a1480a89671"
  },
  {
    "url": "assets/js/30.b35f880e.js",
    "revision": "ab50cd1290a2e84f06dfb9bd4e3b2e88"
  },
  {
    "url": "assets/js/31.72188a6c.js",
    "revision": "92534eee3d7043a621500ef30a385d7f"
  },
  {
    "url": "assets/js/32.1cb41046.js",
    "revision": "8f34ba4e5ed13b37ebe00eb746a62edf"
  },
  {
    "url": "assets/js/33.22226adf.js",
    "revision": "f112d21ba31bf567af0d6bccefba057f"
  },
  {
    "url": "assets/js/34.dd1bac48.js",
    "revision": "05a0012d5ac20888fe1b063b5c5d8a38"
  },
  {
    "url": "assets/js/35.20518279.js",
    "revision": "7887f4277a11d1dc6b22473a15855b2d"
  },
  {
    "url": "assets/js/36.426d86fa.js",
    "revision": "bb42d425a154ad50b5e44dbb5dfa3fc7"
  },
  {
    "url": "assets/js/37.716b1d7c.js",
    "revision": "0a4422cc907a2b2c0510bf18cc06af11"
  },
  {
    "url": "assets/js/38.10144aa3.js",
    "revision": "cc5851e5cef33a85c6266c730eaf6f58"
  },
  {
    "url": "assets/js/39.e30e6687.js",
    "revision": "e612be2bd81241c93ba57ea50730dd01"
  },
  {
    "url": "assets/js/4.9314d6b5.js",
    "revision": "d7020ad5cc1f461bd1d95d5faaf7f23c"
  },
  {
    "url": "assets/js/40.3dbd73fc.js",
    "revision": "8fdd36a23bff1e7f51339bde7539a039"
  },
  {
    "url": "assets/js/41.dbc71b3c.js",
    "revision": "290b3eaf5c3d082766009f60eea9b0d4"
  },
  {
    "url": "assets/js/5.479b1527.js",
    "revision": "4661a461a4c6ce0ed02b053e865db94d"
  },
  {
    "url": "assets/js/6.319bcfa3.js",
    "revision": "a588636f891292cc96daf304f07de9ff"
  },
  {
    "url": "assets/js/7.bf95a7ba.js",
    "revision": "97b67b314882d1cafb77a04ac8ffb3ba"
  },
  {
    "url": "assets/js/8.c4e28852.js",
    "revision": "b9d3f533d4e3f2b268d01d9ed749ec3a"
  },
  {
    "url": "assets/js/9.494e9600.js",
    "revision": "f5056a11d5deb8837e2d9b5a259355d8"
  },
  {
    "url": "assets/js/app.93e891e0.js",
    "revision": "eb44c52bd742bb5efd434e099ad9eea9"
  },
  {
    "url": "category/index.html",
    "revision": "b857af6f1273a2973e150207eb7f6756"
  },
  {
    "url": "images/logo.png",
    "revision": "73c75621dba7907efbeb1fc83b48cca2"
  },
  {
    "url": "images/logo2.png",
    "revision": "287a4081f1ac2092a0572cca78c116f9"
  },
  {
    "url": "index.html",
    "revision": "becf68930ab14e2fb43494f4fde6562f"
  },
  {
    "url": "tag/index.html",
    "revision": "4cf57bef238fd5c6a4f9637b08c2f4cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
