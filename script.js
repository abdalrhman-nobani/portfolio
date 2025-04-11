const toggleBtn = document.getElementById("toggleBtn");
const arabic = document.getElementById("arabicContent");
const english = document.getElementById("englishContent");
toggleBtn.addEventListener("click" ,()=>{
    if(arabic.style.display === "none"){
        arabic.style.display = "block";
        english.style.display = "none";
        toggleBtn.textContent = "English";
        document.body.style.direction = "rtl";
    }else{
        arabic.style.display = "none";
        english.style.display = "block";
        toggleBtn.textContent = "العربيه";
        document.body.style.direction = "ltr"
    }
});
const forms = document.querySelectorAll("form");
forms.forEach(form => {
    form.addEventListener("submit" , function (e){
        e.preventDefault();
        alert("تم ارسال رسالتك !/ Your message has been sent!");
        form.reset();
    });
});