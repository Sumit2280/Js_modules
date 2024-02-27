let colors;

function fetchColors() {
  fetch('https://reqres.in/api/colors')
    .then(response => response.json())
    .then(data => {
      colors = data.data
      console.log('Fetched data:', colors);
      displayColors(colors); // Handle object structure
    })
    .catch(error => console.error('Error fetching colors:', error));
}

function displayColors(colors) {
  const tableBody = document.getElementById('colorTableBody');
  tableBody.innerHTML = '';
  colors.forEach(color => {
    const row = tableBody.insertRow();
    row.innerHTML = `<td>${color.id}</td><td>${color.name}</td><td>${color.year}</td>`;
  });
}

function sortTable() {
  colors.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    else {
      return -1;
    }
  });
  displayColors(colors);
}

function filterTable() {
  const searchValue = document.getElementById('search').value;
  const result = colors.filter((color) => color.name == searchValue);
  console.log(result);
  displayColors(result);
}

document.addEventListener('DOMContentLoaded', () => {
  fetchColors();
});