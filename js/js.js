/**
 * Created by 28119 on 10/05/2017.
 */



//1

//window.onload = function () {
//    //����
//    var wrap = document.getElementById("wrap");
//    var arrow = document.getElementById("arrow");
//    var arrLeft = document.getElementById("arrLeft");
//    var arrRight = document.getElementById("arrRight");
//    var slide = document.getElementById("slide");
//    var ul = slide.children[0];
//    var lis = ul.children;
//    //1.��꾭��
//    wrap.onmouseover = function () {
//        animate(arrow, {"opacity": 1});
//    };
//    wrap.onmouseout = function () {
//        animate(arrow, {"opacity": 0});
//    };
//
//
//    //2.����ͼƬλ��
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
//    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����
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
//    //3.�����ͷ��ת
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
//    //4.��ӽ�����
//    var flag = true;
//}

//2

//window.onload = function () {
//
//
////Ŀ�� �ﵽ��ת��Ч��
////1.����ƶ���Ŀ��������ʾ��������ļ�ͷ
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
//    //2.��̬����ͼƬ��λ��
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
//    //3.�����Ҽ�ͷ����¼�
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
//    //4.��ӷ���
//    var flag = true;
//
//}

//3

window.onload = function () {
    //Ŀ�꣺ʵ����תЧ��
    //����
    var slide = document.getElementById("slide");
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var ul = slide.children[0];
    var lis = ul.children;
    //1.����ƶ���ָ��λ�ã���ͷ�Զ�����ʽ����
    slide.onmouseover = function () {
        animate(arrow,{"opacity":1})
    }
    slide.onmouseout = function () {
        animate(arrow,{"opacity":0})
    }
    //2.��lis�����ʽ
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
    //3.����ͷ���¼�
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
    //4.��ӷ���
    var flog = true;
}
