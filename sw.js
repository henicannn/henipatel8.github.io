if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise(async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()})),a.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},a=(a,i)=>{Promise.all(a.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(a)};self.define=(a,s,n)=>{i[a]||(i[a]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return i;case"module":return c;default:return e(a)}})).then(e=>{const a=n(...e);return i.default||(i.default=a),i})}))}}define("./sw.js",["./workbox-079f1b83"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"_config.yml",revision:"932865e374757d33e321eeb2d5e88b6b"},{url:"about.html",revision:"ef5751bff60a1901bc061261b4f7ff7e"},{url:"css/main.css",revision:"1df7ee832019385885781fcc656e0293"},{url:"css/reset.css",revision:"ba1d59b0e53d380b12b3e97a428b3314"},{url:"details-awl.html",revision:"72ce1a66a1a5dbbf8a13f1b5b7647575"},{url:"details-corn.html",revision:"586d2d112eac87709c6baf4b417e8691"},{url:"details-lawson-deer-bone-bead.html",revision:"005ac7fcdc007a8925cbfa0147f162eb"},{url:"details-mandible.html",revision:"6a974078ad7504a186f3dd97dc6789b0"},{url:"details-phalangebone.html",revision:"0fd6534ad5f3bb8b34d3afcbbfb77ca3"},{url:"docs/_config.yml",revision:"932865e374757d33e321eeb2d5e88b6b"},{url:"docs/index.md",revision:"4a5cd13294c49a3b324dbaa098e7eefb"},{url:"images/aaron-lawsite-still.jpg",revision:"d2d07679ca3b39e9200deb9698963ed9"},{url:"images/aaron-longhouse.usdz",revision:"5f38c345fa44b73aa0af6b88e52c9c1a"},{url:"images/awl.png",revision:"228a2b8be41774a16964042eb5f8c76d"},{url:"images/awl.usdz",revision:"d3aef8fe2fb82d1dd201f0bc84edf791"},{url:"images/burger.svg",revision:"44b70f66532642aaae6308b858e0a2d4"},{url:"images/cadences_pot_isometric1.png",revision:"8510999f0803b8fda32f9bc69a22113b"},{url:"images/cadences_pot_isometric2.png",revision:"ace8247b13f069e3751db497c9b0a6ab"},{url:"images/cadences_pot_size.png",revision:"fdc34ccd854f5ccf5fa0916bdea17636"},{url:"images/cadences_pot.png",revision:"7f77c0a478828607ecdb58310b8f1544"},{url:"images/cadences_pot.usdz",revision:"a22b86a6c90f448d1e41699cec88bcda"},{url:"images/cindy_pot.usdz",revision:"e71efa57ce56bc9b82e7365a8cb5728b"},{url:"images/cindy_pot2.png",revision:"0877ae1da45af4614871b7e528566183"},{url:"images/cindy-pot-1000.png",revision:"a8fc32dc554487e54a1923f4eeec8e69"},{url:"images/cindy-pot-720.png",revision:"d7e32d472cbb280a74c95fc72bd21fe0"},{url:"images/cindy-pot-front-400.png",revision:"debe3357c0756bcd91c619de76763f61"},{url:"images/close.svg",revision:"a02aeea19a547c94c35a5acb9bad63da"},{url:"images/corn-kernel.png",revision:"6b74359ea96d0bd4d54d71f0883778d8"},{url:"images/corn-kernel.usdz",revision:"f9dc68f01e79e803c0688d51fbe28374"},{url:"images/corn-size.png",revision:"7493bf99441339dd3f56b75bb0d2e4fa"},{url:"images/corn.png",revision:"6a0d5c1a0c107ac05e2ae8fc0d839179"},{url:"images/flavicon-moalogo.png",revision:"ca9053b1c760076664673011fa06b6e7"},{url:"images/heni_longhouse.png",revision:"ac9e93422dcaf7a606a77af5dc44cce9"},{url:"images/heni_longhouse.usdz",revision:"a4f51acaca8ed69da03275584143d286"},{url:"images/henis_pot.JPG",revision:"608e60bd6d62fb1040b6036b3d7d357e"},{url:"images/henis_pot.usdz",revision:"6f487d16528c65949a17069bf75789cb"},{url:"images/icon-512x512.png",revision:"0c1ca57dfced2bf1801bc35b90b9dd88"},{url:"images/icons/android-chrome-192x192.png",revision:"1d20820333964c19757678ba0aea238e"},{url:"images/icons/android-chrome-512x512.png",revision:"ef359d71a2a5f79d085bbfa04ee39bf7"},{url:"images/icons/android-icon-192x192-dunplab-manifest-26609.png",revision:"01539b1dae0e9931aabc2f9d19553996"},{url:"images/icons/apple-icon-114x114-dunplab-manifest-26609.png",revision:"9d8c0c0567c9c36f63e4d77ea6796b1a"},{url:"images/icons/apple-icon-120x120-dunplab-manifest-26609.png",revision:"887990cc48bba025a54be5e7b176c5f8"},{url:"images/icons/apple-icon-144x144-dunplab-manifest-26609.png",revision:"d7f4321483eff76fa3b4434f19ed54d9"},{url:"images/icons/apple-icon-152x152-dunplab-manifest-26609.png",revision:"42d51c5f1fcd64856eb2c069e2df5f88"},{url:"images/icons/apple-icon-180x180-dunplab-manifest-26609.png",revision:"4d45964307235eb927c5c64236a6bd8a"},{url:"images/icons/apple-icon-57x57-dunplab-manifest-26609.png",revision:"36aae25603a8229d7e0601bb2b5e5311"},{url:"images/icons/apple-icon-60x60-dunplab-manifest-26609.png",revision:"b2bf2dd69e6e1f3ed4353b41cb1b3b01"},{url:"images/icons/apple-icon-72x72-dunplab-manifest-26609.png",revision:"762d82d6cb6393c49b07dfc36166496b"},{url:"images/icons/apple-icon-76x76-dunplab-manifest-26609.png",revision:"075d8b0d487daa8b8acd7b0712045659"},{url:"images/icons/apple-touch-icon.png",revision:"b8b259c58307d487d4afd7757f95694d"},{url:"images/icons/browserconfig.xml",revision:"af405a37f78efb65ff4f330ff609cdee"},{url:"images/icons/favicon-16x16-dunplab-manifest-26609.png",revision:"c5055673882aeeb498f2ba4bf20c0029"},{url:"images/icons/favicon-16x16.png",revision:"fa4217214e3d0ad66077d8708f735793"},{url:"images/icons/favicon-32x32-dunplab-manifest-26609.png",revision:"442c3b4bdb0da4a61ef3a27efbb43f27"},{url:"images/icons/favicon-32x32.png",revision:"9b7ecfd7c9e8c1dfdb1ce5e6452f73e6"},{url:"images/icons/favicon-96x96-dunplab-manifest-26609.png",revision:"f900b28b5b92bb49a5c4b38d4254d3fc"},{url:"images/icons/favicon.ico",revision:"8972f96f72df130469b23c6a46bb20c8"},{url:"images/icons/mstile-150x150.png",revision:"d2ec4990e5fa25c86cd3bb46a7654a28"},{url:"images/icons/safari-pinned-tab.svg",revision:"021a6a6354faf26519c172dcfb44eeb1"},{url:"images/jins_pot.png",revision:"0a3cc8f81f9587306de0b471a98119cd"},{url:"images/jins_pot.usdz",revision:"afbbb9f8df2ee0f303ea07da9d7f9a41"},{url:"images/lawson_deer_bone_bead_upper_view.png",revision:"214992f969334e1f3c4183f7232199c4"},{url:"images/lawson_deer_bone_bead.png",revision:"84480ff6e271d2bc7c4af999c5699a80"},{url:"images/lawson_deer_bone_beed.usdz",revision:"90fc9dd90f74a78f1ae39e31015287ce"},{url:"images/longhouse-cadence.jpg",revision:"abe471fad0e4e069b865d17acafd3966"},{url:"images/longhouse-cadence.usdz",revision:"8af121998ad43e30f811a6a280e92e77"},{url:"images/mandible-front.png",revision:"e879a351d7058f622fcb01f514b66e77"},{url:"images/mandible-side.png",revision:"f1a282aba7a2a7c623c7d4038d9bae80"},{url:"images/mandible.png",revision:"3c75b36c63053549f81d8ce6464f8aba"},{url:"images/mandible.usdz",revision:"7bb83abea62b761216a713758bcca386"},{url:"images/moa-instuction-icons.svg",revision:"c997f993cd2f10be2d45e44fca00bbcd"},{url:"images/moalogo_final_transparent.png",revision:"317c3743f98d8cb591f2f36440816cc3"},{url:"images/mohawk-gltz_file.png",revision:"4407aff98b03087a0645566afdc785ed"},{url:"images/mohawk-isometric-1.png",revision:"8ce12a4de23b6fc7be64eabad0b70087"},{url:"images/mohawk-isometric-2.png",revision:"9fafd2d08aa99cbd4ae0094dc9a32c40"},{url:"images/mohawk-isometric-3.png",revision:"7dda9f999cf9212950d9b05d097db2b1"},{url:"images/paterson_aaron_mohawk.usdz",revision:"6754b2e5af8429774d7f100dece4d294"},{url:"images/phalange_bone.usdz",revision:"30b0908fe30a1355e8a4340f305ac774"},{url:"images/phalange_bone1.png",revision:"a258e16b3e9cf328fa55612d34517207"},{url:"images/phalange_bone2.png",revision:"5ff5ddb558d6dd070a3190139c024391"},{url:"images/phalange_bone3.png",revision:"7862291f4d61127b792006a4b1883b7c"},{url:"index.html",revision:"f7348c3545d8784d85683af90bfa692c"},{url:"js/88507C13C1223C3F2A335CFAAA4EF584.cache.js",revision:"a50ab104690c1b68b71e62456e89ad02"},{url:"js/9C51964BB0BBCC41BB79120ED90449EA.cache.js",revision:"3109bc6a3f50631c3b0e504bab58a361"},{url:"js/B566A15506556F952CAD2B7994FFA824.cache.js",revision:"07cc1d3fbd693268647d0948e1b2eacc"},{url:"js/clear.cache.gif",revision:"6d22e4f2d2057c6e8d6fab098e76e80f"},{url:"js/compilation-mappings.txt",revision:"9e2822eab9789b13be09e43e44007005"},{url:"js/D9940D84355A4C8E89013B8814821244.cache.js",revision:"6cd7c2e3f57a82062279016dfcd979dc"},{url:"js/F4C3969B01AFD421179360B47BCEA2E0.cache.js",revision:"590eac9fc3b470268d35045e86f2a463"},{url:"js/functionality.js",revision:"5edb22112140dae18ab9432dba762d85"},{url:"js/jsQR.js",revision:"1322b5cc5c9461a60830a61d8b78aa77"},{url:"js/jsqrscanner.devmode.js",revision:"320d7dead05fddfaa58aa114b2ab7c84"},{url:"js/jsqrscanner.nocache.js",revision:"0515ccb9544198c82e962dcba01b9aa4"},{url:"js/main.js",revision:"3f7d037f9746d5c277be1e0838d03716"},{url:"js/scrollmagic.js",revision:"cbbb88558b6bd6d9bb2af248d99c4781"},{url:"js/ScrollMagic.min.js",revision:"6ac0def42e0780c817de6097d1607a27"},{url:"lawsonsite_aaron.html",revision:"696477ad2323d0d133a851a99235733f"},{url:"lawsonsite_heni.html",revision:"ba8357a192f40ae7715af7c4727b9c53"},{url:"lawsonsite-cadence.html",revision:"6adde9b99fae6486c26e52d66d38ce22"},{url:"lawsonsite.html",revision:"9bc9c857e9d7080e556221ab09dfdcfa"},{url:"manifest.json",revision:"f675b4b4d525359b1fac90f16a1de593"},{url:"README.md",revision:"4c2a2b8675343b99c7f63b1713772237"},{url:"supportus.html",revision:"49603edcc3f5fb03ecb5159d92123491"}],{})}));
//# sourceMappingURL=sw.js.map
