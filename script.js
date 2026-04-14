const gallery = document.getElementById("gallery");

// Fetch JSON
fetch("gallery.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("gallery-item");

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.title;

      // CLICK → OPEN MODAL
      img.addEventListener("click", () => openModal(item));

      div.appendChild(img);
      gallery.appendChild(div);
    });
  });

// MODAL LOGIC
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("modal-caption");
const closeBtn = document.querySelector(".close");

function openModal(item) {
  modal.style.display = "block";
  modalImg.src = item.src;
  caption.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
}

// CLOSE MODAL
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// CLOSE when clicking outside image
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};