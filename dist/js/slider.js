function plusDivs(s){showDivs(slideIndex+=s)}function showDivs(s){var e,l=document.getElementsByClassName("slide");for(s>l.length&&(slideIndex=1),s<1&&(slideIndex=l.length),e=0;e<l.length;e++)l[e].style.display="none";l[slideIndex-1].style.display="flex"}var slideIndex=1,sliderWrap=document.getElementById("slider");if(sliderWrap){var ROOT="json/slider.json",sliderTemplate=new Template(['<div class="slide row">','<div class="col-sm-7 col-xs-12">','<img class="slide-image" src="{{ image }}" alt="">',"</div>",'<div class="col-sm-5 col-xs-12">','<h3 class="slide-title">{{ title }}</h3>','<p class="slide-description">{{ text }}</p>','<div class="nav-carousel">','<button type="button" class="prev" onclick="plusDivs(-1)">&#10094;</button>','<button type="button" class="next" onclick="plusDivs(1)">&#10095;</button>',"</div>","</div>","</div>"]);getData("GET",ROOT,function(s,e){s?alert(s.message):sliderTemplate.render(e,function(s,e){if(s)throw s;sliderWrap.innerHTML=e,showDivs(slideIndex)})})}