$('.screen').mouseover(function(){
    let imgH = $(this).find('img').height();
    let scrH = $(this).height();

    $(this).find('img').css({top:- imgH + scrH})
}).mouseout(function(){
    $(this).find('img').css({top:0})
});

let scrollTopPos;
//banner
$('.btn_view').click(function(){
    $('.modal').show().css({display:'flex'});
    let imgSrc = $(this).siblings('figure').find('img').clone();
    $('.realview').append(imgSrc)
    console.log(imgSrc);
    $('body').css({height:'100%', overflow:'hidden'})
    scrollTopPos = $(window).scrollTop();
    return false
});
//web
$('.btn_detail').click(function(){
    $('.modal').show().css({display:'flex'}).scrollTop(0);
    let imgSrc = $(this).parents('.cont').find('.origin').html();
    $('.realview').prepend(imgSrc)
    console.log(imgSrc);
    $('body').css({height:'100%', overflow:'hidden'})
    scrollTopPos = $(window).scrollTop();

    $('.btn_close2').click(function(){
        $('.modal').hide();
        $('body').css({height:'', overflow:''});
        $(window).scrollTop(scrollTopPos)
        $('.realview *').remove();
        return false
    })
    return false
})
// $('.modal').mousemove(function(e){
//     var parentOffsetTop = $(this).offset().top;
//     var parentOffsetLeft = $(this).offset().left;
//     let mouseX = e.pageX - parentOffsetLeft - 25;
//     let mouseY = e.pageY - parentOffsetTop - 25;
//     $('.btn_close').css({left:mouseX, top:mouseY});
// });
$('.btn_close').click(function(){
    $('.modal').hide();
    $('body').css({height:'', overflow:''});
    $(window).scrollTop(scrollTopPos)
    $('.realview *').remove();
    return false
})


$('header .gnb a').click(function(){
    let gnbHref = $(this).attr('href');
    let gnbTop = $(gnbHref).offset().top;
    if(gnbHref == '#footer'){
        gnbTop = gnbTop + 500
    }
    $('html').stop().animate({scrollTop:gnbTop})
})


$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let cateTop = $('#category').offset().top;
    let winH = $(window).height();
    
    if(scrT >= 800){
        $('.gotop').fadeIn(200).css({display:'flex'})
    } else {
        $('.gotop').fadeOut(200)
    }

    if(scrT >= cateTop - winH / 2){
        $('.line1, .line2').addClass('on')
    }
})

$('.gotop').click(function(){
    $('html').animate({scrollTop:0}, 3000)
})
