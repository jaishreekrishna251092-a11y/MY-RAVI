// Deepak Portfolio - JS
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  if(saved === 'light'){ root.classList.add('light'); }

  const themeBtn = document.getElementById('themeToggle');
  themeBtn?.addEventListener('click', ()=>{
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });

  // Mobile nav
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  hamburger?.addEventListener('click', ()=>{
    navMenu.classList.toggle('open');
  });
  navMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=> navMenu.classList.remove('open')));

  // Footer year
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  // Contact form -> mailto fallback (no server needed)
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
    window.location.href = 'mailto:deepak@example.com?subject=' + subject + '&body=' + body;
  });
})();