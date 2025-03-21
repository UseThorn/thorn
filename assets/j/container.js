window
.fetch("./assets/json/gl.json").then((response) => {
   if (!response.ok) {
    throw new Error("response failed.")
   }
   //TODO: make it load games
});
