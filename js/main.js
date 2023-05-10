let tabs = document.querySelectorAll('.tab');
let articles = document.querySelectorAll('.article');

tabs.forEach(function(tab, index) {
  tab.addEventListener('click', function() {
    // Remove active class from all tabs except the clicked tab
    tabs.forEach(function(otherTab) {
      if (otherTab !== tab) {
        otherTab.classList.remove('active');
        otherTab.style.backgroundColor = '';
      }
    });
    
    // Add active class to clicked tab and set its background color to gray
    tab.classList.add('active');
    tab.style.backgroundColor = 'gray';

    // Hide all articles
    articles.forEach(function(article) {
      article.style.display = 'none';
    });
    
    // Show the corresponding article
    articles[index].style.display = 'block';
  });
});