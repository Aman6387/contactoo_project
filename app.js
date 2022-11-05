const submit = document.getElementById('sumbit');
submit.addEventListener('click', function handleClick(event){
    event.preventDefault();
})


var cross= 1;
let selectId=document.getElementsByClassName("About");
function About(){
    if(cross == 1){
        document.getElementsByClassName("Aboutt")[0].style.display = "none";
        document.getElementsByClassName("About")[0].style.marginLeft = "1%";
        // document.getElementsByClassName("hambergurgers")[0].style.display = "inline";
        cross=0;
    }
    else
    {
        // selectId[0].classList.remove("HiddenContent");
       selectId[0].classList.add("sidebar");
        cross=1;
    }
}