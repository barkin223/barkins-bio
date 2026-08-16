const input = document.getElementById("url");
const button = document.getElementById("downloadBtn");
const error = document.getElementById("error");

const result = document.getElementById("result");
const thumbnail = document.getElementById("thumbnail");
const title = document.getElementById("title");
const downloadLink = document.getElementById("downloadLink");

button.addEventListener("click", async () => {

  const url = input.value.trim();

  error.textContent = "";
  result.classList.add("hidden");

  if (!url) {
    error.textContent = "Paste a video URL first.";
    return;
  }

  if (!url.includes("tiktok.com")) {
    error.textContent = "Please enter a supported TikTok URL.";
    return;
  }

  button.disabled = true;
  button.textContent = "Loading...";

  try {

    /*
      Your backend/API goes here.

      Example:

      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: url
        })
      });

      const data = await response.json();

      thumbnail.src = data.thumbnail;
      title.textContent = data.title;
      downloadLink.href = data.downloadUrl;

      result.classList.remove("hidden");
    */

    error.textContent =
      "The downloader API hasn't been connected yet.";

  } catch (err) {

    error.textContent =
      "Something went wrong. Please try again.";

  }

  button.disabled = false;
  button.textContent = "Download";
});