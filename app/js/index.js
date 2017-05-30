	var newsWrap = document.getElementById('news-wrapper');

	var ROOT = './data.json';

	var newsTemplate = new Template([
		'<div class="news-item">',
            '<a href="#"><img class="news-image"',
                'src="{{ image }}"',
                'alt="inf">',
           	'</a>',
            '<a class="item-title" href="#">',
                '<h4>{{ title }}</h4>',
            '</a>',
            '<p class="item-description">{{ text }}</p>',
		'</div>'
	]);

	getData('GET', ROOT, function(err, data){
		if (err){
			alert(err.message);
			console.log(err.message);
			return;
		} else {
			newsWrap.innerHTML = '<img src="../img/preloader.gif" alt="preloader">'
			
			setTimeout(function(){

				newsTemplate.render(data, function(err, result){
					if (err){
						throw err;
					} else {
						newsWrap.innerHTML = result;
					}
				});

			}, 3000);
		}
	});


function menu_toggle(header) {
	header.classList.toggle('show');
}
