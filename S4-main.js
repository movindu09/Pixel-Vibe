function changeThumbnail(imageNumber) {
  var imageElement = document.getElementById("selected-image");
  var descElement = document.getElementById("thumbnail-desc");

  // Update the image source
  imageElement.src = "img/th" + imageNumber + ".png";

  // Update the description
  if (imageNumber === 2) {
    descElement.innerHTML = `
        <h2><b>The Starry Night</b></h2>
        <h4>PAINTING</h4>
        <hr>
        <p>
          The Starry Night, created by Vincent van Gogh, is a mesmerizing masterpiece that depicts a dreamlike landscape with swirling brushstrokes and vibrant colors, showcasing the artist's unique style and emotional expression.
        </p>`;
  } else if (imageNumber === 3) {
    descElement.innerHTML = `
        <h2><b>Glow Funk</b></h2>
        <h4>NFT</h4>
        <hr>
        <p>
        Glow Funk is an energetic and vibrant art movement that combines elements of graffiti, street art, and neon aesthetics, creating visually captivating and immersive experiences through glowing installations and interactive displays.
        </p>`;
  } else if (imageNumber === 4) {
    descElement.innerHTML = `
        <h2><b>David</b></h2>
        <h4>SCULPTURE</h4>
        <hr>
        <p>
        David, sculpted by Michelangelo, is an iconic marble masterpiece that portrays the biblical hero with a strikingly realistic and powerful physique, showcasing the artist's exceptional skill in capturing human anatomy and creating a sense of timeless beauty.
        </p>`;
  } else if (imageNumber === 5) {
    descElement.innerHTML = `
        <h2><b>The Son of Man</b></h2>
        <h4>PAINTING</h4>
        <hr>
        <p>
        The Son of Man, a painting by René Magritte, is a thought-provoking surrealist artwork featuring a bowler-hatted man with an apple obscuring his face, exploring themes of identity, mystery, and hidden meanings. 
        </p>`;
  } else if (imageNumber === 6) {
    descElement.innerHTML = `
        <h2><b>Bored Ape</b></h2>
        <h4>NFT</h4>
        <hr>
        <p>
        Bored Ape is a collection of unique and collectible digital art pieces in the form of cartoonish ape-like characters, each with distinct traits and accessories, gaining popularity as an innovative example of non-fungible tokens (NFTs) and digital ownership in the art world.
        </p>`;
  } else {
    descElement.innerHTML = `
    <h2><b>Mona Lisa</b></h2>
    <h4>PAINTING</h4>
    <hr>
    <p>
    Mona Lisa is a world-renowned portrait painted by Leonardo da Vinci, known for its enigmatic smile and captivating gaze, attracting millions of visitors to the Louvre Museum each year.
    </p>`;
  }
}

function changeFontSize() {
  const fontSizeSelect = document.getElementById("text-size");
  const thumbnailDesc = document.getElementById("thumbnail-desc");
  const selectedFontSize = fontSizeSelect.value + "px";
  thumbnailDesc.style.fontSize = selectedFontSize;
}

function changeFontColor() {
  const fontColorSelect = document.getElementById("text-color");
  const thumbnailDesc = document.getElementById("thumbnail-desc");
  const selectedFontColor = fontColorSelect.value;
  thumbnailDesc.style.color = selectedFontColor;
}
