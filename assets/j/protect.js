const PASSWORD = window.atob("cHJlbWl1bTE5");
const STORAGE_KEY = "@vortex_math/loggedIn";
const isLoggedIn = localStorage.getItem(STORAGE_KEY) === "true";

if (!isLoggedIn) {
    document.title = "Vortex Math"
    const premium = document.createElement("iframe");
    premium.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 100;";
    premium.src = "/math.html";
    document.body.appendChild(premium);

    setTimeout(() => {
        let input;
        try {
            input = prompt("Enter the password to access the exclusive lessons")?.trim().toLowerCase();
        } catch (e) {
            throw new Error("Error: " + e);
        }

        if (input === PASSWORD) {
            localStorage.setItem(STORAGE_KEY, "true");
            premium.remove();
            document.title = "Dashboard | RapidIdentity"
            alert("Access granted. Welcome! :)");
        } else {
            alert("Incorrect password. Access denied to premium content.");
        }
    }, 500);
}
