// Delete file after development
try {
    const p = window.atob("dGhvcg==");
    const guess = prompt("Please enter the password to continue to the exclusive math book").toLowerCase();

    if (guess === p) {
        alert("Welcome :)");
        document.body.style.display = "block" // only when pswd is good show
        return;
    } else {
        window.location.reload() // now they cant get through
    }
} catch (e) {
    alert("Error: " + e);
}
