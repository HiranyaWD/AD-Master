
const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('Click',()=> {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('Click',()=> {
        nav.classList.remove('active');
    })
}

function toggleDropdown(event) {
    var dropdown = event.target.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if the user clicks outside of it
document.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

// Function to load subcategories - replace with your logic
function loadSubcategories(category) {
    console.log('Loading subcategories for category: ' + category);
    // Add your logic to load subcategories here
}