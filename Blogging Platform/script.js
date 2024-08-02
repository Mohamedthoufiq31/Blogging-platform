// Initial blog posts data
const initialBlogPosts = [
    {
        title: "Welcome to My Blog",
        content: "This is the first post on my new blog. Stay tuned for more updates!"
    },
    {
        title: "Another Day, Another Post",
        content: "Just sharing some thoughts about today's events and what I learned."
    },
    {
        title: "Tips for Learning JavaScript",
        content: "JavaScript can be tricky, but here are some tips that helped me become proficient."
    }
];

// Function to render initial blog posts
function renderInitialBlogPosts() {
    const blogPostsDiv = document.getElementById('blog-posts');
    initialBlogPosts.forEach(post => {
        const blogPostDiv = document.createElement('div');
        blogPostDiv.className = 'blog-post';

        const blogTitle = document.createElement('h2');
        blogTitle.innerText = post.title;
        blogPostDiv.appendChild(blogTitle);

        const blogContent = document.createElement('p');
        blogContent.innerText = post.content;
        blogPostDiv.appendChild(blogContent);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            blogPostsDiv.removeChild(blogPostDiv);
        };
        blogPostDiv.appendChild(deleteButton);

        blogPostsDiv.appendChild(blogPostDiv);
    });
}

// Call the function to render initial blog posts when the page loads
window.onload = renderInitialBlogPosts;

// Function to open the modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Function to add a new blog post
function addBlogPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title === '' || content === '') {
        alert('Please fill out both the title and content fields.');
        return;
    }

    const blogPostsDiv = document.getElementById('blog-posts');
    
    const blogPostDiv = document.createElement('div');
    blogPostDiv.className = 'blog-post';
    
    const blogTitle = document.createElement('h2');
    blogTitle.innerText = title;
    blogPostDiv.appendChild(blogTitle);
    
    const blogContent = document.createElement('p');
    blogContent.innerText = content;
    blogPostDiv.appendChild(blogContent);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        blogPostsDiv.removeChild(blogPostDiv);
    };
    blogPostDiv.appendChild(deleteButton);
    
    blogPostsDiv.appendChild(blogPostDiv);

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    closeModal();
}
