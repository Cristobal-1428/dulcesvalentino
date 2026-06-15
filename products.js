'use strict';
var DV = (function () {
  var KEY     = 'dv_products_v1';
  var PWD_KEY = 'dv_pwd_v1';
  var DEFAULT_PWD = 'dulces2026';

  var DEFAULTS = [
    // ── PASTELES ──
    { id:'p001', categoria:'pasteles', nombre:'Pie de Limón 🍋', badge:'Clásico',
      descripcion:'Base crocante, relleno de crema de limón y merengue tostado. Disponible en 3 tamaños.',
      imagen:'https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/49d627e69672b6915c22f2eb2dfd1b93.webp?itok=cJEPzpNP',
      precios:[{label:'22 cm',precio:14000},{label:'26 cm',precio:20000},{label:'28 cm',precio:25000}] },
    { id:'p002', categoria:'pasteles', nombre:'Pie de Frambuesa', badge:'',
      descripcion:'Base crocante, relleno cremoso de frambuesa y merengue dorado. Dulce y levemente ácido.',
      imagen:'https://es.cravingsjournal.com/wp-content/uploads/2024/01/pie-de-frambuesa-4.jpg',
      precios:[{label:'22 cm',precio:18000},{label:'26 cm',precio:23000},{label:'28 cm',precio:28000}] },
    { id:'p003', categoria:'pasteles', nombre:'Pie de Naranja 🍊', badge:'',
      descripcion:'Base crocante, crema suave de naranja y merengue tostado. Fresco y aromático.',
      imagen:'https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/1faaa6fa20d93ae42743f709d0acb646.webp?itok=mfFe8Bw6',
      precios:[{label:'22 cm',precio:14000},{label:'26 cm',precio:20000},{label:'28 cm',precio:25000}] },
    { id:'p004', categoria:'pasteles', nombre:'Kuchen Griego de Frambuesa', badge:'',
      descripcion:'Base suave, relleno de yogur griego y frambuesas frescas. Cremoso y liviano.',
      imagen:'https://cdnx.jumpseller.com/lashermanaschicureo/image/57420556/thumb/1500/1500?1732195265',
      precios:[{label:'22 cm',precio:18000},{label:'24 cm',precio:22000},{label:'28 cm',precio:28000}] },
    { id:'p005', categoria:'pasteles', nombre:'Kuchen Griego Frutos Rojos', badge:'',
      descripcion:'Base esponjosa, crema de yogur griego y mezcla de frutos rojos de temporada.',
      imagen:'https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/b91ac380b0f67eb4a83c7b07c2c19b4a.webp?itok=Y0EKRH0d',
      precios:[{label:'22 cm',precio:12000},{label:'26 cm',precio:17000},{label:'28 cm',precio:22000}] },
    { id:'p006', categoria:'pasteles', nombre:'Kuchen Griego Arándanos', badge:'',
      descripcion:'Base suave, crema de yogur griego y arándanos frescos. Delicado y sin exceso de dulzor.',
      imagen:'https://www.cocinavital.mx/wp-content/uploads/2025/10/tarta-de-yogur-griego-634x420.jpg',
      precios:[{label:'22 cm',precio:12000},{label:'26 cm',precio:17000},{label:'28 cm',precio:22000}] },
    { id:'p007', categoria:'pasteles', nombre:'Tarta de Frambuesa', badge:'',
      descripcion:'Masa crocante, crema pastelera y frambuesas frescas. Elegante y llena de sabor.',
      imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZW8NyS44eoB3CDw0pbV7K8VS5OKlWXDr4g&s',
      precios:[{label:'22 cm',precio:14000},{label:'26 cm',precio:20000},{label:'28 cm',precio:25000}] },
    { id:'p008', categoria:'pasteles', nombre:'Kuchen de Manzana 🍏', badge:'',
      descripcion:'Masa suave, relleno de manzana caramelizada con canela y azúcar morena.',
      imagen:'https://cdn0.recetasgratis.net/es/posts/2/9/2/kuchen_de_manzana_facil_y_rapido_45292_paso_5_600.jpg',
      precios:[{label:'22 cm',precio:18000},{label:'26 cm',precio:23000},{label:'28 cm',precio:28000}] },
    { id:'p009', categoria:'pasteles', nombre:'Tarta Bon o Bon', badge:'',
      descripcion:'Base crocante, mousse de chocolate y maní, decorada con bombones Bon o Bon.',
      imagen:'https://imag.bonviveur.com/corte-de-la-tarta-bombon-lista-para-degustar.jpg',
      precios:[{label:'22 cm',precio:15000},{label:'26 cm',precio:20000},{label:'28 cm',precio:25000}] },
    { id:'p010', categoria:'pasteles', nombre:'Queques', badge:'',
      descripcion:'Esponjosos y húmedos, horneados en molde de 26 cm. Disponibles en 3 sabores.',
      imagen:'https://www.guiaderecetas.com/static/images/receta/hacer-queque-casero-esponjoso-facil.jpg',
      precios:[{label:'Tradicional vainilla',precio:7000},{label:'Frambuesa',precio:8500},{label:'Arándanos',precio:8500}] },
    // ── DULCES ──
    { id:'d001', categoria:'dulces', nombre:'Merenguitos con Almendras y Chocolate', badge:'',
      descripcion:'Merengues crujientes cubiertos de almendras tostadas y chocolate. Bocados irresistibles.',
      imagen:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP_xEZCAAhlj56AYX_DCLSWxwuLfyEkrICOFIPRTPQEgS3PyS86KkxgISCyLfiIbcK1ZhzTq3Etgl2Ybj5b-CaQaU2SOemaUBcu5NK9Y-piJrgY5zckG22k-XplljmHx0UK5cLAZpEISg/s1600/tan+dulce+recetas-6.jpg',
      precios:[{label:'c/u',precio:150}] },
    { id:'d002', categoria:'dulces', nombre:'Merenguitos', badge:'',
      descripcion:'Clásicos merenguitos crujientes por fuera y suaves por dentro.',
      imagen:'https://tpriesco.cl/cdn/shop/files/merenguitosconazucar.jpg?v=1758828245',
      precios:[{label:'c/u',precio:100}] },
    { id:'d003', categoria:'dulces', nombre:'Alfajor de Merengue', badge:'',
      descripcion:'Dos tapas de merengue con manjar artesanal en el centro. Un clásico chileno imperdible.',
      imagen:'https://gourmet.iprospect.cl/wp-content/uploads/2025/08/Chilenito.jpg',
      precios:[{label:'c/u',precio:150}] },
    { id:'d004', categoria:'dulces', nombre:'Profiteroles Mini', badge:'',
      descripcion:'Masa choux esponjosa rellena de manjar o crema pastelera. Pequeños y adictivos.',
      imagen:'https://tofuu.getjusto.com/orioneat-local/resized2/bJGRMYfGoBv5eLxjx-300-x.webp',
      precios:[{label:'c/u',precio:400}] },
    { id:'d005', categoria:'dulces', nombre:'Profiteroles Mini Manjar & Crema', badge:'',
      descripcion:'Masa choux rellena de manjar y crema. Doble relleno para los más golosos.',
      imagen:'https://cdnx.jumpseller.com/andres-perrier-eventos/image/49570206/IMG_20240608_095240.jpg?1717904639',
      precios:[{label:'c/u',precio:500}] },
    { id:'d006', categoria:'dulces', nombre:'Profiteroles Crema, Manjar & Chocolate', badge:'',
      descripcion:'Masa choux rellena de crema y manjar, bañada en cobertura de chocolate.',
      imagen:'https://www.homecookingadventure.com/wp-content/uploads/2022/01/chocolate_cream_puffs_main.jpg',
      precios:[{label:'c/u',precio:1000}] }
  ];

  function get() {
    try { var s = localStorage.getItem(KEY); return s ? JSON.parse(s) : null; }
    catch(e) { return null; }
  }

  function save(products) {
    try { localStorage.setItem(KEY, JSON.stringify(products)); }
    catch(e) { alert('Error al guardar: ' + e.message); }
  }

  function init() { if (!get()) save(DEFAULTS.map(function(p){ return JSON.parse(JSON.stringify(p)); })); }

  function generateId() { return '_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36); }

  function formatPrice(n) { return '$' + Number(n).toLocaleString('es-CL'); }

  function esc(s) {
    return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function cardHtml(p) {
    var img = p.imagen
      ? '<div class="prod-img" style="padding:0"><img src="'+esc(p.imagen)+'" alt="'+esc(p.nombre)+'" loading="lazy"/></div>'
      : '<div class="prod-img c-'+esc(p.categoria)+'"></div>';
    var badge = p.badge ? '<span class="tag-badge">'+esc(p.badge)+'</span>' : '';
    var precios = '';
    if (p.precios && p.precios.length === 1) {
      precios = '<div class="prod-footer"><strong>'+formatPrice(p.precios[0].precio)+'</strong><small>'+esc(p.precios[0].label)+'</small></div>';
    } else if (p.precios && p.precios.length > 1) {
      precios = '<table class="price-table">'+p.precios.map(function(r){
        return '<tr><td>'+esc(r.label)+'</td><td>'+formatPrice(r.precio)+'</td></tr>';
      }).join('')+'</table>';
    }
    return '<article class="prod-card reveal">'+img+'<div class="prod-body">'+badge+'<h3>'+esc(p.nombre)+'</h3><p>'+esc(p.descripcion)+'</p>'+precios+'</div></article>';
  }

  function renderGrid(containerId, categoria) {
    var el = document.getElementById(containerId);
    if (!el) return;
    init();
    var list = (get()||[]).filter(function(p){ return p.categoria === categoria; });
    if (!list.length) {
      el.innerHTML = '<p class="empty-msg">Pronto agregaremos productos aquí.</p>';
      return;
    }
    el.innerHTML = list.map(cardHtml).join('');
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); }});
    }, {threshold:0.1});
    el.querySelectorAll('.reveal').forEach(function(el2){ obs.observe(el2); });
  }

  function checkPwd(pwd) { return pwd === (localStorage.getItem(PWD_KEY) || DEFAULT_PWD); }
  function setPwd(p) { localStorage.setItem(PWD_KEY, p); }
  function resetDefaults() { save(DEFAULTS.map(function(p){ return JSON.parse(JSON.stringify(p)); })); }

  return { get:get, save:save, init:init, generateId:generateId, renderGrid:renderGrid,
           formatPrice:formatPrice, esc:esc, checkPwd:checkPwd, setPwd:setPwd, resetDefaults:resetDefaults };
})();
