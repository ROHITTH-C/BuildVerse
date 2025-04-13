document.addEventListener('DOMContentLoaded', function() {
    // Navigation between sections
    const navItems = document.querySelectorAll('.sidebar-nav li');
    const contentSections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all nav items
        navItems.forEach(navItem => navItem.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Hide all content sections
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Show the corresponding content section
        const target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
      });
    });
    
    // Tab switching in Contribute section
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Show the corresponding tab content
        const target = this.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
      });
    });
    
    // Logout functionality
    const logoutBtn = document.querySelector('.btn-logout');
    logoutBtn.addEventListener('click', function() {
      // Here you would typically clear session data
      // For now, just redirect to login page
      window.location.href = 'login.html';
    });
    
    // Project upload form
    const uploadForm = document.getElementById('projectUploadForm');
    if (uploadForm) {
      uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const projectTitle = document.getElementById('projectTitle').value;
        const projectDescription = document.getElementById('projectDescription').value;
        const githubLink = document.getElementById('githubLink').value;
        const projectTags = document.getElementById('projectTags').value;
        
        // Prepare data for MongoDB
        const projectData = {
          title: projectTitle,
          description: projectDescription,
          githubUrl: githubLink,
          tags: projectTags.split(',').map(tag => tag.trim()),
          createdAt: new Date().toISOString(),
          createdBy: document.getElementById('username-display').textContent
        };
        
        // Here's where your friend will connect to MongoDB
        console.log('Project data ready for MongoDB:', projectData);
        
        // For demo purposes - replace with actual fetch call
        /*
        fetch('/api/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(projectData),
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Project uploaded successfully!');
            uploadForm.reset();
            // Refresh project list or show the new project
          } else {
            alert(data.message || 'Project upload failed');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred during project upload');
        });
        */
        
        // Temporary success message
        alert('Project uploaded successfully (MongoDB integration pending)');
        uploadForm.reset();
      });
    }
    
    // Contribute button functionality
    const contributeButtons = document.querySelectorAll('.btn-contribute');
    contributeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const projectCard = this.closest('.project-card');
        const projectTitle = projectCard.querySelector('.project-title').textContent;
        
        // Here you would typically add the user to the project contributors
        // For now, just show a confirmation
        alert(`You're now contributing to: ${projectTitle}`);
        
        // Update UI to reflect contribution
        this.textContent = 'Contributing';
        this.classList.add('btn-success');
        this.classList.remove('btn-primary');
      });
    });
  });
