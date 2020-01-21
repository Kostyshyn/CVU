var mediaWrap = document.getElementById('projectBlocks');
if (mediaWrap) {
    var ROOT = 'data/project.json';

    var mediaTemplate = new Template([
        '<div>',
        '<a class="projecTitle" href="{{src}}">',
        '<h3>{{ title }}</h3>',
        '</a>',
        '<div class="projectInfo">',
        '<img width="100%" height="auto" src="{{image}}" alt="">',
        '</div>',
        '<div class="projectContent">',
        '<p>{{text}}</p>',
        '<div class="tags">',
        '<div class="marks">',
        '<span>Мітка:</span>',
        '<a href="" class="markProject">{{ label }}</a>',
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


