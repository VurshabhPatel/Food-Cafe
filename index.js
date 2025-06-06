
    function showList(){
    
    
    const expandBtn = document.getElementById('a')
    const list = document.getElementById('show')

     list.style.display = "block"

    }


// Array of image sources
const foodImages = [
    "/food.jpg",
    "/food 2.jpg",
    "/food 3.jpg",
    
];



let currentIndex = 0;
const image = document.getElementById('foodType');

// Function to change image
function changeFoodType(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + foodImages.length) % foodImages.length;
    } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % foodImages.length;
    }
    
    image.src = foodImages[currentIndex];
    image.alt = `Food image ${currentIndex + 1}`;
}

// Event listeners for buttons
document.querySelector('.btnLeft').addEventListener('click', () => changeFoodType('left'));
document.querySelector('.btnRight').addEventListener('click', () => changeFoodType('right'));



function chngImgclick(buttonType) {
    let image = document.getElementById('photo');
    
    // Define image paths for each button
    const imagePaths = {
        'home': '/nature.jpg',
        'service': '/nature 2.jpg',
        'contact': '/nature 3.jpg'
    };
    
    // Change image based on which button was clicked
    if (imagePaths[buttonType]) {
        image.src = imagePaths[buttonType];
    }
}