// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  const addMemberBtn = document.querySelector(".add-member-btn");
  const formSection = document.getElementById("formContainer");
  const formTitle = document.getElementById("formTitle");

  // Initially hide the form
  formSection.style.display = "none";

  // Toggle form on Add Member button click
  addMemberBtn.addEventListener("click", () => {
    if (formSection.style.display === "none") {
      formTitle.textContent = "Add New Member";
      formSection.style.display = "block";
    } else {
      formSection.style.display = "none";
    }
  });
});

// Dummy form handler (replace later)
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const age = form.age.value;
  const gender = form.gender.value;
  const city = form.city.value;
  const lastSeen = form.lastSeen.value;
  const height = form.height.value;
  const marks = form.marks.value;
  const photoFile = form.photo.files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const memberCard = document.createElement("div");
    memberCard.className = "memberCard";

    memberCard.innerHTML = `
      <div class="member-photo">
        <img src="${e.target.result}" alt="Member Photo" />
      </div>
      <div class="member-info">
        <h4>${name}</h4>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>Location: ${city}</p>
        <p>Status: <span class="status-text">🟢 Active</span></p>
        <button onclick="toggleStatus(this)">Mark as Missing</button>
      </div>
    `;

    document.querySelector(".dashboardView").appendChild(memberCard);
    form.reset();
  };

  if (photoFile) {
    reader.readAsDataURL(photoFile);
  } else {
    alert("Please upload a photo.");
  }
}

function toggleStatus(button) {
  const statusText = button.parentElement.querySelector(".status-text");
  if (statusText.textContent.includes("Active")) {
    statusText.textContent = "🔴 Missing";
    button.textContent = "Mark as Found";
  } else {
    statusText.textContent = "🟢 Active";
    button.textContent = "Mark as Missing";
  }
}

