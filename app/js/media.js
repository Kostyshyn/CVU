var mediaWrap = document.getElementById('media-blocks');
if (mediaWrap) {
    var ROOT = 'json/media.json';

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

    getData('GET', ROOT, function (err, data) {
        if (err) {
            alert(err.message);
            return;
        } else {
            mediaTemplate.render(data, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    mediaWrap.innerHTML = result;
                }
            });
        }
    });
}


