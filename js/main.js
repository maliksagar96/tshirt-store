      function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
      }
      function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
      }

      function toggleSearch(e) {
        e.preventDefault();
        const searchBox = document.querySelector('nav input[type="search"]');
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
          searchBox.focus();
        }
      }

      // Close if click outside
      document.addEventListener('click', function (event) {
        const searchBox = document.querySelector('nav input[type="search"]');
        const searchIcon = document.querySelector('.search a');
        const sidebar = document.querySelector(".sidebar");
        const menuButton = document.querySelector(".menu-button a");

        // Close search bar
        if (
          searchBox.classList.contains('active') &&
          !searchBox.contains(event.target) &&
          !searchIcon.contains(event.target)
        ) {
          searchBox.classList.remove('active');
        }

        // Close sidebar
        if (
          sidebar.style.display === "flex" &&
          !sidebar.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {
          hideSidebar();
        }
      });


      /**************Hero Section*********************/
      const images = [
        "images/hero/bhai-1.png",
        "images/hero/bhai-2.png",
        "images/hero/bhai-3.png",
        "images/hero/bhai-4.png"
      ];
  
      let i = 0;
      const imgElement = document.getElementById("hero-img");

      setInterval(() => {
        // Fade out
        imgElement.classList.add('fade-out');

        // Wait for fade-out to finish
        setTimeout(() => {
          i = (i + 1) % images.length;
          imgElement.src = images[i];
          // Fade in
          imgElement.classList.remove('fade-out');
        }, 200); // same as CSS transition duration
      }, 2500);
      
