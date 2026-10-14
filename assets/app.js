/* Capital Musical · réplica del sitio actual + capa de propuesta (6 cambios) */
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var IMG='assets/img/';
var body=document.body;

/* ------------------------------------------------------------------ DATOS */
var P={
 na1:{b:'Hebikuo',n:'Soporte De Pared Para Violin Hebikuo J-21A',p:310,img:'na-soporte-violin',st:[5,'amb'],badge:1,grp:'new',cat:'Accesorios y Fundas'},
 na2:{b:'Hebikuo',n:'Soporte Para Guitarra De Pared Hebikuo',p:170,img:'na-soporte-guitarra-pared',badge:1,grp:'new',cat:'Accesorios y Fundas'},
 na3:{b:'Hebikuo',n:'Soporte Para Guitarra Hebikuo JA-A35',p:610,img:'na-soporte-ja-a35',badge:1,grp:'new',cat:'Accesorios y Fundas'},
 na4:{b:'Fender',n:'Amplificador Fender Para Guitarra Mustang LTX50 120v, usb',p:8599,img:'na-mustang-ltx50',st:[2],badge:1,grp:'new',cat:'Amplificadores para Guitarra'},
 na5:{b:'Fender',n:'Amplificador Fender Para Guitarra Mustang LTX100 120v, usb',p:10999,img:'na-mustang-ltx100',st:[1],badge:1,grp:'new',cat:'Amplificadores para Guitarra'},
 g1:{b:'Fender',n:'Guitarra Electrica Stratocaster Late ´50S Vintera III Sunburst',p:29540,img:'g-strat-sunburst',st:[1],g:1,grp:'guit',cat:'Guitarras Eléctricas',sku:'149142300',gallery:['strat-1','strat-2','strat-3','strat-4'],rich:1},
 g2:{b:'Fender',n:'Guitarra Electrica Fender Stratocaster Late ´50s Vintera III Aztec Gold',p:26315,img:'g-strat-aztec',st:[1],g:1,grp:'guit',cat:'Guitarras Eléctricas'},
 g3:{b:'AUREAL',n:'Guitarra Eléctrica Aureal JOM-90 TS Yellow',p:5295,img:'g-jom90',g:1,grp:'guit',cat:'Guitarras Eléctricas'},
 g4:{b:'Fender',n:'Guitarra Eléctrica Fender Stratocaster Player II Aged Cherry Burst',p:20999,img:'g-player-ii',st:[1],g:1,grp:'guit',cat:'Guitarras Eléctricas'},
 p1:{b:'BOSS',n:'Pedal Sintetizador de Guitarra Boss GM-800',p:17234,dec:'98',img:'p-gm800',sold:1,grp:'ped',cat:'Pedales y Efectos'},
 p2:{b:'BOSS',n:'Pedal Boss Slicer SL-2',p:4640,img:'p-sl2',sold:1,grp:'ped',cat:'Pedales y Efectos'},
 p3:{b:'BOSS',n:'Pedal Efecto Para Guitarra Eléctrica Boss Aw-3 Dynamic Wah Dorado',p:3820,img:'p-aw3',st:[1],grp:'ped',cat:'Pedales y Efectos'},
 p4:{b:'BOSS',n:'Pedal De Efecto Boss Super Overdrive Sd-1',p:1305,img:'p-sd1',grp:'ped',cat:'Pedales y Efectos'},
 p5:{b:'BOSS',n:'Pedal De Efecto Boss Loop Station Rc-500',p:6925,img:'p-rc500',st:[3],grp:'ped',cat:'Pedales y Efectos'},
 d1:{b:'AUREAL',n:'Batería Acústica Aureal Atomic Semiprofesional Rojo',p:14999,img:'d-atomic',st:[5,'amb'],grp:'dr',cat:'Batería Acústica'},
 d2:{b:'AUREAL',n:'Batería Acústica Aureal Galax Negra',p:7599,img:'d-galax-negra',grp:'dr',cat:'Batería Acústica'},
 d3:{b:'AUREAL',n:'Batería Acústica Aureal Galax Rojo Vino',p:7599,img:'d-galax-vino',grp:'dr',cat:'Batería Acústica'},
 d4:{b:'AUREAL',n:'Batería Acústica Para Niños Aureal Galax Naranja',p:4999,img:'d-galax-naranja',grp:'dr',cat:'Batería Acústica'},
 d5:{b:'AUREAL',n:'Batería Acústica Para Niños Aureal Galax Purpura',p:4999,img:'d-galax-purpura',st:[3],grp:'dr',cat:'Batería Acústica'},
 /* productos que solo aparecen en el carrito */
 tuner:{b:'YAMAHA',n:'Afinador Digital Yamaha YTC5 Con Clip Negro',p:499,img:'cart-tuner',cart:1},
 teclado:{b:'YAMAHA',n:'Teclado Portátil Yamaha PSR-E483SET 61 Teclas',p:9299,img:'cart-teclado',cart:1,inst:1},
 guitarra:{b:'Fender',n:'Guitarra Electroacústica Fender Redondo Standard CE Fiesta Red',p:4999,img:'cart-guitarra',cart:1,inst:1},
 amp:{b:'BOSS',n:'Amplificador Boss AC-22LX Para Guitarra Acústica',p:8199,img:'cart-amp',cart:1,inst:1},
 cable:{b:'Fender',n:'Cable Fender De Parcheo 15 Cm Deluxe Series Tweed Negro',p:340,img:'cart-cable',cart:1}
};
Object.keys(P).forEach(function(k){P[k].id=k});
var SECTIONS={new:['na1','na2','na3','na4','na5'],guit:['g1','g2','g3','g4'],ped:['p1','p2','p3','p4','p5'],dr:['d1','d2','d3','d4','d5']};

var MENU={
 'Alientos':['Clarinete','Flauta','Saxofón','Trompeta'],
 'Bajo':['Bajo Eléctrico','Bajo Electroacústico','Amplificadores para Bajo'],
 'Batería':['Accesorios para Batería','Batería Acústica','Batería Eléctrica','Platillos para batería'],
 'Educativo':['Flauta Dulce','Melódica'],
 'Guitarras':['Accesorios y Fundas','Amplificadores para Guitarra','Docerolas','Guitarras Acústicas','Guitarras Eléctricas','Guitarras Electroacústicas','Pedales y Efectos','Ukulele'],
 'Audio Profesional':['Altavoces','Home Studio','Mezcladoras Análogas','Mezcladoras Digitales'],
 'Teclado':['Accesorios','Pedales y Efectos','Piano Digital','Sintetizador','Teclado Portátil'],
 'Violines':['Violines Acústicos','Violines Eléctricos']
};
var BRANDS=['AUREAL','Behringer','BOSS','D’Angelico','Deviser','Fender','GRETSCH','Hebikuo','Jackson','Kirlin','Line 6','Martin & Co.','Melo','New Beat','Promark','Roland','SHURE','Squier','Vansir','YAMAHA'];
var GOTO={'Guitarras Eléctricas':'secGuitars','Pedales y Efectos':'secPedals','Batería Acústica':'secDrums'};
var SEARCH_OPTS=['Todos','Abrazadera multiusos','Adaptador Bluetooth','Adaptador de Corriente','Afinador Electrónico','Altavoces','Amplificador','Amplificador de teclado','Amplificador para Bajo','Amplificador para Guitarra','Amplificar Stand','Estuche para Guitarra','Flauta Transversal','Flauta dulce','Footswitch','Funda de Transporte','Funda de teclado','Funda para Amplificador'];

var CHANGES=[
 {id:1,t:'Buscador del inicio: botón que parece apagado',w:'Inicio',view:'home',a:'#finder',pos:{l:-14,t:-14},
  hoy:'El botón BUSCAR se ve en rosa pálido, como si estuviera desactivado, y el segundo selector queda en gris hasta que eliges el primero. No queda claro qué hacer.',
  cambio:'Es el mismo buscador, con el botón BUSCAR en el rojo naranja de la marca y una leyenda en el segundo selector: «Primero elige el tipo». El botón siempre responde.',
  why:'Hipótesis: un botón con aspecto apagado se lee como «no disponible» y casi nadie lo intenta. Es la única ayuda guiada del inicio. Con 9 de cada 10 visitas desde celular y solo 1.14% de las sesiones llegando al carrito, conviene que invite a usarse.'},
 {id:2,t:'Franja de confianza: lenguaje claro y tiendas físicas',w:'Inicio',view:'home',a:'#trust',pos:{l:10,t:-15},
  hoy:'Dice «Tu compra segura y protegida · PCI DSS & SSL», un término técnico. Las 3 tiendas físicas aparecen hasta el final de la página.',
  cambio:'«Compra segura · No guardamos los datos de tu tarjeta» (lo mismo que ya dice la ficha del producto) y un punto nuevo: «3 tiendas físicas · Acapulco, Cuernavaca y Huatulco».',
  why:'Hipótesis: 80.2% de las sesiones llega desde redes y no conoce la marca. Las tiendas físicas son la prueba de confianza más fuerte de Capital Musical y hoy aparecen casi al final del inicio.'},
 {id:3,t:'Tarjetas de producto: pago mensual y aviso de stock más amable',w:'Inicio',view:'home',a:'#rowGuit .card:first-child .pr',hl:'#rowGuit .card:first-child',pos:{r:2,t:8},
  hoy:'Solo muestran el precio total. Casi todas dicen «Muy poca disponibilidad (1 unidad)» en rojo oscuro.',
  cambio:'Bajo el precio aparece «6 MSI de $X» en las guitarras y «Hasta 12 meses sin tarjeta» en productos de más de $3,000. El aviso de stock dice «¡Última pieza!» o «¡Últimas 2 piezas!» en naranja: el mismo dato, con otro tono.',
  why:'Hipótesis: ver $20,999 de golpe frena; ver la mensualidad lo acerca antes de abrir la ficha. «Muy poca disponibilidad» suena a problema; «Última pieza» da el mismo dato y empuja a decidir.'},
 {id:4,t:'Ficha: la mensualidad junto al precio',w:'Ficha de producto',view:'pdp',a:'#pdpPrice',pos:{r:0,t:4},
  hoy:'La opción de Mercado Pago está en un bloque azul debajo de los botones de compra y PayPal. En una laptop o en un celular queda fuera de la primera pantalla.',
  cambio:'Justo debajo del precio se agrega una línea: «6 MSI de $4,923 con Mercado Pago». El bloque azul se queda donde está.',
  why:'Hipótesis: para un instrumento de $29,540 la mensualidad es el argumento que más baja el miedo a pagar, y hoy hay que bajar la vista para encontrarla.'},
 {id:5,t:'Carrito: sugerencias del mismo tipo',w:'Carrito',view:'cart',a:'#cartAcc',pos:{r:0,t:-4},
  hoy:'Con un afinador de $499 en el carrito, «Accesorios» ofrece un teclado de $9,299, una guitarra de $4,999 y un amplificador de $8,199: instrumentos, de 10 a 20 veces más caros.',
  cambio:'«Accesorios» solo muestra accesorios de precio parecido (el cable de $340). Los instrumentos pasan a «Te pueden interesar». Al añadir un accesorio, la barra de envío gratis se actualiza.',
  why:'Hipótesis: en el carrito la persona ya decidió comprar; sugerencias muy caras la distraen del botón PAGAR. Un accesorio barato sube el pedido sin romper la decisión y acerca el envío gratis.'},
 {id:6,t:'Ficha: otras opciones al final',w:'Ficha de producto',view:'pdp',a:'#related',pos:{l:-14,t:-14},
  hoy:'La ficha termina en «Pagos y seguridad» y luego el pie de página. No hay productos parecidos.',
  cambio:'Un carrusel «Otras guitarras que te pueden gustar» con las mismas tarjetas del inicio.',
  why:'Hipótesis: quien llega desde un anuncio a una guitarra que no le convence hoy solo puede regresar al menú. Mostrar alternativas ahí mismo mantiene la visita y baja el rebote.'}
];

var POSTS=[
 {img:'blog-cuerdas',t:'¿Cada cuánto debes cambiar las cuerdas de tu guitarra o bajo? 🎸⚡',p:'Por: Antonio Bautista, Guitar-Tech de Capital Musical. ¿Tu guitarra ya no suena tan brillante como antes? ¿Sientes que cuesta más afinarla o tocarla? Muchos suelen...'},
 {img:'blog-pedalboard',t:'Cómo cablear tu pedal board',p:'Domina tu Signal Path. 🎸🔥 Por: Antonio Bautista, Guitar-Tech de Capital Musical. ¿Cansado del ruido y la pérdida de tono? Vamos a cablear tu pedalera como un profesional. La...'},
 {img:'blog-ns2',t:'El problema del "hum" y cómo eliminarlo con el Boss NS-2 🎸⚡',p:'Por: Antonio Bautista, Guitar-Tech de Capital Musical. Si tocas guitarra eléctrica, seguramente ya te pasó: conectas todo a tu rig, activas la distorsión... y aparece ese molesto zumbido de fondo. Si, hablamos...'}
];

/* ------------------------------------------------------------------ UTIL */
function fmt(n){return n.toLocaleString('en-US')}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function priceHTML(p,n){n=(n==null?p.p:n);return '$ '+fmt(n)+'<sup>'+(n===p.p&&p.dec?p.dec:'00')+'</sup>'}
function isP(){return body.dataset.mode==='p'}
var toastT;
function toast(msg){var t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('show')},2600)}
function icon(id,cls){return '<svg class="i'+(cls?' '+cls:'')+'"><use href="#i-'+id+'"/></svg>'}

/* stock: texto actual y texto propuesto */
function stockA(p){if(!p.st)return '';var n=p.st[0],amb=p.st[1]==='amb';
 var tx=(amb?'Poca':'Muy poca')+' disponibilidad ('+n+(n===1?' unidad':' unidades')+')';
 return '<div class="st '+(amb?'amb':'crim')+' v-a"><i></i>'+tx+'</div>'}
function stockP(p){if(!p.st)return '';var n=p.st[0],amb=p.st[1]==='amb';
 var tx=amb?('Quedan '+n+' piezas'):(n===1?'¡Última pieza!':'¡Últimas '+n+' piezas!');
 return '<div class="st '+(amb?'amb':'hot2')+' v-p"><i></i>'+tx+'</div>'}
function msiText(p){
 if(p.g)return '6 MSI de $'+fmt(Math.round(p.p/6));
 if(p.p>=3000)return 'Hasta 12 meses sin tarjeta';
 return ''}
function card(p){
 var tag=p.sold?'<span class="tag sold">Agotado</span>':(p.badge?'<span class="tag">'+icon('star')+' New Arrival! ✨</span>':'');
 var m=msiText(p);
 return '<article class="card" data-id="'+p.id+'">'+
  '<div class="im" data-open="'+p.id+'">'+tag+'<img src="'+IMG+p.img+'.jpg" alt="'+esc(p.n)+'" loading="lazy" width="226" height="226"></div>'+
  '<div class="br">'+esc(p.b)+'</div>'+
  '<a class="nm" href="#" data-open="'+p.id+'">'+esc(p.n)+'</a>'+
  '<div class="pr">'+priceHTML(p)+'</div>'+
  (m?'<div class="msi v-p">'+icon('card')+'<span>'+(p.g?'<span>'+m+'</span>':m)+'</span></div>':'')+
  stockA(p)+stockP(p)+'</article>'}

/* ------------------------------------------------------------------ RENDER INICIO */
function renderHome(){
 $('#rowNew').innerHTML=SECTIONS.new.map(function(k){return card(P[k])}).join('');
 $('#rowGuit').innerHTML=SECTIONS.guit.map(function(k){return card(P[k])}).join('');
 $('#rowPed').innerHTML=SECTIONS.ped.map(function(k){return card(P[k])}).join('');
 $('#rowDrums').innerHTML=SECTIONS.dr.map(function(k){return card(P[k])}).join('');
 var bt=[['AUREAL','aureal'],['D’ANGELICO','dangelico'],['FENDER','fender'],['ROLAND','roland'],['YAMAHA','yamaha'],['BOSS','boss']];
 $('#brandTiles').innerHTML=bt.map(function(b){return '<a class="btile" href="#" data-soon><img src="'+IMG+'brand-'+b[1]+'.jpg" alt="'+b[0]+'" loading="lazy" width="182" height="182"><b>'+b[0]+'</b><span class="vc">Ver colección '+icon('arc')+'</span></a>'}).join('');
 var ct=[['Guitarras Eléctricas','elec'],['Guitarras Acústicas','acus'],['Guitarras Electroacústicas','electroac'],['Bajo','bajo'],['Batería Acústica','bateria'],['Bateria Eléctrica','bateria-elec']];
 $('#catTiles').innerHTML=ct.map(function(c){return '<a class="ctile" href="#" '+(GOTO[c[0]]?'data-go="'+GOTO[c[0]]+'"':'data-soon')+'><img src="'+IMG+'cat-'+c[1]+'.jpg" alt="'+c[0]+'" loading="lazy" width="180" height="180"><b>'+c[0]+'</b><span class="vc">Ver colección '+icon('arc')+'</span></a>'}).join('');
 $('#posts').innerHTML=POSTS.map(function(x){return '<a class="post" href="#" data-soon><img src="'+IMG+x.img+'.jpg" alt="" loading="lazy" width="399" height="225"><div><h3>'+esc(x.t)+'</h3><p>'+esc(x.p)+'</p></div></a>'}).join('');
 $('#storeTiles').innerHTML=['acapulco','cuernavaca','huatulco'].map(function(s){return '<a href="#" data-soon="Página de la tienda: no forma parte de esta propuesta"><img src="'+IMG+'tienda-'+s+'.jpg" alt="Tienda '+s+'" loading="lazy" width="404" height="553"></a>'}).join('');
 $('#fCats').innerHTML=Object.keys(MENU).filter(function(k){return k!=='Violines'}).map(function(k){return '<li><a href="#" data-soon>'+(k==='Batería'?'Batería':k)+'</a></li>'}).join('');
 $('#fBrands').innerHTML=['AUREAL','BOSS','D’Angelico','Deviser','Fender','GRETSCH','Jackson','Martin & Co.','Roland','SHURE','Squier','YAMAHA'].map(function(b){return '<li><a href="#" data-soon>'+b+'</a></li>'}).join('');
 $('#searchCat').innerHTML=SEARCH_OPTS.map(function(o){return '<option>'+o+'</option>'}).join('');
 // barras de avance de los carruseles
 $$('.car').forEach(function(c){var pr=c.parentNode.querySelector('.prog i');if(!pr)return;
  c.addEventListener('scroll',function(){var max=c.scrollWidth-c.clientWidth;var w=Math.max(18,c.clientWidth/c.scrollWidth*100);pr.style.width=w+'%';pr.style.left=(max>0?(c.scrollLeft/max)*(100-w):0)+'%'},{passive:true})});
}

/* ------------------------------------------------------------------ BUSCADOR DEL INICIO */
var fType=$('#fType'),fItem=$('#fItem'),fGo=$('#fGo'),fHint=$('#fHint'),finder=$('#finder');
function refreshFinder(){
 var t=fType.value;
 var firstOpt='<option value="">Selecciona tipo de instrumento...</option>';
 if(!fType.options.length||fType.dataset.ready!=='1'){fType.innerHTML=firstOpt+Object.keys(MENU).map(function(k){return '<option>'+k+'</option>'}).join('');fType.dataset.ready='1'}
 var ph=isP()?(t?'Elige instrumento (opcional)...':'Primero elige el tipo'):'Elige instrumento...';
 var prev=fItem.value;
 fItem.innerHTML='<option value="">'+ph+'</option>'+(t?MENU[t].map(function(s){return '<option>'+s+'</option>'}).join(''):'');
 if(t&&MENU[t].indexOf(prev)>-1)fItem.value=prev;
 fItem.disabled=!t;
 var ready=!!t&&!!fItem.value;
 fGo.classList.toggle('on',ready);
 fHint.textContent=isP()?(t?'Puedes buscar solo por tipo o afinar con el segundo selector':'Elige un tipo y toca Buscar'):'';
}
fType.addEventListener('change',function(){fItem.value='';refreshFinder()});
fItem.addEventListener('change',refreshFinder);
fGo.addEventListener('click',function(){
 var t=fType.value,s=fItem.value;
 if(!isP()&&!(t&&s)){return} /* en la versión actual el botón no hace nada hasta elegir ambos */
 if(!t){finder.classList.remove('shake');void finder.offsetWidth;finder.classList.add('shake');fType.focus();fHint.textContent='Primero elige un tipo de instrumento';return}
 var target=GOTO[s];
 if(target){goSection(target)}else{toast('Aquí abre la colección «'+(s||t)+'». No forma parte de esta propuesta.')}
});

/* ------------------------------------------------------------------ MENÚS */
var mega=$('#mega'),megaCats=$('#megaCats'),megaSubs=$('#megaSubs'),hdr=$('#siteHeader');
function openMega(kind){
 mega.classList.toggle('brands',kind==='brand');
 if(kind==='prod'){
  megaCats.style.display='';
  megaCats.innerHTML=Object.keys(MENU).map(function(k,i){return '<li><button data-cat="'+k+'" class="'+(i===4?'on':'')+'">'+k+icon('right')+'</button></li>'}).join('');
  showSubs('Guitarras');
 }else{
  megaCats.style.display='none';
  megaSubs.innerHTML=BRANDS.map(function(b){return '<a href="#" data-soon>'+b+'</a>'}).join('');
 }
 mega.classList.add('open');mega.setAttribute('aria-hidden','false');
}
function showSubs(cat){
 $$('#megaCats button').forEach(function(b){b.classList.toggle('on',b.dataset.cat===cat)});
 megaSubs.innerHTML=MENU[cat].map(function(s){return '<a href="#" '+(GOTO[s]?'data-go="'+GOTO[s]+'"':'data-soon')+'>'+s+'</a>'}).join('');
}
function closeMega(){mega.classList.remove('open');mega.setAttribute('aria-hidden','true')}
$('#tProd').addEventListener('click',function(e){e.stopPropagation();mega.classList.contains('open')&&!mega.classList.contains('brands')?closeMega():openMega('prod')});
$('#tBrand').addEventListener('click',function(e){e.stopPropagation();mega.classList.contains('open')&&mega.classList.contains('brands')?closeMega():openMega('brand')});
$('#tProd').addEventListener('mouseenter',function(){if(window.innerWidth>900)openMega('prod')});
$('#tBrand').addEventListener('mouseenter',function(){if(window.innerWidth>900)openMega('brand')});
hdr.addEventListener('mouseleave',function(){if(window.innerWidth>900)closeMega()});
megaCats.addEventListener('mouseover',function(e){var b=e.target.closest('button[data-cat]');if(b)showSubs(b.dataset.cat)});
megaCats.addEventListener('click',function(e){var b=e.target.closest('button[data-cat]');if(b)showSubs(b.dataset.cat)});
document.addEventListener('click',function(e){if(!e.target.closest('#mega'))closeMega()});
$('#burger').addEventListener('click',function(e){e.stopPropagation();if(mega.classList.contains('open')){closeMega()}else{openMega('prod')}});

/* ------------------------------------------------------------------ VISTAS */
function showView(v){
 $('#view-home').classList.toggle('on',v==='home');
 $('#view-pdp').classList.toggle('on',v==='pdp');
 body.dataset.view=v;
 $('#navHome').classList.toggle('cur',v==='home');
 window.scrollTo(0,0);
 updateSticky();
}
function goSection(id){
 closeMega();closeCart();
 if(body.dataset.view!=='home')showView('home');
 var el=document.getElementById(id);if(!el)return;
 setTimeout(function(){window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-170,behavior:'smooth'})},30);
}
var current='g1',pdpQty=1;
function openProduct(id){current=id;pdpQty=1;renderPDP(id);showView('pdp');closeMega()}

/* ------------------------------------------------------------------ FICHA */
function renderPDP(id){
 var p=P[id],m=msiText(p);
 var gal=p.gallery||[p.img];
 var figs=gal.map(function(g,i){return '<figure'+(gal.length===1?' class="one"':'')+'><img src="'+IMG+g+'.jpg" alt="'+esc(p.n)+' · foto '+(i+1)+'" '+(i>1?'loading="lazy"':'')+'></figure>'}).join('');
 var stock='';
 if(p.st){var n=p.st[0],amb=p.st[1]==='amb';
  stock='<div class="stock" style="'+(amb?'color:var(--amber)':'')+'"><i></i>'+n+' disponibles'+(amb?' - Poca disponibilidad':' - ¡Casi agotado!')+'</div><div class="bar"><i style="width:'+Math.min(100,n*3+(n===1?0:2))+'%;'+(amb?'background:var(--amber)':'')+'"></i></div>'}
 else{stock='<div style="height:14px"></div>'}
 var msiLine=m?'<div class="msiline v-p" id="msiLine">'+icon('card')+'<span>'+(p.g?'<b>'+m+'</b> con Mercado Pago':'<b>'+m+'</b> con Mercado Pago')+'</span></div>':'';
 var desc=p.rich?
  '<div class="desc"><span class="tab">Descripción</span><p>La serie Fender Vintera III ofrece recreaciones vintage meticulosamente elaboradas que capturan el aspecto, la sensación y el sonido auténtico de las icónicas guitarras Fender de los años 50, 60 y 70.</p>'+
  '<h3>Destacados</h3><ul><li>Cuerpo de aliso</li><li>Mástil de arce de una pieza con diapasón de arce de radio 7,25" (18,41 cm) y 21 trastes altos vintage</li><li>Mástil con perfil "D" de finales de los años 50</li><li>Pastillas de estilo vintage de finales de los años 50</li><li>Trémolo sincronizado de estilo vintage con selletas de acero doblado</li><li>Clavijas de estilo vintage</li><li>Detalles fieles a la época</li></ul>'+
  '<button class="specs" type="button" data-soon="Las especificaciones técnicas no forman parte de esta propuesta">Especificaciones técnicas <span>+</span></button></div>':'';
 var others=(SECTIONS[p.grp]||[]).filter(function(k){return k!==id}).slice(0,4);
 var related=others.length?'<section class="related v-p" id="related"><h2>'+(p.g?'Otras guitarras que te pueden gustar':'Otros productos que te pueden gustar')+'</h2><div class="car"><div class="row" style="--n:'+Math.max(others.length,3)+'">'+others.map(function(k){return card(P[k])}).join('')+'</div></div></section>':'';
 $('#pdp').innerHTML=
 '<nav class="crumbs" aria-label="Ruta"><a href="#" id="crHome">Inicio</a>'+icon('right')+'<a href="#" data-soon>'+esc(p.cat)+'</a>'+icon('right')+'<span>'+esc(p.n.length>34?p.n.slice(0,32)+' V…':p.n)+'</span></nav>'+
 '<div class="pgrid"><div><div class="gal">'+figs+'</div>'+desc+
  '<div class="paybox"><h3>Pagos y seguridad</h3><h4>Métodos de pago aceptados</h4><span class="pp">PayPal</span><p>Su información de pago se procesa de forma segura. No almacenamos los datos de su tarjeta de crédito ni tenemos acceso a dicha información.</p><p style="margin:0">Todas las transacciones están cifradas y protegidas por los estándares PCI DSS &amp; SSL.</p></div>'+related+'</div>'+
 '<div class="info"><div class="sku">'+esc(p.b)+(p.sku?'  |  SKU: '+p.sku:'')+'</div><h1>'+esc(p.n)+'</h1>'+
  '<div id="pdpPrice"><p class="price">'+priceHTML(p)+'</p>'+msiLine+'</div>'+
  '<p class="tax">Impuestos incluidos. <a href="#" data-soon>Envío SIN COSTO en pedidos desde $2,000</a>.</p>'+stock+
  '<div class="buy"><div class="qty"><button type="button" id="qMinus" aria-label="Menos">−</button><span id="qVal">1</span><button type="button" id="qPlus" aria-label="Más">+</button></div><button class="add" id="pdpAdd" type="button">Añadir al carrito</button></div>'+
  '<button class="paypal" type="button" data-soon="PayPal: no forma parte de esta propuesta">Pagar con <b>Pay<em>Pal</em></b></button>'+
  '<a class="more" href="#" data-soon>Más opciones de pago</a>'+
  '<div class="msibox">'+icon('card')+'<span>Compra a 6 MSI, o hasta 12 meses sin tarjeta con Mercado Pago.</span></div>'+
  '<div class="acc open"><button type="button" aria-expanded="true"><span>'+icon('truck')+'Envíos a todo México</span>'+icon('chev')+'</button><div class="c"><b>Gratis</b> en pedidos desde $2,000</div></div>'+
  '<div class="acc"><button type="button" aria-expanded="false"><span>'+icon('return')+'Cambios, Devoluciones, Garantías</span>'+icon('chev')+'</button><div class="c">Consulta nuestra política de garantía y devolución en el pie de página.</div></div>'+
  '<div class="share">Compartir: <span>𝕏</span><span style="font-weight:700">f</span><span>℗</span></div>'+
 '</div></div>';
 $('#satImg').src=IMG+p.img+'.jpg';$('#satName').textContent=p.n;$('#satPrice').innerHTML=priceHTML(p).replace(/<sup>(\d+)<\/sup>/,'.$1');
 mountPins();
 var addBtn=$('#pdpAdd');
 if('IntersectionObserver' in window){if(window._io)window._io.disconnect();window._io=new IntersectionObserver(function(es){window._atcVisible=es[0].isIntersecting;updateSticky()},{rootMargin:'-130px 0px 0px 0px'});window._io.observe(addBtn)}
}
function updateSticky(){$('#stickyAtc').classList.toggle('on',body.dataset.view==='pdp'&&window._atcVisible===false&&!$('#cart').classList.contains('on'))}
$('#pdp').addEventListener('click',function(e){
 var t=e.target;
 if(t.id==='crHome'){e.preventDefault();showView('home')}
 if(t.id==='qMinus'){pdpQty=Math.max(1,pdpQty-1);$('#qVal').textContent=pdpQty}
 if(t.id==='qPlus'){pdpQty=Math.min(9,pdpQty+1);$('#qVal').textContent=pdpQty}
 if(t.id==='pdpAdd'){addToCart(current,pdpQty);openCart()}
 var acc=t.closest('.acc button');if(acc){var a=acc.parentNode;a.classList.toggle('open');acc.setAttribute('aria-expanded',a.classList.contains('open'))}
});
$('#satAdd').addEventListener('click',function(){addToCart(current,pdpQty);openCart()});

/* ------------------------------------------------------------------ CARRITO */
var CART=[{id:'tuner',q:1}],LIKE_I=0;
var FREE=2000;
function cartSub(){return CART.reduce(function(s,i){return s+P[i.id].p*i.q},0)}
function cartQty(){return CART.reduce(function(s,i){return s+i.q},0)}
function addToCart(id,q){var f=CART.filter(function(i){return i.id===id})[0];if(f)f.q+=q;else CART.push({id:id,q:q});renderCart()}
function xsCard(p){return '<div class="xs"><img src="'+IMG+p.img+'.jpg" alt="" loading="lazy"><div><div class="n">'+esc(p.n)+'</div><div class="p">'+priceHTML(p)+'</div><button class="a" data-add="'+p.id+'" type="button">Añadir al carrito</button></div></div>'}
function renderCart(){
 var sub=cartSub(),rem=Math.max(0,FREE-sub),pct=Math.min(100,sub/FREE*100);
 $('#cartCount').textContent=cartQty();
 $('#cartCount').style.display=cartQty()?'':'none';
 var inCart=CART.map(function(i){return i.id});
 var accA=['teclado','guitarra','amp','cable'],accP=['cable'];
 var likeA=['guitarra','teclado','amp','cable'],likeP=['teclado','guitarra','amp'];
 var acc=(isP()?accP:accA).filter(function(k){return inCart.indexOf(k)<0});
 var like=(isP()?likeP:likeA).filter(function(k){return inCart.indexOf(k)<0});
 if(LIKE_I>=like.length)LIKE_I=0;
 var html='';
 if(!CART.length){html='<div class="empty">Tu carrito está vacío.</div>'}
 else{
  html+='<div class="pad"><a class="obs" href="#" data-soon>Añadir observaciones del pedido</a><div class="note">Impuestos incluidos, <u>envío</u> calculado al finalizar la compra.</div>'+
   '<button class="pay" type="button" data-soon="El pago no forma parte de esta propuesta">'+icon('basket')+' Pagar - '+priceHTML({p:sub,dec:null},sub)+' MXN</button>'+
   '<button class="paypal" type="button" data-soon="PayPal: no forma parte de esta propuesta"><b>Pay<em>Pal</em></b></button></div>'+
   '<div class="ship">'+(rem>0?'Agrega <b>$ '+fmt(rem)+'<sup style="font-size:.6em;vertical-align:top">00</sup></b> para obtener <b>envío gratuito</b>':'¡Tu pedido tiene <b>envío gratuito</b>!')+'<div class="t"><i style="width:'+pct+'%"></i></div></div>';
  html+=CART.map(function(it){var p=P[it.id];return '<div class="citem"><img src="'+IMG+p.img+'.jpg" alt=""><div><div class="b">'+esc(p.b)+'</div><div class="nm">'+esc(p.n)+'</div><div class="p">'+priceHTML(p)+'</div><div class="ctl"><div class="qty lite"><button type="button" data-q="-1" data-id="'+it.id+'" aria-label="Menos">−</button><span>'+it.q+'</span><button type="button" data-q="1" data-id="'+it.id+'" aria-label="Más">+</button></div><button class="del" data-del="'+it.id+'" type="button" aria-label="Quitar">'+icon('trash')+'</button></div></div><div class="tp">'+priceHTML({p:p.p*it.q,dec:null},p.p*it.q)+'</div></div>'}).join('');
  if(acc.length){html+='<h3 class="s" id="cartAcc">Accesorios</h3>'+acc.map(function(k){return xsCard(P[k])}).join('')}
  else{html+='<h3 class="s" id="cartAcc">Accesorios</h3><div class="empty" style="padding:6px 28px 12px;text-align:left">Ya agregaste el accesorio sugerido.</div>'}
  if(like.length){var p=P[like[LIKE_I]];html+='<div class="like"><h3>Te pueden interesar...</h3><span><a href="#" data-like="-1" style="text-decoration:none">‹</a><a href="#" data-like="1" style="text-decoration:none">›</a></span></div>'+xsCard(p)}
  html+='<div style="height:30px"></div>';
 }
 $('#cartBody').innerHTML=html;
 mountPins();
}
function openCart(){renderCart();$('#cart').classList.add('on');$('#scrim').classList.add('on');$('#cart').setAttribute('aria-hidden','false');updateSticky()}
function closeCart(){$('#cart').classList.remove('on');$('#scrim').classList.remove('on');$('#cart').setAttribute('aria-hidden','true');updateSticky()}
$('#cartBtn').addEventListener('click',openCart);
$('#cartX').addEventListener('click',closeCart);
$('#scrim').addEventListener('click',closeCart);
$('#cartBody').addEventListener('click',function(e){
 var t=e.target;
 var a=t.closest('[data-add]');if(a){addToCart(a.dataset.add,1);return}
 var q=t.closest('[data-q]');if(q){var it=CART.filter(function(i){return i.id===q.dataset.id})[0];it.q+=parseInt(q.dataset.q,10);if(it.q<1)CART.splice(CART.indexOf(it),1);renderCart();return}
 var d=t.closest('[data-del]');if(d){CART=CART.filter(function(i){return i.id!==d.dataset.del});renderCart();return}
 var l=t.closest('[data-like]');if(l){e.preventDefault();LIKE_I+=parseInt(l.dataset.like,10);if(LIKE_I<0)LIKE_I=2;renderCart();return}
});

/* ------------------------------------------------------------------ CAPA DE PROPUESTA */
var panel=$('#panel'),list=$('#panelList');
function buildPanel(){
 list.innerHTML=CHANGES.map(function(c){
  return '<div class="chg" id="chg'+c.id+'"><button type="button" aria-expanded="false"><span class="n">'+c.id+'</span><span><span class="t">'+c.t+'</span><br><span class="w">'+c.w+'</span></span></button>'+
  '<div class="body"><h4>Hoy</h4><p>'+c.hoy+'</p><h4>Propuesta</h4><p>'+c.cambio+'</p><h4>Por qué</h4><p class="why">'+c.why+'</p>'+
  '<div class="acts"><button type="button" data-see="'+c.id+'">Verlo en la página</button><button type="button" class="o" data-cmp="'+c.id+'">Ver cómo está hoy</button></div></div></div>'}).join('');
}
function openPanel(id){
 panel.classList.add('open');panel.setAttribute('aria-hidden','false');$('#openPanel').setAttribute('aria-expanded','true');
 if(id)expand(id);
}
function closePanel(){panel.classList.remove('open');panel.setAttribute('aria-hidden','true');$('#openPanel').setAttribute('aria-expanded','false')}
function expand(id){$$('.chg').forEach(function(c){var on=c.id==='chg'+id;c.classList.toggle('open',on);c.querySelector('button').setAttribute('aria-expanded',on)});var el=$('#chg'+id);if(el)setTimeout(function(){el.scrollIntoView({block:'nearest',behavior:'smooth'})},60)}
function goChange(id){
 var c=CHANGES[id-1];
 if(c.view==='cart'){showView(body.dataset.view);openCart()}
 else{closeCart();if(c.view==='pdp'){if(body.dataset.view!=='pdp'||!P[current].g)openProduct('g1');else showView('pdp')}else{showView('home')}}
 if(window.innerWidth<=900)closePanel();
 setTimeout(function(){
  var el=$(c.a);if(!el)return;
  var tgt=$(c.hl||c.a)||el;
  if(c.view!=='cart'){window.scrollTo({top:Math.max(0,tgt.getBoundingClientRect().top+window.scrollY-240),behavior:'smooth'})}
  else{var cb=$('#cartBody');cb.scrollTo({top:Math.max(0,el.offsetTop-260),behavior:'smooth'})}
  tgt.classList.remove('hl');void tgt.offsetWidth;tgt.classList.add('hl');setTimeout(function(){tgt.classList.remove('hl')},2200);
 },c.view==='cart'?350:120);
}
function mountPins(){
 CHANGES.forEach(function(c){
  var el=$(c.a);if(!el)return;
  if(el.querySelector(':scope > .pin[data-c="'+c.id+'"]'))return;
  if(getComputedStyle(el).position==='static')el.style.position='relative';
  var b=document.createElement('button');b.type='button';b.className='pin';b.dataset.c=c.id;b.textContent=c.id;b.setAttribute('aria-label','Cambio '+c.id+': '+c.t);
  var p=c.pos||{};
  if(p.l!=null)b.style.left=p.l+'px';if(p.r!=null)b.style.right=p.r+'px';if(p.t!=null)b.style.top=p.t+'px';
  if(p.l==null&&p.r==null)b.style.left='-12px';
  el.appendChild(b);
 });
}
document.addEventListener('click',function(e){
 var pin=e.target.closest('.pin');
 if(pin){e.preventDefault();e.stopPropagation();var id=+pin.dataset.c;openPanel(id);var c=CHANGES[id-1];var tgt=$(c.hl||c.a);if(tgt){tgt.classList.remove('hl');void tgt.offsetWidth;tgt.classList.add('hl');setTimeout(function(){tgt.classList.remove('hl')},2200)}return}
 var ch=e.target.closest('.chg>button');if(ch){var id2=ch.parentNode.id.replace('chg','');if(ch.parentNode.classList.contains('open')){ch.parentNode.classList.remove('open');ch.setAttribute('aria-expanded','false')}else expand(id2);return}
 var see=e.target.closest('[data-see]');if(see){setMode('p');goChange(+see.dataset.see);return}
 var cmp=e.target.closest('[data-cmp]');if(cmp){var now=body.dataset.mode;setMode(now==='p'?'a':'p');cmp.textContent=body.dataset.mode==='a'?'Volver a la propuesta':'Ver cómo está hoy';return}
});
$('#openPanel').addEventListener('click',function(){panel.classList.contains('open')?closePanel():openPanel(1)});
$('#panelX').addEventListener('click',closePanel);
$('#pinsToggle').addEventListener('change',function(){body.dataset.pins=this.checked?'on':'off'});

function setMode(m){
 body.dataset.mode=m;
 $('#mA').setAttribute('aria-pressed',m==='a');$('#mP').setAttribute('aria-pressed',m==='p');
 $('#modeNote').textContent=m==='a'?'Viendo: sitio actual':'Viendo: propuesta';
 refreshFinder();renderCart();
 if(!$('#cart').classList.contains('on'))$('#cartBody').scrollTop=0;
 $$('[data-cmp]').forEach(function(b){b.textContent=m==='a'?'Volver a la propuesta':'Ver cómo está hoy'});
}
$('#mA').addEventListener('click',function(){setMode('a')});
$('#mP').addEventListener('click',function(){setMode('p')});

/* ------------------------------------------------------------------ GENERAL */
document.addEventListener('click',function(e){
 var s=e.target.closest('[data-soon]');if(s){e.preventDefault();toast(s.dataset.soon||'Esta sección no forma parte de la propuesta');return}
 var w=e.target.closest('[data-wa]');if(w){e.preventDefault();toast('En el sitio real aquí abre el chat de WhatsApp con la tienda');return}
 var g=e.target.closest('[data-go]');if(g){e.preventDefault();goSection(g.dataset.go);return}
 var o=e.target.closest('[data-open]');if(o){e.preventDefault();openProduct(o.dataset.open);return}
});
$('#waFab').addEventListener('click',function(){toast('En el sitio real aquí abre el chat de WhatsApp con la tienda')});
$('#chatX').addEventListener('click',function(){$('#chat').classList.add('off')});
$('#logoHome').addEventListener('click',function(e){e.preventDefault();showView('home')});
$('#navHomeA').addEventListener('click',function(e){e.preventDefault();showView('home')});
$('#toTop').addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});
$$('[data-form]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();toast('Gracias. Esto es solo una vista de ejemplo.')})});
$('#searchForm').addEventListener('submit',function(e){e.preventDefault();toast('La búsqueda no forma parte de esta propuesta')});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeCart();closePanel();closeMega();$('#welcome').classList.remove('open')}});
window.addEventListener('scroll',function(){hdr.classList.toggle('min',window.scrollY>140)},{passive:true});
var pm=$('#promoMsg');setInterval(function(){pm.classList.toggle('alt')},5200);

/* bienvenida */
function closeWelcome(){$('#welcome').classList.remove('open');try{sessionStorage.setItem('cm-welcome','1')}catch(e){}}
$('#wGo').addEventListener('click',closeWelcome);
$('#welcome').addEventListener('click',function(e){if(e.target.id==='welcome')closeWelcome()});

/* ------------------------------------------------------------------ ARRANQUE */
renderHome();buildPanel();renderPDP('g1');refreshFinder();
var qs=new URLSearchParams(location.search);
setMode(qs.get('modo')==='actual'?'a':'p');
renderCart();mountPins();
var seen=false;try{seen=sessionStorage.getItem('cm-welcome')==='1'}catch(e){}
if(qs.get('cambio')){var n=parseInt(qs.get('cambio'),10);if(n>=1&&n<=6){setTimeout(function(){openPanel(n);goChange(n)},400)}}
else if(!seen){$('#welcome').classList.add('open')}
})();
