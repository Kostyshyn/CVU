window.onload = function(){
	// var dataDiv = document.getElementById('data');

	var ROOT = 'https://jsonplaceholder.typicode.com';

	var postTemplate = new Template([
		'<div class="info">',
			'<h3>User id: {{ userId }}</h3>',
			'<h1>{{ title }}</h1>',
			'<hr>',
			'<p>{{ body }}</p>',
		'</div>'
	]);

	getData('GET', ROOT + '/posts', function(err, data){
		if (err){
			alert(err.message);
			return;
		}
		postTemplate.render(data, function(err, result){
			if (err){
				throw err;
			} else {
				// dataDiv.innerHTML = result;
			}
		})
	});
};

function menu_toggle(header) {
	header.classList.toggle('show');
}