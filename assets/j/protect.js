try {
    const p = window.atob("dGhvcg==");
    const input = prompt("Please enter the password to continue to the exclusive math book").toLowerCase();
    // todo: make this a fake educational page til login
    if (input === p) {
        alert("Welcome :)"); // correct :D
    } else {
        alert("Incorrect password. Try again.");
        window.location.reload(); // prevent them from seeing 

    }
} catch (e) {
    alert("Error: " + e);
}
