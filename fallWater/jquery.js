/**
 * Created by Administrator on 2016/7/5.
 */
$(window).load(function(){
    imgStyle();
    var imgData = ["images/i1.jpg" ,"images/i2.jpg","images/i3.jpg","images/i4.jpg","images/i5.jpg","images/i6.jpg","images/i7.jpg","images/i8.jpg","images/i9.jpg","images/i10.jpg","images/i11.jpg"];

    $(window).scroll(function(){
        if(bottom()){
            $.each(imgData,function(index,ele){
                $("<div class='box'><div class='imgbox'><img src="+imgData[index]+"/></div></div>").appendTo("#main");
            });
        }
        imgStyle();
        backTop();
        //回到顶部
            function  backTop(){
                    if($(window).scrollTop() > $(window).height()){
                            $("#btn").fadeIn(500,function(){
                                $(this).clearQueue();
                            })
                    }else{
                        $("#btn").fadeOut(500,function(){
                            $(this).clearQueue();
                        })
                    }
            }

    });
    //回到顶端点击
    $("#btn").on("click",function(){
        console.log("111");
        $("body,html").animate({scrollTop:0},500);

    });
});
function bottom(){
    var box = $(".box");
    var lastHeight = box.last().offset().top;
    var scrollHeight = $(window).scrollTop();
    var winHeight = $(window).height();
    return (winHeight + scrollHeight) > lastHeight ? true : false;
}

function imgStyle(){
        var box = $(".box");
        var boxWidth = box.eq(0).width();
        var num = Math.floor($(window).width() / boxWidth);
        var heightArr = [];
        box.each(function(index,ele){
                var boxHeight = box.eq(index).height();
                if(index < num){
                        heightArr[index] = boxHeight;
                }else{
                        var minHeight = Math.min.apply(null,heightArr);
                        var minIndex = $.inArray(minHeight,heightArr);
                        $(ele).css({
                            position:"absolute",
                            top:minHeight+10,
                            left:box.eq(minIndex).position().left
                        });

                        heightArr[minIndex] += box.eq(index).height();
                }
        })
}