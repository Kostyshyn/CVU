window.onload = function(){
	var btn = document.getElementById('btn');
	var dataDiv = document.getElementById('data');
	var input = document.getElementById('input');

	var ROOT = 'https://jsonplaceholder.typicode.com';

	var postTemplate = new Template([
		'<div class="info">',
			'<h3>User id: {{ userId }}</h3>',
			'<h1>{{ title }}</h1>',
			'<hr>',
			'<p>{{ body }}</p>',
		'</div>'
	]);

	btn.addEventListener('click', function(){
		getData('GET', ROOT + '/posts', function(data){
			postTemplate.render(data, function(err, result){
				if (err){
					throw err;
				} else {
					dataDiv.innerHTML = result;
				}
			})
		});
	});
};