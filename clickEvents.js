const fooButton = document.querySelector("#fooD");
const barButton = document.querySelector("#barTender");
const foobarButton = document.querySelector("#foobar");
const main = document.querySelector("main");

fooButton.addEventListener('click', function() {
    const h3tag = document.createElement('h3');
    h3tag.textContent = "Foo";
    main.appendChild(h3tag);
})

barButton.addEventListener('click', function() {
    const h3tag2 = document.createElement('h3');
    h3tag2.textContent = "Bar";
    main.appendChild(h3tag2);
})

foobarButton.addEventListener('click', function() {
    const h2tag = document.createElement('h2');
    h2tag.textContent = "Foobar";
    main.appendChild(h2tag);
})