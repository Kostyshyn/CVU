function getData(e,t,i){var a=new XMLHttpRequest;a.onload=function(){if(200===a.status){var e=a.responseText,t=JSON.parse(e);i(null,t)}},a.onerror=function(){var e=new Error("XHR failed");i(e,null)},a.open(e,t,!0),a.send(null)}function TemplateError(e){this.name="Template Error",this.message=e||"prop is undefined"}function Template(e){this.template=e}function menu_toggle(e){e.classList.toggle("show")}function showPrevious(){(i-=1)<0&&(i=sliders.length-1);var e=document.getElementById("slide-image"),t=document.getElementById("slide-title"),a=document.getElementById("slide-description");e.src=sliders[i].image,t.innerHTML=sliders[i].title,a.innerHTML=sliders[i].description}function showNext(){(i+=1)>=sliders.length&&(i=0);var e=document.getElementById("slide-image"),t=document.getElementById("slide-title"),a=document.getElementById("slide-description");e.src=sliders[i].image,t.innerHTML=sliders[i].title,a.innerHTML=sliders[i].description}TemplateError.prototype=Object.create(Error.prototype),Template.prototype.render=function(e,t){if(Array.isArray(e)){var i="",a=this;e.forEach(function(n,r){var s=a.template.join("\n").replace(/\{{(.+?)\}}/gi,function(e,i,a){if(n[i.trim()])return n[i.trim()];var r=new TemplateError(i.trim()+" is undefined");t(r,null)});i+=s,r>=e.length-1&&t(null,i)})}else{i=this.template.join("\n").replace(/\{{(.+?)\}}/gi,function(i,a,n){if(e[a.trim()])return e[a.trim()];var r=new TemplateError(a.trim()+" is undefined");t(r,null)});t(null,i)}};var newsWrap=document.getElementById("news-wrapper");if(newsWrap){var ROOT="./data.json",newsTemplate=new Template(['<div class="news-item">','<a href="#"><img class="news-image"','src="{{ image }}"','alt="inf">',"</a>",'<a class="item-title" href="#">',"<h4>{{ title }}</h4>","</a>",'<p class="item-description">{{ text }}</p>',"</div>"]);getData("GET",ROOT,function(e,t){if(e)return alert(e.message),void console.log(e.message);newsWrap.innerHTML='<img src="../img/preloader.gif" alt="preloader">',setTimeout(function(){newsTemplate.render(t,function(e,t){if(e)throw e;newsWrap.innerHTML=t})},3e3)})}var i=0,sliders=[{title:"За час роботи ВР VIII скликання Президент заветував 39 законів, ..",description:"Із початку роботи Верховної Ради VIII скликання Президент наклав вето на 39 законів. Ініціаторами більшості із них, 31 закону, були народні депутати, ще 8 законів ініціював уряд (А. Яценюка). Про це йдеться в дослідженні КВУ «Три роки президентства П. Порошенка...",image:"http://cvu.org.ua/uploads/59257686-9830-4d42-a69b-6b400a0a0d19-%D1%96%D0%BD%D1%843.png"},{title:"Які фракції підтримують законопроекти Президента, - дослідження КВУ",description:"Народний Фронт, Блок Петра Порошенка та «Самопоміч» найбільше підтримують законопроекти Президента. Про це зазначив голова КВУ Олексій Кошель, презентуючи дослідження КВУ: «Три роки президентства П. Порошенка: які закони блокує та які підтримує През...",image:"http://cvu.org.ua/uploads/592566cd-72fc-43c4-9fb2-69a60a0a0d19-%D1%96%D0%BD%D1%842.png"},{title:"84% законопроектів Президента стають законами, - КВУ ",description:"За час роботи Верховної Ради VIII скликання Президент України П. Порошенко подав на розгляд парламенту 111 проектів законів. Із них стали законами 93 або 84%. Про це йдеться в дослідженні КВУ «Три роки президентства П. Порошенка: які закони блокує та які підтри...",image:"http://cvu.org.ua/uploads/592543aa-4658-4840-b2d9-66660a0a0d19-%D1%96%D0%BD%D1%841.png"},{title:"АНОНС. 24 травня прес-конференція КВУ: Три роки президентства П...",description:"У середу, 24 травня, о 10:30, в Українському Кризовому медіа-центрі відбудеться прес-конференція Комітету виборців України: «Три роки президентства П. Порошенка: які закони блокує та які підтримує Президент». Під час заходу буде презентовано дослідження ...",image:"http://cvu.org.ua/uploads/58e203cb-9724-4550-a453-5f140a0a0d19-%D0%BA%D0%B2%D1%83%20%D0%BB%D0%BE%D0%B3%D0%BE.jpg"},{title:"Жодна фракція не подала Президентові оновлений список кандидатів...",description:"Майже два місяці тому, 21 березня, Президент України під час зустрічі з лідерами парламентських фракцій закликав їх подати йому на розгляд узгоджений список кандидатур до складу Центральної виборчої комісії. Станом на 15 травня жодна з фракцій ВРУ досі не надала През...",image:"http://cvu.org.ua/uploads/592292dc-52d4-4691-8567-59700a0a0d19-56422c996282e-46152.jpg"}],previous=document.getElementById("previous"),next=document.getElementById("next");previous&&previous.addEventListener("click",showPrevious),next&&next.addEventListener("click",showNext);var mediaWrap=document.getElementById("media-blocks");if(mediaWrap){var ROOT="data/media.json",mediaTemplate=new Template(["<div>",'<a class="madia-title" href="#">',"<h3>{{ title }}</h3>","</a>",'<div class="media-info">','<span class="date-media">{{ date }}</span>',"</div>",'<div class="media-content">','<iframe src="{{ src }}" width="560" height="315" frameborder="0" allowfullscreen></iframe>',"</div>",'<div class="tags">',"<div>Мітки:</div>",'<a class="media-label" href="#">Відео</a>','<a class="media-label" href="#">Медіа</a>',"</div>","</div>"]);getData("GET",ROOT,function(e,t){e?alert(e.message):mediaTemplate.render(t,function(e,t){if(e)throw e;mediaWrap.innerHTML=t})})}