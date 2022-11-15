const btnRegister = document.getElementById('btnRegister');
btnRegister.addEventListener('click', () => {
    let nom = document.getElementById('nombre').value;
    let cel = document.getElementById('celular').value;
    let age = document.getElementById('edad').value;
    let mail = document.getElementById('email').value;
    let acti = document.getElementById('activo').value;
    let result = {
        nombre: nom,
        celular: cel,
        email: mail,
        edad: age,
        activo: acti
    }
    console.log(result)
    fetch('http://localhost:3000/api/contactos/', {
            method: 'POST',
            body: JSON.stringify(result),
            Headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
});