// slider for topics

window.onload = function(){

    var dataDiv = document.getElementById('data'),
        ROOT = '/json/news.json';

    var postTemplate = new Template([
        '<div class="analytics">',
            '<h2>',
                '<a href="" class="content-title">{{ title }}</a>',
            '</h2>',
            '<span class="date">{{ date }}</span>',
            '<div class="slider-analytics">',
                '<div class="mySlides">',
                    '<img width="100%" height="auto" src="{{ url }}" alt="">',
                    '<div class="slider-discription">',
                        '<span>{{ text }}</span>',
                    '</div>',
                '</div>',
            '</div>',
            '<div class="marks">',
                '<span>Мітка:</span>',
                '<a href="" class="mark-analitic">{{ label }}</a>',
            '</div>',
        '</div>'
    ]);

    getData('GET', ROOT, function(err, data){
        if (err){
            alert(err.message);
            return;
        }
        postTemplate.render(data, function(err, result){
            if (err){
                throw err;
            } else {
                dataDiv.innerHTML = result;
            }
        });

        // var slideIndex = 1;
        // showDivs(slideIndex);
        //
        // var prev = document.getElementsByClassName("analitic-prev")[0],
        //     next = document.getElementsByClassName("analitic-nex")[0];
        //
        // prev.addEventListener('click', function () {
        //     showDivs(slideIndex -= 1);
        // }, false);
        //
        // next.addEventListener('click', function () {
        //     showDivs(slideIndex += 1);
        // }, false);
        //
        // function showDivs(n) {
        //     var i;
        //     var x = document.getElementsByClassName("mySlides");
        //     if (n > x.length) {slideIndex = 1}
        //     if (n < 1) {slideIndex = x.length}
        //     for (i = 0; i < x.length; i++) {
        //         x[i].style.display = "none";
        //     }
        //     x[slideIndex-1].style.display = "block";
        // }
    });
};