
(function(compId){"use strict";var _=null,y=true,n=false,x2='5.0.0.375',x1='5.0.0',p='px',x3='rgba(0,0,0,0)',x5='rgba(0,0,0,1.00)',g='image',tp='top',e18='${bat_boxes}',e19='${fishing_derby}',e17='${signs_1}',lf='left',x11='break-word',x8='proxima-nova',x10='none solid rgb(0, 0, 0)',x='text',x16='rgba(255,255,255,1)',m='rect',l='normal',x7='26',xc='rgba(0,0,0,1)',x9='900',i='none';var g14='pondlife.jpg',g4='IMG_6501.JPG',g12='IMG_1353.JPG';var s15="Signs Throughout the Park",s6="Build Bat Boxes",s13="Kid's Fishing Derby in June";var im='images/',aud='media/',vid='media/',js='js/',fonts={'proxima-nova':'<link rel=\"stylesheet\" href=\"stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x1,b:x2,stf:i,cg:i,rI:n,cn:{dom:[{id:'bat_boxes',t:'group',r:['0px','0px','551','368','auto','auto'],c:[{id:'IMG_6501',t:g,r:['0px','0px','550px','367px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'overlay_fishCopy2',t:m,r:['0px','0px','551px','368px','auto','auto'],o:0.30081300813008,f:[x5],s:[0,xc,i]},{id:'Rectangle2Copy2',t:m,r:['102px','305px','346px','62px','auto','auto'],o:0.30081300813008,f:[xc],s:[0,"rgb(0, 0, 0)",i]},{id:'fish_acresCopy2',t:x,r:['61px','318px','430px','28px','auto','auto'],text:s6,align:"center",n:[x8,[x7,p],"rgba(245,211,222,1.00)",x9,x10,l,x11,l]}]},{id:'fishing_derby',t:'group',r:['0px','0px','551','368','auto','auto'],c:[{id:'IMG_1353',t:g,r:['93px','-91px','367px','550px','auto','auto'],f:[x3,im+g12,'0px','0px'],tf:[[],['90']]},{id:'overlay_fishCopy',t:m,r:['0px','0px','551px','368px','auto','auto'],o:0.30081300813008,f:[x5],s:[0,xc,i]},{id:'Rectangle2Copy',t:m,r:['102px','305px','346px','62px','auto','auto'],o:0.30081300813008,f:[xc],s:[0,"rgb(0, 0, 0)",i]},{id:'fish_acresCopy',t:x,r:['61px','318px','430px','28px','auto','auto'],text:s13,align:"center",n:[x8,[x7,p],"rgba(245,211,222,1.00)",x9,x10,l,x11,l]}]},{id:'signs_1',t:'group',r:['0px','0px','556','368','auto','auto'],c:[{id:'pondlife',t:g,r:['0px','0px','550px','367px','auto','auto'],f:[x3,im+g14,'0px','0px']},{id:'fish_overlay',t:'group',r:['0px','0px','556','368','auto','auto'],c:[{id:'overlay_fish',t:m,r:['0px','0px','551px','368px','auto','auto'],o:0.30081300813008,f:[x5],s:[0,xc,i]},{id:'Rectangle2',t:m,r:['102px','305px','346px','62px','auto','auto'],o:0.30081300813008,f:[xc],s:[0,"rgb(0, 0, 0)",i]},{id:'fish_acres',t:x,r:['61px','318px','430px','28px','auto','auto'],text:s15,align:"center",n:[x8,[x7,p],"rgba(245,211,222,1.00)",x9,x10,l,x11,l]}]}]}],style:{'${Stage}':{isStage:true,r:['null','null','550px','367px','auto','auto'],overflow:'hidden',f:[x16]}}},tt:{d:1000,a:y,l:{"move1":500,"move2":1000},data:[["eid1",lf,0,0,"linear",e17,'0px','0px'],["eid6",tp,1000,0,"linear",e18,'0px','0px'],["eid7",lf,1000,0,"linear",e18,'0px','0px'],["eid8",tp,500,500,"linear",e19,'0px','410px'],["eid5",tp,0,500,"linear",e17,'0px','410px'],["eid3",lf,500,0,"linear",e19,'0px','0px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-337579702");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${signs_1}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${fishing_derby}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${bat_boxes}","click",function(sym,e){if(!sym.isPlaying()){sym.play(0);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-337579702");