// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Removed gallery slider code as the slider HTML is not present. Only grid and load more remain.

// Contact form: simple client-side validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});
// Load more functionality for main gallery items
document.addEventListener("DOMContentLoaded", function() {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function() {
            const hiddenItems = document.querySelectorAll("#gallery-grid .gallery-item.hidden");
            let shown = 0;
            let itemsToShow = 3;
            for (let item of hiddenItems) {
                if (item.classList.contains("hidden") && shown < itemsToShow) {
                    item.classList.remove("hidden");
                    shown++;
                }
            }
            // Hide button if no more to show
            const stillHidden = document.querySelectorAll("#gallery-grid .gallery-item.hidden");
            if (stillHidden.length === 0) {
                loadMoreBtn.style.display = "none";
            }
        });
    }
});

// Load more functionality for Press Release gallery items
document.addEventListener("DOMContentLoaded", function() {
    const loadMorePressBtn = document.getElementById("loadMorePressBtn");
    if (loadMorePressBtn) {
        loadMorePressBtn.addEventListener("click", function() {
            // Find the closest .gallery-section above the button
            const section = loadMorePressBtn.closest('.gallery-section');
            if (!section) return;
            const grid = section.querySelector('.gallery-grid');
            const hiddenItems = grid.querySelectorAll('.gallery-item.hidden');
            let shown = 0;
            let itemsToShow = 3;
            for (let item of hiddenItems) {
                if (item.classList.contains("hidden") && shown < itemsToShow) {
                    item.classList.remove("hidden");
                    shown++;
                }
            }
            // Hide button if no more to show
            const stillHidden = grid.querySelectorAll('.gallery-item.hidden');
            if (stillHidden.length === 0) {
                loadMorePressBtn.style.display = "none";
            }
        });
    }
});

// Load more functionality for video gallery
document.addEventListener("DOMContentLoaded", function() {
    const loadMoreVideoBtn = document.getElementById("loadMoreVideoBtn");
    const hiddenVideos = document.querySelectorAll("#video-gallery-grid .video-gallery-item.hidden");
    let videosToShow = 2; // Number of videos to show per click

    loadMoreVideoBtn.addEventListener("click", function() {
        let shown = 0;
        for (let item of hiddenVideos) {
            if (item.classList.contains("hidden") && shown < videosToShow) {
                item.classList.remove("hidden");
                shown++;
            }
        }
        // Hide button if no more to show
        const stillHidden = document.querySelectorAll("#video-gallery-grid .video-gallery-item.hidden");
        if (stillHidden.length === 0) {
            loadMoreVideoBtn.style.display = "none";
        }
    });
});
 function openPopup(imgElement) {
      var popup = document.getElementById("popup");
      var popupImg = document.getElementById("popup-img");
      popup.style.display = "block";
      popupImg.src = imgElement.src;  // show clicked image
    }

    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }

    // Close popup when clicking outside the image
    window.onclick = function(event) {
      var popup = document.getElementById("popup");
      if (event.target === popup) {
        popup.style.display = "none";
      }
    }

