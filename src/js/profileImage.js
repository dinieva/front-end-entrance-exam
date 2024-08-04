// загрузка изображения profileImg
/* export function profileImage() {
    let imageFile = document.getElementById('profileImage').files[0];
    fetch('/upload', { method: 'POST', body: new FormData().append('image', imageFile) })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); 
} */

export function profileImage(inputElement) {
    inputElement.addEventListener('change', () => {
    const file = inputElement.files[0];
    const imageURL = URL.createObjectURL(file);
    document.getElementById('preview').src = imageURL;
    inputElement.value = null;
    document.getElementById('preview').onload = () => URL.revokeObjectURL(imageURL);
    })
}