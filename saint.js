"use strict";
const HB_KEY="herria_langue";
const UI={
 fr:{fr:"français",eu:"basque",listen:"écouter",back:"← Retour aux saints du Pays Basque",top:"haut de page ↑",prev:"piste précédente",next:"piste suivante",illustration:"Illustration à ajouter"},
 eu:{fr:"frantsesez",eu:"eskuaraz",listen:"entzun",back:"← Eskual Herriko Sainduetarat itzuli",top:"orri gainera ↑",prev:"aitzineko pista",next:"ondoko pista",illustration:"Irudia gehitzeko"}
};
function interfaceLanguage(){const q=new URLSearchParams(location.search).get("ui");if(q==="fr"||q==="eu")return q;try{return localStorage.getItem(HB_KEY)==="eu"?"eu":"fr"}catch(_e){return"fr"}}
document.addEventListener("DOMContentLoaded",()=>{
 const ui=interfaceLanguage(),t=UI[ui],body=document.body;
 const titleFr=body.dataset.titleFr,titleEu=body.dataset.titleEu;
 const tracks=(body.dataset.tracks||"").split(",").filter(Boolean);
 let content="eu",idx=0;
 const sections=[...document.querySelectorAll("[data-saint-lang]")],buttons=[...document.querySelectorAll(".language-choice")];
 const listen=document.querySelector(".audio-open-button"),panel=document.querySelector(".audio-panel"),audio=document.querySelector("audio"),label=document.querySelector(".audio-track-label");
 const prev=document.querySelector("[data-prev]"),next=document.querySelector("[data-next]");
 document.querySelectorAll("[data-nav-back]").forEach(a=>{a.textContent=t.back;a.href="index.html?lang="+ui});
 document.querySelectorAll("[data-nav-top]").forEach(a=>a.textContent=t.top);
 listen.textContent=t.listen; prev.textContent="← "+t.prev; next.textContent=t.next+" →";
 buttons.forEach(b=>{const code=b.dataset.lang;b.querySelector(".language-label").textContent=t[code];b.addEventListener("click",()=>show(code))});
 function currentTitle(){return content==="fr"?titleFr:titleEu}
 function updateTrack(){if(!tracks.length)return;audio.src="audio/"+tracks[idx]+".mp3";label.textContent=currentTitle()+" — "+(idx+1)+"/"+tracks.length;prev.disabled=idx===0;next.disabled=idx===tracks.length-1}
 function show(lang){content=lang==="fr"?"fr":"eu";document.documentElement.lang=content;sections.forEach(s=>s.hidden=s.dataset.saintLang!==content);buttons.forEach(b=>{const active=b.dataset.lang===content;b.classList.toggle("active",active);b.setAttribute("aria-pressed",active?"true":"false")});updateTrack()}
 listen.addEventListener("click",()=>{panel.hidden=!panel.hidden;listen.setAttribute("aria-expanded",panel.hidden?"false":"true")});
 prev.addEventListener("click",()=>{if(idx>0){idx--;updateTrack();audio.play().catch(()=>{})}});
 next.addEventListener("click",()=>{if(idx<tracks.length-1){idx++;updateTrack();audio.play().catch(()=>{})}});
 audio.addEventListener("ended",()=>{if(idx<tracks.length-1){idx++;updateTrack();audio.play().catch(()=>{})}});
 document.querySelectorAll("img[data-fallback]").forEach(img=>img.addEventListener("error",()=>{img.hidden=true;const ph=img.parentElement.querySelector(".image-placeholder");if(ph)ph.hidden=false}));
 show("eu");
});
