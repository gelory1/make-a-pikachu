!function(){
    let text =`
    /*让我们用代码来画一只皮卡丘吧*/


    /*首先我们需要一张皮卡丘的皮*/
    .content{
        background: #FFE600;
    }
    /*然后，我们先画皮卡丘的鼻子*/
    .nose{
        width:10px;
        border: 10px solid;
        border-color: black transparent transparent transparent;
        border-radius: 15px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: 25px;
    }
    /*然后，我们再画皮卡丘的眼睛*/
    .eye{
        width: 48px;
        height: 48px;
        border: 2px solid black;
        background: #2E2E2E;
        border-radius: 50%;
        position: absolute;
    }
    /*右眼和眼珠*/
    .eye.right{
        left: 50%;
        margin-left: 65.4px;
    }
    .eye.right::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        top: -1px;
        left: 3px;
        border: 2px solid black;
        border-radius: 50%;
    }
    /*左眼和眼珠*/
    .eye.left{
        right: 50%;
        margin-right: 65.4px;
    }
    .eye.left::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        top: -1px;
        left: 3px;
        border: 2px solid black;
        border-radius: 50%;
    }
    /*我们再画皮卡丘的脸颊*/
    .face{
        width: 67.2px;
        height: 67.2px;
        border: 2px solid black;
        border-radius: 50%;
        background: #FF0000;
        position: absolute;
        top: 82.8px;
    }
    /*左脸颊*/
    .face.left{
        right:50%;
        margin-right: 92.4px;
        
    }
    /*右脸颊*/
    .face.right{
        left:50%;
        margin-left: 92.4px;
    }
    /*我们再画皮卡丘的上嘴唇*/
    .upperLip{
        width: 66px;
        height: 15px;
        top: 51px;
        background: #FFE600;
    }
    /*左边*/
    .upperLip.left{
        border-left: 2px solid black;
        border-bottom: 2px solid black;
        border-bottom-left-radius: 30px 20px;
        transform: rotate(-15deg);
        position: absolute;
        right: 50%;
    }
    /*右边*/
    .upperLip.right{
        border-right: 2px solid black;
        border-bottom: 2px solid black;
        border-bottom-right-radius: 30px 20px;
        transform: rotate(15deg);
        position: absolute;
        left: 50%;
    }
    /*我们再画皮卡丘的下嘴唇*/
    .lowerLip{
        width: 128px;
        height: 1000px;
        background: #9B000A;
        border-radius: 100px/500px;
        position: absolute;
        bottom: 0;
        border: 2px solid black;
        overflow: hidden;
    }
    /*最后，我们加上小舌头*/
    .lowerLip::after{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        right: 50%;
        margin-right: -50px;
    }
    /*萌萌的皮卡丘就完成了！谢谢观看！*/
    `;
    let code = document.querySelector('#code');
    let style = document.querySelector('#styleTag');
    let n =0;
    let timer = setInterval(()=>{
        n+=1;
        code.innerHTML = text.substring(0,n);
        style.innerHTML = text.substring(0,n);
        code.scrollTop = code.scrollHeight;
        if( n >= text.length ){
            window.clearInterval(timer);
        }
    },50)
}.call()