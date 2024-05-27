function onLoad() {
    // example 1
    document.getElementById("btn-1").addEventListener("click", () => alert("Hello from button 1"));

    // example 2
    document.getElementById("container-1").addEventListener("click", () => alert("Hello from container 1"));
    document.getElementById("container-2").addEventListener("click", (event) => { alert("Hello from container 2"); event.stopPropagation() });
    document.getElementById("container-3").addEventListener("click", () => alert("Hello from container 3"));
    document.getElementById("btn-2").addEventListener("click", () => alert("Hello from button 2"));

    // example 3
    document.getElementById("container-4").addEventListener("mouseenter", () => document.getElementById("paragraph-1").innerText = "hello");
    document.getElementById("container-4").addEventListener("mouseleave", () => document.getElementById("paragraph-1").innerText = "good bye");

    // example 4
    let username1 = document.getElementById("username-1");
    let password1 = document.getElementById("password-1");
    document.getElementById("form-1").addEventListener("submit-1", (event) => {
        if (username1.value === '' || password1.value === '') {
            alert("Username and password can't be empty!");
            event.preventDefault();
        }
    });

    // example 5
    let username2 = document.getElementById("username-2");
    username2.addEventListener("focus", (event) => event.target.style.background = "pink");
    username2.addEventListener("blur", (event) => event.target.style.background = "");

    // example 6
    document.getElementById("username-3").addEventListener("keypress", (event) => {
        if (["ñ", ",", ".", ";", "?", "#", "¿", "!", "¡", "\"", "$", "%", "&", "/", "(", ")", "=", "'"].includes(event.key)) {
            alert("Username can't have special characters");
            event.preventDefault();
        }
    })
}

document.addEventListener("DOMContentLoaded", onLoad);