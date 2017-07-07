/**
 * Created by 28119 on 10/05/2017.
 */



//1

//window.onload = function () {
//    //找人
//    var wrap = document.getElementById("wrap");
//    var arrow = document.getElementById("arrow");
//    var arrLeft = document.getElementById("arrLeft");
//    var arrRight = document.getElementById("arrRight");
//    var slide = document.getElementById("slide");
//    var ul = slide.children[0];
//    var lis = ul.children;
//    //1.鼠标经过
//    wrap.onmouseover = function () {
//        animate(arrow, {"opacity": 1});
//    };
//    wrap.onmouseout = function () {
//        animate(arrow, {"opacity": 0});
//    };
//
//
//    //2.设置图片位置
//    var config = [
//        {
//            "width": 400,
//            "top": 20,
//            "left": 50,
//            "opacity": 0.2,
//            "zIndex": 2
//        },//0
//        {
//            "width": 600,
//            "top": 70,
//            "left": 0,
//            "opacity": 0.8,
//            "zIndex": 3
//        },//1
//        {
//            "width": 800,
//            "top": 100,
//            "left": 200,
//            "opacity": 1,
//            "zIndex": 4
//        },//2
//        {
//            width: 600,
//            top: 70,
//            left: 600,
//            opacity: 0.8,
//            zIndex: 3
//        },//3
//        {
//            "width": 400,
//            "top": 20,
//            "left": 750,
//            "opacity": 0.2,
//            "zIndex": 2
//        }//4
//    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
//    function assign() {
//        for (var i = 0; i < lis.length; i++) {
//            animate(lis[i], config[i], function () {
//                flag = true;
//            });
//
//        }
//    }
//
//    assign();
//    //3.点击箭头旋转
//    arrRight.onclick = function () {
//        if(flag){
//            flag = false;
//            config.push(config.shift());
//            assign();
//        }
//    }
//
//    arrLeft.onclick = function () {
//        if(flag){
//            flag=false;
//            config.unshift(config.pop());
//            assign();
//        }
//    }
//
//    //4.添加节流阀
//    var flag = true;
//}

//2

//window.onload = function () {
//
//
////目的 达到旋转的效果
////1.鼠标移动到目标区域显示左右两侧的箭头
//    var slide = document.getElementById("slide");
//    var arrow = document.getElementById("arrow");
//    var arrLeft = document.getElementById("arrLeft");
//    var arrRight = document.getElementById("arrRight");
//    var ul = slide.children[0];
//    var lis = ul.children;
//    slide.onmouseover = function () {
//        animate(arrow, {"opacity": 1})
//    }
//    slide.onmouseout = function () {
//        animate(arrow, {"opacity": 0})
//    }
//    //2.动态设置图片的位置
//    var config = [
//        {
//            "width": 400,
//            "top": 20,
//            "left": 50,
//            "opacity": 0.2,
//            "zIndex": 2
//        },//0
//        {
//            "width": 600,
//            "top": 70,
//            "left": 0,
//            "opacity": 0.8,
//            "zIndex": 3
//        },//1
//        {
//            "width": 800,
//            "top": 100,
//            "left": 200,
//            "opacity": 1,
//            "zIndex": 4
//        },//2
//        {
//            width: 600,
//            top: 70,
//            left: 600,
//            opacity: 0.8,
//            zIndex: 3
//        },//3
//        {
//            "width": 400,
//            "top": 20,
//            "left": 750,
//            "opacity": 0.2,
//            "zIndex": 2
//        }//4
//    ];
//
//    function gaibian() {
//        for (var i = 0; i < lis.length; i++) {
//            animate(lis[i], config[i], function () {
//                flag = true;
//            });
//        }
//    }
//
//    gaibian();
//    //3.给左右箭头添加事件
//    arrRight.onclick = function () {
//        if (flag) {
//            flag = false;
//            config.push(config.shift());
//            gaibian();
//        }
//    }
//    arrLeft.onclick = function () {
//        if (flag) {
//            flag = false;
//            config.unshift(config.pop());
//            gaibian();
//        }
//    }
//
//    //4.添加阀门
//    var flag = true;
//
//}

//3

window.onload = function () {
    //目标：实现旋转效果
    //找人
    var slide = document.getElementById("slide");
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var ul = slide.children[0];
    var lis = ul.children;
    //1.鼠标移动到指定位置，箭头以动画形式出现
    slide.onmouseover = function () {
        animate(arrow,{"opacity":1})
    }
    slide.onmouseout = function () {
        animate(arrow,{"opacity":0})
    }
    //2.给lis添加样式
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    function assign(){
        for(var i = 0;i< lis.length;i++){
            animate(lis[i],config[i], function () {
                flog= true;
            })
        }
    }
    assign();
    //3.给箭头绑定事件
    arrRight.onclick = function () {
        if(flog){
            flog = false;
            config.push(config.shift());
            assign();
        }
    }
    arrLeft.onclick = function () {
        if(flog){
            flog = false;
            config.unshift(config.pop());
            assign();
        }
    }
    //4.添加阀门
    var flog = true;
}
