// const accordionItems = document.querySelectorAll('.accordion-item');

// accordionItems.forEach(item => {
//     const header = item.querySelector('.accordion-header');
//     const content = item.querySelector('.accordion-content');

//     header.addEventListener('click', function () {
//         content.classList.toggle('active');

//         if (content.classList.contains('active')) {
//             content.style.display = 'block';
//         } else {
//             content.style.display = 'none';
//         }
//     });
// });




// // By default, show the first tab
// document.getElementById("Tab1").style.display = "block";

// // Get all tab buttons
// const tabButtons = document.querySelectorAll(".tablinks");

// // Function to open a specific tab content
// function openTab(tabName) {
//     // Hide all tab content
//     const tabContent = document.querySelectorAll(".tabcontent");
//     tabContent.forEach(tab => {
//         tab.style.display = "none";
//     });

//     // Remove the 'active' class from all tab links
//     tabButtons.forEach(button => {
//         button.classList.remove("active");
//     });

//     // Show the selected tab content
//     document.getElementById(tabName).style.display = "block";

//     // Add the 'active' class to the clicked tab link
//     const activeButton = document.querySelector(`.tablinks[data-tab="${tabName}"]`);
//     activeButton.classList.add("active");
// }

// // Add event listeners to tab buttons
// tabButtons.forEach(button => {
//     button.addEventListener("click", function () {
//         const tabName = this.getAttribute("data-tab");
//         openTab(tabName);
//     });
// });



// const tooltips = document.querySelectorAll(".tooltip");

// tooltips.forEach(tooltip => {
//     const tooltipText = tooltip.getAttribute("data-tooltip");

//     const tooltipElement = document.createElement("span");
//     tooltipElement.classList.add("tooltiptext");
//     tooltipElement.innerText = tooltipText;
//     tooltip.appendChild(tooltipElement);
// });


// const inputField = document.getElementById("myInput");
// const autocompleteItems = document.getElementById("autocompleteItems");

// // Mocked data for autocomplete suggestions
// const suggestions = ["Apple", "Banana", "Bannna", "Orange", "Pear", "Pineapple", "Strawberry", "Grapes"];

// inputField.addEventListener("input", function () {
//     const inputValue = this.value;
//     autocompleteItems.innerHTML = "";

//     if (inputValue.length > 0) {
//         const matchedItems = suggestions.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase()));
//         matchedItems.forEach(item => {
//             const autocompleteItem = document.createElement("div");
//             autocompleteItem.classList.add("autocomplete-item");
//             autocompleteItem.textContent = item;
//             autocompleteItem.addEventListener("click", function () {
//                 inputField.value = item;
//                 autocompleteItems.innerHTML = "";
//             });
//             autocompleteItems.appendChild(autocompleteItem);
//         });
//     }
// });

// // Close the autocomplete dropdown when clicking outside
// document.addEventListener("click", function (event) {
//     if (!event.target.matches('#myInput')) {
//         autocompleteItems.innerHTML = "";
//     }
// });