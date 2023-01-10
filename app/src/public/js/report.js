"use strict";

const email = document.querySelector("#email"),
    inGameID = document.querySelector("#inGameID"),
    subject = document.querySelector("#subject"),
    description = document.querySelector("#description"),
    submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", report);

function report() {
    const req = {
        email: email.value,
        inGameID: inGameID.value,
        subject: subject.value,
        description: description.value,
    };
    
    fetch("/report", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
}