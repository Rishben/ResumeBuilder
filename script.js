// Skill section
document.getElementById('addSkillBtn').addEventListener('click', function() {
    const skillInput = document.getElementById('skill');
    const skillsListWrapper = document.getElementById('skillsListWrapper');
    const skillsList = document.getElementById('skillsList');

    if (skillInput.value.trim() !== '') {
        // Create a new div for the skill
        const skillDiv = document.createElement('div');
        skillDiv.className = 'content-list skill-item d-flex justify-content-between align-items-center';
        
        // Create a span for the skill text
        const skillText = document.createElement('span');
        skillText.textContent = skillInput.value;
        
        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            skillsList.removeChild(skillDiv);
            if (skillsList.children.length === 0) {
                skillsListWrapper.classList.add('d-none');
            }
        });

        // Append the skill text and delete button to the skill div
        skillDiv.appendChild(skillText);
        skillDiv.appendChild(deleteBtn);

        // Append the new skill div to the skills list
        skillsList.appendChild(skillDiv);

        // Show the skills list wrapper if it was hidden
        if (skillsListWrapper.classList.contains('d-none')) {
            skillsListWrapper.classList.remove('d-none');
        }

        // Clear the input field
        skillInput.value = '';
    }
});

// Education Section
document.getElementById('addEducationBtn').addEventListener('click', function() {
    const eduInput = document.getElementById('edu');
    const schoolInput = document.getElementById('S-C-Name');
    const gradeInput = document.getElementById('grade');
    const yearInput = document.getElementById('year');
    const educationListWrapper = document.getElementById('educationListWrapper');
    const educationList = document.getElementById('educationList');

    if (eduInput.value.trim() !== '' && schoolInput.value.trim() !== '' && gradeInput.value.trim() !== '' && yearInput.value.trim() !== '') {
        // Create a new div for the education entry
        const educationDiv = document.createElement('div');
        educationDiv.className = 'education-item content-list d-flex justify-content-between align-items-center';

        // Create a span for the education text
        const educationText = document.createElement('span');
        educationText.textContent = `${eduInput.value}, ${schoolInput.value}, ${gradeInput.value}, ${yearInput.value}`;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            educationList.removeChild(educationDiv);
            if (educationList.children.length === 0) {
                educationListWrapper.classList.add('d-none');
            }
        });

        // Append the education text and delete button to the education div
        educationDiv.appendChild(educationText);
        educationDiv.appendChild(deleteBtn);

        // Append the new education div to the education list
        educationList.appendChild(educationDiv);

        // Show the education list wrapper if it was hidden
        if (educationListWrapper.classList.contains('d-none')) {
            educationListWrapper.classList.remove('d-none');
        }

        // Clear the input fields
        eduInput.value = '';
        schoolInput.value = '';
        gradeInput.value = '';
        yearInput.value = '';
    }
});


// Achievement Section
document.getElementById('addAchievementBtn').addEventListener('click', function() {
    const achievementInput = document.getElementById('achievement');
    const achievementsListWrapper = document.getElementById('achievmentsListWrapper');
    const achievementsList = document.getElementById('achievmentsList');

    if (achievementInput.value.trim() !== '') {
        // Create a new div for the achievement
        const achievementDiv = document.createElement('div');
        achievementDiv.className = 'achievement-item content-list d-flex justify-content-between align-items-center';

        // Create a span for the achievement text
        const achievementText = document.createElement('span');
        achievementText.textContent = achievementInput.value;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            achievementsList.removeChild(achievementDiv);
            if (achievementsList.children.length === 0) {
                achievementsListWrapper.classList.add('d-none');
            }
        });

        // Append the achievement text and delete button to the achievement div
        achievementDiv.appendChild(achievementText);
        achievementDiv.appendChild(deleteBtn);

        // Append the new achievement div to the achievements list
        achievementsList.appendChild(achievementDiv);

        // Show the achievements list wrapper if it was hidden
        if (achievementsListWrapper.classList.contains('d-none')) {
            achievementsListWrapper.classList.remove('d-none');
        }
        // Clear the input field
        achievementInput.value = '';
    }
});


// Work Experience Section
document.getElementById('addExperienceBtn').addEventListener('click', function() {
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const position = document.getElementById('position').value;
    const description = document.getElementById('descriptiontextarea').value;

    if (company && duration && position && description) {
        const workExperienceList = document.getElementById('workExperienceList');
        const workExperienceListWrapper = document.getElementById('workExperienceListWrapper');

        const workExperienceItem = document.createElement('div');
        workExperienceItem.classList.add('content-list-work','work-experience-item', 'mb-3');

        workExperienceItem.innerHTML = `
            <h5>${company}</h5>
            <p><strong>Duration:</strong> ${duration}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Description:</strong> ${description}</p>
        `;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            workExperienceList.removeChild(workExperienceItem);
            if (workExperienceList.children.length === 0) {
                workExperienceListWrapper.classList.add('d-none');
            }
        });

        workExperienceItem.appendChild(deleteBtn);
        workExperienceList.appendChild(workExperienceItem);
        workExperienceListWrapper.classList.remove('d-none');

        // Clear input fields after adding
        document.getElementById('company').value = '';
        document.getElementById('duration').value = '';
        document.getElementById('position').value = '';
        document.getElementById('descriptiontextarea').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});


// Projects Section
document.getElementById('addProjectBtn').addEventListener('click', function() {
    const projectName = document.getElementById('project').value;
    const projectDescription = document.getElementById('description').value;

    if (projectName && projectDescription) {
        const projectsList = document.getElementById('projectsList');
        const projectsListWrapper = document.getElementById('projectsListWrapper');

        const projectItem = document.createElement('div');
        projectItem.classList.add('content-list-work','project-item', 'mb-3');

        projectItem.innerHTML = `
            <h5>${projectName}</h5>
            <p><strong>Description:</strong> ${projectDescription}</p>
        `;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            projectsList.removeChild(projectItem);
            if (projectsList.children.length === 0) {
                projectsListWrapper.classList.add('d-none');
            }
        });

        projectItem.appendChild(deleteBtn);
        projectsList.appendChild(projectItem);
        projectsListWrapper.classList.remove('d-none');

        // Clear input fields after adding
        document.getElementById('project').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
//pushed to git

// This script needs to be added to your existing script.js file
// Or included as a separate script in your HTML

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the preview button and add click event listener
    document.querySelector('footer button').addEventListener('click', function() {
        generatePreview();
    });
});

function generatePreview() {
    // First, make sure Bootstrap is loaded (it should be since it's in your HTML)
    if (typeof bootstrap === 'undefined') {
        console.error('Bootstrap is not loaded. Make sure the Bootstrap script is properly included.');
        alert('Could not load preview. Please make sure Bootstrap is loaded.');
        return;
    }

    // Check if modal already exists, remove it if it does
    const existingModal = document.getElementById('resumePreviewModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create a modal for the preview
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'resumePreviewModal';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'resumePreviewModalLabel');
    modal.setAttribute('aria-hidden', 'true');

    // Create modal content
    modal.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="resumePreviewModalLabel">Resume Preview</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="resumePreview">
                    <div id="resumeContent">
                        <!-- Resume content will be inserted here -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="downloadPdfBtn">Download PDF</button>
                </div>
            </div>
        </div>
    `;

    // Append modal to body
    document.body.appendChild(modal);

    // Generate the resume content
    generateResumeContent();

    // Show the modal using Bootstrap's Modal API
    const modalElement = document.getElementById('resumePreviewModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();

    // Add event listener for PDF download
    document.getElementById('downloadPdfBtn').addEventListener('click', function() {
        downloadPDF();
    });
}

function generateResumeContent() {
    const resumeContent = document.getElementById('resumeContent');
    
    // Get all user input values
    const name = document.getElementById('name').value || 'Your Name';
    const jobTitle = document.getElementById('job').value || 'Job Title';
    const email = document.getElementById('email').value || 'email@example.com';
    const phone = document.getElementById('phone').value || 'Phone Number';
    const address = document.getElementById('address').value || 'City, Country';
    const linkedin = document.getElementById('linkedin').value || '';
    const github = document.getElementById('github').value || '';
    const portfolio = document.getElementById('portfolio').value || '';
    const summary = document.getElementById('summarytextarea').value || 'Professional summary goes here';

    // Create the resume content HTML
    let html = `
        <div class="resume-container">
            <!-- Header section -->
            <div class="resume-header mb-4">
                <h1 class="text-center fw-bold">${name}</h1>
                <h3 class="text-center text-dark">${jobTitle}</h3>
                <div class="d-flex justify-content-center gap-3 mt-2 flex-wrap">
                    <span><i class="fas fa-envelope me-1"></i>${email}</span>
                    <span><i class="fas fa-phone me-1"></i>${phone}</span>
                    <span><i class="fas fa-map-marker-alt me-1"></i>${address}</span>
                </div>
                <div class="d-flex justify-content-center gap-3 mt-2 flex-wrap">
                    ${linkedin ? `<span><i class="fab fa-linkedin me-1"></i>${linkedin}</span>` : ''}
                    ${github ? `<span><i class="fab fa-github me-1"></i>${github}</span>` : ''}
                    ${portfolio ? `<span><i class="fas fa-globe me-1"></i>${portfolio}</span>` : ''}
                </div>
            </div>

            <!-- Professional Summary -->
            <div class="resume-section mb-4">
                <h2 class="resume-section-title border-bottom border-2 border-dark pb-1">Professional Summary</h2>
                <p>${summary}</p>
            </div>
    `;

    // Skills Section
    const skillsList = document.getElementById('skillsList');
    if (skillsList && skillsList.children.length > 0) {
        html += `
            <div class="resume-section mb-4">
                <h2 class="resume-section-title border-bottom border-2 border-dark pb-1">Skills</h2>
                <div class="d-flex flex-wrap gap-2">
        `;
        
        Array.from(skillsList.children).forEach(skillItem => {
            const skillText = skillItem.querySelector('span').textContent;
            html += `<span class="badge bg-light text-dark border p-2">${skillText}</span>`;
        });
        
        html += `
                </div>
            </div>
        `;
    }

    // Education Section
    const educationList = document.getElementById('educationList');
    if (educationList && educationList.children.length > 0) {
        html += `
            <div class="resume-section mb-4">
                <h2 class="resume-section-title border-bottom border-2 border-dark pb-1">Education</h2>
                <ul class="list-unstyled">
        `;
        
        Array.from(educationList.children).forEach(eduItem => {
            const eduText = eduItem.querySelector('span').textContent;
            const [degree, school, grade, year] = eduText.split(', ');
            
            html += `
                <li class="mb-3">
                    <div class="d-flex justify-content-between flex-wrap">
                        <h5 class="fw-bold">${degree}</h5>
                        <span>${year}</span>
                    </div>
                    <div>${school}</div>
                    <div>Grade: ${grade}</div>
                </li>
            `;
        });
        
        html += `
                </ul>
            </div>
        `;
    }

    // Work Experience
    const workExperienceList = document.getElementById('workExperienceList');
    if (workExperienceList && workExperienceList.children.length > 0) {
        html += `
            <div class="resume-section mb-4">
                <h2 class="resume-section-title border-bottom border-2 border-dark pb-1">Work Experience</h2>
                <ul class="list-unstyled">
        `;
        
        Array.from(workExperienceList.children).forEach(workItem => {
            const company = workItem.querySelector('h5').textContent;
            const paragraphs = workItem.querySelectorAll('p');
            const duration = paragraphs[0].textContent.replace('Duration:', '').trim();
            const position = paragraphs[1].textContent.replace('Position:', '').trim();
            const description = paragraphs[2].textContent.replace('Description:', '').trim();
            
            html += `
                <li class="mb-3">
                    <div class="d-flex justify-content-between flex-wrap">
                        <h5 class="fw-bold">${company}</h5>
                        <span>${duration}</span>
                    </div>
                    <div class="fw-semibold">${position}</div>
                    <p>${description}</p>
                </li>
            `;
        });
        
        html += `
                </ul>
            </div>
        `;
    }

    // Projects
    const projectsList = document.getElementById('projectsList');
    if (projectsList && projectsList.children.length > 0) {
        html += `
            <div class="resume-section mb-4">
                <h2 class="resume-section-title border-bottom border-2 border-dark pb-1">Projects</h2>
                <ul class="list-unstyled">
        `;
        
        Array.from(projectsList.children).forEach(projectItem => {
            const projectName = projectItem.querySelector('h5').textContent;
            const projectDescription = projectItem.querySelector('p').textContent.replace('Description:', '').trim();
            
            html += `
                <li class="mb-3">
                    <h5 class="fw-bold">${projectName}</h5>
                    <p>${projectDescription}</p>
                </li>
            `;
        });
        
        html += `
                </ul>
            </div>
        `;
    }

    // Achievements
    const achievementsList = document.getElementById('achievmentsList');
    if (achievementsList && achievementsList.children.length > 0) {
        html += `
            <div class="resume-section mb-4">
                <h2 class="resume-section-title border-bottom border-2 border-dark pb-1">Achievements</h2>
                <ul>
        `;
        
        Array.from(achievementsList.children).forEach(achievementItem => {
            const achievementText = achievementItem.querySelector('span').textContent;
            html += `<li>${achievementText}</li>`;
        });
        
        html += `
                </ul>
            </div>
        `;
    }

    // Close the resume container
    html += `</div>`;

    // Set the resume content
    resumeContent.innerHTML = html;

    // Add CSS for better styling of the preview
    const style = document.createElement('style');
    style.textContent = `
        .resume-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        .resume-section-title {
            font-weight: bold;
            margin-bottom: 10px;
        }
        @media print {
            body * {
                visibility: hidden;
            }
            #resumePreview, #resumePreview * {
                visibility: visible;
            }
            #resumePreview {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
}

function downloadPDF() {
    // Make sure jsPDF is loaded
    if (typeof window.jspdf === 'undefined') {
        console.error('jsPDF is not loaded. Make sure the jsPDF script is properly included.');
        alert('Could not generate PDF. Please make sure jsPDF is loaded.');
        return;
    }

    // Using the jspdf library
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // Get the resume content element
    const resumeContent = document.getElementById('resumeContent');
    
    // Check if html2canvas is loaded, if not, load it
    if (typeof html2canvas === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = function() {
            captureAndSavePDF(resumeContent, doc);
        };
        document.head.appendChild(script);
    } else {
        captureAndSavePDF(resumeContent, doc);
    }
}

function captureAndSavePDF(element, doc) {
    // Show a loading message
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Generating PDF, please wait...';
    loadingMessage.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: white; border: 1px solid #ddd; border-radius: 5px; z-index: 9999;';
    document.body.appendChild(loadingMessage);

    html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add new pages if the content is longer than one page
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Remove the loading message
        document.body.removeChild(loadingMessage);

        // Save the PDF
        doc.save('resume.pdf');
    }).catch(error => {
        console.error('Error generating PDF:', error);
        alert('An error occurred while generating the PDF. Please try again.');
        document.body.removeChild(loadingMessage);
    });
}