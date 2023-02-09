const form = document.getElementById("order-form");
const cart = document.getElementById("cart");
const service = document.getElementById("service");
const quantity = document.getElementById("quantity");

const prices = {
  "Malowanie": 400,
  "Szpachlowanie": 200,
  "Glazura": 300
};

form.addEventListener("submit", e => {
  e.preventDefault();
  addToCart();
});

function addToCart() {
  const row = document.createElement("tr");
  const serviceCell = document.createElement("td");
  const quantityCell = document.createElement("td");
  const priceCell = document.createElement("td");
  const totalCell = document.createElement("td");
  const actionCell = document.createElement("td");
  const removeButton = document.createElement("button");

  serviceCell.textContent = service.value;
  quantityCell.textContent = quantity.value;
  priceCell.textContent = prices[service.value];
  totalCell.textContent = quantity.value * prices[service.value];
  removeButton.textContent = "Remove";

  row.appendChild(serviceCell);
  row.appendChild(quantityCell);
  row.appendChild(priceCell);
  row.appendChild(totalCell);
  actionCell.appendChild(removeButton);
  row.appendChild(actionCell);
  cart.appendChild(row);

  removeButton.addEventListener("click", () => {
    row.remove();
  });
}