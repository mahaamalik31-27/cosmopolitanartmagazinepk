(function(){
  var x=new XMLHttpRequest();
  x.open('GET','untold-extra-profiles-base.js',false);
  try{x.send(null);if(x.status===0||x.status<400){(0,eval)(x.responseText);}}catch(e){console.warn('Untold base profiles could not be loaded',e);}
  window.UNTOLD_EXTRA_PROFILES=Object.assign(window.UNTOLD_EXTRA_PROFILES||{}, {
    "Dua Mabrook":{
      "image":"untold-artists/dua-mabrook-01.jpg",
      "images":[
        {"src":"untold-artists/dua-mabrook-01.jpg","title":"Serving Chai","meta":"Mixed media on canvas, mounted on MDF (lasani) board with wooden subframe · 61 × 91.5 cm · 2026"},
        {"src":"untold-artists/dua-mabrook-02.jpg","title":"Playing with the Dollhouse","meta":"Mixed media on canvas, mounted on MDF (lasani) board with wooden subframe · 60 × 45.5 cm · 2026"},
        {"src":"untold-artists/dua-mabrook-03.jpg","title":"Dining Room through the Kitchen","meta":"Mixed media on canvas, mounted on MDF (lasani) board with wooden subframe · 70 × 110.5 cm · 2026"},
        {"src":"untold-artists/dua-mabrook-04.jpg","title":"Endless Pour","meta":"Digital video installation · 51-second loop · 1,920 × 1,080 · 2025"}
      ],
      "statement":"Dua Mabrook’s four submitted works are presented from the artist’s exhibition submission, including three mixed-media works and the video installation Endless Pour."
    },
    "Brishna Amin Khan":{
      "image":"untold-artists/brishna-01.jpg",
      "images":[
        {"src":"untold-artists/brishna-01.jpg","title":"Of Meditation, Slipping In Between","meta":"Gouache on Wasli · 10.5 × 7.5 in · 2026 · PKR 70,000"},
        {"src":"untold-artists/brishna-02.jpg","title":"While A Fair Region Round The Traveler Lies","meta":"Gouache on Wasli · 10.5 × 7.5 in · 2026 · PKR 70,000"}
      ],
      "statement":"Brishna Amin Khan’s two submitted gouache-on-wasli works are presented with the artist’s supplied titles, dimensions, year and prices."
    },
    "Aliya Umair":{
      "image":"untold-artists/aliya-umair-01.jpg",
      "images":[
        {"src":"untold-artists/aliya-umair-01.jpg","title":"Velvet Cosmos","meta":"Oil on canvas · 15 × 15 in · 2025"},
        {"src":"untold-artists/aliya-umair-02.jpg","title":"Teal Blue","meta":"Oil on canvas · 15 × 15 in · 2025"},
        {"src":"untold-artists/aliya-umair-03.jpg","title":"Sun-Catcher","meta":"Oil on canvas · 15 × 15 in · 2025"}
      ],
      "statement":"Aliya Umair’s studio practice magnifies hidden microscopic structures within gemstones, translating inclusions, fractures and light patterns into geometric painted landscapes on canvas."
    }
  });

  function installEditorialLayout(){
    if(document.getElementById('untold-editorial-layout')) return;
    var style=document.createElement('style');
    style.id='untold-editorial-layout';
    style.textContent=`
      :root{--cosmo-pink:#ec2f76;--cosmo-ink:#111;--cosmo-paper:#fffdfb}
      body{background:var(--cosmo-paper)!important;color:var(--cosmo-ink)!important}
      .section{background:#fff!important;padding:62px clamp(22px,5vw,72px) 110px!important}
      .editorial-masthead{text-align:center;margin:0 auto 42px;max-width:980px;color:#111}
      .editorial-masthead .crown{font-size:30px;line-height:1;color:var(--cosmo-pink);margin-bottom:12px}
      .editorial-masthead .brand{font-family:"DM Sans",sans-serif;font-size:12px;font-weight:600;letter-spacing:.42em;text-transform:uppercase;white-space:normal}
      .editorial-masthead .rule{height:1px;background:var(--cosmo-pink);margin:17px 0 0}
      .toolbar{display:block!important;text-align:center!important;margin:0 0 38px!important}
      .toolbar h2{font-family:"DM Sans",sans-serif!important;font-size:clamp(30px,4.2vw,52px)!important;font-weight:700!important;letter-spacing:.015em!important;text-transform:uppercase!important;color:var(--cosmo-pink)!important;margin:0!important}
      .toolbar h2:after{display:none!important;content:none!important}
      .toolbar p{display:none!important}
      .grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:24px 22px!important;align-items:start!important}
      .card,.card.show,.card:nth-child(n),.card.show:nth-child(n){display:flex!important;flex-direction:column!important;position:relative!important;min-height:0!important;height:auto!important;background:#fff!important;border:1px solid rgba(236,47,118,.68)!important;box-shadow:none!important;outline:none!important;transform:none!important;opacity:1!important;overflow:hidden!important;cursor:pointer!important;transition:transform .25s ease,box-shadow .25s ease!important}
      .card:hover{transform:translateY(-3px)!important;outline:none!important;border-color:var(--cosmo-pink)!important;box-shadow:0 12px 34px rgba(40,20,30,.08)!important}
      .art,.art.has-work{position:relative!important;inset:auto!important;width:100%!important;height:410px!important;display:flex!important;align-items:center!important;justify-content:center!important;background:#fff!important;padding:14px!important;transform:none!important}
      .art:before,.art:after,.art.has-work:before,.art.has-work:after{display:none!important}
      .art img,.art.has-work img{position:relative!important;inset:auto!important;width:100%!important;height:100%!important;object-fit:contain!important;display:block!important;background:#fff!important}
      .veil,.num,.art-count{display:none!important}
      .copy{position:relative!important;left:auto!important;right:auto!important;bottom:auto!important;z-index:2!important;color:#111!important;background:#fff!important;padding:13px 12px 17px!important;text-align:center!important;min-height:64px!important;display:flex!important;align-items:center!important;justify-content:center!important}
      .copy small,.copy span{display:none!important}
      .copy h3{font-family:"DM Sans",sans-serif!important;font-size:clamp(17px,1.55vw,23px)!important;font-weight:500!important;line-height:1.14!important;letter-spacing:.035em!important;text-transform:uppercase!important;color:#111!important;margin:0!important}
      .card:has(.has-work){outline:none!important}
      .card:has(.has-work) .num:after{content:none!important}
      .modal{background:rgba(255,255,255,.78)!important;backdrop-filter:blur(12px)!important}
      .panel{background:#fff!important;border:1px solid var(--cosmo-pink)!important;box-shadow:0 24px 90px rgba(30,20,25,.18)!important}
      .panel-copy small{color:var(--cosmo-pink)!important}
      .panel-copy h2{color:#111!important}
      .panel-art.gallery{background:#fff!important}
      .panel-art.gallery figure{border:1px solid #eee!important;background:#fff!important}
      .panel-art.gallery img{background:#fff!important;object-fit:contain!important}
      .panel-art.gallery figcaption{color:#111!important}
      @media(max-width:980px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}.art,.art.has-work{height:390px!important}}
      @media(max-width:620px){.section{padding:44px 16px 80px!important}.editorial-masthead{margin-bottom:28px}.editorial-masthead .brand{font-size:10px;letter-spacing:.26em;line-height:1.7}.grid{grid-template-columns:1fr!important;gap:18px!important}.art,.art.has-work{height:420px!important}.copy h3{font-size:20px!important}}
    `;
    document.head.appendChild(style);

    var toolbar=document.querySelector('.section .toolbar');
    if(toolbar && !document.querySelector('.editorial-masthead')){
      var mast=document.createElement('div');
      mast.className='editorial-masthead';
      mast.innerHTML='<div class="crown">♛</div><div class="brand">Cosmopolitan Art Magazine Pakistan</div><div class="rule"></div>';
      toolbar.parentNode.insertBefore(mast,toolbar);
      var h=toolbar.querySelector('h2');
      if(h) h.textContent='Featured Artists';
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',installEditorialLayout);
  else installEditorialLayout();
})();
