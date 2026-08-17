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

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',installProfileEnhancements);
  else installProfileEnhancements();
})();
