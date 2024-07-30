
    function toggleMenu() {
        var navbar = document.getElementById('navbar');
        navbar.classList.toggle('show');
    }

function loadSubcategories(category) {
    const subcategoriesList = document.getElementById('subcategories-list');
    subcategoriesList.innerHTML = ''; // Clear previous subcategories

    const subcategories = {
        electronics: [
            '<i class="fas fa-mobile-alt"></i> Mobile Phones',
            '<i class="fas fa-headphones-alt"></i> Mobile Phone Accessories',
            '<i class="fas fa-laptop"></i> Computers & Tabs',
            '<i class="fas fa-keyboard"></i> Computer Accessories',
            '<i class="fas fa-tv"></i> TV',
            '<i class="fas fa-tv"></i> TV Accessories',
            '<i class="fas fa-camera"></i> Cameras',
            '<i class="fas fa-music"></i> Audio',
            '<i class="fas fa-ellipsis-h"></i> Others'
        ],
        property: [
            '<i class="fas fa-map-marker-alt"></i> Land',
            '<i class="fas fa-home"></i> Houses',
            '<i class="fas fa-building"></i> Apartments',
            '<i class="fas fa-business-time"></i> Commercial Property'
        ],
        vehicles: [
            '<i class="fas fa-car"></i> Car',
            '<i class="fas fa-motorcycle"></i> Bike',
            '<i class="fas fa-rickshaw"></i> Three Wheel',
            '<i class="fas fa-bicycle"></i> Bicycle',
            '<i class="fas fa-shuttle-van"></i> Van',
            '<i class="fas fa-bus"></i> Buses',
            '<i class="fas fa-truck"></i> Lorries',
            '<i class="fas fa-tractor"></i> Tractors',
            '<i class="fas fa-tools"></i> Auto Parts',
            '<i class="fas fa-wrench"></i> Repair'
        ],
        home_garden: [
            '<i class="fas fa-couch"></i> Furniture',
            '<i class="fas fa-bath"></i> Bathroom',
            '<i class="fas fa-tools"></i> Building Material',
            '<i class="fas fa-seedling"></i> Garden',
            '<i class="fas fa-paint-roller"></i> Home Decor',
            '<i class="fas fa-utensils"></i> Kitchen Item',
            '<i class="fas fa-ellipsis-h"></i> Others'
        ],
        services: [
            '<i class="fas fa-people-carry"></i> Trade',
            '<i class="fas fa-house-user"></i> Domestic',
            '<i class="fas fa-microphone-alt"></i> Event & Entertainment',
            '<i class="fas fa-heartbeat"></i> Health',
            '<i class="fas fa-plane"></i> Travel',
            '<i class="fas fa-ellipsis-h"></i> Other'
        ],
        jobs: [
            '<i class="fas fa-briefcase"></i> IT',
            '<i class="fas fa-briefcase"></i> Finance',
            '<i class="fas fa-briefcase"></i> Marketing',
            '<i class="fas fa-briefcase"></i> Sales',
            '<i class="fas fa-briefcase"></i> Customer Service',
            '<i class="fas fa-briefcase"></i> HR',
            '<i class="fas fa-briefcase"></i> Engineering'
        ],
        pets: [
            '<i class="fas fa-paw"></i> Pets',
            '<i class="fas fa-bone"></i> Pet Food',
            '<i class="fas fa-shower"></i> Services',
            '<i class="fas fa-cog"></i> Animal Accessories'
        ],
        education: [
            '<i class="fas fa-graduation-cap"></i> Higher Education',
            '<i class="fas fa-book"></i> Textbooks',
            '<i class="fas fa-chalkboard-teacher"></i> Tuition',
            '<i class="fas fa-school"></i> Vocational Institute',
            '<i class="fas fa-ellipsis-h"></i> Other'
        ],
        fashion_beauty: [
            '<i class="fas fa-shopping-bag"></i> Bags',
            '<i class="fas fa-tshirt"></i> Clothing',
            '<i class="fas fa-shoe-prints"></i> Shoes & Footwear',
            '<i class="fas fa-gem"></i> Jewellery',
            '<i class="fas fa-clock"></i> Watches',
            '<i class="fas fa-ellipsis-h"></i> Other'
        ],
        other: [
            '<i class="fas fa-ellipsis-h"></i> Miscellaneous',
            '<i class="fas fa-ellipsis-h"></i> General',
            '<i class="fas fa-ellipsis-h"></i> Other'
        ]
    };

    if (subcategories[category]) {
        subcategories[category].forEach(subcategory => {
            const li = document.createElement('li');
            li.innerHTML = subcategory;
            li.addEventListener('click', () => {
                window.location.href = 'form.html';
            });
            subcategoriesList.appendChild(li);
        });
    }
}



function previewImage(event, index) {
    const file = event.target.files[0];
    const previewContainer = document.getElementById(`photo-input-${index}`).parentElement;
    const label = previewContainer.querySelector('label');

    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = () => URL.revokeObjectURL(img.src);

        // Clear previous content
        previewContainer.innerHTML = '';
        previewContainer.appendChild(img);
        previewContainer.appendChild(event.target); // Re-append the input element
    } else {
        // Reset to label if no file is selected
        previewContainer.innerHTML = '';
        previewContainer.appendChild(label);
        previewContainer.appendChild(event.target); // Re-append the input element
    }
}

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

