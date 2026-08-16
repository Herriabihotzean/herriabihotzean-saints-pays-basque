"use strict";
const HB_KEY="herria_langue";
const LABELS={fr:{fr:"français",eu:"basque"},eu:{fr:"frantsesez",eu:"eskuaraz"}};
const INDEX_TEXT={
 fr:{title:"Les saints du Pays Basque",subtitle:"par le chanoine Pierre Andiazabal (1923-2020)",back:"← Retour vers Histoire"},
 eu:{title:"Eskual Herriko Sainduak",subtitle:"Pierre Andiazabal Kalonjeak (1923-2020)",back:"← Istoriarat itzuli"}
};
function readIncomingLanguage(){const p=new URLSearchParams(location.search).get("lang");if(p==="fr"||p==="eu")return p;try{return localStorage.getItem(HB_KEY)==="eu"?"eu":"fr"}catch(_e){return"fr"}}
function saveGeneralLanguage(lang){try{localStorage.setItem(HB_KEY,lang)}catch(_e){}}
function setText(lang){
 const t=INDEX_TEXT[lang]; document.documentElement.lang=lang; document.title=t.title+" — Herria Bihotzean";
 document.querySelector('[data-i18n="title"]').textContent=t.title;
 document.querySelector('[data-i18n="subtitle"]').textContent=t.subtitle;
 document.querySelector('[data-i18n="back"]').textContent=t.back;
 document.querySelectorAll("[data-saint]").forEach(a=>a.textContent=a.dataset[lang]);
 document.querySelectorAll(".language-choice").forEach(b=>{const code=b.dataset.lang;b.querySelector(".language-label").textContent=LABELS[lang][code];b.classList.toggle("active",code===lang);b.setAttribute("aria-pressed",code===lang?"true":"false")});
 document.querySelectorAll("a[data-saint]").forEach(a=>{const u=new URL(a.getAttribute("href"),location.href);u.searchParams.set("ui",lang);a.href=u.pathname+u.search});
 const back=document.querySelector("[data-main-back]"); if(back) back.href="https://herriabihotzean.fr/histoire.html?lang="+lang;
 history.replaceState(null,"",location.pathname+"?lang="+lang);
}
document.addEventListener("DOMContentLoaded",()=>{let lang=readIncomingLanguage();setText(lang);document.querySelectorAll(".language-choice").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;saveGeneralLanguage(lang);setText(lang)}))});
