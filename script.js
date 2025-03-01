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
