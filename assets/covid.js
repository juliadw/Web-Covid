const toggleButton = document.getElementById('toggle-button');
const navList = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})

function dropFucntions() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}

function alertSubmit() {
    alert("Komentar anda seang kami proses!!");
}