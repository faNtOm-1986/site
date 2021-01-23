// element = $('.content')
// element.css({'color':'red'})
//
// console.log(element)

// element = document.querySelector('.content')
// element.hide(5400)
// element.style.color = 'red'

// $(document).ready(function(){
//     $('.content').css({'color':'red'})
// });

// $(document).click(function(){
//     setInterval(function(){
//         $('header').animate({'opacity':'0'}).delay(1000).animate({'opacity':'1'})
//     }, 1000);
// });

// $(window).scroll(function(){
//     $('.block').each(function(){
//         let pos = $(this).offset().top,
//             ht = $(this).height,
//             st = $(window).scrollTop();
//         if( pos < st+window.innerHeight/2 ) {
//             $(this).addClass('animate__fadeInUp animate__animated');
//             // $(this).addClass('vsbl');
//         }
//     });
// })

let mainMoney = 0,
    freelance = 0,
    subMoney1 = 0,
    subMoney2 = 0,
    home = 0,
    jkh = 0,
    car = 0,
    credits = 0,
    percent = 0,
    fullMonth = 0,
    startFullMonth = 0,
    fullDay = 0,
    buffer = 0

function Calculate(){

    mainMoney = $('input.calc_input[name=\'main_money\']').val() != '' ? $('input.calc_input[name=\'main_money\']').val() : 0
    freelance = $('input.calc_input[name=\'freelance\']').val() != '' ? $('input.calc_input[name=\'freelance\']').val() : 0
    subMoney1 = $('input.calc_input[name=\'sub_money_1\']').val() != '' ? $('input.calc_input[name=\'sub_money_1\']').val() : 0
    subMoney2 = $('input.calc_input[name=\'sub_money_2\']').val() != '' ? $('input.calc_input[name=\'sub_money_2\']').val() : 0

    home = $('input.calc_input[name=\'home\']').val() != '' ? $('input.calc_input[name=\'home\']').val() : 0
    jkh = $('input.calc_input[name=\'jkh\']').val() != '' ? $('input.calc_input[name=\'jkh\']').val() : 0
    car = $('input.calc_input[name=\'car\']').val() != '' ? $('input.calc_input[name=\'car\']').val() : 0
    credits = $('input.calc_input[name=\'credits\']').val() != '' ? $('input.calc_input[name=\'credits\']').val() : 0

    fullMonth = parseInt(mainMoney) + parseInt(freelance) + parseInt(subMoney1) + parseInt(subMoney2) - parseInt(home) - parseInt(jkh) - parseInt(car) - parseInt(credits)
    startFullMonth = fullMonth
    // fullDay = Math.round((parseInt(mainMoney) + parseInt(freelance) + parseInt(subMoney1) + parseInt(subMoney2) - parseInt(home) - parseInt(jkh) - parseInt(car) - parseInt(credits))/30)

    buffer = Math.round(parseInt(fullMonth) * parseInt(percent) * 0.01)

    $('div.result div')[0].textContent = 'Копим: ' + buffer
    $('div.statistics p.money')[2].textContent = buffer*12
    $('div.result div')[1].textContent = 'Остаётся: ' + String(fullMonth-buffer)

    fullMonth = fullMonth - buffer
    fullDay = Math.round((startFullMonth - buffer)/30)

    $('div.statistics p.money')[0].textContent = fullMonth
    $('div.statistics p.money')[1].textContent = fullDay




}

$(document).ready(function(){

    $('input[type=\'range\']').on('input', function() {
        percent = $(this).val()
        let p = $('div.range p')[0]
        p.textContent = percent+'%'
        Calculate()
    })

    $('.calc_input').on('keypress', function(evt){

        let theEvent = evt || window.event;
        let key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        let regex = /[0-9]|\./;
        if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }

    })

    $('.calc_input').on('keyup', function(evt){

        Calculate()

    })

});

