
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',p='px',x4='rgba(0,0,0,0)',g='image',e13='${Text3}',b='block',x10='none solid rgb(0, 0, 0)',x='text',x12='rgba(255,255,255,1)',d='display',x7='24',x9='400',x11='break-word',l='normal',x8='proxima-nova, sans-serif',i='none';var g5='laptop.svg';var s6="<p style=\"margin:0px\">​<span style=\"color: rgb(0, 188, 255);\">22 hours of laptop usage equals 1Kw-H</span></p><p style=\"margin: 0px;\">​</p>";var im='images/',aud='media/',vid='media/',js='js/',fonts={'proxima-nova, sans-serif':'<link rel=\"stylesheet\" href=\"stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'laptop',t:g,r:['0px','0px','550px','400px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Text3',v:i,t:x,r:['111px','112px','184px','107px','auto','auto'],text:s6,align:"center",n:[x8,[x7,p],"rgba(255,255,255,1.00)",x9,x10,l,x11,l],tf:[[],[],['12']]}],style:{'${Stage}':{isStage:true,r:['null','null','550px','400px','auto','auto'],overflow:'hidden',f:[x12]}}},tt:{d:1000,a:y,l:{"start":0,"end":1000},data:[["eid1",d,0,0,"linear",e13,i,i],["eid2",d,1000,0,"linear",e13,i,b]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-5218063");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${laptop}","click",function(sym,e){sym.play("end");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-5218063");