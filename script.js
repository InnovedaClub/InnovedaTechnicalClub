const teamMembers = [
    { 
        name: 'Usha S', 
        role: 'Faculty Co-oridinator', 
        image: 'Photos/Usha.png',
        description:'',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/dr-usha-sakthivel-58b4709 ', 
               
        } 
    },
    { 
        name: 'Chethan K', 
        role: 'Lead', 
        image: 'Photos/Chetha.jpg',
        description:'1RR21CS035',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/chethan-k-a76668248', 
               
        } 
    },
    { 
        name: 'Bharath B V', 
        role: 'Co-Lead', 
        image: 'Photos/Bharath.png',
        description:'1RR21CS024',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/bhar18bv', 
               
        } 
    },
    { 
        name: 'Bharadwaj M', 
        role: 'Treasurer', 
        image: 'Photos/Bharadwaj.jpg',
        description:'1RR21CS023',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/bharadwaj-m-0027a1276/ ', 
               
        } 
    },
    { 
        name: 'Bharagava KK', 
        role: 'Technical Lead', 
        image: 'Photos/Bhargava.jpg',
        description:'1RR21CS026',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/bhargava-k-k ', 
               
        } 
    },
    { 
        name: 'Ashwin S', 
        role: 'Social-media Lead', 
        image: 'Photos/Nigga.jpg',
        description:'1RR21CS016',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/ashwin-s-b6664830a ', 
               
        } 
    },
    { 
        name: 'Achyuth S', 
        role: 'AI & ML Lead', 
        image: 'Photos/Achyuth_S.jpg',
        description:'1RR21CS002',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/sira-achyuth-8b733924a ', 
               
        } 
    },
    { 
        name: 'Eshan Iqbal', 
        role: 'Technical Lead Associate', 
        image: 'Photos/Eshan.jpg',
        description:'1RR21CS053',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/eshaniqbal ', 
               
        } 
    },
    { 
        name: 'Ankitha S', 
        role: 'Marketing Associate', 
        image: 'Photos/Ankitha.jpg',
        description:'1RR21CS012',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/ankitha-s-143299329 ', 
               
        } 
    },
    { 
        name: 'Harshitha H Rao', 
        role: 'Marketing Associate', 
        image: 'Photos/Rao.jpg',
        description:'1RR21CS063',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/harshitha-rao-492902248/', 
               
        } 
    },
    { 
        name: 'Harshitha A D', 
        role: 'Design Associate', 
        image: 'IMG_4400.jpg',
        description:'1RR21CS059',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/harshitha-ad-57274b262 ', 
               
        } 
    },
    { 
        name: 'Bhavana H R', 
        role: 'Design Associate', 
        image: 'Photos/Bhavana.jpg',
        description:'1RR21CS027',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/bhavana-hr-99b31b332/', 
               
        } 
    },
    { 
        name: 'Prathiksha M', 
        role: 'Design Lead', 
        image: 'Photos/Prathiksha.webp',
        description:'1RR22CS114',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/prathiksha-m-524230259 ', 
               
        } 
    },
    { 
        name: 'Mehak Siddique', 
        role: 'Cyber Security Lead', 
        image: 'Photos/mehak.jpg',
        description:'1RR22CS093',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/mehak-siddique-051a38271', 
               
        } 
    },
    { 
        name: 'Vidyashree M', 
        role: 'Logistics Lead', 
        image: 'Photos/vidya.jpg',
        description:'1RR22CS184',
        actions: { 
            linkedin: ' ', 
               
        } 
    },
    { 
        name: 'Souhana H', 
        role: 'Sponsership Lead', 
        image: 'Photos/Souhana.jpg',
        description:'1RR21CS160',
        actions: { 
            linkedin: 'https://www.linkedin.com/in/souhana-h-920180305 ', 
               
        } 
    },
   
];


let currentIndex = 0;
const membersPerPage = 4;

// Function to load more members
function showMoreMembers() {
    const container = document.getElementById('team-container');
    const end = currentIndex + membersPerPage;

    // Loop to display a batch of members
    for (let i = currentIndex; i < end && i < teamMembers.length; i++) {
        const member = teamMembers[i];
        
        // Create the team member card
        const memberCard = document.createElement('div');
        memberCard.classList.add('team-member');
        
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <span class="badge">${member.role}</span>
            <p>${member.description}</p>
            <div class="action-icons">
                <div class="action-icons">
                <a href="${member.actions.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
               
            </div>
            </div>
        `;
        
        // Append the member card to the container
        container.appendChild(memberCard);
    }

    // Update the index to load the next batch on the next click
    currentIndex += membersPerPage;

    // Hide the button if all members are loaded
    if (currentIndex >= teamMembers.length) {
        document.querySelector('.show-more-btn').style.display = 'none';
    }
}

// Load the initial set of members when the page loads
window.onload = showMoreMembers;

