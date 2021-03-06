var http = (function(){

	var get = function(options, resolve, reject){
		var method = options.method || 'GET';
		var limit = options.limit || null;
		var offset = options.offset || null;
		var async = options.async || true;
		var url;

		if (options.url){
			url = options.url;
			var request = new XMLHttpRequest();

			request.onload = function(){
				var res = request.responseText;
				var parsed = JSON.parse(res);

				var data;

				if (limit){
					data = parsed.slice(0, limit);
					resolve(data);
				} else if (offset) {
					data = parsed.slice(offset);
					resolve(data);		
				} else if (offset && limit ){
					data = parsed.slice(offset, offset + limit);
					resolve(data);
				} else {
					resolve(parsed);
				}
			};

			request.onerror = function(){
				var err = new Error('XHR failed');
				reject(err);
			};

			request.open(method, url, async);

			request.send(null);
		} else {
			var err = new Error('URL is undefined');
			reject(err);
			return;
		}

	};

	return {
		get: get
	}

})();


function getData(method, path, callback){
	var request = new XMLHttpRequest();
	request.onload = function(){
		if (request.status === 200){
			var res = request.responseText;
			var parsed = JSON.parse(res);
			callback(null, parsed);
		}
	};
	request.onerror = function(){
		var err = new Error('XHR failed');
		callback(err, null);
	};
	request.open(method, path, true);
	request.send(null);
};

function TemplateError(message){
	this.name = 'Template Error';
	this.message = message || 'prop is undefined';
};

TemplateError.prototype = Object.create(Error.prototype);

function Template(template){
	this.template = template;
};

Template.prototype.render = function(data, callback){
	if (Array.isArray(data)){
		var result = '';
		var self = this;
		data.forEach(function(item, i){
			var partial = self.template.join('\n').replace(/\{{(.+?)\}}/gi, function(matched, prop, offset){
				if (item[prop.trim()]){
					return item[prop.trim()];
				} else {
					var err = new TemplateError(prop.trim() + ' is undefined');
					callback(err, null);
				}
				
			});
			result += partial;
			if (i >= data.length - 1){
				callback(null, result);				
			}
		});
	} else {
		var result = this.template.join('\n').replace(/\{{(.+?)\}}/gi, function(matched, prop, offset){
			if (data[prop.trim()]){
				return data[prop.trim()];
			} else {
				var err = new TemplateError(prop.trim() + ' is undefined');
				callback(err, null);
			}
			
		});

		callback(null, result);
	}
};



