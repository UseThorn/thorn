const PASSWORD = window.atob("cHJlbWl1bTE5");
    document.title = "Vortex Math"
    const link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
    link.href = '';
    const premium = document.createElement("iframe");
    premium.style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 100;";
    premium.src = "/math.html";
    document.body.appendChild(premium);

    setTimeout(() => {
        let input;
        try {
            input = prompt("Enter the password to access the nginx server.")?.trim().toLowerCase();
        } catch (e) {
            throw new Error("Error: " + e);
        }

        if (input === PASSWORD) {
         //   localStorage.setItem(STORAGE_KEY, "true");
            premium.remove();
            document.title = "Dashboard | RapidIdentity"
                link.href = '/favicon.ico';
            alert("Access granted. Welcome! :)");
        } else {
            alert("Incorrect password. Access denied to nginx server.");
        }
    }, 500);

