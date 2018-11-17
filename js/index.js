$(function(){

$('.fullpage').fullpage({
    navigation:true,
    sectionsColor: ['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed'],
    afterLoad:function(a,index){

         //谁滚出来谁加animation这个类
         $('.section').removeClass('animation').eq(index-1).addClass('animation');
        

         $('.section2 .search').attr('src','images/02/search01.png');

            $('.section>div div').attr('style','');
            $('.section>div img').attr('style','');



        //第二屏-----------------------------------------------
        if(index==2){
           $('.section2 .search').animate({
                marginLeft:-100

           },1000,'easeOutBack',function(){

            //更换有搜索文字的img
            $('.section2 .search').attr('src','images/02/search02.png')

            //0.5s后将执行接下来的动画
            $('.section2 .search').delay(500).animate({
                marginLeft:130,
                bottom:450,
                height:30,
                width:150
            },1000);

            //将沙发显示
            $('.section2 .sofas').delay(500).animate({
                width:441
            },1000);
           });
        // 第四屏---------------------------------
        }else if(index==4){
            $('.section .carBox').animate({

                marginLeft:1000,
                

            },2000,'easeInElastic',function(){

                $('.section .keyboard').animate({

                    opacity:1
                },1000)

            })


        }
    }
});























})