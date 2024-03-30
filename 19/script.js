// const accordionItems = document.querySelectorAll('.accordion-item');
// const accordionContents = document.querySelectorAll('.accordion-content');
// console.log(accordionContents);


// accordionItems.forEach(item => {
//     const button = item.querySelector('.accordion-header');
//     const content = item.querySelector('.accordion-content');

//     button.addEventListener('click', function () {

//         for (let accordionContent of accordionContents) {
//             accordionContent.classList.remove('active');
//         }

//         content.classList.toggle('active');
//     });
// });




// const tabButtons = document.querySelectorAll('.tabs-button');
// const tabContent = document.querySelectorAll('.tab-content');


// tabButtons.forEach(button => {
//     button.addEventListener('click', function (event) {
//         for (let content of tabContent) {
//             content.classList.remove('active');
//         }

//         for (let button of tabButtons) {
//             button.classList.remove('active');
//         }


//         event.target.classList.add('active');
//         const tabID = event.target.dataset.tab;
//         const tabContentByID = document.getElementById(tabID);
//         tabContentByID.classList.add('active')
//     });
// });



// const tooltipContainer = document.querySelector('.tooltip');
// const tooltipText = tooltipContainer.dataset.tooltip;

// const tooltip = document.createElement('div');
// tooltip.classList.add('tooltip-element');
// tooltip.textContent = tooltipText;

// tooltipContainer.append(tooltip);


var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];

const input = document.getElementById('my-input');
const items = document.getElementById('items');


input.addEventListener('input', function (event) {
    const textToSearch = event.target.value;

    // if (event.target.value.length > 0) {
    if (event.target.value !== '') {
        const suggestions = availableTags.filter(tag => tag.startsWith(textToSearch));
        items.innerHTML = '';


        suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = suggestion;

            suggestionElement.addEventListener('click', function (event) {
                input.value = event.target.textContent;
            });

            items.append(suggestionElement);
        });
    }
});


document.addEventListener('click', function (event) {
    if (!event.target.matches("#my-input")) {
        items.innerHTML = '';
    }
});






