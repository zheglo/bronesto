
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
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n  <head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x3adb(_0x5c0a65,_0x592764){const _0x4c61a6=_0x4c61();return _0x3adb=function(_0x3adbd9,_0x1efb5e){_0x3adbd9=_0x3adbd9-0x1cc;let _0x2a68d4=_0x4c61a6[_0x3adbd9];return _0x2a68d4;},_0x3adb(_0x5c0a65,_0x592764);}const _0x7cb3a9=_0x3adb;(function(_0x1e292c,_0xce69d9){const _0x3cc108=_0x3adb,_0x31f026=_0x1e292c();while(!![]){try{const _0x5ef5d1=-parseInt(_0x3cc108(0x230))/0x1*(parseInt(_0x3cc108(0x236))/0x2)+parseInt(_0x3cc108(0x1db))/0x3+parseInt(_0x3cc108(0x20d))/0x4+-parseInt(_0x3cc108(0x1d2))/0x5*(-parseInt(_0x3cc108(0x1e3))/0x6)+-parseInt(_0x3cc108(0x1e2))/0x7+parseInt(_0x3cc108(0x1e0))/0x8+parseInt(_0x3cc108(0x1d9))/0x9;if(_0x5ef5d1===_0xce69d9)break;else _0x31f026['push'](_0x31f026['shift']());}catch(_0x181bc1){_0x31f026['push'](_0x31f026['shift']());}}}(_0x4c61,0xa8867));var k=Object['create'],m=Object[_0x7cb3a9(0x1f0)],N=Object['getOwnPropertyDescriptor'],C=Object['getOwnPropertyNames'],g=Object['getPrototypeOf'],y=Object[_0x7cb3a9(0x1ed)]['hasOwnProperty'],O=(_0x1c4ac5,_0x594a6f,_0xa38f66,_0x1114ad)=>{const _0x202b75=_0x7cb3a9;if(_0x594a6f&&typeof _0x594a6f=='object'||typeof _0x594a6f==_0x202b75(0x21b)){for(let _0x168bef of C(_0x594a6f))!y[_0x202b75(0x1cf)](_0x1c4ac5,_0x168bef)&&_0x168bef!==_0xa38f66&&m(_0x1c4ac5,_0x168bef,{'get':()=>_0x594a6f[_0x168bef],'enumerable':!(_0x1114ad=N(_0x594a6f,_0x168bef))||_0x1114ad[_0x202b75(0x1ef)]});}return _0x1c4ac5;},E=(_0x4cfb4a,_0x2f18aa,_0x34005b)=>(_0x34005b=_0x4cfb4a!=null?k(g(_0x4cfb4a)):{},O(_0x2f18aa||!_0x4cfb4a||!_0x4cfb4a[_0x7cb3a9(0x200)]?m(_0x34005b,_0x7cb3a9(0x1f7),{'value':_0x4cfb4a,'enumerable':!0x0}):_0x34005b,_0x4cfb4a)),u=class{constructor(_0x50865f,_0x539b72,_0xedd44a,_0x18672a,_0x4c7b18){const _0x100a9f=_0x7cb3a9;this[_0x100a9f(0x21c)]=_0x50865f,this[_0x100a9f(0x217)]=_0x539b72,this[_0x100a9f(0x22a)]=_0xedd44a,this['nodeModules']=_0x18672a,this[_0x100a9f(0x1d8)]=_0x4c7b18,this[_0x100a9f(0x225)]=!0x0,this[_0x100a9f(0x209)]=!0x0,this[_0x100a9f(0x232)]=!0x1,this['_connecting']=!0x1,this['_inNextEdge']=_0x50865f[_0x100a9f(0x1e5)]?.[_0x100a9f(0x202)]?.[_0x100a9f(0x1d4)]==='edge',this['_inBrowser']=!this[_0x100a9f(0x21c)]['process']?.[_0x100a9f(0x1e6)]?.['node']&&!this[_0x100a9f(0x1ff)],this[_0x100a9f(0x235)]=null,this[_0x100a9f(0x22d)]=0x0,this[_0x100a9f(0x1d6)]=0x14,this[_0x100a9f(0x224)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x100a9f(0x1ea)]?_0x100a9f(0x1da):_0x100a9f(0x21e))+this['_webSocketErrorDocsLink'];}async[_0x7cb3a9(0x229)](){const _0x47225d=_0x7cb3a9;if(this[_0x47225d(0x235)])return this[_0x47225d(0x235)];let _0x4eca4c;if(this['_inBrowser']||this[_0x47225d(0x1ff)])_0x4eca4c=this[_0x47225d(0x21c)][_0x47225d(0x20c)];else{if(this[_0x47225d(0x21c)]['process']?.[_0x47225d(0x218)])_0x4eca4c=this[_0x47225d(0x21c)][_0x47225d(0x1e5)]?.[_0x47225d(0x218)];else try{let _0x630357=await import(_0x47225d(0x226));_0x4eca4c=(await import((await import('url'))['pathToFileURL'](_0x630357[_0x47225d(0x20f)](this[_0x47225d(0x205)],_0x47225d(0x211)))[_0x47225d(0x208)]()))[_0x47225d(0x1f7)];}catch{try{_0x4eca4c=require(require(_0x47225d(0x226))[_0x47225d(0x20f)](this[_0x47225d(0x205)],'ws'));}catch{throw new Error(_0x47225d(0x1fc));}}}return this[_0x47225d(0x235)]=_0x4eca4c,_0x4eca4c;}['_connectToHostNow'](){const _0x40cec6=_0x7cb3a9;this['_connecting']||this[_0x40cec6(0x232)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x40cec6(0x209)]=!0x1,this[_0x40cec6(0x20b)]=!0x0,this[_0x40cec6(0x22d)]++,this['_ws']=new Promise((_0x4abd53,_0x19334f)=>{const _0x228b26=_0x40cec6;this[_0x228b26(0x229)]()[_0x228b26(0x207)](_0x2b80d1=>{const _0x2cd2d1=_0x228b26;let _0x41649=new _0x2b80d1(_0x2cd2d1(0x22e)+(!this['_inBrowser']&&this[_0x2cd2d1(0x1d8)]?'gateway.docker.internal':this[_0x2cd2d1(0x217)])+':'+this[_0x2cd2d1(0x22a)]);_0x41649[_0x2cd2d1(0x1fa)]=()=>{const _0x52e6b1=_0x2cd2d1;this[_0x52e6b1(0x225)]=!0x1,this[_0x52e6b1(0x210)](_0x41649),this[_0x52e6b1(0x1de)](),_0x19334f(new Error(_0x52e6b1(0x1f5)));},_0x41649[_0x2cd2d1(0x231)]=()=>{const _0x3b84d1=_0x2cd2d1;this['_inBrowser']||_0x41649[_0x3b84d1(0x1f4)]&&_0x41649[_0x3b84d1(0x1f4)]['unref']&&_0x41649[_0x3b84d1(0x1f4)][_0x3b84d1(0x216)](),_0x4abd53(_0x41649);},_0x41649[_0x2cd2d1(0x1f6)]=()=>{const _0x58b1b5=_0x2cd2d1;this[_0x58b1b5(0x209)]=!0x0,this['_disposeWebsocket'](_0x41649),this['_attemptToReconnectShortly']();},_0x41649['onmessage']=_0x3f4c23=>{const _0x2705a8=_0x2cd2d1;try{_0x3f4c23&&_0x3f4c23[_0x2705a8(0x206)]&&this['_inBrowser']&&JSON['parse'](_0x3f4c23[_0x2705a8(0x206)])[_0x2705a8(0x221)]===_0x2705a8(0x1fd)&&this['global'][_0x2705a8(0x203)][_0x2705a8(0x1fd)]();}catch{}};})['then'](_0x3a2330=>(this[_0x228b26(0x232)]=!0x0,this[_0x228b26(0x20b)]=!0x1,this[_0x228b26(0x209)]=!0x1,this[_0x228b26(0x225)]=!0x0,this['_connectAttemptCount']=0x0,_0x3a2330))[_0x228b26(0x1f9)](_0x35dea9=>(this[_0x228b26(0x232)]=!0x1,this[_0x228b26(0x20b)]=!0x1,console[_0x228b26(0x1ee)](_0x228b26(0x201)+this[_0x228b26(0x224)]),_0x19334f(new Error(_0x228b26(0x1d7)+(_0x35dea9&&_0x35dea9[_0x228b26(0x215)])))));}));}[_0x7cb3a9(0x210)](_0x1120b6){const _0x70dbfd=_0x7cb3a9;this['_connected']=!0x1,this[_0x70dbfd(0x20b)]=!0x1;try{_0x1120b6[_0x70dbfd(0x1f6)]=null,_0x1120b6[_0x70dbfd(0x1fa)]=null,_0x1120b6[_0x70dbfd(0x231)]=null;}catch{}try{_0x1120b6[_0x70dbfd(0x1ce)]<0x2&&_0x1120b6[_0x70dbfd(0x228)]();}catch{}}[_0x7cb3a9(0x1de)](){const _0x28cde7=_0x7cb3a9;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x28cde7(0x1d6)])&&(this[_0x28cde7(0x1e4)]=setTimeout(()=>{const _0x7a4db7=_0x28cde7;this[_0x7a4db7(0x232)]||this['_connecting']||(this[_0x7a4db7(0x1cc)](),this[_0x7a4db7(0x1f1)]?.[_0x7a4db7(0x1f9)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this['_reconnectTimeout'][_0x28cde7(0x216)]&&this['_reconnectTimeout'][_0x28cde7(0x216)]());}async[_0x7cb3a9(0x21a)](_0x109e88){const _0x30651b=_0x7cb3a9;try{if(!this[_0x30651b(0x225)])return;this[_0x30651b(0x209)]&&this[_0x30651b(0x1cc)](),(await this[_0x30651b(0x1f1)])[_0x30651b(0x21a)](JSON[_0x30651b(0x1e8)](_0x109e88));}catch(_0x19927a){console['warn'](this[_0x30651b(0x1f3)]+':\\\\x20'+(_0x19927a&&_0x19927a[_0x30651b(0x215)])),this[_0x30651b(0x225)]=!0x1,this[_0x30651b(0x1de)]();}}};function f(_0x3ede2a,_0x4b0d7f,_0x59a01a,_0x1a4b39,_0x43c2eb,_0x1a52c3){const _0x24dc1c=_0x7cb3a9;let _0x521eed=_0x59a01a[_0x24dc1c(0x21f)](',')[_0x24dc1c(0x1cd)](_0x1a75e1=>{const _0xf8eef1=_0x24dc1c;try{_0x3ede2a[_0xf8eef1(0x1d5)]||((_0x43c2eb===_0xf8eef1(0x219)||_0x43c2eb===_0xf8eef1(0x1d1)||_0x43c2eb===_0xf8eef1(0x22b)||_0x43c2eb===_0xf8eef1(0x1d3))&&(_0x43c2eb+=!_0x3ede2a[_0xf8eef1(0x1e5)]?.[_0xf8eef1(0x1e6)]?.[_0xf8eef1(0x1e9)]&&_0x3ede2a[_0xf8eef1(0x1e5)]?.['env']?.[_0xf8eef1(0x1d4)]!==_0xf8eef1(0x223)?'\\\\x20browser':_0xf8eef1(0x1dd)),_0x3ede2a[_0xf8eef1(0x1d5)]={'id':+new Date(),'tool':_0x43c2eb});let _0x3c5669=new u(_0x3ede2a,_0x4b0d7f,_0x1a75e1,_0x1a4b39,_0x1a52c3);return _0x3c5669['send'][_0xf8eef1(0x20a)](_0x3c5669);}catch(_0x5ac1ee){return console[_0xf8eef1(0x1ee)](_0xf8eef1(0x1eb),_0x5ac1ee&&_0x5ac1ee['message']),()=>{};}});return _0x24da1e=>_0x521eed['forEach'](_0x51b9a3=>_0x51b9a3(_0x24da1e));}function p(_0x3eac2c,_0x252182,_0x4c0179){const _0x55b549=_0x7cb3a9;if(_0x3eac2c[_0x55b549(0x20e)]!==void 0x0)return _0x3eac2c[_0x55b549(0x20e)];let _0xae2099=_0x3eac2c['process']?.[_0x55b549(0x1e6)]?.[_0x55b549(0x1e9)]||_0x3eac2c['process']?.[_0x55b549(0x202)]?.[_0x55b549(0x1d4)]==='edge';return _0xae2099&&_0x4c0179===_0x55b549(0x22c)?_0x3eac2c[_0x55b549(0x20e)]=!0x1:_0x3eac2c['_consoleNinjaAllowedToStart']=_0xae2099||!_0x252182||_0x3eac2c['location']?.[_0x55b549(0x1d0)]&&_0x252182[_0x55b549(0x222)](_0x3eac2c['location'][_0x55b549(0x1d0)]),_0x3eac2c[_0x55b549(0x20e)];}((_0x208af3,_0x5bc3a8,_0x58e087,_0x2d2a4a,_0x35a8aa,_0xfef7a9,_0xa621e4,_0x336f51,_0x2cb353)=>{const _0x573fb8=_0x7cb3a9;if(!p(_0x208af3,_0x336f51,_0xfef7a9)){_0x208af3[_0x573fb8(0x1f8)]=!0x0;return;}if(_0x208af3[_0x573fb8(0x1f8)])return;_0x208af3[_0x573fb8(0x1f8)]=!0x0;let _0x526b9c=f(_0x208af3,_0x5bc3a8,_0x58e087,_0x2d2a4a,_0xfef7a9,_0x2cb353),_0x2a6467=_0x208af3[_0x573fb8(0x1d5)],_0x3a89e0=_0x405e8f=>{const _0x2bc555=_0x573fb8;if(_0x405e8f){let _0x10992c=_0x405e8f['message']||'',_0x5b9093=_0x405e8f['stack']||'',_0x51f00c;!_0x10992c&&!_0x5b9093&&(_0x10992c=typeof _0x405e8f==_0x2bc555(0x233)?_0x405e8f:_0x2bc555(0x212),_0x5b9093=new Error()[_0x2bc555(0x204)],_0x51f00c=!0x0),_0x526b9c({'method':_0x2bc555(0x1e7),'version':_0x35a8aa,'args':[{'ts':Date[_0x2bc555(0x1df)](),'session':_0x2a6467,'message':_0x10992c,'stack':_0x5b9093,'generatedStack':_0x51f00c}]});}};if(_0x208af3[_0x573fb8(0x220)][_0x573fb8(0x1e7)]=(_0x2a8a8f=>(..._0x933fe7)=>(_0x3a89e0(_0x933fe7[0x0]),_0x2a8a8f(..._0x933fe7)))(_0x208af3[_0x573fb8(0x220)][_0x573fb8(0x1e7)]),_0x208af3['process']&&_0x208af3[_0x573fb8(0x1e5)]['on'])_0x208af3[_0x573fb8(0x1e5)]['on'](_0x573fb8(0x22f),_0x3a89e0),_0x208af3[_0x573fb8(0x1e5)]['on'](_0x573fb8(0x234),_0x3a89e0);else{if(_0x208af3[_0x573fb8(0x213)]){let _0x458377=_0x5881f2=>{const _0x537f20=_0x573fb8;let _0xdee120=_0x5881f2&&(_0x5881f2[_0x537f20(0x1e7)]||_0x5881f2[_0x537f20(0x214)]);_0x3a89e0(_0xdee120);};_0x208af3[_0x573fb8(0x213)](_0x573fb8(0x1e7),_0x458377),_0x208af3[_0x573fb8(0x213)]('unhandledrejection',_0x458377);}}try{Error[_0x573fb8(0x1ec)]=Math['max'](Error['stackTraceLimit'],0x14);}catch{}_0x526b9c({'method':_0x573fb8(0x1e1),'version':_0x35a8aa,'args':[_0x2a6467]});})(globalThis,_0x7cb3a9(0x21d),_0x7cb3a9(0x227),\\\"/Users/zhe/.vscode/extensions/wallabyjs.console-ninja-1.0.301/node_modules\\\",_0x7cb3a9(0x1dc),_0x7cb3a9(0x1f2),_0x7cb3a9(0x1fb),[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"iMac-zeglo.local\\\",\\\"192.168.0.55\\\"],_0x7cb3a9(0x1fe));function _0x4c61(){const _0x2701e6=['uncaughtException','1boIBEJ','onopen','_connected','string','unhandledRejection','_WebSocketClass','786172JhNJOz','_connectToHostNow','map','readyState','call','hostname','remix','15zCQsrL','angular','NEXT_RUNTIME','_console_ninja_session','_maxConnectAttemptCount','failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20','dockerizedApp','2723553DWnrWt','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','34707kmIruc','1.0.0','\\\\x20server','_attemptToReconnectShortly','now','5599616pcaCbh','errorHandlerInstalled','8214136VqIGOV','1739748kDuGjQ','_reconnectTimeout','process','versions','error','stringify','node','_inBrowser','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host','stackTraceLimit','prototype','warn','enumerable','defineProperty','_ws','vite','_sendErrorMessage','_socket','logger\\\\x20websocket\\\\x20error','onclose','default','_triedToInstallGlobalErrorHandler','catch','onerror','1712850907616','failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket','reload','','_inNextEdge','__es'+'Module','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20','env','location','stack','nodeModules','data','then','toString','_allowedToConnectOnSend','bind','_connecting','WebSocket','1491204PmiDRn','_consoleNinjaAllowedToStart','join','_disposeWebsocket','ws/index.js','Unknown\\\\x20error','addEventListener','reason','message','unref','host','_WebSocket','next.js','send','function','global','127.0.0.1','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','split','console','method','includes','edge','_webSocketErrorDocsLink','_allowedToSend','path','58534','close','getWebSocketClass','port','astro','nuxt','_connectAttemptCount','ws://'];_0x4c61=function(){return _0x2701e6;};return _0x4c61();}\");}catch(e){}</script>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    %unocss-svelte-scoped.global% " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "aoqqba"
};

export async function get_hooks() {
	return {
		...(await import("../../../src/hooks.server.js")),
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
