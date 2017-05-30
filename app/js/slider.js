
	var i=0;
	var sliders = [
	{
		title:"За час роботи ВР VIII скликання Президент заветував 39 законів, ..",
		description:"Із початку роботи Верховної Ради VIII скликання Президент наклав вето на 39 законів. Ініціаторами більшості із них, 31 закону, були народні депутати, ще 8 законів ініціював уряд (А. Яценюка). Про це йдеться в дослідженні КВУ «Три роки президентства П. Порошенка...",
		image:"http://cvu.org.ua/uploads/59257686-9830-4d42-a69b-6b400a0a0d19-%D1%96%D0%BD%D1%843.png"
	},
	{
		title:"Які фракції підтримують законопроекти Президента, - дослідження КВУ",
		description:"Народний Фронт, Блок Петра Порошенка та «Самопоміч» найбільше підтримують законопроекти Президента. Про це зазначив голова КВУ Олексій Кошель, презентуючи дослідження КВУ: «Три роки президентства П. Порошенка: які закони блокує та які підтримує През...",
		image:"http://cvu.org.ua/uploads/592566cd-72fc-43c4-9fb2-69a60a0a0d19-%D1%96%D0%BD%D1%842.png"
	},
	{
		title:"84% законопроектів Президента стають законами, - КВУ ",
		description:"За час роботи Верховної Ради VIII скликання Президент України П. Порошенко подав на розгляд парламенту 111 проектів законів. Із них стали законами 93 або 84%. Про це йдеться в дослідженні КВУ «Три роки президентства П. Порошенка: які закони блокує та які підтри...",
		image:"http://cvu.org.ua/uploads/592543aa-4658-4840-b2d9-66660a0a0d19-%D1%96%D0%BD%D1%841.png"
	},
	{
		title:"АНОНС. 24 травня прес-конференція КВУ: Три роки президентства П...",
		description:"У середу, 24 травня, о 10:30, в Українському Кризовому медіа-центрі відбудеться прес-конференція Комітету виборців України: «Три роки президентства П. Порошенка: які закони блокує та які підтримує Президент». Під час заходу буде презентовано дослідження ...",
		image:"http://cvu.org.ua/uploads/58e203cb-9724-4550-a453-5f140a0a0d19-%D0%BA%D0%B2%D1%83%20%D0%BB%D0%BE%D0%B3%D0%BE.jpg"
	},
	{
		title:"Жодна фракція не подала Президентові оновлений список кандидатів...",
		description:"Майже два місяці тому, 21 березня, Президент України під час зустрічі з лідерами парламентських фракцій закликав їх подати йому на розгляд узгоджений список кандидатур до складу Центральної виборчої комісії. Станом на 15 травня жодна з фракцій ВРУ досі не надала През...",
		image:"http://cvu.org.ua/uploads/592292dc-52d4-4691-8567-59700a0a0d19-56422c996282e-46152.jpg"
	}
	]; 
	function showPrevious(){
		i=i-1; 
		if (i<0) {
			i=sliders.length-1;
		}
		var image=document.getElementById('slide-image'); 
		var title=document.getElementById('slide-title'); 
		var description=document.getElementById('slide-description');
		image.src=sliders[i].image;
		title.innerHTML=sliders[i].title;
		description.innerHTML=sliders[i].description;
	}

	function showNext(){
		i=i+1; 
		if (i>=sliders.length) {
			i=0;
		}
		var image=document.getElementById('slide-image'); 
		var title=document.getElementById('slide-title'); 
		var description=document.getElementById('slide-description');
		image.src=sliders[i].image;
		title.innerHTML=sliders[i].title;
		description.innerHTML=sliders[i].description;
	}
	var previous=document.getElementById('previous');
	var next=document.getElementById('next');
	if (previous) {
        previous.addEventListener("click", showPrevious);
	}
	if (next) {
        next.addEventListener("click", showNext);
    }
