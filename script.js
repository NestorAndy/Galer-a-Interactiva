const imageUrlInput = document.getElementById('imageUrl');
const addImageBtn = document.getElementById('addImageBtn');
const deleteImageBtn = document.getElementById('deleteImageBtn');
const gallery = document.getElementById('gallery');

let selectedImage = null;

addImageBtn.addEventListener('click', () => {
  const url = imageUrlInput.value.trim();
  if (!url) return alert("Por favor, ingresa una URL válida.");

  const img = document.createElement('img');
  img.src = url;

  img.addEventListener('click', () => {
    if (selectedImage) selectedImage.classList.remove('selected');
    img.classList.add('selected');
    selectedImage = img;
  });

  gallery.appendChild(img);
  imageUrlInput.value = '';
});

deleteImageBtn.addEventListener('click', () => {
  if (!selectedImage) return alert("Selecciona una imagen para eliminar.");
  gallery.removeChild(selectedImage);
  selectedImage = null;
});

imageUrlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addImageBtn.click();
  }
});
