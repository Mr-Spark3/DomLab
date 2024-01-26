const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  //task 1.0
  const mainEl = document.querySelector('main');
  //task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)';
    //task 1.2
  mainEl.innerHTML ='<h1>SEI Rocks!</h1>';
  //task1.3
  mainEl.classList.add('flex-ctr');
  
  
  //task 2.0
  const topMenuEl = document.getElementById('top-menu');
  //task 2.1
  topMenuEl.style.height = '100%';
  //task 2.2
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  //task 2.3
  topMenuEl.classList.add('flex-around');
  
  
  //task 3.1
  menuLinks.forEach(function(link){
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', 'link');
    linkEl.innerText = link.text;
    topMenuEl.appendChild(linkEl);
  })
  
  // Task 4.0
  const subMenuEl = document.getElementById('sub-menu');
  subMenuEl.style.position = 'absolute';
  
  // Task 4.1
  subMenuEl.style.height = '100%';
  
  // Task 4.2
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  
  // Task 4.3
  subMenuEl.classList.add('flex-around');
  
  //task 4.4
  
  //task 4.5
  subMenuEl.style.top = '0';
  //task 5.0
  
  
  //task 5.1
  //Select and cache all of the <a> elements //inside of topMenuEl in a variable named //topMenuLinks.
  const topMenuLinks = document.querySelectorAll('#top-menu a')
  
  //Declare a global showingSubMenu variable and //initialize it to false;
  let showingSubMenu = false;
  
  // task 5.2
  topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
  
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
  
    // task 5.3
    if (link.classList.contains('active')) {
      link.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
      return;
    }
  
    // task 5.4
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
    });
  
    // task 5.5
    // task 5.6
    const linkData = menuLinks.find(function(linkObj) {
      return linkObj.text === link.textContent;
    });
  
    showingSubMenu = linkData && 'subLinks' in linkData;
  
    // task 5.7
    if (showingSubMenu) {
      link.classList.add('active');
    }
  
    console.log("showingSubMenu:", showingSubMenu);
  });
  
  //task 5.8
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
      const linkEl = document.createElement('a');
      linkEl.setAttribute('href', link.href);
      linkEl.textContent = link.text;
      subMenuEl.appendChild(linkEl);
    });
  }
  
  //task 6.0
  subMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
  
  //6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';
  
  //6.2
    topMenuLinks.forEach(function(link) {
      link.classList.remove('active');
  
  //6.3
    mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
    })