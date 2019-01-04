$(function() {

    var charts = $(".fade-in-right");

    /* FUNCTIONS */

    // Return boolean when an element is partially visible on screen
    function isPartialVisible(element) {
        var
            viewPortHeight = $(window).height(), // Viewport Height
            scrollTop = $(window).scrollTop(), // Scroll Top
            currElementPosY = $(element).offset().top,
            elementHeight = $(element).height();

        return ((currElementPosY + elementHeight + elementHeight) > scrollTop && currElementPosY < (viewPortHeight + scrollTop));
    }

    // Return boolean when an element is wholly visible on screen
    function isWholeVisible(element) {
        var
            viewPortHeight = $(window).height(), // Viewport Height
            scrollTop = $(window).scrollTop(), // Scroll Top
            currElementPosY = $(element).offset().top,
            elementHeight = $(element).height();

        return (currElementPosY > scrollTop && currElementPosY + elementHeight < (viewPortHeight + scrollTop));
    }

    // Animate chart only when you see it
    function animateChartWhenVisible(chart) {
        for (var i = 0, count = chart.length; i < count; i++) {
            if (isWholeVisible(chart[i])) {
                $(chart[i]).addClass("fade-in-right-first");
            }
        }
    }

    /* FUNCTIONS END */

    // On scroll
    $(window).scroll(function() {
        animateChartWhenVisible(charts);
    });

    /* On load */
    animateChartWhenVisible(charts);

});

$(function() {

    var charts = $(".underline-left");

    /* FUNCTIONS */

    // Return boolean when an element is partially visible on screen
    function isPartialVisible(element) {
        var
            viewPortHeight = $(window).height(), // Viewport Height
            scrollTop = $(window).scrollTop(), // Scroll Top
            currElementPosY = $(element).offset().top,
            elementHeight = $(element).height();

        return ((currElementPosY + elementHeight + elementHeight) > scrollTop && currElementPosY < (viewPortHeight + scrollTop));
    }

    // Return boolean when an element is wholly visible on screen
    function isWholeVisible(element) {
        var
            viewPortHeight = $(window).height(), // Viewport Height
            scrollTop = $(window).scrollTop(), // Scroll Top
            currElementPosY = $(element).offset().top,
            elementHeight = $(element).height();

        return (currElementPosY > scrollTop && currElementPosY + elementHeight < (viewPortHeight + scrollTop));
    }

    // Animate chart only when you see it
    function animateChartWhenVisible(chart) {
        for (var i = 0, count = chart.length; i < count; i++) {
            if (isWholeVisible(chart[i])) {
                $(chart[i]).addClass("underline-title-left");
            }
        }
    }

    /* FUNCTIONS END */

    // On scroll
    $(window).scroll(function() {
        animateChartWhenVisible(charts);
    });

    /* On load */
    animateChartWhenVisible(charts);

});

$(function() {

    var charts = $(".underline-right");

    /* FUNCTIONS */

    // Return boolean when an element is partially visible on screen
    function isPartialVisible(element) {
        var
            viewPortHeight = $(window).height(), // Viewport Height
            scrollTop = $(window).scrollTop(), // Scroll Top
            currElementPosY = $(element).offset().top,
            elementHeight = $(element).height();

        return ((currElementPosY + elementHeight + elementHeight) > scrollTop && currElementPosY < (viewPortHeight + scrollTop));
    }

    // Return boolean when an element is wholly visible on screen
    function isWholeVisible(element) {
        var
            viewPortHeight = $(window).height(), // Viewport Height
            scrollTop = $(window).scrollTop(), // Scroll Top
            currElementPosY = $(element).offset().top,
            elementHeight = $(element).height();

        return (currElementPosY > scrollTop && currElementPosY + elementHeight < (viewPortHeight + scrollTop));
    }

    // Animate chart only when you see it
    function animateChartWhenVisible(chart) {
        for (var i = 0, count = chart.length; i < count; i++) {
            if (isWholeVisible(chart[i])) {
                $(chart[i]).addClass("underline-title-right");
            }
        }
    }

    /* FUNCTIONS END */

    // On scroll
    $(window).scroll(function() {
        animateChartWhenVisible(charts);
    });

    /* On load */
    animateChartWhenVisible(charts);

});


var stars = document.querySelectorAll('.animated-card .animated .stars div'),
    planets = document.querySelectorAll('.animated-card .animated .planet'),
    header = document.querySelector('.animated-card .header'),
    background = document.querySelector('.animated-card .header .background'),
    rocket = document.querySelector('.animated-card .rocket-move'),
    startX,
    startY,
    offsetX,
    offsetY,
    isMoving = false,
    addBounceAnimation = function(element, time) {
        element.style.transition = "transform linear " + time + "ms";
        element.style.transform = "scaleY(1)";
        setTimeout(function() {
            element.style.transition = "transform linear " + time / 2 + "ms";
            customTimeout(element, time, 0.1, 5);
        }, time / 2);
    },
    customTimeout = function(element, time, value, repeat) {
        value = value / 2;
        setTimeout(function() {
            if (repeat > 0) {
                element.style.transform = "scaleY(" + (1 + value) + ")";
                customTimeout(element, time, value, repeat - 1);
            } else {
                element.style.transition = "none";
            }
        }, time / 2)
    },

    // Round values for star animations
    changeStar = function(element, index, array) {
        var posX = Math.floor((Math.random() * 100) + 1),
            posY = Math.floor((Math.random() * 100) + 1),
            scale = Math.random(),
            animationTime = Math.floor((Math.random() * (5000 - 10000)) + 10000);
        element.style.left = posX + "%";
        element.style.top = posY + "%";
        element.style.transform = "scale(" + scale + ")";
        element.style.animationDuration = animationTime + "ms";
    },

    // Round values for planet animations
    changePlanet = function(element, index, array) {
        animationTime = Math.floor((Math.random() * (20000 - 30000)) + 30000);
        element.style.animationDuration = animationTime + "ms";
    },

    touchStart = function(e) {
        var touch = e.changedTouches[0];

        startX = touch.pageX;
        startY = touch.pageY;

        // Add Rocket vibe
        rocket.classList.add('vibe');

    },
    touchMove = function(e) {
        e.preventDefault();

        var touch = e.changedTouches[0];

        offsetX = touch.pageX - startX;
        offsetY = touch.pageY - startY;

        // Direction = Vertical?
        if (offsetX < offsetY) {
            background.style.transformOrigin = "top";

            // Transform if inside limits
            if ((1 + offsetY / 1000) <= 1.2 && (1 + offsetY / 1000) >= 1) {
                background.style.transform = "scaleY(" + (1 + offsetY / 1000) + ") translateY(0)";
                isMoving = true;
            }

            if (offsetY / 1000 <= 0) {
                isMoving = false;
            }
        }

    },
    touchEnd = function(e) {

        addBounceAnimation(background, 200);
        background.classList.add('bounce');

        // Add fly animation
        if (isMoving === true) {
            rocket.classList.add('fly');
            setTimeout(function() {
                isMoving = false;
                if (isMoving === false) {
                    rocket.classList.remove('vibe');
                    rocket.classList.remove('fly');
                }
            }, 7000);

            // Remove Rocket vibe
            if (isMoving === false) {
                rocket.classList.remove('vibe');
                rocket.classList.remove('fly');
            }
        }
    };

stars.forEach(changeStar);
planets.forEach(changePlanet);


// Add event listeners
header.addEventListener("touchstart", touchStart);
header.addEventListener("touchmove", touchMove);
header.addEventListener("touchend", touchEnd);