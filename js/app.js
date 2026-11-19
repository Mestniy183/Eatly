const range = document.getElementById("priceRange");
const prices = [0,25,50,100,500,1000];

function updateSlider() {
    const val = Number(range.value);

    console.log(prices[val] + "$")
}

range.addEventListener("input", updateSlider);
updateSlider();