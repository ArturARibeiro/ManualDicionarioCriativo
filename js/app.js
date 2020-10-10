$('nav a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('nav').innerHeight(),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight - 50
    }, 600);
});

function HomePage(){
    document.getElementsByClassName('home-page')[0].style.transition = "opacity .8s, top .7s ease-in-out";
    document.getElementsByClassName('home-page')[0].style.top = '-10px';
    document.getElementsByClassName('home-page')[0].style.opacity = '100%';

}

function Active() {

    if (window.pageYOffset <= (document.getElementById('introducao').offsetTop - 300)) {
        $('#homelink').addClass('active');
    } else {
        $('#homelink').removeClass('active');
    }

    if (window.pageYOffset > (document.getElementById('introducao').offsetTop - 300)
        && window.pageYOffset < (document.getElementById('funcionalidades').offsetTop - 300)) {
        $('#introlink').addClass('active');
    } else {
        $('#introlink').removeClass('active');
    }

    if (window.pageYOffset > (document.getElementById('funcionalidades').offsetTop - 300)
        && window.pageYOffset < (document.getElementById('historia').offsetTop - 300)) {
        $('#funclink').addClass('active');
    } else {
        $('#funclink').removeClass('active');
    }

    if (window.pageYOffset > (document.getElementById('historia').offsetTop - 300)) {
        $('#histlink').addClass('active');
    } else {
        $('#histlink').removeClass('active');
    }

    if (window.pageYOffset >= 200 && document.body.offsetWidth > 768) {
        $('#menu').addClass('activeBar fixed-top');
        document.getElementById('home').style.marginTop = "13.5vh";
    } else {
        $('#menu').removeClass('activeBar fixed-top');
        document.getElementById('home').style.marginTop = "0vh";
    }
}