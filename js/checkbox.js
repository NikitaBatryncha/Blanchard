
const checkboxes = document.querySelectorAll('.cbx');

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      checkbox.checked = !checkbox.checked;
    }
  });
});
