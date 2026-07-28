// onClick Event

function showMessage() {

    document.getElementById("clickOutput").innerText =
        "You clicked the button!";
}


// onMouseOver Event

function changeColor() {

    document.getElementById("hoverBox").style.backgroundColor = "orange";
    document.getElementById("hoverBox").innerText = "Mouse Over!";
}


// onMouseOut Event

function resetColor() {

    document.getElementById("hoverBox").style.backgroundColor = "lightblue";
    document.getElementById("hoverBox").innerText = "Hover over";
}


// onChange Event

function showSelectedFruit() {

    const fruit = document.getElementById("fruit").value;

    if (fruit) {

        document.getElementById("fruitOutput").innerText =
            `You selected: ${fruit}`;

    } else {

        document.getElementById("fruitOutput").innerText = "";

    }

}
