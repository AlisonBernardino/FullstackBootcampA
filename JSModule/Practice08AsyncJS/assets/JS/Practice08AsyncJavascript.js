// Practice 08 - Async Javascript
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catButton = document.getElementById('catChange');

const grabCats = async () => {
    try {
        const receivedData = await fetch(BASE_URL);
        const receivedJSON = await receivedData.json();

        return receivedJSON.webpurl;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImage = async () => {
    const catPhoto = document.getElementById('catImage');
    catPhoto.src = await grabCats();
}

catButton.addEventListener('click', loadImage);

loadImage();