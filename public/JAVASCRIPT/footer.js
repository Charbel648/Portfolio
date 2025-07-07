document.addEventListener("DOMContentLoaded", () => {
    fetch("../HTML/footer.html")
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading footer:", error);
      });

  });