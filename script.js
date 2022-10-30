const url = 'https://script.google.com/macros/s/AKfycby8KDZ6-9T-S990D1kPaX5sMzUKEj5bBR7ye_0BQpa3bxI-wqqYN5rIl2WCP2FfOWZxTQ/exec'
const btnSubmit = document.getElementById('btnSubmit')
const form = document.forms['submit-form']

document.addEventListener("DOMContentLoaded", () => {
    const formPage = document.querySelector('.form-card')
    formPage.addEventListener('submit', (event) => {
        event.preventDefault()
        postForm()
    })

    function postForm() {
        btnSubmit.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...'
        fetch(url, { method: 'POST', body: new FormData(form), })
            .then((response) => {
                Swal.fire({
                    title: "Berhasil!",
                    text: "Form berhasil dikirim ke Google Sheets",
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        btnSubmit.innerHTML = 'Kirim Data'
                    }
                })
                console.log(response)
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: "Terjadi kesalahan!",
                    icon: 'error',
                    confirmButtonText: 'Coba lagi'
                }).then((result) => {
                    if (result.isConfirmed) {
                        btnSubmit.innerHTML = 'Kirim Data'
                    }
                })
                console.error(error)
            })
            .finally(() => {
                btnSubmit.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...'
            })
    }
})

