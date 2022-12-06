(() => {
  const tool = document.querySelector('.tool');
  const help = document.querySelector('.help');
  const home = document.querySelector('.home');
  const content_wrap = document.querySelector('.content')
  const tool_wrap = document.querySelector('.tool_wrap');
  const help_wrap = document.querySelector('.help_wrap');

  home.addEventListener('click', () => {
    tool_wrap.style.display = 'none';
    help_wrap.style.display = 'none';
    content_wrap.style.display = 'flex';
    home.classList.add('active');
    tool.classList.remove('active');
    help.classList.remove('active');
  });

  help.addEventListener('click', () => {
    content_wrap.style.display = 'none';
    help_wrap.style.display = 'flex';
    tool_wrap.style.display = 'none';
    help.classList.add('active');
    tool.classList.remove('active');
    home.classList.remove('active');
  });
  tool.addEventListener('click', () => {
    content_wrap.style.display = 'none';
    help_wrap.style.display = 'none';
    tool_wrap.style.display = 'flex';
    tool.classList.add('active');
    help.classList.remove('active');
    home.classList.remove('active');
  });
})()