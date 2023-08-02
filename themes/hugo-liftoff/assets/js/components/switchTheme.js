// Adapted from https://github.com/CodyHouse/dark-light-mode-switch

function switchTheme() {
  let themeSwitch = document.getElementById('themeSwitch');
  if (themeSwitch) {
    initTheme();

    themeSwitch.addEventListener('change', () => {
      resetTheme();
    });


    function resetTheme() {
      if (themeSwitch.checked) {
        
        console.log('hi')
      } else {
        console.log('bye')
      }
    }
  }
}

const switcher = (() => {
  switchTheme();
})();

export { switcher };