function main() {
    jWindow = jQuery(window);
    
    const phrases = [
        "'m Simon Baleine.",
        " Dev.",
        " Ops.",
        "'m pro-active.",
        " Net.",
        "'m creative.",
        " Sec.",
        "'m willing to learn.",
    ]

    let count = 0;
    let index = 0;
    let currentPhrase = '';
    let letter = '';
    let waitTime = 100;

    (function typePhrase() {
        waitTime = 100;
        if (count === phrases.length) {
            count = 0;
        }
        currentPhrase = phrases[count];

        letter = currentPhrase.slice(0, ++index);
        document.querySelector('.typer').textContent = letter;

        if (letter.length === currentPhrase.length) {
            count += 1;
            index = 0;
            waitTime = 2000;
        }
        setTimeout(typePhrase, waitTime);

    }());

    // ---- Nav scripts ----

    jNavBar = jQuery("#nav-bar");
    jBurgerButton = jQuery(".burger-button");

    $(function() {
        jBurgerButton.on("click", function() {
            if (jNavBar.hasClass("enabled-burger-menu")) {
                jNavBar.removeClass("enabled-burger-menu");
            } 
            
            else {
                jNavBar.addClass("enabled-burger-menu");
                jQuery('nav a').css('color', '#000');
            }


            if ($("#nav-bar .nav-menu li.item").hasClass("active")) {
                $("#nav-bar .nav-menu li.item").removeClass("active");
            }
            
            else {
                $("#nav-bar .nav-menu li.item").addClass("active");
            }
        });
    });

    $('section#about .section-content').css({marginLeft: window.innerWidth + 'px'});
    jWindow.on('scroll', function() {
        let toggleScrolled = false;
        if (jWindow.scrollTop() > (window.innerHeight / 2.5)) {
            jQuery("#nav-bar").addClass("scrolled");
            $('section#about .section-content').animate({marginLeft: '0px'}, 'slow');
        }
        else {
            jQuery("#nav-bar").removeClass("scrolled");
        }
        if (jWindow.scrollTop() > (window.innerHeight / 4)) {
            jQuery("#nav-bar").addClass("scrolled");
        }
        else {
            jQuery("#nav-bar").removeClass("scrolled");
        }
    })

    // ---- smooth scroll ----
    $('a.scroll').on('click', function(e) {
        e.preventDefault()
      
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            200,
            'linear'
        )
    });


}

jQuery(document).ready(main);
