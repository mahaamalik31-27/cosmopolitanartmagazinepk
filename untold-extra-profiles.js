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
})();
