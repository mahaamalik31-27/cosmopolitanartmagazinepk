(function(){
  var x=new XMLHttpRequest();
  x.open('GET','untold-extra-profiles-base.js',false);
  try{
    x.send(null);
    if(x.status===0||x.status<400){(0,eval)(x.responseText);}
  }catch(e){
    console.warn('Untold base profiles could not be loaded',e);
  }

  window.UNTOLD_EXTRA_PROFILES=Object.assign(window.UNTOLD_EXTRA_PROFILES||{}, {
    "Arooj Sultan":{
      "image":"untold-artists/arooj-sultan-01.jpg",
      "images":[
        {"src":"untold-artists/arooj-sultan-01.jpg","title":"Odyssey — selected work 1"},
        {"src":"untold-artists/arooj-sultan-02.jpg","title":"Odyssey — selected work 2"},
        {"src":"untold-artists/arooj-sultan-03.jpg","title":"Odyssey — selected work 3"}
      ],
      "statement":"As with the word ‘journey,’ odyssey has both a literal meaning and a figurative one. I chose the word odyssey because it symbolizes the whole struggle of a person from the start to end, and when I started my experimental work from whom I was inspired by artists, in the end I found my own style and I feel fulfilled by it. My visuals were painted with hand gestures. Do gestures speak louder than words? Gestures play a role in human learning and cognition. Gestures are reciprocally tied to our thoughts and even to our ability to learn. My work reflects the multifaceted human physicality through strong visuals with hand gestures and flat backgrounds just to convey my thoughts. I want to carry on my research on hand gestures, visuals, and human emotions."
    },
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

  var IG={
    "Fareeha Saqib":"fareeha_saqib14",
    "Saira Dar":"saira.dar.artist",
    "Maha Noor Sohail":"mahaartsy",
    "Saba Asif":"itssaba_artistu",
    "Hoorain Khan":"i_hooraink",
    "Khadija Tahir":"zuionthego",
    "Hina Ahmed":"Studiohinaahmed",
    "Ayeza Nadeem":"ayeza_nadeem",
    "Arooj Sultan":"arooj_dumps",
    "Durr-e-Shahwar":"durayshawar_",
    "Brishna Amin Khan":"brishna.a.k",
    "Saba Faisal":"sabafaisal_art",
    "Kanwal Shehzadi":"ttyl_kanwal",
    "Faiza Irfan":"art_by_faiza_",
    "Saniah Umer":"bysaniah",
    "Komal Hira":"komal.hiraa",
    "Maryam Zahid":"__artbymariaam",
    "Muneeza Khan":"_muneezakhan",
    "Aiman Zulfiqar":"aiman_able",
    "Rija Chaudhry":"rija.chaudhry",
    "Ahyaan Batla":"iviiiiiviixiiii",
    "Baad-e-Saba Naqvi":"elleve_art"
  };

  Object.keys(IG).forEach(function(name){
    if(window.UNTOLD_EXTRA_PROFILES[name]){
      window.UNTOLD_EXTRA_PROFILES[name].instagram='https://www.instagram.com/'+IG[name]+'/';
      window.UNTOLD_EXTRA_PROFILES[name].instagramHandle='@'+IG[name];
    }
  });

  function addInstagramButton(){
    var modal=document.getElementById('modalInner');
    if(!modal) return;
    var title=modal.querySelector('.profile-header h2');
    if(!title) return;
    var name=(title.textContent||'').trim();
    var handle=IG[name];
    var header=modal.querySelector('.profile-header');
    if(!header) return;
    var old=header.querySelector('.artist-instagram-link');
    if(old) old.remove();
    if(!handle) return;
    var a=document.createElement('a');
    a.className='artist-instagram-link';
    a.href='https://www.instagram.com/'+handle+'/';
    a.target='_blank';
    a.rel='noopener noreferrer';
    a.textContent='View Instagram · @'+handle;
    header.appendChild(a);
  }

  function sortArtistsAZ(){
    var grid=document.getElementById('artistGrid');
    if(!grid) return;
    var cards=Array.prototype.slice.call(grid.querySelectorAll('.artist-card'));
    cards.sort(function(a,b){
      var an=(a.querySelector('.artist-name')||{}).textContent||'';
      var bn=(b.querySelector('.artist-name')||{}).textContent||'';
      return an.trim().localeCompare(bn.trim(),undefined,{sensitivity:'base'});
    });
    cards.forEach(function(card){grid.appendChild(card);});
  }

  function installWebsiteShell(){
    if(document.getElementById('untold-site-shell')) return;
    var style=document.createElement('style');
    style.id='untold-site-shell';
    style.textContent=`
      :root{--black:#111;--white:#fff;--pink:#d4578a;--gray:#777;--light:#fafafa;--border:#e8e8e8}
      body{font-family:'DM Sans',sans-serif!important;background:#fff!important;color:var(--black)!important;padding-top:60px}
      .topbar{display:none!important}
      .site-nav{position:fixed;top:0;left:0;right:0;height:60px;background:#fff;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:0 2rem;z-index:1000}
      .site-logo{font-family:'Playfair Display',serif;font-size:.9rem;font-weight:700;color:var(--black);text-decoration:none}.site-logo em{color:var(--pink);font-style:italic}
      .site-links{display:flex;gap:2rem;list-style:none;margin:0;padding:0}.site-links a{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--black);text-decoration:none}.site-links a:hover{color:var(--pink)}
      .site-submit{background:var(--black);color:#fff;padding:.6rem 1.2rem;font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;text-decoration:none}.site-submit:hover{background:var(--pink)}
      .site-menu-toggle{display:none;font-size:1.6rem;cursor:pointer;border:0;background:transparent}.site-mobile{position:fixed;top:0;right:-100%;width:100%;height:100vh;background:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;transition:.4s;z-index:999}.site-mobile.active{right:0}.site-mobile a{font-size:1rem;letter-spacing:.14em;text-transform:uppercase;color:var(--black);text-decoration:none}
      .masthead{width:100%!important;max-width:none!important;padding:7rem 2rem 5rem!important;text-align:center!important;border-bottom:1px solid var(--border)!important;background:#fff!important}
      .masthead .crown,.masthead .rule,.masthead>.brand{display:none!important}.event-title{margin:0 auto!important;max-width:900px!important}.kicker{font-size:.68rem!important;letter-spacing:.2em!important;text-transform:uppercase!important;color:var(--pink)!important;margin-bottom:1rem!important}.event-title h1{font-family:'Playfair Display',serif!important;font-size:clamp(4rem,10vw,8rem)!important;line-height:.9!important;margin:0 0 2rem!important;letter-spacing:-.02em!important;text-transform:none!important}.event-title h1 span{color:var(--pink)!important;font-style:italic}.event-copy{max-width:800px!important;margin:auto!important;line-height:2!important;color:#555!important;font-size:1.05rem!important}.facts{margin-top:2rem!important;gap:12px 28px!important;font-size:.68rem!important;letter-spacing:.12em!important}.facts b{color:var(--pink)!important}
      .featured{padding:6rem 2rem!important;background:#fff!important}.featured>.wrap{width:100%!important;max-width:1400px!important}.section-head{margin-bottom:4rem!important}.section-head h2{font-family:'Playfair Display',serif!important;color:var(--black)!important;font-size:clamp(2.5rem,6vw,5rem)!important;line-height:1!important;text-transform:none!important}.section-head h2:after{content:' A–Z';color:var(--pink);font-style:italic}.section-head p{font-size:.68rem!important;letter-spacing:.18em!important;color:var(--pink)!important;margin-top:1rem!important}
      .artist-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:2rem!important;align-items:stretch!important}.artist-card{border:0!important;background:#fff!important;padding:0!important;text-align:left!important;box-shadow:none!important;transform:none!important;display:flex!important;flex-direction:column!important}.artist-card:hover{transform:translateY(-4px)!important;box-shadow:none!important}.image-box{height:360px!important;border:1px solid var(--border)!important;background:#fafafa!important;padding:0!important}.image-box img{width:100%!important;height:100%!important;object-fit:contain!important;background:#fafafa!important}.artist-name{margin:1.4rem 0 0!important;font-family:'Playfair Display',serif!important;font-size:2rem!important;line-height:1!important;letter-spacing:0!important;text-transform:none!important;color:var(--black)!important}.artist-card:hover .artist-name{color:var(--pink)!important}
      .modal{background:rgba(255,255,255,.94)!important}.modal-panel{border:1px solid var(--border)!important;background:#fff!important}.modal-close{border:1px solid var(--black)!important;color:var(--black)!important}.profile-header{border-bottom:1px solid var(--border)!important}.profile-header .small{color:var(--pink)!important}.profile-header h2{font-family:'Playfair Display',serif!important;text-transform:none!important}.work{border:1px solid var(--border)!important}.artist-instagram-link{background:var(--black)!important;border-color:var(--black)!important}.artist-instagram-link:hover{background:var(--pink)!important;border-color:var(--pink)!important}
      .footer{padding:4rem 2rem!important;background:#fafafa!important;border-top:1px solid var(--border)!important;text-align:left!important}.site-footer-grid{max-width:1200px;margin:auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem}.site-footer-logo{font-family:'Playfair Display',serif;font-size:1.3rem;margin-bottom:1rem}.site-footer-logo em{color:var(--pink);font-style:italic}.site-footer-text{line-height:1.9;color:#666}.site-footer-heading{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--pink);margin-bottom:1rem}.site-footer-links{display:flex;flex-direction:column;gap:.8rem}.site-footer-links a{color:var(--black);text-decoration:none}.site-footer-links a:hover{color:var(--pink)}.site-footer-bottom{max-width:1200px;margin:3rem auto 0;padding-top:2rem;border-top:1px solid var(--border);text-align:center;font-size:.75rem;color:#777}
      @media(max-width:1100px){.artist-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
      @media(max-width:900px){.site-links,.site-submit{display:none}.site-menu-toggle{display:block}.site-nav{padding:0 1rem}.site-logo{font-size:.8rem;max-width:220px;line-height:1.1}.masthead{padding:6rem 1.5rem 4rem!important}.event-title h1{font-size:3.5rem!important}.event-copy{font-size:.95rem!important;line-height:1.8!important}.featured{padding:4rem 1.5rem!important}.site-footer-grid{grid-template-columns:1fr;text-align:center}.site-footer-links{align-items:center}}
      @media(max-width:700px){.artist-grid{grid-template-columns:1fr!important}.image-box{height:420px!important}.artist-name{font-size:2.1rem!important}}
    `;
    document.head.appendChild(style);

    var old=document.querySelector('.topbar');
    if(old){
      var nav=document.createElement('nav');
      nav.className='site-nav';
      nav.innerHTML='<a href="index.html" class="site-logo">Cosmopolitan <em>Art</em> Magazine</a><ul class="site-links"><li><a href="events.html">Events & Culture</a></li><li><a href="artist-feature.html">Featured Artists</a></li><li><a href="featured-voices.html">Featured Voices</a></li><li><a href="issue-01.html">Issue 01</a></li><li><a href="get-featured.html">Get Featured</a></li></ul><a href="mailto:feature@cosmopolitanartmagazinepk.online" class="site-submit">Submit Work</a><button class="site-menu-toggle" aria-label="Menu">☰</button>';
      old.parentNode.insertBefore(nav,old);
      var mobile=document.createElement('div');
      mobile.className='site-mobile';
      mobile.innerHTML='<a href="events.html">Events & Culture</a><a href="artist-feature.html">Featured Artists</a><a href="featured-voices.html">Featured Voices</a><a href="impact-profiles.html">Impact Profiles</a><a href="issue-01.html">Issue 01</a><a href="get-featured.html">Get Featured</a><a href="mailto:feature@cosmopolitanartmagazinepk.online">Submit Work</a>';
      nav.parentNode.insertBefore(mobile,old);
      nav.querySelector('.site-menu-toggle').addEventListener('click',function(){mobile.classList.toggle('active');this.textContent=mobile.classList.contains('active')?'×':'☰';});
      mobile.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mobile.classList.remove('active');nav.querySelector('.site-menu-toggle').textContent='☰';});});
    }

    var footer=document.querySelector('.footer');
    if(footer){
      footer.innerHTML='<div class="site-footer-grid"><div><div class="site-footer-logo">Cosmopolitan <em>Art</em> Magazine</div><p class="site-footer-text">Celebrating emerging and established artists across Pakistan through exhibitions, editorials, visual storytelling, and curated features shaping contemporary South Asian art culture.</p></div><div><div class="site-footer-heading">Explore</div><div class="site-footer-links"><a href="events.html">Events & Culture</a><a href="artist-feature.html">Featured Artists</a><a href="featured-voices.html">Featured Voices</a><a href="issue-01.html">Issue 01</a></div></div><div><div class="site-footer-heading">Connect</div><div class="site-footer-links"><a href="get-featured.html">Get Featured</a><a href="mailto:feature@cosmopolitanartmagazinepk.online">Submit Work</a><a href="index.html">Home</a></div></div></div><div class="site-footer-bottom">© 2026 Cosmopolitan Art Magazine Pakistan · Untold Stories</div>';
    }

    setTimeout(sortArtistsAZ,0);
    var grid=document.getElementById('artistGrid');
    if(grid){
      var once=false;
      new MutationObserver(function(){if(once)return;once=true;setTimeout(sortArtistsAZ,0);}).observe(grid,{childList:true});
    }
  }

  function installProfileEnhancements(){
    if(document.getElementById('untold-profile-enhancements')) return;
    var style=document.createElement('style');
    style.id='untold-profile-enhancements';
    style.textContent='\
      .artist-instagram-link{display:inline-flex;align-items:center;justify-content:center;margin-top:20px;padding:12px 18px;border:1px solid #ec2f76;background:#ec2f76;color:#fff;text-decoration:none;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;transition:.2s ease}\
      .artist-instagram-link:hover{background:#111;border-color:#111;color:#fff}\
      .profile-header p{white-space:pre-line}\
    ';
    document.head.appendChild(style);

    var modal=document.getElementById('modalInner');
    if(modal){new MutationObserver(addInstagramButton).observe(modal,{childList:true,subtree:true});}
    document.addEventListener('click',function(e){
      if(e.target.closest && e.target.closest('.artist-card')) setTimeout(addInstagramButton,0);
    });
  }

  function boot(){installProfileEnhancements();installWebsiteShell();setTimeout(sortArtistsAZ,50);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
  else boot();
})();
