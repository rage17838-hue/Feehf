let isOwner = false;

// load saved bio
document.getElementById("bio").innerText =
  localStorage.getItem("bio") || "Welcome to wifi.siege";

// badge update
function updateBadge() {
  document.getElementById("badge").innerText =
    isOwner ? "✔ Verified Owner" : "";
}
updateBadge();

function openLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginBox").style.display = "none";
}

function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "wifi" && p === "siege123") {
    isOwner = true;
    updateBadge();

    document.getElementById("panel").style.display = "block";
    closeLogin();
  } else {
    alert("Wrong login");
  }
}

function logout() {
  isOwner = false;
  updateBadge();
  document.getElementById("panel").style.display = "none";
}

function saveBio() {
  let bio = document.getElementById("newBio").value;
  localStorage.setItem("bio", bio);
  document.getElementById("bio").innerText = bio;
}

function changeMusic() {
  let file = document.getElementById("musicUpload").files[0];
  if (!file) return;

  let url = URL.createObjectURL(file);
  document.querySelector("audio").src = url;
}
