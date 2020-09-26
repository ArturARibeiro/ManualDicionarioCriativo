function Active(){

    if(window.pageYOffset <= (document.getElementById('introducao').offsetTop - 300)){
        $('#homelink').addClass('active');
    }else{
        $('#homelink').removeClass('active');
    }

    if(window.pageYOffset > (document.getElementById('introducao').offsetTop - 300)){
        $('#introlink').addClass('active');
    }else{
        $('#introlink').removeClass('active');
    }

    if(window.pageYOffset >= 200 && document.body.offsetWidth > 768){
        $('#menu').addClass('activeBar fixed-top');
        document.getElementById('home').style.marginTop= "13.5vh";
    }else{
        $('#menu').removeClass('activeBar fixed-top');
        document.getElementById('home').style.marginTop= "0vh";
    }

    console.log(window.pageYOffset)
}