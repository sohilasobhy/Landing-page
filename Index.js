
document.getElementById('closeBtn').addEventListener('click', function () {
    const filter = document.getElementById('filter');
    filter.classList.remove("filterShow")
    filter.classList.add("filterHidden")
})
document.getElementById('openMenuModal').addEventListener('click', function () {
    const filter = document.getElementById('filter');
    filter.classList.remove("filterHidden")
    filter.classList.add("filterShow")
})
