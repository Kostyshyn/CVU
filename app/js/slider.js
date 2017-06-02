var slideIndex = 1;
var sliderWrap = document.getElementById('slider');
if (sliderWrap) {
    var ROOT = 'json/slider.json';

    var sliderTemplate = new Template([
        '<div class="slide row">',
        '<div class="col-sm-7 col-xs-12">',
        '<img class="slide-image" src="{{ image }}" alt="">',
        '</div>',
        '<div class="col-sm-5 col-xs-12">',
        '<h3 class="slide-title">{{ title }}</h3>',
        '<p class="slide-description">{{ text }}</p>',
        '<div class="nav-carousel">',
        '<button type="button" class="prev" onclick="plusDivs(-1)">&#10094;</button>',
        '<button type="button" class="next" onclick="plusDivs(1)">&#10095;</button>',
        '</div>',
        '</div>',
        '</div>'

    ]);

    getData('GET', ROOT, function (err, data) {
        if (err) {
            alert(err.message);
            return;
        } else {
            sliderTemplate.render(data, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    sliderWrap.innerHTML = result;
                    showDivs(slideIndex);
                }
            });
        }
    });

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("slide");
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "flex";
    }
}


	




	
