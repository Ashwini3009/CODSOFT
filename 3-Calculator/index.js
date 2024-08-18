let btns = document.querySelector("button");
let inp = document.querySelector("#dis");
let zer = document.querySelector("#zer");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let clr = document.querySelector(".clr");
let dle = document.querySelector(".dle");
let per = document.querySelector(".per");
let dvi = document.querySelector(".dvi");
let multi = document.querySelector(".multi");
let sub = document.querySelector(".sub");
let add = document.querySelector(".add");
let dot = document.querySelector(".dot");
let equal = document.querySelector(".equal");
let ar = [];

zer.addEventListener("click",function () {
    inp.value=inp.value+0;
    
});
zero.addEventListener("click",function () {
    inp.value=inp.value+0+0;
    
});
one.addEventListener("click",function () {
    inp.value=inp.value+1;
    
});
two.addEventListener("click",function () {
    inp.value=inp.value+2;
    
});
three.addEventListener("click",function () {
    inp.value=inp.value+3;
    
});
four.addEventListener("click",function () {
    inp.value=inp.value+4;
    
});
five.addEventListener("click",function () {
    inp.value=inp.value+5;
    
});
six.addEventListener("click",function () {
    inp.value=inp.value+6;
    
});
seven.addEventListener("click",function () {
    inp.value=inp.value+7;
    
});
eight.addEventListener("click",function () {
    inp.value=inp.value+8;
    
});
nine.addEventListener("click",function () {
    inp.value=inp.value+9;
    
});

clr.addEventListener("click", function () {
    inp.value = "";
});

dle.addEventListener("click", function () {
    inp.value=(inp.value).slice(0,-1)
});


add.addEventListener("click", function () {
if (inp.value[inp.value.length-1]=="+" ||inp.value[inp.value.length-1]=="-" ||inp.value[inp.value.length-1]=="*" ||inp.value[inp.value.length-1]=="/") {
} else{
    inp.value=inp.value + "+";
}
});

sub.addEventListener("click", function () {
    if (inp.value[inp.value.length-1]=="+" ||inp.value[inp.value.length-1]=="-" ||inp.value[inp.value.length-1]=="*" ||inp.value[inp.value.length-1]=="/") {
    } else{
        inp.value=inp.value + "-";
    }
});

multi.addEventListener("click", function () {
        if (inp.value[inp.value.length-1]=="+" ||inp.value[inp.value.length-1]=="-" ||inp.value[inp.value.length-1]=="*" ||inp.value[inp.value.length-1]=="/") {
        } else{
            inp.value=inp.value + "*";
        }
});

dvi.addEventListener("click", function () {
    if (inp.value[inp.value.length-1]=="+" ||inp.value[inp.value.length-1]=="-" ||inp.value[inp.value.length-1]=="*" ||inp.value[inp.value.length-1]=="/") {
    } else{
        inp.value=inp.value + "/";
    }
});

equal.addEventListener("click", function () {
    inp.value = eval(inp.value)
});

// btns.addEventListener("click", function () {
//    if (ar!=inp.value) {
//         inp.value="";
//    }
// });








