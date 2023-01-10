"use strict";

const email = document.querySelector("#email"),
    inGameID = document.querySelector("#inGameID"),
    subject = document.querySelector("#subject"),
    description = document.querySelector("#description"),
    submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", submit);

function submit() {
    const req = {
        email: email.value,
        inGameID: inGameID.value,
        subject: subject.value,
        description: description.value,
    };
    console.log(req);
}