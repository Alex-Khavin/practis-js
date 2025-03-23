var i=a=>{throw TypeError(a)};var c=(a,r,t)=>r.has(a)||i("Cannot "+t);var e=(a,r,t)=>(c(a,r,"read from private field"),t?t.call(a):r.get(a)),n=(a,r,t)=>r.has(a)?i("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(a):r.set(a,t);import"./assets/styles-BHDa8hsk.js";import{a as p}from"./assets/vendor-CG2pNq4b.js";const g=document.querySelector(".gallery");function u(a){const r=a.map(({alt_description:t,urls:{small:o}})=>`
     <li class="gallery-item">
            <img class="gallery-img" src="${o}" alt="${t}">
          </li>
    `).join("");g.innerHTML=r}var l,s;class h{constructor(){n(this,l,"https://api.unsplash.com/search/photos");n(this,s,"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58")}async getPopularPhotos(r){const t=`${e(this,l)}?client_id=${e(this,s)}&query=popular&page=${r}&per_page=12&orientation=portrait`;try{const{data:o}=await p(t);return o}catch(o){console.log(o)}}}l=new WeakMap,s=new WeakMap;const m=new h;m.getPopularPhotos(1).then(({results:a})=>{u(a)});
//# sourceMappingURL=gallery.js.map
