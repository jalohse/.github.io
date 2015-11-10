
(function(compId){"use strict";var _=null,y=true,n=false,x10='break-word',x1='5.0.0',p='px',x3='rgba(0,0,0,0)',g='image',e12='${Text3}',b='block',l='normal',x9='none solid rgb(0, 0, 0)',x='text',x11='rgba(255,255,255,1)',d='display',x6='24',x8='400',x2='5.0.0.375',x7='Arial, Helvetica, sans-serif',i='none';var g4='laptop.svg';var s5="22 hours of laptop usage equals  1Kw-H<br>";var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x1,b:x2,stf:i,cg:i,rI:n,cn:{dom:[{id:'laptop',t:g,r:['0px','0px','550px','400px','auto','auto'],f:[x3,im+g4,'0px','0px']},{id:'Text3',v:i,t:x,r:['111px','112px','184px','107px','auto','auto'],text:s5,align:"center",n:[x7,[x6,p],"rgba(255,255,255,1.00)",x8,x9,l,x10,l],tf:[[],[],['12']]}],style:{'${Stage}':{isStage:true,r:['null','null','550px','400px','auto','auto'],overflow:'hidden',f:[x11]}}},tt:{d:1000,a:y,l:{"start":0,"end":1000},data:[["eid1",d,0,0,"linear",e12,i,i],["eid2",d,1000,0,"linear",e12,i,b]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-5218063");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${laptop}","click",function(sym,e){sym.play("end");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-5218063");