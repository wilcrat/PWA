const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", (event) => {
  //Check for Web Share api Support

  if (navigator.share) {
    //Browser supports Web Shre API
    navigator
      .share({
        title: "web.dev",
        text: "Check out web.dev.",
        url: "https://mobi.com/",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
});

//multiple urls
function page() {
  let url = document.location.href;
  const canonicalElement = document.querySelector("link[rel=canonical]");
  if (canonicalElement !== null) {
    url = canonicalElement.href;
  }
  navigator.share({ url });
}
