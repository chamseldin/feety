(function(g){var window=this;'use strict';var fib=function(a,b){g.V.call(this,{I:"button",Ka:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{I:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{I:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{I:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{I:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.G=a;this.Ta("click",this.onClick,this);this.updateValue("title",g.KS(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.ob(this,g.ES(b.Ec(),this.element))},gib=function(a){g.V.call(this,{I:"div",
S:"ytp-miniplayer-ui"});this.hg=!1;this.player=a;this.T(a,"minimized",this.Wh);this.T(a,"onStateChange",this.DP)},hib=function(a){g.uT.call(this,a);
this.u=new g.pI(this);this.j=new gib(this.player);this.j.hide();g.qS(this.player,this.j.element,4);a.Rf()&&(this.load(),g.dq(a.getRootNode(),"ytp-player-minimized",!0))};
g.x(fib,g.V);fib.prototype.onClick=function(){this.G.Pa("onExpandMiniplayer")};g.x(gib,g.V);g.k=gib.prototype;
g.k.CM=function(){this.tooltip=new g.RV(this.player,this);g.J(this,this.tooltip);g.qS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rc=new g.XT(this.player);g.J(this,this.Rc);this.Vj=new g.V({I:"div",S:"ytp-miniplayer-scrim"});g.J(this,this.Vj);this.Vj.Ha(this.element);this.T(this.Vj.element,"click",this.gH);var a=new g.V({I:"button",Ka:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.AQ()]});g.J(this,a);a.Ha(this.Vj.element);this.T(a.element,"click",this.hp);
a=new fib(this.player,this);g.J(this,a);a.Ha(this.Vj.element);this.Nu=new g.V({I:"div",S:"ytp-miniplayer-controls"});g.J(this,this.Nu);this.Nu.Ha(this.Vj.element);this.T(this.Nu.element,"click",this.gH);var b=new g.V({I:"div",S:"ytp-miniplayer-button-container"});g.J(this,b);b.Ha(this.Nu.element);a=new g.V({I:"div",S:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ha(this.Nu.element);var c=new g.V({I:"div",S:"ytp-miniplayer-button-container"});g.J(this,c);c.Ha(this.Nu.element);this.jX=new g.cV(this.player,
this,!1);g.J(this,this.jX);this.jX.Ha(b.element);b=new g.bV(this.player,this);g.J(this,b);b.Ha(a.element);this.nextButton=new g.cV(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ha(c.element);this.tj=new g.KV(this.player,this);g.J(this,this.tj);this.tj.Ha(this.Vj.element);this.Kc=new g.hV(this.player,this);g.J(this,this.Kc);g.qS(this.player,this.Kc.element,4);this.UG=new g.V({I:"div",S:"ytp-miniplayer-buttons"});g.J(this,this.UG);g.qS(this.player,this.UG.element,4);a=new g.V({I:"button",
Ka:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.AQ()]});g.J(this,a);a.Ha(this.UG.element);this.T(a.element,"click",this.hp);a=new g.V({I:"button",Ka:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.JDa()]});g.J(this,a);a.Ha(this.UG.element);this.T(a.element,"click",this.l7);this.T(this.player,"presentingplayerstatechange",this.Dd);this.T(this.player,"appresize",this.Hb);this.T(this.player,"fullscreentoggled",this.Hb);this.Hb()};
g.k.show=function(){this.sf=new g.Qp(this.Lv,null,this);this.sf.start();this.hg||(this.CM(),this.hg=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.sf&&(this.sf.dispose(),this.sf=void 0);g.V.prototype.hide.call(this);this.player.Rf()||(this.hg&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.sf&&(this.sf.dispose(),this.sf=void 0);g.V.prototype.ra.call(this)};
g.k.hp=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.k.l7=function(){this.player.playVideo()};
g.k.gH=function(a){if(a.target===this.Vj.element||a.target===this.Nu.element)g.wP(this.player.Db())?this.player.pauseVideo():this.player.playVideo()};
g.k.Wh=function(){g.dq(this.player.getRootNode(),"ytp-player-minimized",this.player.Rf())};
g.k.Te=function(){this.Kc.zc();this.tj.zc()};
g.k.Lv=function(){this.Te();this.sf&&this.sf.start()};
g.k.Dd=function(a){g.FO(a.state,32)&&this.tooltip.hide()};
g.k.Hb=function(){g.tV(this.Kc,0,this.player.kb().getPlayerSize().width,!1);g.iV(this.Kc)};
g.k.DP=function(a){this.player.Rf()&&(0===a?this.hide():this.show())};
g.k.Ec=function(){return this.tooltip};
g.k.Bg=function(){return!1};
g.k.ah=function(){return!1};
g.k.Yb=function(){return!1};
g.k.Wl=function(){return!1};
g.k.bI=function(){};
g.k.Sp=function(){};
g.k.uy=function(){};
g.k.Rm=function(){return null};
g.k.NF=function(){return null};
g.k.TL=function(){return new g.xe(0,0)};
g.k.Bk=function(){return new g.Zm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Wv=function(a,b,c,d,e){var f=0,h=d=0,l=g.nn(a);if(b){c=g.Zp(b,"ytp-prev-button")||g.Zp(b,"ytp-next-button");var m=g.Zp(b,"ytp-play-button"),n=g.Zp(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.ln(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Zp(b,"ytp-miniplayer-button-top-left"),f=g.ln(b,this.element),b=g.nn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.kb().getPlayerSize().width;e=f+(e||0);l=g.pe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.xp=function(){};
g.k.Nl=function(){return!1};
g.k.UD=function(){};
g.k.Sz=function(){};
g.k.jr=function(){};
g.k.ir=function(){};
g.k.WA=function(){};
g.k.ws=function(){};
g.k.FD=function(){};g.x(hib,g.uT);g.k=hib.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.dq(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.uT.prototype.create.call(this);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Zk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.tT("miniplayer",hib);})(_yt_player);
