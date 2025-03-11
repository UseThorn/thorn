// Delete file after development
try {
    const p = window.atob("dGhvcg==");
    const guess = prompt("Please enter the password to continue to the exclusive math book");

    if (guess === p) {
        alert("Good");
    } else {
        alert("Incorrect password");
    }
} catch (e) {
    alert("Error: " + e);
}
