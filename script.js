function saveData() {
    const name = document.getElementById('name-input').value;
    const surname = document.getElementById('surname-input').value;
    const pesel = document.getElementById('pesel-input').value;
    const photo = document.getElementById('photo-input').files[0];

    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('pesel', pesel);

    if (photo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('photo', e.target.result);
        };
        reader.readAsDataURL(photo);
    }

    alert('Dane zapisane!');
}

window.onload = function () {
    document.getElementById('name').textContent = localStorage.getItem('name') || '';
    document.getElementById('surname').textContent = localStorage.getItem('surname') || '';
    document.getElementById('pesel').textContent = localStorage.getItem('pesel') || '';
    document.getElementById('profile-pic').src = localStorage.getItem('photo') || 'default.png';
};
