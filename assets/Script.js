function table(){
    document.getElementById("table_img").src = "Images/12.jpg";
}

function table1(){
    document.getElementById("table_img").src = "Images/13.jpg";
}

function table2(){
    document.getElementById("table_img").src = "Images/14.jpg";
}

function table3(){
    document.getElementById("table_img").src = "Images/15.jpg";
}

function table4(){
    document.getElementById("table_img").src = "Images/16.jpg";
}


// Pop Up Chat Button


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 500 ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
})