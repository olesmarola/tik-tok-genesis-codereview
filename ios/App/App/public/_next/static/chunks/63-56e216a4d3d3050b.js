(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{3943:function(t,e,n){"use strict";n.d(e,{r:function(){return i}});var r=n(7294),i=(n(5675),({label:t,value:e})=>r.createElement("div",{className:"px-4 py-2 bg-gray-200 dark:bg-gray-500 rounded-xl text-center transition-colors duration-300"},r.createElement("h3",{className:"mb-0.5 truncate"},t),r.createElement("p",{className:"font-bold truncate"},e)))},8566:function(t,e,n){"use strict";var r=n(930),i=n(5696),a=n(7980);var o,c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(7294)),u=(o=n(2717))&&o.__esModule?o:{default:o},s=n(5809),f=n(639);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}var m=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality,a=new URL("".concat(e).concat(k(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e).concat(a).concat(k(n))}],["akamai",function(t){var e=t.root,n=t.src,r=t.width;return"".concat(e).concat(k(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(t){return void 0!==t.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||s.imageConfigDefault,h=v.deviceSizes,A=v.imageSizes,y=v.loader,b=v.path,O=(v.domains,[].concat(a(h),a(A)));function S(t){var e=t.src,n=t.unoptimized,r=t.layout,i=t.width,o=t.quality,c=t.sizes,u=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var s=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c=.01*Math.min.apply(Math,o);return{widths:O.filter((function(t){return t>=h[0]*c})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:h,kind:"w"}:{widths:a(new Set([t,2*t].map((function(t){return O.find((function(e){return e>=t}))||O[O.length-1]})))),kind:"x"}}(i,r,c),f=s.widths,l=s.kind,d=f.length-1;return{sizes:c||"w"!==l?c:"100vw",srcSet:f.map((function(t,n){return"".concat(u({src:e,quality:o,width:t})," ").concat("w"===l?t:n+1).concat(l)})).join(", "),src:u({src:e,quality:o,width:f[d]})}}function _(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function j(t){var e=g.get(y);if(e)return e(d({root:b},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(y))}function k(t){return"/"===t[0]?t.slice(1):t}h.sort((function(t,e){return t-e})),O.sort((function(t,e){return t-e}))},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,n){n(8566)},1163:function(t,e,n){t.exports=n(9898)}}]);