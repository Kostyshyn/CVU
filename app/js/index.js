var newsWrap = document.getElementById('news-wrapper') || null;
var newsTemplate = new Template([
    '<div class="news-item">',
    '<a href="#">',
    '<img class="news-image" src="{{ image }}" alt="inf">',
    '</a>',
    '<a class="item-title" href="#">',
    '<h4>{{ title }}</h4>',
    '</a>',
    '<p class="item-description">{{ text }}</p>',
    '</div>'
]);
if (newsWrap) {
    var ROOT = 'json/data.json';

    // http.get({
    //     url: ROOT
    // }, function(data){ // success callback
    //     console.log(data);
    // }, function(err){  // error callback
    //     throw err;
    // });

    getData('GET', ROOT, function (err, data) {
        if (err) {
            alert(err.message);
            return;
        } else {
            newsWrap.innerHTML = '<img src="img/preloader.gif" alt="preloader">'

            setTimeout(function () {

                newsTemplate.render(data, function (err, result) {
                    if (err) {
                        throw err;
                    } else {
                        newsWrap.innerHTML = result;
                    }
                });

            }, 3000);
        }
    });
}

function menu_toggle(header) {
    header.classList.toggle('show');
}

function showNews() {
    var buttonNews = document.getElementById("all-news");
    buttonNews.style.display = "none";
    var ROOT = 'json/data.json';
    getData('GET', ROOT, function (err, data) {
        if (err) {
            alert(err.message);
            return;
        } else {
            newsTemplate.render(data, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    newsWrap.insertAdjacentHTML('beforeend', result);
                }
            });
        }
    });
}