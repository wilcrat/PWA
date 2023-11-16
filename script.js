const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", (event) => {
  //Check for Web Share api Support
  if (navigator.share) {
    navigator
      .share({
        title: "web.dev",
        text: "Check out web.dev.",
        url: "https://web.dev/",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
});
