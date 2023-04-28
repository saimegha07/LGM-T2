let box = document.getElementById("cards");

let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `
      <div class="cards">
        <div class="cards-content">
        <ul >
        <li>${element.first_name} ${element.last_name}</li></ul>
        
        </div>
        
    </div>`;
    })
    .join("");
  cards.innerHTML = info;
};

let navigBtn = document.getElementById("click");
navigBtn.addEventListener("click", () => {
  cards.innerHTML = `
  <h2>USERS DATA</h2>
    <br />
  <h3 class='load'>Fetching and Loading the Users Data .........</h3>`;
  setTimeout(() => {
    API();
  }, 2600);
});
