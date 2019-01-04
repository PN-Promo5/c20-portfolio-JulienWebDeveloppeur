    // [ JS Script Code Index ]

    // :: 1.0 NavBar
    // :: 2.0 Smooth scroll (Jquery)
    // :: 3.0 Projects Section
    // :: 4.0 Header Animation
    // :: 5.0 Mail Form Security

    // :: 1.0 NavBar
    // Var initialization
    var eltLogo = document.getElementsByClassName("logo");
    var eltNavBar = document.querySelector("nav");
    var eltLinkNav = document.getElementsByClassName("nav-link");
    var eltSocialIconColor = document.getElementsByClassName("social-icon-color");
    var eltSocialIcon = document.getElementsByClassName("social-shadow");
    var eltBtnTogller = document.getElementById("navbar-toggler");
    var eltLogoNavBarNoExpand = document.getElementById("logo-navbar-no-expand");
    var eltLogoNavBarExpand = document.getElementById("logo-navbar-expand");
    var navBarExpand;
    var navBarExpandContent = document.getElementById("navbarTogglerDemo01");
    var eltNavLink = document.getElementsByClassName("nav-link");
    var eltLogoLeft = document.getElementById("logo-top-left");
    var eltBtnNav = document.getElementById("btn-nav");
    let scrollTop = $(window).scrollTop();
    let topNav = true;
    eltBtnNav.hidden = true;

    // If on load the page is scrolled more than 10px Change navbar in white
    if (scrollTop > 10) {
        navBarNotExpanded();
    }

    // Add event listener on click to all nav bar link and hidden Expanded Navbar if link is activate
    for (let i = 0; i < eltNavLink.length; i++) {
        eltNavLink[i].addEventListener("click", hiddenExpandedNav, false);
    }

    // Hidden NavBar Expanded
    function hiddenExpandedNav() {
        navBarExpand = eltBtnTogller.getAttribute("aria-expanded");
        if (navBarExpand === "true") {
            navBarExpandContent.classList.remove("show");
            eltBtnTogller.setAttribute("aria-expanded", "false");
            return navBarExpand;
        }
    }
    // Add event listener on load and on scroll to window for testing the navBar to show
    window.addEventListener("scroll", navBar, false);
    window.addEventListener("load", navBar, false);
    // Add event listener on click to NavBar toggler
    eltBtnTogller.addEventListener("click", function() {
        scrollTop = $(window).scrollTop();
        navBarExpand = eltBtnTogller.getAttribute("aria-expanded");
        // If navBar is not expanded showing logo top left and hidden logo top right
        if (navBarExpand === "false") {
            eltLogoLeft.style.visibility = "visible";
            eltLogoNavBarNoExpand.style.display = "none";
        } else {
            // after 500ms show logo top right
            setTimeout(function() {
                eltLogoNavBarNoExpand.classList.remove("d-none");
            }, 500);
        }
        // If the page is scrolled more than 10px and the navBar is expanded Change navbar in white else navBar transparent
        if (scrollTop < 10 && navBarExpand === "true") {
            setTimeout(function() {
                navBarExpanded();
            }, 500);
            return navBarExpand;
        } else {
            navBarNotExpanded();
            return navBarExpand;
        }
    }, false);
    // Check wish navBar to display
    function navBar() {
        scrollTop = $(window).scrollTop();
        navBarExpand = eltBtnTogller.getAttribute("aria-expanded");
        // If the page is scrolled less than 10px and topNav is true Change navbar in white else navBar transparent
        if ((scrollTop < 10) && (topNav === true)) {
            topNav = false;
            navBarExpanded();
        } else {
            topNav = true;
            navBarNotExpanded();
        }
        // if page is scrolled more than 400px display "get in touch" btn else hidden
        if (scrollTop > 400) {
            eltBtnNav.hidden = false;
        } else {
            eltBtnNav.hidden = true;
        }
        // if navBar is expanded change navBar in white
        if (navBarExpand === "true") {
            navBarNotExpanded();
            return navBarExpand;
        }
    }
    // Change the navBar in Transparent
    function navBarExpanded() {
        eltLogoLeft.style.visibility = "visible";
        eltLogoNavBarExpand.classList.add("d-none");
        eltNavBar.classList.remove("bg-white");
        eltNavBar.classList.add("bg-transparent");
        eltNavBar.classList.remove("shadow");
        eltNavBar.classList.remove("py-lg-2");
        for (var i = 0; i < eltLinkNav.length; i++) {
            eltLinkNav[i].classList.add("text-white");
            eltLinkNav[i].classList.remove("text-black");
        }
        for (var i = 0; i < eltSocialIconColor.length; i++) {
            eltSocialIconColor[i].style.color = "white";
        }
        for (var i = 0; i < eltSocialIcon.length; i++) {
            eltSocialIcon[i].classList.add("social-icon");
            eltSocialIcon[i].classList.remove("social-icon-after");
        }
        if (eltNavBar.classList.contains("bg-white")) {
            eltNavBar.classList.remove("navbar-dark");
            eltNavBar.classList.add("navbar-light");
        } else {
            eltNavBar.classList.add("navbar-dark");
            eltNavBar.classList.remove("navbar-light");
        }
    }
    // Change the navBar in white
    function navBarNotExpanded() {
        eltLogoNavBarExpand.classList.remove("d-none");
        eltNavBar.classList.remove("bg-transparent");
        eltNavBar.classList.add("bg-white");
        eltNavBar.classList.add("shadow");
        eltNavBar.classList.add("py-lg-2");
        for (var i = 0; i < eltLinkNav.length; i++) {
            eltLinkNav[i].classList.remove("text-white");
            eltLinkNav[i].style.color = "white";
        }
        for (var i = 0; i < eltSocialIcon.length; i++) {
            eltSocialIcon[i].classList.remove("social-icon");
            eltSocialIcon[i].classList.add("social-icon-after");
        }
        for (var i = 0; i < eltSocialIconColor.length; i++) {
            eltSocialIconColor[i].style.color = "white";
        }
        if (eltNavBar.classList.contains("bg-white")) {
            eltNavBar.classList.remove("navbar-dark");
            eltNavBar.classList.add("navbar-light");
        } else {
            eltNavBar.classList.add("navbar-dark");
            eltNavBar.classList.remove("navbar-light");
        }
    }

    // :: 2.0 Smooth scroll
    $('a[href^="#"]').on('click', function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }

    });
    // :: 3.0 Projects Section
    eltProjectsLink = document.getElementsByClassName("link-projects");
    eltProjectsContainer = document.getElementsByClassName("projects-container")
    eltECommerce = document.getElementById("e-commerce");
    eltAppLanding = document.getElementById("app-landing");
    eltEventPage = document.getElementById("event-page");
    eltGame1 = document.getElementById("game1");
    eltGame2 = document.getElementById("game2");
    eltRedesign = document.getElementById("reDesign");
    // hidden all projects container exept the first
    for (let i = 1; i < eltProjectsContainer.length; i++) {
        eltProjectsContainer[i].hidden = true;
    }
    // Add the unactive class to all link and an avent listener
    for (let i = 0; i < eltProjectsLink.length; i++) {
        eltProjectsLink[i].classList.add("unactive-project");
        eltProjectsLink[i].addEventListener("click", function(e) {
            // Call function selectContent with in parameters the link and the container 
            selectContent(eltProjectsLink[i], eltProjectsContainer[i]);
        }, false)
    }
    // remove the unactive class and add the active class to the first projects link
    eltProjectsLink[0].classList.remove("unactive-project");
    eltProjectsLink[0].classList.add("active-project");

    // hidden all container and display the container passed in parameter and add animation to content
    function selectContent(linkActivate, container) {
        linkActiveProject(linkActivate);
        for (let i = 0; i < eltProjectsContainer.length; i++) {
            eltProjectsContainer[i].hidden = true;
        }
        container.hidden = false;
        if ((linkActivate === eltProjectsLink[0]) || (linkActivate === eltProjectsLink[1])) {
            eltECommerce.classList.add("fade-in-left-first");
            eltAppLanding.classList.add("fade-in-left-first");
            eltEventPage.classList.add("fade-in-bottom");
        }
        if (linkActivate === eltProjectsLink[2]) {
            eltGame1.classList.add("fade-in-left-first");
            eltGame2.classList.add("fade-in-left-first");
        }
        if (linkActivate === eltProjectsLink[3]) {
            eltReDesign.classList.add("fade-in-left-first");
        }
    }
    /* test all link and add unactive class to all those don't have it,
     do the same for remove active class and add active classe to the link passed in parameter*/
    function linkActiveProject(element) {
        for (let i = 0; i < eltProjectsLink.length; i++) {
            if (eltProjectsLink[i].classList.contains !== "unactive-project") {
                eltProjectsLink[i].classList.add("unactive-project");
            }
        }
        for (let i = 0; i < eltProjectsLink.length; i++) {
            if (eltProjectsLink[i].classList.contains("active-project")) {
                eltProjectsLink[i].classList.remove("active-project");
            }
        }
        element.classList.remove("unactive-project");
        element.classList.add("active-project");

    }

    // :: 4.0 Header Animation
     // :: 4.1 grow path of rectangle
    // Var initialization
    let eltRectangle = document.getElementsByClassName("animated-bar");
    var pathLength = 0;
    var growOrnot = true;
   // grow length of rectangle 
    function growPath() {
        for (let i = 0; i < eltRectangle.length; i++) {
            if (growOrnot === true) {
                pathLength += 1.5;
                eltRectangle[i].setAttribute("width", pathLength);
                growOrnot = false;
            }
            growOrnot = true;
        }
    }
   // timer
    scheduler = function(maxIterations, interval) {
        var iteration = function(n) {
            if (n > 0) {
                growPath();
                setTimeout(function() {
                    iteration(n - 1)
                }, interval);
            }
        }
        iteration(maxIterations);
    }

    scheduler(20, 10);

     // :: 4.2 play animation when visible and paused when not
    // Var initialization
    var wireframe = document.getElementById("wireframe1");
    for (let i = 1; i < 10; i++) {
        eval("var graphique" + i + " = document.getElementById(\"graphique" + i + "\");")
    }
    var boxeBottom1 = document.getElementById("boxe-bottom1");
    var boxeBottom2 = document.getElementById("boxe-bottom2");
    var boxeBottom3 = document.getElementById("boxe-bottom3");
    var boxe1 = document.getElementById("boxe1");
    var boxe2 = document.getElementById("boxe2");
    var boxe3 = document.getElementById("boxe3");
    let scroll = window.scrollY;
    // If on load the page is scrolled more than 10px paused animation else play
    if (scroll > 400) {
        animationPaused()
    } else {
        animationPlay()
    }

    window.addEventListener("scroll", function(e) {
        let scroll = window.scrollY;
    // If on scroll the page is scrolled more than 10px paused animation else play
        if (scroll > 400) {
            animationPaused()
        } else {
            animationPlay()
        }
    }, false)
    // play all animation
    function animationPlay() {
        for (let i = 1; i < 10; i++) {
            eval("graphique" + i + ".style.animationPlayState = \"running\";")
        }
        wireframe.style.animationPlayState = "running";
        for (let i = 1; i < 4; i++) {
            eval("boxe" + i + ".style.animationPlayState = \"running\";")
            eval("boxeBottom" + i + ".style.animationPlayState = \"running\";")
        }
    }
    // paused all animation
    function animationPaused() {
        for (let i = 1; i < 10; i++) {
            eval("graphique" + i + ".style.animationPlayState = \"paused\";")
        }
        wireframe.style.animationPlayState = "paused";
        for (let i = 1; i < 4; i++) {
            eval("boxe" + i + ".style.animationPlayState = \"paused\";")
            eval("boxeBottom" + i + ".style.animationPlayState = \"paused\";")
        }
    }

    // :: 5.0 Mail Form Security
    // Var initialization
    var eltBtnVerifForm = document.getElementById("verif-form");
    var eltBtnSendForm = document.getElementById("send-form");
    var eltInputMail = document.getElementById("mail");
    var eltInputMessage = document.getElementById("message");
    var errorMessage = document.getElementsByClassName("error-message");
    eltBtnSendForm.hidden = true;
    
    // if btnVerifForm is clicked do all the test for sending form
    eltBtnVerifForm.addEventListener("click", function(e) {
        /* if email is good and input message is not empty hidden all error messsage,
        hidden btnVerifForm, display btnSendForm and send form*/
        if (validate() === true && eltInputMessage.value !== "") {
            errorMessage[0].classList.add("d-none");
            errorMessage[1].classList.add("d-none");
            errorMessage[2].classList.add("d-none");
            eltBtnVerifForm.hidden = true;
            eltBtnSendForm.hidden = false;
            eltBtnSendForm.click();
        } else {
            // if input mail is empty, display error message
            if (eltInputMail.value === "") {
                errorMessage[0].classList.remove("d-none");
            }
            // if input mail is empty and email is not valide display error message
            if (eltInputMail.value !== "" && validate() === false) {
                errorMessage[0].classList.add("d-none");
                errorMessage[1].classList.remove("d-none");
            }
            // if input message is empty, display error message
            if (eltInputMessage.value === "") {
                errorMessage[2].classList.remove("d-none");
            }
        }
    }, false)
   // Regex for mail
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    // test validity of mail
    function validate() {
        var $result = $("#result");
        var email = eltInputMail.value;
        $result.text("");
        // if email is valide return true else return false
        if (validateEmail(email)) {
            return true;
        } else {
            return false;
        }
    }
    // if eltInputMail is modified do all the test
    eltInputMail.addEventListener("input", function(e) {
        errorMessage[0].classList.add("d-none");
        errorMessage[1].classList.add("d-none");
        if (eltInputMail.value !== "" && validate() === false) {
            errorMessage[0].classList.add("d-none");
            errorMessage[1].classList.remove("d-none");
        } else {
            errorMessage[0].classList.add("d-none");
            errorMessage[1].classList.add("d-none");
        }
        if (eltInputMail.value !== "") {
            errorMessage[0].classList.add("d-none");
        } else {
            errorMessage[0].classList.remove("d-none");
        }
    }, false)
    // if eltInputMessage is modified do all the test
    eltInputMessage.addEventListener("input", function(e) {
        if (eltInputMessage.value !== "") {
            errorMessage[2].classList.add("d-none");
        } else {
            errorMessage[2].classList.remove("d-none");
        }
    }, false)