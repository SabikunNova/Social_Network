// main.js

// Navigation bar profile dropdown toggle
document.querySelectorAll(".profile-dropdown").forEach((dropdown) => {
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdown.addEventListener("click", () => {
        dropdownContent.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

// Post creation functionality
const postButton = document.querySelector(".post-btn");
const postInput = document.querySelector(".post-input textarea");
const postsFeed = document.querySelector(".posts-feed");

if (postButton && postInput && postsFeed) {
    postButton.addEventListener("click", () => {
        const postContent = postInput.value.trim();
        if (postContent) {
            const newPost = document.createElement("div");
            newPost.classList.add("post");

            newPost.innerHTML = `
                <div class="post-header">
                    <img src="images/profile.jpg" alt="User">
                    <div class="post-info">
                        <h4>John Doe</h4>
                        <p class="timestamp">Just now</p>
                    </div>
                </div>
                <div class="post-content">
                    <p>${postContent}</p>
                </div>
                <div class="post-actions">
                    <button><i class="fas fa-thumbs-up"></i> Like</button>
                    <button><i class="fas fa-comment"></i> Comment</button>
                    <button><i class="fas fa-share"></i> Share</button>
                </div>
            `;

            postsFeed.prepend(newPost);
            postInput.value = ""; // Clear the input field
        } else {
            alert("Please enter some content before posting.");
        }
    });
}

// Logout functionality
const logoutButton = document.querySelector(".logout-btn");
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        // Simulate logout by redirecting to login.html
        window.location.href = "login.html";
    });
}

// Settings save changes
const saveButtons = document.querySelectorAll(".save-btn");
saveButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Your changes have been saved!");
    });
});

// Add Comment Functionality
document.querySelectorAll(".add-comment button").forEach((commentButton) => {
    commentButton.addEventListener("click", (event) => {
        const commentInput = event.target.previousElementSibling;
        const commentContent = commentInput.value.trim();

        if (commentContent) {
            const commentSection = event.target.closest(".comments-section");
            const newComment = document.createElement("div");
            newComment.classList.add("comment");
            newComment.innerHTML = `
                <img src="images/profile.jpg" alt="Commenter">
                <div class="comment-content">
                    <h5>You</h5>
                    <p>${commentContent}</p>
                </div>
            `;

            commentSection.prepend(newComment);
            commentInput.value = ""; // Clear comment input
        } else {
            alert("Please write something before posting a comment.");
        }
    });
});

// Search bar functionality
const searchButton = document.querySelector(".search-bar button");
const searchInput = document.querySelector(".search-bar input");
if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
        } else {
            alert("Please enter something to search.");
        }
    });
}

// Sidebar toggle (if needed for responsive design)
const sidebarToggles = document.querySelectorAll(".sidebar-toggle");
sidebarToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const sidebar = document.querySelector(toggle.dataset.target);
        sidebar.classList.toggle("active");
    });
});
