(function () {
  var form = document.getElementById("newsletter-form");
  if (!form) return;

  var input = document.getElementById("newsletter-email");
  var button = document.getElementById("newsletter-submit");
  var success = document.getElementById("newsletter-success");

  function isValid(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  }

  function updateButton() {
    button.classList.toggle("is-valid", isValid(input.value));
    button.disabled = !isValid(input.value);
  }

  input.addEventListener("input", updateButton);
  updateButton();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isValid(input.value)) return;
    form.classList.add("hidden");
    success.classList.remove("hidden");
  });
})();
