document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const bibleList = document.getElementById("bibleList");
    const gridViewBtn = document.getElementById("gridViewBtn");
    const listViewBtn = document.getElementById("listViewBtn");

    // Search Functionality
    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();
        let items = bibleList.getElementsByTagName("li");

        for (let i = 0; i < items.length; i++) {
            let text = items[i].textContent || items[i].innerText;
            items[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
        }
    });

    // Toggle to Grid View
    gridViewBtn.addEventListener("click", function () {
        bibleList.classList.remove("list-view");
        bibleList.classList.add("grid-view");
    });

    // Toggle to List View
    listViewBtn.addEventListener("click", function () {
        bibleList.classList.remove("grid-view");
        bibleList.classList.add("list-view");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const ministrySearch = document.getElementById("ministrySearch");
    const ministriesList = document.getElementById("ministriesList");
    const ministryGridBtn = document.getElementById("ministryGridBtn");
    const ministryListBtn = document.getElementById("ministryListBtn");

    // Search Functionality
    ministrySearch.addEventListener("keyup", function () {
        let filter = ministrySearch.value.toLowerCase();
        let items = ministriesList.getElementsByTagName("li");

        for (let i = 0; i < items.length; i++) {
            let text = items[i].innerText || items[i].textContent;
            items[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
        }
    });

    // Toggle to Grid View
    ministryGridBtn.addEventListener("click", function () {
        ministriesList.classList.remove("list-view");
        ministriesList.classList.add("grid-view");
    });

    // Toggle to List View
    ministryListBtn.addEventListener("click", function () {
        ministriesList.classList.remove("grid-view");
        ministriesList.classList.add("list-view");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Live Time Display
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.getElementById("currentTime").textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Sticky Navbar Effect
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
});
function openTab(event, tabId) {
    // Hide all tab content
    let tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach(content => content.style.display = "none");

    // Remove 'active' class from all tab links
    let tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => link.classList.remove("active"));

    // Show the selected tab content
    document.getElementById(tabId).style.display = "block";

    // Add 'active' class to the clicked tab
    event.currentTarget.classList.add("active");
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab-link").click();
});
