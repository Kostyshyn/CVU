
    var dataDiv = document.getElementById('media-blocs');
    // if (dataDiv) {
    var ROOT = 'data/media.json';

        var mediaTemplate = new Template([
            '<div>',
            '<a class="madia-title" href="#">',
            '<h3>{{ title }}</h3>',
            '</a>',
            '<div class="media-info">',
            '<span class="date-media">{{ date }}</span>',
            '</div>',
            '<div class="media-content">',
            '<iframe src="{{ src }}" width="560" height="315" frameborder="0" allowfullscreen></iframe>',
            '</div>',
            '<div class="tags">',
            '<div>Мітки:</div>',
            '<a class="media-label" href="#">Відео</a>',
            '<a class="media-label" href="#">Медіа</a>',
            '</div>',
            '</div>'
        ]);

    getData('GET', ROOT, function(err, data){
        if (err){
            alert(err.message);
            console.log(err.message);
            return;
        } else {
            newsWrap.innerHTML = '<img src="../img/preloader.gif" alt="preloader">';

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
    // }


