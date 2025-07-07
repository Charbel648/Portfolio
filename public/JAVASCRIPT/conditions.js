function submitbutton() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const name = nameInput.value;
    const email = emailInput.value;
    const messageInput = document.getElementById("msg");
    const message = messageInput.value;
    const error = document.getElementById("error");

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message ==="") 
    {
      error.textContent = "Please fill in all fields.";
    } 
    else if (!nameRegex.test(name)) 
    {
      error.textContent = "Name must only contain letters (no numbers or symbols).";
    } 
    else if (name.length < 3) 
    {
      error.textContent = "Name must be at least 3 characters.";
    }
    else if (message.length < 1)
    {
      error.textContent = "Please write a message.";
    } 
    else if (!emailRegex.test(email)) 
    {
      error.textContent = "Please enter a valid email address.";
    } 
    else 
    {
      error.textContent = "";
      console.log("Form submitted");
      console.log("Name: ",name);
      console.log("Email: ",email);
      console.log("Message: ",message);

      nameInput.value ="";
      emailInput.value="";
      messageInput.value="";

      alert("Form submitted successfully!");
    }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menu = document.getElementById("menu");
  const sidebarLinks = document.querySelectorAll("#sidebar a");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinks = document.querySelectorAll("#sidebar a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => { toggleSidebar(true);});
  });


    document.addEventListener("click", (e) => {
      const isClickInsideSidebar = sidebar.contains(e.target);
      const isClickOnMenu = menu.contains(e.target);

      if (!isClickInsideSidebar && !isClickOnMenu && sidebar.style.width === "250px") {
        toggleSidebar(true);
      }
    });
  });