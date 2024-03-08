const no_btn = document.getElementById("no-btn");
const yes_btn = document.getElementById("yes-btn");

const no_text = ["Nuh uh", "Never >:)", "Nope", "No", "Wrong Button", "Pookie no"];

no_btn.addEventListener("mouseover", function() {
    this.style.left = `${Math.ceil(Math.random() * 85)}%`;
    this.style.top = `${Math.ceil(Math.random() * 90)}%`;
    document.getElementById("cat").setAttribute("src", "assets/img/angry.png");

    setTimeout(()=> {
        document.getElementById("cat").setAttribute("src", "assets/img/shy.png");
     }, 500)

    this.innerHTML = no_text[(Math.floor(Math.random() * no_text.length))]
});


yes_btn.addEventListener("mouseover", function () {
    document.getElementById("cat").setAttribute("src", "assets/img/smirk.png");
});

yes_btn.addEventListener("mouseout", function () {
    document.getElementById("cat").setAttribute("src", "assets/img/shy.png");
});