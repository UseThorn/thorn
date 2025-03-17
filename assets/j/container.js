window
.fetch("./assets/request/math.json").then((response) => {
   if (!response.ok) {
    throw new Error("response failed.")
   }
   //TODO: make it load games
});
