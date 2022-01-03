function myFunction() {
    var popup = document.getElementById("mp");
    popup.classList.toggle("show");
}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
var fmodal = document.getElementById('id01');
var smodal = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == fmodal || event.target == smodal) {
        fmodal.style.display = "none";
        smodal.style.display = "none";
    }
}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// animation scroll
window.onscroll = function() {scrollAnimation()};
function scrollAnimation() {
    if(document.body.offsetWidth > 1020)
    {
        if(document.documentElement.scrollTop > 230)
        {
            document.getElementById("img1").className = "slideRight";
            document.getElementById("fh").className = "slideLeft";
        }
        ///////////////
        if(document.documentElement.scrollTop > 850)
        {
            document.getElementById("img2").className = "slideLeft";
            document.getElementById("sh").className = "slideRight";
        }
        ///////////////
        if(document.documentElement.scrollTop > 1450)
        {
            document.getElementById("img3").className = "slideRight";
            document.getElementById("th").className = "slideLeft";
        }
    }
    else
    {
        if(document.documentElement.scrollTop > 230)
        {
            document.getElementById("img1").className = "slideRight";
            document.getElementById("fh").className = "slideLeft";
        }
        ///////////////
        if(document.documentElement.scrollTop > 650)
        {
            document.getElementById("img2").className = "slideLeft";
            document.getElementById("sh").className = "slideRight";
        }
        ///////////////
        if(document.documentElement.scrollTop > 1050)
        {
            document.getElementById("img3").className = "slideRight";
            document.getElementById("th").className = "slideLeft";
        }
    }
}