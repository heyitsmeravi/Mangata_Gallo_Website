let positions=["left","center","right"];
let currentIndex=0;

function changePosition(direction){
    let item1=document.getElementById("item1");
    let item2=document.getElementById("item2");
    let item3=document.getElementById("item3");
    if(direction === 'left'){
        currentIndex = (currentIndex - 1 + 3) % 3;
    } else if(direction === 'right'){
        currentIndex = (currentIndex + 1) % 3;
    }
    item1.className="items " + positions[currentIndex];
    item2.className="items " + positions[(currentIndex + 1) % 3];
    item3.className="items " + positions[(currentIndex + 2) % 3];
}

// Navbar scroll effect

let navbar=document.querySelector(".navbar");
let lastScroll=0;
window.addEventListener("scroll", function(){
    let diff=window.scrollY - lastScroll;
    if(diff > 10){
        navbar.classList.add("scrolled");
    } else if(diff < -10){
        navbar.classList.remove("scrolled");
    }
    lastScroll=window.scrollY;
});

// Set current year in footer
let yearSpan=document.getElementById("current-year");
let currentYear=new Date().getFullYear();
yearSpan.textContent=currentYear;

// Filter functionality
const products = document.querySelectorAll(".product-section-card");
const category_checkboxes = document.querySelectorAll('input[name="category"]');
const material_checkboxes = document.querySelectorAll('input[name="material"]');
const shopfor_checkboxes = document.querySelectorAll('input[name="shopfor"]');
const radios = document.querySelectorAll('input[name="price"]');

function filterProducts() {
    let selectedCategories = [];
    let selectedMaterials = [];
    let selectedShopFor = [];
    let selectedPrice = null;

    // categories
    category_checkboxes.forEach(cb => {
        if (cb.checked) {
            selectedCategories.push(cb.value);
        }
    });

    // price
    radios.forEach(r => {
        if (r.checked) {
            selectedPrice = r.value;
        }
    });

    material_checkboxes.forEach(cb => {
        if (cb.checked) {
            selectedMaterials.push(cb.value);
        }
    });

    shopfor_checkboxes.forEach(cb => {
        if (cb.checked) {
            selectedShopFor.push(cb.value);
        }
    });


    products.forEach(product => {
        const category = product.dataset.category;
        const material = product.dataset.material;
        const shopfor = product.dataset.shopfor;
        const price = parseInt(product.dataset.price);

        let categoryMatch =
            selectedCategories.length === 0 ||
            selectedCategories.includes(category);

        let materialMatch =
            selectedMaterials.length === 0 ||
            selectedMaterials.includes(material);

        let shopForMatch =
            selectedShopFor.length === 0 ||
            selectedShopFor.includes(shopfor);

        let priceMatch = true;

        if (selectedPrice) {
            const [min, max] = selectedPrice.split("-").map(Number);
            priceMatch = price >= min && price <= max;
        }

        if (categoryMatch && materialMatch && shopForMatch && priceMatch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

category_checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
});

material_checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
});

shopfor_checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
});

radios.forEach(r => {
    r.addEventListener("change", filterProducts);
});