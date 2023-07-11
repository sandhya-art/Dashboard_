const dashboard = document.getElementById('dashboard');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

fetch("data/data.json")
  .then(response => response.json())
  .then(data => {
    const colors = ["#00008B", "#3CB371", "#FF4500", "#4682B4", "#B22222", "#9400D3"];
    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.backgroundColor = colors[index % colors.length]; // Assign different color based on index
      card.innerHTML = `
        <div class="icon">
          <i class="ri-${item.icon_name}-fill" style="background-color: ${colors[index % colors.length]}"></i>
        </div>
        <div class="text">
          <h2>${item.name}</h2>
          <p><b>${item.count}</b></p>
        </div>
      `;
      card.addEventListener('click', () => openModal(item));
      dashboard.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

function openModal(item) {
  modalTitle.textContent = item.name;
  modalContent.textContent = item.count;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
