/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/first_hexo/index.html","cfcf6820ad97db692343cda37150b183"],["/2018/08/hexo+hithub_pages+nexT/hexo1.png","0bd030d0ceb3b6cdbb86e90d742cb642"],["/2018/08/hexo+hithub_pages+nexT/index.html","06414d2732c0a7098d183179587643e9"],["/2018/08/hexo+nexT+something/1.png","92b7d2d4f5854cf5b71758bb84351899"],["/2018/08/hexo+nexT+something/2.png","861156d6bd8ba650cfff91d2b08d559b"],["/2018/08/hexo+nexT+something/index.html","21a60d86a5ae4722325678e4dc646df2"],["/2018/09/Baidu_cloud_acceleration/index.html","5e9ffcb88c66c1466d13495605b88fe5"],["/2018/09/Java_further_study/1.png","0dfb550d4f648a3dd33da2572b7d40e2"],["/2018/09/Java_further_study/2.2.png","1a9defc6d788dc2c55c53601f4d6c4ef"],["/2018/09/Java_further_study/2.png","a1107b2753253444a2311a1bf1f52175"],["/2018/09/Java_further_study/3.png","6a50286a98fc0a80deac440c38847278"],["/2018/09/Java_further_study/4.png","d7f816223b096c7391e61e10bb85fba2"],["/2018/09/Java_further_study/5.png","1877d3e84975aa35eb9237bcf6b05806"],["/2018/09/Java_further_study/6.png","cbb8f56288d484eb39648f207d3af595"],["/2018/09/Java_further_study/7.1.png","25d041f451e67a1a46d6bd41b3220897"],["/2018/09/Java_further_study/index.html","3abcd8b027613d8d8d534e765bd23326"],["/2018/09/java_entry_learning/index.html","ff12a76b60fd0a5b3d10ad8bba39b372"],["/2018/10/Thinking-of-Chat/index.html","ee41ef0a5f297009ed1ca1e5fbd59b89"],["/2018/11/Notes_of_Struts2/1.png","048997b5eb0f43d1eb5fa3a890365a36"],["/2018/11/Notes_of_Struts2/index.html","c4086604896848df745c2cfeb2584c77"],["/2018/11/servlet/0.png","04478ecbf430ad6fc8d0c1f25dd509a1"],["/2018/11/servlet/1.png","ad7d6e1932210eee0343bea8a1ec8bc6"],["/2018/11/servlet/2.png","07378b4e9f2077fa42e480065b47dadf"],["/2018/11/servlet/3.png","92c3a3f83e59975fa4f8c7576454c198"],["/2018/11/servlet/4.png","3b47e21a6832cec586aa7393eacc5304"],["/2018/11/servlet/5.png","ed06317958b280207e6a35baa37116ca"],["/2018/11/servlet/6.png","6094290940ef55857aab1d971bdd36d8"],["/2018/11/servlet/7.png","78b8ed7c703f05ff1c787f1011ebca54"],["/2018/11/servlet/8.png","b2e29ad6e806e8dd6fe0344bf7348b78"],["/2018/11/servlet/9.png","a633c444b2da744449083780f68b4929"],["/2018/11/servlet/index.html","5c8334a7e6bad49453ecc838331e2655"],["/2018/12/CSS-Box-BFC/index.html","4c4d7d9d16339589fd1e667f6bea3392"],["/2018/12/linux-learning2/index.html","0cf98bf0e957815ef7fda52102d52d38"],["/2018/12/linux_learning1/index.html","81383cd7345866c27ef1f9e6ca3ca6a2"],["/2019/01/linux_learning3/index.html","9830cd035d2477514163427937e5e116"],["/2019/01/yuque/18_19sum/index.html","dbf0cbc888b462b3f42a0798ffda6626"],["/2019/01/yuque/linux_learning4/index.html","8f5b5c072104c78990215dede3fe0d4a"],["/2019/01/yuque/num_11/index.html","6e428f100d3deaf6c378852e8dfd28f6"],["/2019/01/yuque/num_15/index.html","3e4e60f93d850edc2f4f89958d86e29c"],["/2019/01/yuque/num_155/index.html","f0c37d0659432098f84f176885b58667"],["/2019/01/yuque/num_215/index.html","ddfaf306774ff285beafdc1221362dca"],["/2019/01/yuque/num_23/index.html","1558b49bd257b7b928218a4d5aa331a2"],["/2019/01/yuque/num_42/index.html","584d49bbc4a11b4535de18b78cf63e7d"],["/2019/01/yuque/num_71/index.html","f8c79f6ec0fefaa223ada08bda6f51f4"],["/2019/01/yuque/vim_skill/index.html","68957dd25d9b43573d66ac86a82cccbb"],["/2019/01/yuque/xybmt5/index.html","8a3bca09b06fff4852bae3f2683d4c9e"],["/2019/01/yuque/yuque_hexo/index.html","d2c2372f72be90a90c25d3e8bec6400e"],["/2019/02/yuque/linux_learning6/index.html","5a7d08803cae2d5494a781a258af945c"],["/2019/02/yuque/num_264/index.html","24a0cc67617e1ca567024968c99a8c0f"],["/2019/02/yuque/num_944/index.html","ee268cee27f960c62c7d75b760a2fe06"],["/2019/02/yuque/wikipedia_algorithm/index.html","cee58a222b4db779ce2ca29bd8df9205"],["/about/index.html","0619f8cc7060e65ee5df881469f22162"],["/about/index/1.jpg","997e25b9d4aae3d0fdb4b23c8c110393"],["/archives/2018/08/index.html","ff58f8c5a05e84515a07c6d94aebc4d0"],["/archives/2018/09/index.html","069b8c69c554cb8b149e26c2077a4d97"],["/archives/2018/10/index.html","99cb744038fc541922ee10d2a22b48de"],["/archives/2018/11/index.html","af179e6d347e3853ca29a8bd136b2904"],["/archives/2018/12/index.html","c604f94a00d3b9e47b1731c0ed6faace"],["/archives/2018/index.html","01dbf8006ec1e6026322449d6b6a0895"],["/archives/2018/page/2/index.html","b3e28cd0d59dfb110e01dfbb1e9831ca"],["/archives/2019/01/index.html","24f9d86c07d30f3612475a345a87ada4"],["/archives/2019/01/page/2/index.html","e094230fe45ddb49dd73fbc660986f48"],["/archives/2019/02/index.html","c08b7283ae2085aa00d537c5fd48eac0"],["/archives/2019/index.html","0692ae5a52bed9db84a999242b064745"],["/archives/2019/page/2/index.html","a3a5e3e97a6564369a03539d0b3977c3"],["/archives/index.html","8d46c78eef4c292a9316b487885d157d"],["/archives/page/2/index.html","79d164c346faa4257dc3004f4aa1905a"],["/archives/page/3/index.html","abf4b1a4f009135eebc59dd0f167fac2"],["/bundle.js","310dc584a38d3704990cc9424796a0b3"],["/categories/CSS/index.html","333245f2d4c79651d6a3794a756a55e3"],["/categories/Hexo/index.html","086b1da1bd8770492cadf9119668baa4"],["/categories/Java/index.html","b2c87bdafcf1a3bfd8d97acfea7557a0"],["/categories/Life/index.html","be1173b3ca83c7d1ba983d6fe2f43750"],["/categories/Linux/index.html","a05ad93791831ae715c277fcdc050c69"],["/categories/Struts2/index.html","99eab662954918b955371d12ab416c76"],["/categories/Vim/index.html","fc9cf9a40a5e62d79e67fa32fc466f11"],["/categories/hexo/index.html","9875f3283276915af85644be82168ce0"],["/categories/index.html","937d86d5e1ee633b26a82b410f8e0857"],["/categories/leetcode/index.html","21d5a01d7aed0b39251e056048818008"],["/categories/servlet/index.html","a3dce2e1aa9fcc1099897b47b8d64704"],["/css/main.css","f2b55bb726ecdf1d4a52d243a06dffe3"],["/guestbook/index.html","2205494b927e060485529fc21ce2e546"],["/guestbook/index/1.jpg","4382bab7f21c30bd7c4c2e3a7682b766"],["/images/111.jpg","f183e6ad8b3df6e24f1108a8ca934959"],["/images/65.jpg","7d859aceab99e8af8faad0700b0b4950"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","5b945365c786743ee14111187b506ab6"],["/images/apple-touch-icon-next.png","76ff720bdb07a5dcb4157af23bfbd07c"],["/images/avatar.jpg","c7f60930d34cee7022fa83b8177010c5"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","d044735ef901fd88671cdd056d3118a8"],["/images/quote-r.svg","d044735ef901fd88671cdd056d3118a8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","e4d7a9a45c3d010e1e907598c4bbd8b1"],["/index.html","dade1be6cf5355fce196805ebac8396e"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/crash_cheat.js","0ffea566a437e48c95933773c07e4f41"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/mouse.js","8a738fb3d63420d1e132d3f63d5f15a5"],["/js/src/particle.js","b1a64c0b4d871a43a2b873c8896bed46"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","399ea6e944b0e49ff3508bcee35423da"],["/page/3/index.html","e72a0b8379ce7bcdae538b4b4fde7c60"],["/style.css","9664bd3e68299b783b7d522425feebf9"],["/sw-register.js","5b662f5c1d515968f951c785ac08af8d"],["/tags/CSS/index.html","4d281cdab63d3b40c09b746bcdb59c85"],["/tags/Java/index.html","b2f6793bb7f51e13bf4c9c205063449d"],["/tags/Life/index.html","b031b87d73c9be26dea583b58eb112d2"],["/tags/Linux/index.html","da35deb1539824d9182f1e80247ff51b"],["/tags/Struts2/index.html","3fd2f1739e660eee7e4b03182ff3f2b3"],["/tags/hexo/index.html","764c0af3df846a1e9aa5e296ee7474b8"],["/tags/servlet/index.html","73d6112991b14e031c856748074c3496"],["/things/index.html","610547b55dd41ef146451d7ccfd58034"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
