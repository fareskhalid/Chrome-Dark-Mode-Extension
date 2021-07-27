// fix images color
function fixImages(filter){
    if(document.querySelectorAll("img")){
        // Fix Images Colors
        let imgs = document.querySelectorAll("img");
        for (let i = 0; i < imgs.length; i++){
            imgs[i].style.filter = filter;
        }
    }
}
// Check if Dark Mode is On
if (document.querySelector("html").style.filter == "none" || document.querySelector("html").style.filter == ""){
    document.querySelector("html").style.filter = "invert(1)";
    fixImages("invert(1)");
} else {
    document.querySelector("html").style.filter = "none";
    fixImages("none")
}