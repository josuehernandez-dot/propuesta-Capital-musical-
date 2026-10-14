/* Capital Musical · réplica del sitio actual + propuesta de rediseño */
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
 tuner:{b:'YAMAHA',n:'Afinador Digital Yamaha YTC5 Con Clip Negro',p:499,img:'cart-tuner',cart:1,cat:'Accesorios',grp:'acc'},
 teclado:{b:'YAMAHA',n:'Teclado Portátil Yamaha PSR-E483SET 61 Teclas',p:9299,img:'cart-teclado',cart:1,cat:'Accesorios',grp:'acc',inst:1},
 guitarra:{b:'Fender',n:'Guitarra Electroacústica Fender Redondo Standard CE Fiesta Red',p:4999,img:'cart-guitarra',cart:1,cat:'Accesorios',grp:'acc',inst:1},
 amp:{b:'BOSS',n:'Amplificador Boss AC-22LX Para Guitarra Acústica',p:8199,img:'cart-amp',cart:1,cat:'Accesorios',grp:'acc',inst:1},
 cable:{b:'Fender',n:'Cable Fender De Parcheo 15 Cm Deluxe Series Tweed Negro',p:340,img:'cart-cable',cart:1,cat:'Accesorios',grp:'acc'}
};
Object.keys(P).forEach(function(k){P[k].id=k});
var SECTIONS={acc:['tuner','teclado','guitarra','amp','cable'],new:['na1','na2','na3','na4','na5'],guit:['g1','g2','g3','g4'],ped:['p1','p2','p3','p4','p5'],dr:['d1','d2','d3','d4','d5']};

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
 {id:1,t:'Buscador debajo del hero, con botón siempre activo',w:'Inicio',view:'home',a:'#finder',pos:{l:-10,t:-12},
  hoy:'El buscador flota sobre la foto del hero y tapa a la modelo. El botón BUSCAR se ve rosa pálido, como desactivado, y el segundo selector queda gris hasta que eliges el primero.',
  cambio:'El mismo buscador pasa a una barra debajo del hero: la foto se ve completa, BUSCAR va en el rojo naranja de la marca y el segundo selector avisa «Primero elige el tipo».',
  why:'Hipótesis: 9 de cada 10 visitas llegan desde celular, donde una tarjeta sobre la foto estorba y un botón pálido se lee como «no disponible». Una barra propia, completa y clara invita a usar la única ayuda guiada del inicio.'},
 {id:2,t:'Franja de confianza en 4 tarjetas, en lenguaje claro',w:'Inicio',view:'home',a:'#trustCards ul',pos:{l:-12,t:-16},
  hoy:'Una franja delgada sobre el hero dice «Tu compra segura y protegida · PCI DSS & SSL», un término técnico. Las 3 tiendas físicas aparecen hasta el final de la página.',
  cambio:'Cuatro tarjetas bajo el buscador: Envíos a todo México, Compra segura (no guardamos los datos de tu tarjeta), 3 tiendas físicas y Asesoría por WhatsApp. Las dos últimas son botones.',
  why:'Hipótesis: 80.2% de las sesiones llega desde redes y no conoce la marca. Las tiendas físicas son la prueba de confianza más fuerte de Capital Musical y hoy casi no se ven.'},
 {id:3,t:'Productos sin recuadro blanco, con panel uniforme',w:'Todo el sitio',view:'home',a:'#rowGuit .card:nth-child(2) .im',pos:{l:8,t:8},
  hoy:'Cada foto trae su propio fondo blanco. Sobre las secciones grises se ven recuadros blancos de distinto tamaño y las fotos se sienten pegadas, no parte del diseño.',
  cambio:'Todas las fotos de producto (inicio, ficha, carrito y sucursales) van recortadas sin fondo sobre un mismo panel suave. Las tarjetas se ven parejas, sin importar de dónde venga la foto.',
  why:'Hipótesis: un catálogo con fondos distintos se lee desordenado y poco profesional. Con un panel uniforme el ojo compara producto contra producto, que es lo que se hace antes de elegir.'},
 {id:4,t:'Tarjeta de producto: mensualidad, stock amable y «Añadir»',w:'Inicio',view:'home',a:'#rowGuit .card:first-child .pr',hl:'#rowGuit .card:first-child',pos:{r:2,t:8},
  hoy:'Solo muestran el precio total y casi todas dicen «Muy poca disponibilidad (1 unidad)» en rojo oscuro. Para comprar hay que abrir la ficha.',
  cambio:'Bajo el precio aparece «6 MSI de $X» en guitarras y «Hasta 12 meses sin tarjeta» en productos de más de $3,000. El aviso de stock dice «¡Última pieza!» en naranja y hay un botón + para añadir al carrito sin abrir la ficha.',
  why:'Hipótesis: ver $20,999 de golpe frena; ver la mensualidad lo acerca. «Muy poca disponibilidad» suena a problema y «Última pieza» da el mismo dato y empuja a decidir. Con solo 1.14% de las sesiones llegando al carrito, quitar un paso ayuda.'},
 {id:5,t:'Marcas: tarjetas con foto redondeada',w:'Inicio',view:'home',a:'#brandTiles',pos:{l:-14,t:-16},
  hoy:'Seis fotos cuadradas con el nombre debajo y «Ver colección».',
  cambio:'Las mismas seis marcas en tarjetas de esquinas redondeadas, con un acercamiento al pasar el cursor y la flecha de «Ver colección» en rojo.',
  why:'Hipótesis: la marca es la entrada más fuerte para quien ya sabe qué busca (Fender, Roland, Boss). Una tarjeta con aspecto de botón invita más al clic que una foto suelta.'},
 {id:6,t:'Colecciones en bloques grandes en vez de círculos',w:'Inicio',view:'home',a:'#collTiles',pos:{l:-14,t:-16},
  hoy:'Seis círculos pequeños con foto blanca y el nombre debajo.',
  cambio:'Seis bloques oscuros con el instrumento recortado, el nombre grande y «Ver todo». Guitarras Eléctricas, Pedales y Batería Acústica siguen llevando a su sección.',
  why:'Hipótesis: las colecciones son el atajo más directo del inicio y hoy son lo más pequeño de la página. Bloques más grandes se ven bien en celular y se tocan mejor.'},
 {id:7,t:'Carruseles: título a la izquierda, «Ver todos» visible y flechas',w:'Inicio',view:'home',a:'#hNew',pos:{l:-34,t:2},
  hoy:'El título va centrado y «Ver todos» es un texto subrayado. Para ver más productos hay que arrastrar con el dedo o el mouse, sin ninguna señal de que se puede.',
  cambio:'Título a la izquierda con una barra roja, «Ver todos →» a la derecha en rojo y flechas para avanzar cuando hay más productos de los que caben en pantalla.',
  why:'Hipótesis: un título centrado y un texto subrayado no se leen como botón. «Ver todos» a la derecha es el lugar donde se espera encontrarlo, y las flechas hacen evidente que hay más productos.'},
 {id:8,t:'Banner de Mercado Pago más limpio',w:'Inicio',view:'home',a:'#mpBox',pos:{r:10,t:10},
  hoy:'Logo sobre fondo blanco y un bloque celeste con texto largo en mayúsculas.',
  cambio:'Una sola tarjeta celeste con el logo en una etiqueta blanca, el mensaje principal más corto de leer y las mensualidades como dato destacado.',
  why:'Hipótesis: la mensualidad es el argumento que más baja el miedo a pagar un instrumento caro. Debe leerse en un segundo, junto a las guitarras.'},
 {id:9,t:'Blog: tarjetas claras con «Leer guía»',w:'Inicio',view:'home',a:'#posts',pos:{l:-14,t:-16},
  hoy:'Tres bloques oscuros con título en cian y mayúsculas; el texto largo se corta a media frase.',
  cambio:'Tarjetas claras con foto, título en negro y una invitación clara: «Leer guía →».',
  why:'Hipótesis: los consejos del guitar-tech son contenido de confianza y de compra. Un título legible y un botón claro ayudan a que se lean.'},
 {id:10,t:'Newsletter con el cupón de 5% al frente, y ayuda con íconos',w:'Inicio',view:'home',a:'#newsBox',pos:{l:-14,t:-16},
  hoy:'Un bloque oscuro con el texto del cupón en una línea y el campo de correo. Las tarjetas de ayuda y contacto son solo texto.',
  cambio:'El 5% se muestra como una insignia grande junto al formulario, y el botón dice «Quiero mi cupón». Las tarjetas de ayuda y contacto llevan ícono.',
  why:'Hipótesis: el cupón es la razón para dejar el correo y hoy es texto chico. Mostrarlo como premio aumenta las suscripciones, que luego trabajan en email.'},
 {id:11,t:'Tiendas en el inicio: horario, estado y botones',w:'Inicio',view:'home',a:'#hSt',pos:{l:-14,t:-16},
  hoy:'Tres fotos grandes con «Ver ubicación». No dicen si la tienda está abierta ni a qué hora cierra.',
  cambio:'Tres tarjetas con foto, «Abierto ahora» o «Cerrado» según la hora, y los botones «Ver tienda» y «Cómo llegar».',
  why:'Hipótesis: quien está pensando en visitar la tienda necesita saber si puede ir hoy. Es la pregunta que hoy lo manda a buscar a Google.'},
 {id:12,t:'Páginas de sucursal rediseñadas',w:'Sucursales',view:'store',a:'#storeHero',pos:{r:20,t:14},
  hoy:'Título con la dirección y los horarios en texto corrido, redes y teléfono, fotos, mapa y accesorios. En Cuernavaca y Huatulco el enlace del teléfono está roto.',
  cambio:'Encabezado con estado en vivo (Abierto ahora), botones de Cómo llegar, WhatsApp y Llamar, tarjetas de horario, dirección y contacto, qué encontrarás en la tienda, mapa y otras sucursales. Cuernavaca muestra sus servicios técnicos como tarjetas.',
  why:'Hipótesis: quien llega a una sucursal ya decidió visitar. Lo que necesita es llegar y contactar sin buscar, y en celular los datos hoy quedan en texto corrido y un enlace roto.'},
 {id:13,t:'Ficha: mensualidad junto al precio, galería y otras opciones',w:'Ficha de producto',view:'pdp',a:'#pdpPrice',pos:{r:0,t:4},
  hoy:'La opción de Mercado Pago está en un bloque azul debajo de los botones. Las fotos van en recuadros blancos y la ficha termina en «Pagos y seguridad», sin productos parecidos.',
  cambio:'Justo debajo del precio se agrega «6 MSI de $4,923 con Mercado Pago». La galería usa el mismo panel suave y al final hay un carrusel «Otras guitarras que te pueden gustar».',
  why:'Hipótesis: para un instrumento de $29,540 la mensualidad es lo que más baja el miedo a pagar y hoy queda fuera de la primera pantalla. Quien llega desde un anuncio a una guitarra que no le convence hoy solo puede volver al menú.'},
 {id:14,t:'Carrito: sugerencias del mismo tipo',w:'Carrito',view:'cart',a:'#cartAcc',pos:{r:0,t:-4},
  hoy:'Con un afinador de $499 en el carrito, «Accesorios» ofrece un teclado de $9,299, una guitarra de $4,999 y un amplificador de $8,199: instrumentos, de 10 a 20 veces más caros.',
  cambio:'«Accesorios» solo muestra accesorios de precio parecido (el cable de $340). Los instrumentos pasan a «Te pueden interesar». Al añadir un accesorio, la barra de envío gratis se actualiza.',
  why:'Hipótesis: en el carrito la persona ya decidió comprar; sugerencias muy caras la distraen del botón PAGAR. Un accesorio barato sube el pedido sin romper la decisión y acerca el envío gratis.'}
];

var POSTS=[
 {img:'blog-cuerdas',t:'¿Cada cuánto debes cambiar las cuerdas de tu guitarra o bajo? 🎸⚡',p:'Por: Antonio Bautista, Guitar-Tech de Capital Musical. ¿Tu guitarra ya no suena tan brillante como antes? ¿Sientes que cuesta más afinarla o tocarla? Muchos suelen...'},
 {img:'blog-pedalboard',t:'Cómo cablear tu pedal board',p:'Domina tu Signal Path. 🎸🔥 Por: Antonio Bautista, Guitar-Tech de Capital Musical. ¿Cansado del ruido y la pérdida de tono? Vamos a cablear tu pedalera como un profesional. La...'},
 {img:'blog-ns2',t:'El problema del "hum" y cómo eliminarlo con el Boss NS-2 🎸⚡',p:'Por: Antonio Bautista, Guitar-Tech de Capital Musical. Si tocas guitarra eléctrica, seguramente ya te pasó: conectas todo a tu rig, activas la distorsión... y aparece ese molesto zumbido de fondo. Si, hablamos...'}
];


/* ------------------------------------------------------------------ SUCURSALES (datos públicos del sitio) */
var STORES={
 aca:{id:'aca',slug:'acapulco',name:'Acapulco',addr:['Plaza Yamaha, Vasco de Gama 295, 1er piso','Esquina Cristóbal Colón, Fracc. Costa Azul, CP 39850','Acapulco de Juárez, Gro.'],map:'Plaza Yamaha, Vasco de Gama 295, Costa Azul, Acapulco de Juárez, Guerrero',wk:[630,1170],sat:[600,900],phone:'744 355 7464',ig:'@capitalmusical.aca',fb:'capitalmusicaltiendaaca',tt:'@capitalmusical.mx',caps:['Guitarras y Bajos']},
 cue:{id:'cue',slug:'cuernavaca',name:'Cuernavaca',addr:['Citi Plaza, Av. Río Mayo #200, Local 7','Esquina Calle Chilpancingo, Col. Vista Hermosa, CP 62290','Cuernavaca, Morelos'],map:'Citi Plaza, Av. Río Mayo 200, Vista Hermosa, Cuernavaca, Morelos',wk:[600,1140],sat:[600,900],phone:'777 111 0149',ig:'@capitalmusical.mx',fb:'@capitalmusicalcuerna',tt:'@capitalmusical.mx',caps:['Guitarras, pedales y efectos','Pianos y Sintetizadores'],serv:1},
 htl:{id:'htl',slug:'huatulco',name:'Huatulco',addr:['Palma Real 405-Sector H','CP 70987, Bahías de Huatulco, Oax.'],map:'Palma Real 405, Sector H, Bahías de Huatulco, Oaxaca',wk:[600,1140],sat:[600,900],phone:'958 111 4152',ig:'@capitalmusical.htl',fb:'@capitalmusicalhtl',tt:'@capitalmusical.mx',caps:['Guitarras, Pianos, Accesorios','Baterías']}
};
var STORE_ORDER=['aca','cue','htl'];
var SERV=[['Cuerpo',['Lubricación de potenciómetros','Apantallamiento de cavidades','Limpieza general']],['Pala',['Cambio y fabricación de nut y cejuela','Ajuste de truss rod']],['Mástil',['Nivelado y coronado','Reentrastado','Pulido de trastes']],['Puente',['Ajuste general','Floyd Rose','Octavación','Altura de pastillas','Cambio de cuerdas']]];
var DIAS=['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
function hm(m){var h=Math.floor(m/60),mm=m%60;return (h<10?'0':'')+h+':'+(mm<10?'0':'')+mm}
function nowMX(){
 var d=0,m=0;
 try{var f=new Intl.DateTimeFormat('en-US',{timeZone:'America/Mexico_City',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date()),o={};
  f.forEach(function(x){o[x.type]=x.value});d=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(o.weekday);m=(parseInt(o.hour,10)%24)*60+parseInt(o.minute,10)}
 catch(e){var n=new Date();d=n.getDay();m=n.getHours()*60+n.getMinutes()}
 return {d:d,m:m}}
function hoursFor(s,d){return d>=1&&d<=5?s.wk:(d===6?s.sat:null)}
function status(s){
 var n=nowMX(),r=hoursFor(s,n.d);
 if(n.d===0)return {k:'na',txt:'Hoy domingo: sin horario publicado'};
 if(r&&n.m>=r[0]&&n.m<r[1])return {k:'open',txt:'Abierto ahora · cierra a las '+hm(r[1])};
 if(r&&n.m<r[0])return {k:'closed',txt:'Cerrado ahora · abre hoy a las '+hm(r[0])};
 for(var i=1;i<=7;i++){var dd=(n.d+i)%7,rr=hoursFor(s,dd);if(rr)return {k:'closed',txt:'Cerrado ahora · abre '+(i===1?'mañana':'el '+DIAS[dd])+' a las '+hm(rr[0])}}
 return {k:'closed',txt:'Cerrado ahora'}}
function mapsLink(s){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(s.map)}
function telDigits(s){return '+52'+s.phone.replace(/\D/g,'')}

/* ------------------------------------------------------------------ UTIL */
function fmt(n){return n.toLocaleString('en-US')}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function priceHTML(p,n){n=(n==null?p.p:n);return '$ '+fmt(n)+'<sup>'+(n===p.p&&p.dec?p.dec:'00')+'</sup>'}
function isP(){return body.dataset.mode==='p'}
var toastT;
function toast(msg){var t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('show')},2600)}
function dimg(name,alt,extra){return '<img class="v-a" src="'+IMG+name+'.jpg" alt="'+alt+'" '+(extra||'')+'><img class="v-p" src="'+IMG+'cut/'+name+'.webp" alt="'+alt+'" '+(extra||'')+'>'}
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
  '<div class="im" data-open="'+p.id+'">'+tag+dimg(p.img,esc(p.n),'loading="lazy" width="226" height="226"')+'</div>'+
  '<div class="br">'+esc(p.b)+'</div>'+
  '<a class="nm" href="#" data-open="'+p.id+'">'+esc(p.n)+'</a>'+
  '<div class="pr"><span>'+priceHTML(p)+'</span>'+(p.sold?'':'<button class="qa v-p" type="button" data-qadd="'+p.id+'" aria-label="Añadir al carrito: '+esc(p.n)+'">'+icon('plus')+'</button>')+'</div>'+
  (m?'<div class="msi v-p">'+icon('card')+'<span>'+(p.g?'<span>'+m+'</span>':m)+'</span></div>':'')+
  stockA(p)+stockP(p)+'</article>'}

/* ------------------------------------------------------------------ RENDER INICIO */
function storeCard(s){var st=status(s);
 return '<article class="scard v-p"><a class="ph" href="#" data-store="'+s.id+'" aria-label="Ver tienda '+s.name+'"><img src="'+IMG+'tienda-'+s.slug+'-foto.jpg" alt="Tienda '+s.name+'" loading="lazy" width="404" height="445"></a>'+
  '<div class="in"><div class="live '+st.k+'"><i></i>'+st.txt+'</div><h3>Tienda '+s.name+'</h3><p class="ad">'+esc(s.addr[0])+'</p>'+
  '<p class="hr">'+icon('clock')+'<span>L–V '+hm(s.wk[0])+' a '+hm(s.wk[1])+' · Sáb '+hm(s.sat[0])+' a '+hm(s.sat[1])+'</span></p>'+
  '<div class="bt"><a class="b red" href="#" data-store="'+s.id+'">Ver tienda</a><a class="b ghost" target="_blank" rel="noopener" href="'+mapsLink(s)+'">'+icon('pin')+' Cómo llegar</a></div></div></article>'}
function renderStoreTiles(){
 $('#storeTiles').innerHTML=STORE_ORDER.map(function(k){var s=STORES[k];return '<a class="stile v-a" href="#" data-store="'+s.id+'"><img src="'+IMG+'tienda-'+s.slug+'.jpg" alt="Tienda '+s.name+'" loading="lazy" width="404" height="553"></a>'+storeCard(s)}).join('')}
function wireCarousels(root){
 $$('.car',root).forEach(function(c){
  if(c.dataset.w)return;c.dataset.w='1';
  var row=c.querySelector('.row'),wrap=null;
  if(row){wrap=document.createElement('div');wrap.className='carwrap';c.parentNode.insertBefore(wrap,c);wrap.appendChild(c);
   wrap.insertAdjacentHTML('beforeend','<button class="arr l v-p" type="button" aria-label="Productos anteriores">'+icon('left')+'</button><button class="arr r v-p" type="button" aria-label="Más productos">'+icon('right')+'</button>');
   wrap.addEventListener('click',function(e){var b=e.target.closest('.arr');if(!b)return;c.scrollBy({left:(b.classList.contains('r')?1:-1)*c.clientWidth*.82,behavior:'smooth'})})}
  var pr=(wrap||c).parentNode.querySelector('.prog i');
  function upd(){var max=c.scrollWidth-c.clientWidth;
   if(pr&&c.scrollWidth){var w=Math.max(18,c.clientWidth/c.scrollWidth*100);pr.style.width=w+'%';pr.style.left=(max>0?(c.scrollLeft/max)*(100-w):0)+'%'}
   if(pr)pr.parentNode.classList.toggle('none',c.scrollWidth>0&&max<=4);
   if(wrap){wrap.classList.toggle('can',max>4);wrap.classList.toggle('s0',c.scrollLeft<4);wrap.classList.toggle('s1',c.scrollLeft>=max-4)}}
  c.addEventListener('scroll',upd,{passive:true});window.addEventListener('resize',upd);c._upd=upd;upd()})
}
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
 var cc=[['Guitarras Eléctricas','elec'],['Guitarras Acústicas','acus'],['Guitarras Electroacústicas','electroac'],['Bajo','bajo'],['Batería Acústica','bateria'],['Batería Eléctrica','bateria-elec']];
 $('#collTiles').innerHTML=cc.map(function(c){return '<a class="ctl2'+(c[1]==='elec'||c[1]==='acus'||c[1]==='electroac'||c[1]==='bajo'?' rot':'')+'" href="#" '+(GOTO[c[0]]?'data-go="'+GOTO[c[0]]+'"':'data-soon')+'><span class="nm2">'+c[0]+'</span><span class="go2">Ver todo '+icon('right')+'</span><img src="'+IMG+'cut/cat-'+c[1]+'-c.webp" alt="" loading="lazy"></a>'}).join('');
 renderStoreTiles();
 $('#fCats').innerHTML=Object.keys(MENU).filter(function(k){return k!=='Violines'}).map(function(k){return '<li><a href="#" data-soon>'+(k==='Batería'?'Batería':k)+'</a></li>'}).join('');
 $('#fBrands').innerHTML=['AUREAL','BOSS','D’Angelico','Deviser','Fender','GRETSCH','Jackson','Martin & Co.','Roland','SHURE','Squier','YAMAHA'].map(function(b){return '<li><a href="#" data-soon>'+b+'</a></li>'}).join('');
 $('#searchCat').innerHTML=SEARCH_OPTS.map(function(o){return '<option>'+o+'</option>'}).join('');
 wireCarousels(document);
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
var curStore='cue';
function showView(v){
 $('#view-home').classList.toggle('on',v==='home');
 $('#view-pdp').classList.toggle('on',v==='pdp');
 $('#view-store').classList.toggle('on',v==='store');
 body.dataset.view=v;
 $$('nav.main .right a[data-store]').forEach(function(a){a.classList.toggle('cur',v==='store'&&a.dataset.store===curStore)});
 if(v==='home')renderStoreTiles();
 $('#navHome').classList.toggle('cur',v==='home');
 window.scrollTo(0,0);
 updateSticky();
 setTimeout(function(){$$('.car').forEach(function(c){c._upd&&c._upd()})},60);
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
 var figs=gal.map(function(g,i){return '<figure'+(gal.length===1?' class="one"':'')+'>'+dimg(g,esc(p.n)+' · foto '+(i+1),(i>1?'loading="lazy"':''))+'</figure>'}).join('');
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
 updSat();$('#satName').textContent=p.n;$('#satPrice').innerHTML=priceHTML(p).replace(/<sup>(\d+)<\/sup>/,'.$1');
 wireCarousels($('#pdp'));mountPins();
 var addBtn=$('#pdpAdd');
 if('IntersectionObserver' in window){if(window._io)window._io.disconnect();window._io=new IntersectionObserver(function(es){window._atcVisible=es[0].isIntersecting;updateSticky()},{rootMargin:'-130px 0px 0px 0px'});window._io.observe(addBtn)}
}
function updSat(){var p=P[current];$('#satImg').src=isP()?IMG+'cut/'+p.img+'.webp':IMG+p.img+'.jpg'}
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
function xsCard(p){return '<div class="xs">'+dimg(p.img,'','loading="lazy"')+'<div><div class="n">'+esc(p.n)+'</div><div class="p">'+priceHTML(p)+'</div><button class="a" data-add="'+p.id+'" type="button">Añadir al carrito</button></div></div>'}
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
  html+=CART.map(function(it){var p=P[it.id];return '<div class="citem">'+dimg(p.img,'')+'<div><div class="b">'+esc(p.b)+'</div><div class="nm">'+esc(p.n)+'</div><div class="p">'+priceHTML(p)+'</div><div class="ctl"><div class="qty lite"><button type="button" data-q="-1" data-id="'+it.id+'" aria-label="Menos">−</button><span>'+it.q+'</span><button type="button" data-q="1" data-id="'+it.id+'" aria-label="Más">+</button></div><button class="del" data-del="'+it.id+'" type="button" aria-label="Quitar">'+icon('trash')+'</button></div></div><div class="tp">'+priceHTML({p:p.p*it.q,dec:null},p.p*it.q)+'</div></div>'}).join('');
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


/* ------------------------------------------------------------------ PÁGINA DE SUCURSAL */
var HELP_HTML=$('.help').outerHTML;
function hrsText(s){return {wk:hm(s.wk[0])+' a '+hm(s.wk[1])+' h',sat:hm(s.sat[0])+' a '+hm(s.sat[1])+' h'}}
function renderStore(id){
 var s=STORES[id],st=status(s),h=hrsText(s),n=nowMX();
 var photo=IMG+'tienda-'+s.slug+'-foto.jpg';
 var embed='https://www.google.com/maps?q='+encodeURIComponent(s.map)+'&output=embed';
 var accCards=SECTIONS.acc.map(function(k){return card(P[k])}).join('');
 /* --- versión actual: texto corrido, como hoy --- */
 var servA=s.serv?'<h2 class="h2a">Servicios técnicos especializados</h2><div class="servA">'+SERV.map(function(x){return '<div><h3>'+x[0]+'</h3><ul>'+x[1].map(function(i){return '<li>'+i+'</li>'}).join('')+'</ul></div>'}).join('')+'</div>':'';
 var A='<div class="v-a sa"><div class="wrap">'+
  '<nav class="crumbs" aria-label="Ruta"><a href="#" data-home>Inicio</a>'+icon('right')+'<span>Tienda '+s.name+'</span></nav>'+
  '<h1>Tienda '+s.name+'</h1>'+
  '<div class="sa-grid"><div class="sa-t">'+
   '<h3>Dirección</h3><p>'+s.addr.map(esc).join('<br>')+'</p>'+
   '<h3>Horario</h3><p>Lunes a viernes: '+h.wk+'<br>Sábado: '+h.sat+'</p>'+
   '<h3>Síguenos</h3><p>Teléfono: <a href="#" data-soon="En el sitio real este enlace abre WhatsApp">'+s.phone+'</a><br>Instagram: '+s.ig+'<br>Facebook: '+s.fb+'<br>TikTok: '+s.tt+'</p>'+
  '</div><figure class="sa-p"><img src="'+photo+'" alt="Tienda '+s.name+'" width="404" height="445"><figcaption>Tienda '+s.name+'</figcaption></figure></div>'+
  servA+
  '<div class="sa-map"><iframe title="Mapa de la tienda '+s.name+'" src="'+embed+'" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>'+
 '</div></div>';
 /* --- propuesta --- */
 var rows=[['Lunes a viernes',h.wk,n.d>=1&&n.d<=5],['Sábado',h.sat,n.d===6],['Domingo','Sin horario publicado',n.d===0]];
 var chips=s.caps.concat(['Accesorios']).concat(s.serv?['Servicio técnico para guitarra']:[]);
 var servP=s.serv?'<section class="serv"><div class="sechd"><span class="eyebrow2">'+icon('wrench')+' Guitar-tech</span><h2>Servicios técnicos especializados</h2><p>Cuidamos tu guitarra en la tienda de Cuernavaca. Elige lo que necesita y escríbenos.</p></div><div class="sgrid">'+
   SERV.map(function(x){return '<article><h3>'+x[0]+'</h3><ul>'+x[1].map(function(i){return '<li>'+i+'</li>'}).join('')+'</ul></article>'}).join('')+
   '</div><a class="b red" href="#" data-wa>'+icon('wa')+' Agendar servicio</a></section>':'';
 var others=STORE_ORDER.filter(function(k){return k!==id}).map(function(k){var o=STORES[k],os=status(o);
  return '<a class="ocard" href="#" data-store="'+o.id+'"><img src="'+IMG+'tienda-'+o.slug+'-foto.jpg" alt="" loading="lazy"><div><b>Tienda '+o.name+'</b><span class="live '+os.k+'"><i></i>'+os.txt+'</span></div>'+icon('right')+'</a>'}).join('');
 var Pp='<div class="v-p sp">'+
  '<section class="sh" id="storeHero"><div class="wrap sh-in"><div class="sh-t">'+
   '<nav class="crumbs2" aria-label="Ruta"><a href="#" data-home>Inicio</a>'+icon('right')+'<span>Tienda '+s.name+'</span></nav>'+
   '<span class="eyebrow">'+icon('store')+' Tienda física</span><h1>Tienda '+s.name+'</h1>'+
   '<div class="live '+st.k+'"><i></i>'+st.txt+'</div>'+
   '<p class="ad">'+icon('pin')+'<span>'+s.addr.map(esc).join(', ')+'</span></p>'+
   '<div class="sh-b"><a class="b red" target="_blank" rel="noopener" href="'+mapsLink(s)+'">'+icon('pin')+' Cómo llegar</a><a class="b wa" href="#" data-wa>'+icon('wa')+' WhatsApp</a><a class="b ghost" href="tel:'+telDigits(s)+'">'+icon('phone')+' Llamar</a></div>'+
  '</div><div class="sh-ph"><img src="'+photo+'" alt="Tienda '+s.name+'" width="404" height="445"></div></div></section>'+
  '<div class="wrap"><section class="icards">'+
   '<article><h3>'+icon('clock')+' Horario</h3><ul class="hrs">'+rows.map(function(r){return '<li'+(r[2]?' class="today"':'')+'><span>'+r[0]+'</span><b>'+r[1]+'</b></li>'}).join('')+'</ul></article>'+
   '<article><h3>'+icon('pin')+' Dirección</h3><p>'+s.addr.map(esc).join('<br>')+'</p><a class="lnk" target="_blank" rel="noopener" href="'+mapsLink(s)+'">Abrir en Google Maps →</a></article>'+
   '<article><h3>'+icon('phone')+' Contacto y redes</h3><p><a class="tel" href="tel:'+telDigits(s)+'">'+s.phone+'</a></p><ul class="soc2"><li>'+icon('insta')+' '+s.ig+'</li><li>'+icon('fb')+' '+s.fb+'</li><li>'+icon('tt')+' '+s.tt+'</li></ul></article>'+
  '</section>'+
  '<section class="swhat"><h2>Qué encontrarás en la tienda</h2><div class="chips">'+chips.map(function(c){return '<span class="chip">'+esc(c)+'</span>'}).join('')+'</div></section>'+
  servP+
  '<section class="smap"><h2>Cómo llegar</h2><div class="mapbox"><iframe title="Mapa de la tienda '+s.name+'" src="'+embed+'" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></section>'+
  '<section class="sother"><h2>Visita también</h2><div class="og">'+others+'</div></section>'+
  '</div></div>';
 var acc='<section class="sec sacc" aria-labelledby="hSAcc"><div class="wrap"><h2 class="h" id="hSAcc">Accesorios</h2><a class="all" href="#" data-soon>Ver todos</a><div class="car"><div class="row">'+accCards+'</div></div><div class="prog"><i></i></div></div></section>';
 $('#storeBody').innerHTML=A+Pp+acc+HELP_HTML;
 wireCarousels($('#storeBody'));
 mountPins();
}
function showStore(id){curStore=id;closeMega();closeCart();renderStore(id);showView('store')}

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
 else{closeCart();if(c.view==='pdp'){if(body.dataset.view!=='pdp'||!P[current].g)openProduct('g1');else showView('pdp')}else if(c.view==='store'){if(body.dataset.view!=='store'||curStore!=='cue')showStore('cue')}else{showView('home')}}
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
 var slot=$('#finderSlot .wrap'),hero=$('.hero');
 if(m==='p'){if(finder.parentNode!==slot)slot.appendChild(finder)}else if(finder.parentNode!==hero){hero.insertBefore(finder,$('#trust'))}
 refreshFinder();renderCart();renderStoreTiles();updSat();
 setTimeout(function(){$$('.car').forEach(function(c){c._upd&&c._upd()})},60);
 if(!$('#cart').classList.contains('on'))$('#cartBody').scrollTop=0;
 $$('[data-cmp]').forEach(function(b){b.textContent=m==='a'?'Volver a la propuesta':'Ver cómo está hoy'});
}
$('#mA').addEventListener('click',function(){setMode('a')});
$('#mP').addEventListener('click',function(){setMode('p')});

/* ------------------------------------------------------------------ GENERAL */
document.addEventListener('click',function(e){
 var q=e.target.closest('[data-qadd]');if(q){e.preventDefault();addToCart(q.dataset.qadd,1);openCart();return}
 var st=e.target.closest('[data-store]');if(st){e.preventDefault();showStore(st.dataset.store);return}
 var hm2=e.target.closest('[data-home]');if(hm2){e.preventDefault();showView('home');return}
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
$('#chgCount').textContent=CHANGES.length;$('#panelTitle').textContent=CHANGES.length+' cambios de la propuesta';
renderHome();buildPanel();renderPDP('g1');refreshFinder();
var qs=new URLSearchParams(location.search);
setMode(qs.get('modo')==='actual'?'a':'p');
renderCart();mountPins();
var seen=false;try{seen=sessionStorage.getItem('cm-welcome')==='1'}catch(e){}
if(qs.get('cambio')){var n=parseInt(qs.get('cambio'),10);if(n>=1&&n<=CHANGES.length){setTimeout(function(){openPanel(n);goChange(n)},400)}}
else if(!seen){$('#welcome').classList.add('open')}
})();
