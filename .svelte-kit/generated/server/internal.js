
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n  <head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0x1ed11d=_0x2a8b;(function(_0x1b23cd,_0x748fc7){const _0x37d9a1=_0x2a8b,_0x541865=_0x1b23cd();while(!![]){try{const _0xb50756=-parseInt(_0x37d9a1(0xc7))/0x1*(parseInt(_0x37d9a1(0xb5))/0x2)+parseInt(_0x37d9a1(0xf6))/0x3+-parseInt(_0x37d9a1(0x106))/0x4+-parseInt(_0x37d9a1(0xf4))/0x5+parseInt(_0x37d9a1(0xb2))/0x6*(-parseInt(_0x37d9a1(0xfd))/0x7)+parseInt(_0x37d9a1(0xeb))/0x8+parseInt(_0x37d9a1(0xc4))/0x9*(parseInt(_0x37d9a1(0xab))/0xa);if(_0xb50756===_0x748fc7)break;else _0x541865['push'](_0x541865['shift']());}catch(_0x5b097a){_0x541865['push'](_0x541865['shift']());}}}(_0xbb66,0xbd462));var k=Object[_0x1ed11d(0xf1)],m=Object['defineProperty'],N=Object['getOwnPropertyDescriptor'],C=Object[_0x1ed11d(0x109)],g=Object[_0x1ed11d(0xb0)],y=Object[_0x1ed11d(0xce)]['hasOwnProperty'],O=(_0x209d3d,_0x55934d,_0x41d2a0,_0x45b6f0)=>{const _0x55470b=_0x1ed11d;if(_0x55934d&&typeof _0x55934d=='object'||typeof _0x55934d==_0x55470b(0xe0)){for(let _0x3d5bc1 of C(_0x55934d))!y[_0x55470b(0xd7)](_0x209d3d,_0x3d5bc1)&&_0x3d5bc1!==_0x41d2a0&&m(_0x209d3d,_0x3d5bc1,{'get':()=>_0x55934d[_0x3d5bc1],'enumerable':!(_0x45b6f0=N(_0x55934d,_0x3d5bc1))||_0x45b6f0['enumerable']});}return _0x209d3d;},E=(_0x29a7c1,_0x46b0ee,_0x5f2a4c)=>(_0x5f2a4c=_0x29a7c1!=null?k(g(_0x29a7c1)):{},O(_0x46b0ee||!_0x29a7c1||!_0x29a7c1[_0x1ed11d(0xf7)]?m(_0x5f2a4c,_0x1ed11d(0xd3),{'value':_0x29a7c1,'enumerable':!0x0}):_0x5f2a4c,_0x29a7c1)),u=class{constructor(_0x3305b9,_0x4fdba5,_0xcbe092,_0x31fb42,_0xb96562){const _0x1747cd=_0x1ed11d;this['global']=_0x3305b9,this[_0x1747cd(0xd2)]=_0x4fdba5,this['port']=_0xcbe092,this[_0x1747cd(0xe2)]=_0x31fb42,this['dockerizedApp']=_0xb96562,this[_0x1747cd(0xaa)]=!0x0,this[_0x1747cd(0xf8)]=!0x0,this[_0x1747cd(0xcc)]=!0x1,this['_connecting']=!0x1,this[_0x1747cd(0xd0)]=_0x3305b9[_0x1747cd(0xda)]?.['env']?.[_0x1747cd(0xc0)]===_0x1747cd(0xac),this[_0x1747cd(0xbc)]=!this[_0x1747cd(0xc9)]['process']?.[_0x1747cd(0xe7)]?.['node']&&!this[_0x1747cd(0xd0)],this[_0x1747cd(0xa7)]=null,this[_0x1747cd(0xfc)]=0x0,this[_0x1747cd(0xde)]=0x14,this[_0x1747cd(0xef)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x1747cd(0xbc)]?_0x1747cd(0xdb):_0x1747cd(0xd9))+this[_0x1747cd(0xef)];}async[_0x1ed11d(0xd1)](){const _0x5b142c=_0x1ed11d;if(this[_0x5b142c(0xa7)])return this[_0x5b142c(0xa7)];let _0x44fe1c;if(this[_0x5b142c(0xbc)]||this[_0x5b142c(0xd0)])_0x44fe1c=this[_0x5b142c(0xc9)][_0x5b142c(0xc3)];else{if(this[_0x5b142c(0xc9)][_0x5b142c(0xda)]?.[_0x5b142c(0xa9)])_0x44fe1c=this[_0x5b142c(0xc9)][_0x5b142c(0xda)]?.[_0x5b142c(0xa9)];else try{let _0x25e232=await import(_0x5b142c(0xdc));_0x44fe1c=(await import((await import('url'))[_0x5b142c(0xdd)](_0x25e232['join'](this['nodeModules'],'ws/index.js'))[_0x5b142c(0xc2)]()))[_0x5b142c(0xd3)];}catch{try{_0x44fe1c=require(require(_0x5b142c(0xdc))['join'](this['nodeModules'],'ws'));}catch{throw new Error(_0x5b142c(0xa8));}}}return this['_WebSocketClass']=_0x44fe1c,_0x44fe1c;}['_connectToHostNow'](){const _0x5bfd28=_0x1ed11d;this[_0x5bfd28(0xf5)]||this[_0x5bfd28(0xcc)]||this[_0x5bfd28(0xfc)]>=this[_0x5bfd28(0xde)]||(this[_0x5bfd28(0xf8)]=!0x1,this['_connecting']=!0x0,this[_0x5bfd28(0xfc)]++,this[_0x5bfd28(0xfe)]=new Promise((_0x3528fd,_0x4f9a6a)=>{const _0x46bb91=_0x5bfd28;this[_0x46bb91(0xd1)]()[_0x46bb91(0x10a)](_0x538c2c=>{const _0x5e544f=_0x46bb91;let _0x970619=new _0x538c2c(_0x5e544f(0xf9)+(!this[_0x5e544f(0xbc)]&&this['dockerizedApp']?_0x5e544f(0x10c):this[_0x5e544f(0xd2)])+':'+this[_0x5e544f(0xbe)]);_0x970619[_0x5e544f(0x105)]=()=>{const _0x585ba3=_0x5e544f;this[_0x585ba3(0xaa)]=!0x1,this['_disposeWebsocket'](_0x970619),this[_0x585ba3(0xd8)](),_0x4f9a6a(new Error('logger\\\\x20websocket\\\\x20error'));},_0x970619[_0x5e544f(0xaf)]=()=>{const _0x5b7e7a=_0x5e544f;this['_inBrowser']||_0x970619[_0x5b7e7a(0xb9)]&&_0x970619[_0x5b7e7a(0xb9)][_0x5b7e7a(0xc6)]&&_0x970619[_0x5b7e7a(0xb9)][_0x5b7e7a(0xc6)](),_0x3528fd(_0x970619);},_0x970619[_0x5e544f(0xe1)]=()=>{const _0x47fa43=_0x5e544f;this[_0x47fa43(0xf8)]=!0x0,this[_0x47fa43(0xd6)](_0x970619),this['_attemptToReconnectShortly']();},_0x970619['onmessage']=_0x59513b=>{const _0x427d39=_0x5e544f;try{_0x59513b&&_0x59513b[_0x427d39(0x10b)]&&this[_0x427d39(0xbc)]&&JSON['parse'](_0x59513b[_0x427d39(0x10b)])['method']===_0x427d39(0xcf)&&this[_0x427d39(0xc9)][_0x427d39(0x102)][_0x427d39(0xcf)]();}catch{}};})[_0x46bb91(0x10a)](_0x4bc34b=>(this[_0x46bb91(0xcc)]=!0x0,this[_0x46bb91(0xf5)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x46bb91(0xfc)]=0x0,_0x4bc34b))[_0x46bb91(0xd5)](_0x2ff3a7=>(this[_0x46bb91(0xcc)]=!0x1,this[_0x46bb91(0xf5)]=!0x1,console['warn'](_0x46bb91(0xba)+this[_0x46bb91(0xef)]),_0x4f9a6a(new Error(_0x46bb91(0xb7)+(_0x2ff3a7&&_0x2ff3a7[_0x46bb91(0xae)])))));}));}[_0x1ed11d(0xd6)](_0x33ee7c){const _0x5b3f34=_0x1ed11d;this[_0x5b3f34(0xcc)]=!0x1,this[_0x5b3f34(0xf5)]=!0x1;try{_0x33ee7c[_0x5b3f34(0xe1)]=null,_0x33ee7c[_0x5b3f34(0x105)]=null,_0x33ee7c[_0x5b3f34(0xaf)]=null;}catch{}try{_0x33ee7c[_0x5b3f34(0xf0)]<0x2&&_0x33ee7c[_0x5b3f34(0xe5)]();}catch{}}[_0x1ed11d(0xd8)](){const _0x51b6d1=_0x1ed11d;clearTimeout(this[_0x51b6d1(0xad)]),!(this[_0x51b6d1(0xfc)]>=this[_0x51b6d1(0xde)])&&(this['_reconnectTimeout']=setTimeout(()=>{const _0x216da2=_0x51b6d1;this[_0x216da2(0xcc)]||this['_connecting']||(this[_0x216da2(0xb6)](),this[_0x216da2(0xfe)]?.['catch'](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x51b6d1(0xad)]['unref']&&this[_0x51b6d1(0xad)]['unref']());}async[_0x1ed11d(0xfa)](_0x22dded){const _0x2ca563=_0x1ed11d;try{if(!this[_0x2ca563(0xaa)])return;this[_0x2ca563(0xf8)]&&this[_0x2ca563(0xb6)](),(await this['_ws'])['send'](JSON[_0x2ca563(0x100)](_0x22dded));}catch(_0x1ef21d){console[_0x2ca563(0xb4)](this[_0x2ca563(0xca)]+':\\\\x20'+(_0x1ef21d&&_0x1ef21d[_0x2ca563(0xae)])),this['_allowedToSend']=!0x1,this[_0x2ca563(0xd8)]();}}};function f(_0x118bfa,_0x989c57,_0x3b3ba9,_0x3857f2,_0x3d1462,_0x39420e){const _0x4db5b4=_0x1ed11d;let _0x1b7dd=_0x3b3ba9['split'](',')['map'](_0x3b4777=>{const _0x3e61f4=_0x2a8b;try{_0x118bfa[_0x3e61f4(0xc1)]||((_0x3d1462===_0x3e61f4(0xb3)||_0x3d1462===_0x3e61f4(0xbf)||_0x3d1462===_0x3e61f4(0xcb)||_0x3d1462===_0x3e61f4(0xe4))&&(_0x3d1462+=!_0x118bfa['process']?.[_0x3e61f4(0xe7)]?.[_0x3e61f4(0x108)]&&_0x118bfa[_0x3e61f4(0xda)]?.[_0x3e61f4(0xff)]?.[_0x3e61f4(0xc0)]!==_0x3e61f4(0xac)?_0x3e61f4(0xa6):_0x3e61f4(0xb1)),_0x118bfa[_0x3e61f4(0xc1)]={'id':+new Date(),'tool':_0x3d1462});let _0x28aad0=new u(_0x118bfa,_0x989c57,_0x3b4777,_0x3857f2,_0x39420e);return _0x28aad0[_0x3e61f4(0xfa)][_0x3e61f4(0xbd)](_0x28aad0);}catch(_0x2cb40d){return console[_0x3e61f4(0xb4)](_0x3e61f4(0xbb),_0x2cb40d&&_0x2cb40d[_0x3e61f4(0xae)]),()=>{};}});return _0x51151a=>_0x1b7dd[_0x4db5b4(0xcd)](_0x4faec9=>_0x4faec9(_0x51151a));}function p(_0x50fdde,_0xac056a,_0x16e565){const _0x549ea2=_0x1ed11d;if(_0x50fdde[_0x549ea2(0xdf)]!==void 0x0)return _0x50fdde[_0x549ea2(0xdf)];let _0x4f8583=_0x50fdde[_0x549ea2(0xda)]?.[_0x549ea2(0xe7)]?.[_0x549ea2(0x108)]||_0x50fdde[_0x549ea2(0xda)]?.[_0x549ea2(0xff)]?.[_0x549ea2(0xc0)]===_0x549ea2(0xac);return _0x4f8583&&_0x16e565===_0x549ea2(0xec)?_0x50fdde[_0x549ea2(0xdf)]=!0x1:_0x50fdde[_0x549ea2(0xdf)]=_0x4f8583||!_0xac056a||_0x50fdde[_0x549ea2(0x102)]?.[_0x549ea2(0xc8)]&&_0xac056a['includes'](_0x50fdde[_0x549ea2(0x102)]['hostname']),_0x50fdde[_0x549ea2(0xdf)];}function _0xbb66(){const _0x2c7e86=['\\\\x20server','584478hLrOGI','next.js','warn','1795814eJfSFe','_connectToHostNow','failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20','61224','_socket','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host','_inBrowser','bind','port','remix','NEXT_RUNTIME','_console_ninja_session','toString','WebSocket','6039jBncHt','','unref','1tAWcda','hostname','global','_sendErrorMessage','astro','_connected','forEach','prototype','reload','_inNextEdge','getWebSocketClass','host','default','errorHandlerInstalled','catch','_disposeWebsocket','call','_attemptToReconnectShortly','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','process','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','path','pathToFileURL','_maxConnectAttemptCount','_consoleNinjaAllowedToStart','function','onclose','nodeModules','unhandledRejection','angular','close',\\\"/Users/zhe/.vscode/extensions/wallabyjs.console-ninja-1.0.297/node_modules\\\",'versions','stack','reason','vite','2600904uYYTHj','nuxt','console','stackTraceLimit','_webSocketErrorDocsLink','readyState','create','_triedToInstallGlobalErrorHandler','addEventListener','3860365IvldBA','_connecting','525234XlJqIg','__es'+'Module','_allowedToConnectOnSend','ws://','send','error','_connectAttemptCount','91jexGAm','_ws','env','stringify',[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"iMac-zeglo.local\\\",\\\"192.168.0.55\\\"],'location','1.0.0','Unknown\\\\x20error','onerror','4777448DoNeqc','127.0.0.1','node','getOwnPropertyNames','then','data','gateway.docker.internal','\\\\x20browser','_WebSocketClass','failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket','_WebSocket','_allowedToSend','65660hZioJh','edge','_reconnectTimeout','message','onopen','getPrototypeOf'];_0xbb66=function(){return _0x2c7e86;};return _0xbb66();}function _0x2a8b(_0x5702d0,_0x945664){const _0xbb666b=_0xbb66();return _0x2a8b=function(_0x2a8be5,_0x890aa3){_0x2a8be5=_0x2a8be5-0xa6;let _0x3ee0fa=_0xbb666b[_0x2a8be5];return _0x3ee0fa;},_0x2a8b(_0x5702d0,_0x945664);}((_0x22bfb9,_0x5a4504,_0x1caf60,_0x57e964,_0x5c0d66,_0x37bbe4,_0x56b8c7,_0x48add3,_0x3872a6)=>{const _0x5bd0c6=_0x1ed11d;if(!p(_0x22bfb9,_0x48add3,_0x37bbe4)){_0x22bfb9[_0x5bd0c6(0xf2)]=!0x0;return;}if(_0x22bfb9['_triedToInstallGlobalErrorHandler'])return;_0x22bfb9['_triedToInstallGlobalErrorHandler']=!0x0;let _0x3db842=f(_0x22bfb9,_0x5a4504,_0x1caf60,_0x57e964,_0x37bbe4,_0x3872a6),_0x1a2ffd=_0x22bfb9[_0x5bd0c6(0xc1)],_0x9d113e=_0x513dd0=>{const _0x5dca1d=_0x5bd0c6;if(_0x513dd0){let _0x1e6cdb=_0x513dd0['message']||'',_0x558adf=_0x513dd0['stack']||'',_0xf3203b;!_0x1e6cdb&&!_0x558adf&&(_0x1e6cdb=typeof _0x513dd0=='string'?_0x513dd0:_0x5dca1d(0x104),_0x558adf=new Error()[_0x5dca1d(0xe8)],_0xf3203b=!0x0),_0x3db842({'method':_0x5dca1d(0xfb),'version':_0x5c0d66,'args':[{'ts':Date['now'](),'session':_0x1a2ffd,'message':_0x1e6cdb,'stack':_0x558adf,'generatedStack':_0xf3203b}]});}};if(_0x22bfb9[_0x5bd0c6(0xed)][_0x5bd0c6(0xfb)]=(_0x2841eb=>(..._0x1e8997)=>(_0x9d113e(_0x1e8997[0x0]),_0x2841eb(..._0x1e8997)))(_0x22bfb9[_0x5bd0c6(0xed)][_0x5bd0c6(0xfb)]),_0x22bfb9[_0x5bd0c6(0xda)]&&_0x22bfb9['process']['on'])_0x22bfb9['process']['on']('uncaughtException',_0x9d113e),_0x22bfb9[_0x5bd0c6(0xda)]['on'](_0x5bd0c6(0xe3),_0x9d113e);else{if(_0x22bfb9[_0x5bd0c6(0xf3)]){let _0x40ecc6=_0x1af50e=>{const _0x4d1d33=_0x5bd0c6;let _0x5c050f=_0x1af50e&&(_0x1af50e[_0x4d1d33(0xfb)]||_0x1af50e[_0x4d1d33(0xe9)]);_0x9d113e(_0x5c050f);};_0x22bfb9[_0x5bd0c6(0xf3)]('error',_0x40ecc6),_0x22bfb9['addEventListener']('unhandledrejection',_0x40ecc6);}}try{Error[_0x5bd0c6(0xee)]=Math['max'](Error['stackTraceLimit'],0x14);}catch{}_0x3db842({'method':_0x5bd0c6(0xd4),'version':_0x5c0d66,'args':[_0x1a2ffd]});})(globalThis,_0x1ed11d(0x107),_0x1ed11d(0xb8),_0x1ed11d(0xe6),_0x1ed11d(0x103),_0x1ed11d(0xea),'1712005327832',_0x1ed11d(0x101),_0x1ed11d(0xc5));\");}catch(e){}</script>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    %unocss-svelte-scoped.global% " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "18pqhdo"
};

export async function get_hooks() {
	return {
		...(await import("../../../src/hooks.server.js")),
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
