const searchInput = document.querySelector(".search-input");
const displayedList = document.querySelector(".displayed-list");

const list = ["apple", "banana", "orange"];

function showList(arr) {
  displayedList.innerHTML = "";
  if (arr.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found!";
    li.classList.add("no-results");
    displayedList.append(li);
  }
  for (let item of arr) {
    const li = document.createElement("li");
    li.textContent = item;
    displayedList.append(li);
  }
}

showList(list);

searchInput.oninput = function () {
  const searchTerm = searchInput.value;
  const filteredList = searchTerm
    ? list.filter(function (item) {
        return item.includes(searchTerm);
      })
    : list;
  showList(filteredList);
};
