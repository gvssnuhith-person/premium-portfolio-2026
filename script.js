document.addEventListener('DOMContentLoaded', () => {
      console.log('Premium Portfolio Loaded');

                              // Smooth scroll for navigation links
                              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                                        anchor.addEventListener('click', function (e) {
                                                      e.preventDefault();
                                                      document.querySelector(this.getAttribute('href')).scrollIntoView({
                                                                        behavior: 'smooth'
                                                      });
                                        });
                              });
});
