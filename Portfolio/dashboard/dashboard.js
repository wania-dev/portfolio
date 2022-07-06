// menu  
function getMenu(){
    document.getElementById('menu').style.display = "block";
}
function closeNav(){
    document.getElementById('menu').style.display = "none"
}
// blog open
function openblog(){
    document.getElementById('blog').style.display = "block";
    document.getElementById('fansite').style.display = "none";
    document.getElementById('ccs').style.display = "none";
    document.getElementById('sew').style.display = "none";
}
function openfansite(){
    document.getElementById('fansite').style.display = "block";
    document.getElementById('blog').style.display = "none";
    document.getElementById('ccs').style.display = "none";
    document.getElementById('sew').style.display = "none";
}
function openccs(){
    document.getElementById('ccs').style.display = "block";
    document.getElementById('blog').style.display = "none";
    document.getElementById('fansite').style.display = "none";
    document.getElementById('sew').style.display = "none";
}
function opensew(){
    document.getElementById('sew').style.display = "block";
    document.getElementById('blog').style.display = "none";
    document.getElementById('fansite').style.display = "none";
    document.getElementById('ccs').style.display = "none";
}
function openreg(){
    document.getElementById('reg').style.display = "block";
    document.getElementById('sew').style.display = "none";
    document.getElementById('blog').style.display = "none";
    document.getElementById('fansite').style.display = "none";
    document.getElementById('ccs').style.display = "none";
}
function closeall(){
    document.getElementById('reg').style.display = "none";
    document.getElementById('sew').style.display = "none";
    document.getElementById('blog').style.display = "none";
    document.getElementById('fansite').style.display = "none";
    document.getElementById('ccs').style.display = "none";
}