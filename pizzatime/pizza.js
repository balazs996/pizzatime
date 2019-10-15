"use strict"

let payment = 0;
let order = document.getElementById("order");

function send() {
    let type = document.forms["form"]["type"].value;
    let size = document.forms["form"]["size"].value;
    let writeType = "";
    switch (type) {
        case "mar":
            writeType = "Margherita"
            break;
        case "haw":
            writeType = "Hawaii"
            break;
        case "hun":
            writeType = "Magyaros"
            break;
    }
    let writeSize = "";
    switch (size) {
        case "small":
            writeSize = "kicsi"
            break;
        case "medium":
            writeSize = "közepes"
            break;
        case "large":
            writeSize = "nagy"
            break;
    }

    let text = `<p>Az ön redelése: 1 db ${writeSize} ${writeType} pizza. </p>` ;
    text += `<p>Fizetendő összeg: ${payment}Ft</p>` ;
    order.innerHTML = text;
}
