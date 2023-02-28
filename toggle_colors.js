function toggleColors() {
  var root = document.documentElement;
  var currentColors = getComputedStyle(root);
  var currentScheme = root.dataset.colorScheme;
  var toggleButton = document.getElementById('toggle-color');

  if (currentScheme === 'scheme1') {
    root.style.setProperty('--color1', '#031926ff');
    root.style.setProperty('--color2', '#468189ff');
    root.style.setProperty('--color3', '#77aca2ff');
    root.style.setProperty('--color4', '#9dbebbff');
    root.style.setProperty('--color5', '#f4e9cdff');
    root.dataset.colorScheme = 'scheme2';
    toggleButton.textContent = 'Dark Mode';
  } else {
    root.style.setProperty('--color1', '#010c12ff');
    root.style.setProperty('--color2', '#244246ff');
    root.style.setProperty('--color3', '#375a54ff');
    root.style.setProperty('--color4', '#456865ff');
    root.style.setProperty('--color5', '#b88f28ff');
    root.dataset.colorScheme = 'scheme1';
    toggleButton.textContent = 'Light Mode';
  }
}