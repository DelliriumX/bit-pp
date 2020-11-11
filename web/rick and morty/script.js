const createButtons = (page) => {
  const buttonsContainer = document.getElementById("buttons");
  const buttons = [];

                  const min = Math.max(page - 2, 1);
                  const max = Math.min(page + 2, 20);

                  for (let i = min; i <= max; i++) {
                    buttons.push(i);
                  }

                  // Fix missing ending elements
                  if (buttons[0] !== page - 2) {
                    let correction = page - 2;
                    while (correction < min) {
                      buttons.push(buttons[buttons.length - 1] + 1);
                      correction++;
                    }
                  }
                  
                  // Fix missing start elements
                  if (buttons[buttons.length - 1] !== page + 2) {
                    let correction = page + 2;
                    while (correction > max) {
                      buttons.unshift(buttons[0] - 1);
                      correction--;
                    }
                  }

  // Add buttons to page
  buttonsContainer.innerHTML = "";
  buttons.forEach((pageNum) => {
    const btn = document.createElement("BUTTON");
    btn.innerHTML = pageNum;
    btn.addEventListener("click", () => showPage(pageNum));
    if (pageNum === page) {
      btn.classList.add("active");
    }
    buttons.push(btn);
    buttonsContainer.appendChild(btn);
  });
};

const renderPage = (num, data) => {
  const charactersContainer = document.getElementById("characters");
  const currentPageContainer = document.getElementById("current");

  // Set Page Title
  currentPageContainer.innerHTML = `Current Page: ${num}`;

  // CreateButtons
  createButtons(num);

  // Create characters
  data.results.forEach((char) => {
    const img = document.createElement("IMG");
    const name = document.createElement("DIV");
    const character = document.createElement("DIV");

    img.src = char.image;
    name.innerHTML = char.name;

    character.appendChild(img);
    character.appendChild(name);
    charactersContainer.appendChild(character);
  });
};

const showPage = (num) => {
  fetch(`https://rickandmortyapi.com/api/character?page=${num}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0]);
      renderPage(num, data);
    });
};

showPage(1);
