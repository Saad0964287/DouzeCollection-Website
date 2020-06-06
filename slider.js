var slideIndex, slides, dots, caption;
function initGallery(){
    slideIndex=0;
    slides=document.getElementsByClassName("imageholder");
    slides[slideIndex].style.opacity=1;

    //caption=document.querySelector(".captiontextholder .caption").

    dots=[];
    var dotscontainer=document.getElementById("dotscontainer")
    for(var i=0; i<slides.length; i++ ){
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotscontainer.append(dot);
        dots.push(dot);
    }

    dots[slideIndex].classList.add("active")
}


function plusslide(n) {
    moveslide(slideIndex+n);
}


function moveslide(n) {
    var i , current , next ;
    var moveslideanimclass={
        forcurrent:"" ,
        fornext:""
    }
    if ( n> slideIndex){
        if (n>slides.length) {n=0}
        moveslideanimclass.forcurrent="moveleftcurrentslide";
        moveslideanimclass.fornext="moveleftnextslide";
    }else if (n<slideIndex){

    }
    if (n!=slideIndex){
        next=slides[n];
        current=slides[slideIndex];
        for (i=0;i<slides.length;i++);{
            slides[i].classname="imageholder" ;
            slides[i].style.opacity =0 ;
            dots[i].classlist.remove("active");
        }
        current.classlist.add(moveslideanimclass.forcurrent);
        next.classList.add(moveslideanimclass.fornext);
        dots[n].classList.add("active");
        slideIndex=n;
    }
}

initGallery();