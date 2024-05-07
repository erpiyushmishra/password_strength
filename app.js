pass=document.getElementById("password");
butt=document.getElementById("button");
str=document.getElementById("strength");
span=document.getElementById("span")


pass.addEventListener('input',()=>{
    if(pass.value.length>0){
        str.style.display="block";

    }else{
        str.style.display="none";
    }
    if(pass.value.length>0 && pass.value.length<=4){
        str.style.color="red";
        pass.style.borderColor="red";
        span.innerHTML="weak";

    }
    if(pass.value.length>4 && pass.value.length<=8){
        str.style.color="yellow";
        pass.style.borderColor="yellow";
        span.innerHTML="medium";

    }
    if(pass.value.length>8){
        str.style.color="green";
        pass.style.borderColor="green";
        span.innerHTML="strong";

    }
})