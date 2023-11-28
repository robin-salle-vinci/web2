const ThemeManager = () => {
    const themeToggle = document.querySelector('#theme-toggle');
    const body = document.querySelector('body');
  
    
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
    }
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
  
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  };
  
  export default ThemeManager;