let count = 0;
const btn = document.getElementById("btn-hit");

btn.addEventListener("click", () => {
    count--;
    console.log(count)
    btn.textContent = "Hitungan: " + count;
});

