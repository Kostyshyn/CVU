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



