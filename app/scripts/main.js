/* jshint loopfunc:true */

'use strict';
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});

(function () {
    var menu = document.getElementById('main-menu'),
        anchors = menu.getElementsByTagName('a'),
        anchorsLength = anchors.length,
        html = document.getElementsByTagName('html')[0],
        screenWidth = {
            1312: '70%',
            1380: '74%',
            1466: '78%',
            1540: '82%',
            1560: '86%',
            1604: '88%',
            1640: '90%',
            1712: '92%',
            1783: '96%',
            1813: '98%',
            1920: '100%'
        },
        i = 0,
        l = 0;

    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    function resize() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight|| e.clientHeight|| g.clientHeight,
            x = w.innerWidth|| e.clientWidth|| g.clientWidth,
            menuSpan = menu.getElementsByTagName('span'),
            menuSpanLength = menuSpan.length,
            span = 0;
        if (y < 650 && x >=443) {
            y = 650;
        }
        
        if (x > 1023) {
            document.getElementById('main-menu').style.display = 'block';
        } else {
            document.getElementById('main-menu').style.display = 'none';
        }
        d.getElementsByTagName('header')[0].style.height = y + 'px';
        
        /* if html has class 'lt-ie9' then do this simple form of @media */
        if (hasClass(html, 'lt-ie9')) {
            var j;
            for (j in screenWidth) {
                if(Object.prototype.hasOwnProperty.call(screenWidth, j)) {
                    if (j < x) {
                        g.style.fontSize = screenWidth[j];
                    }
                }
            }
            if (x < 1280) {
                for (span = 0; span < menuSpanLength; span++) {   
                    menuSpan[span].style.display = 'none';
                }
            } else {
                for (span = 0; span < menuSpanLength; span++) {   
                    menuSpan[span].style.display = 'block';
                }
            }
        }
    }
    
    function setActiveAnchor(obj) {
        for (i = 0; i < anchorsLength; i++) {   
            anchors[i].parentNode.className = '';
        }
        obj.parentNode.className = 'active';
    }

    function start() {
        resize();
        for (l = 0; l < anchorsLength; l++) {
            anchors[l].addEventListener('click', function(){
                setActiveAnchor(this);
            });
        }
    }
    
    window.onload = start;
    window.onresize = resize;

}());

var btnNavbarButtonObject = document.getElementById('btn-navbar');    
if (btnNavbarButtonObject) {
    btnNavbarButtonObject.addEventListener('click', function(){
        $( '#main-menu' ).slideToggle( 'slow' , function() {
            if(this.style.display !== 'block') {
                btnNavbarButtonObject.className = 'btn btn-navbar';
            } else {
                btnNavbarButtonObject.className = btnNavbarButtonObject.className + ' rotate-180';
            }
        });
    });
}