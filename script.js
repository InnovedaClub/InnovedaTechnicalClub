const teamMembers = [
    {
        name: 'Dr. Usha S',
        role: 'Faculty Co-oridinator',
        image: 'Photos/Usha.png',
        description: 'Professor, RRCE',
        actions: {
            linkedin: 'https://www.linkedin.com/in/dr-usha-sakthivel-58b4709 ',
        },
        category: 'faculty-coordinators'
    },
    {
        name: 'Dr.M Karuppasamy',
        role: 'Faculty Co-oridinator',
        image: 'Photos/Karuppasamy.jpg',
        description: 'Professor, RRCE',
        actions: {
            linkedin: 'https://www.linkedin.com/in/prof-karuppasamy-mariappan-73693854',
        },
        category: 'faculty-coordinators'
    },
    {
        name: 'Chethan K',
        role: 'Lead',
        image: 'Photos/Chetha.jpg',
        description: '1RR21CS035',
        actions: {
            linkedin: 'https://www.linkedin.com/in/chethan-k-a76668248',
        },
        category: 'core'
    },
    {
        name: 'Bharath B V',
        role: 'Co-Lead',
        image: 'Photos/Bharath.png',
        description: '1RR21CS024',
        actions: {
            linkedin: 'https://www.linkedin.com/in/bhar18bv',
        },
        category: 'core'
    },
    {
        name: 'Bharadwaj M',
        role: 'Treasurer',
        image: 'Photos/Bharadwaj.jpg',
        description: '1RR21CS023',
        actions: {
            linkedin: 'https://www.linkedin.com/in/bharadwaj-m-0027a1276/ ',
        },
        category: 'core'
    },

    // Technical Team

    {
        name: 'Bhargava KK',
        role: 'Lead',
        image: 'Photos/Bhargava.jpg',
        description: '1RR21CS026',
        actions: {
            linkedin: 'https://www.linkedin.com/in/bhargava-k-k ',
        },
        category: 'technical-team'
    },
    {
        name: 'Eshan Iqbal',
        role: 'Associate',
        image: 'Photos/Eshan.jpg',
        description: '1RR21CS053',
        actions: {
            linkedin: 'https://www.linkedin.com/in/eshaniqbal ',
        },
        category: 'technical-team'
    },
    {
        name: 'Raghav V Bhat',
        role: 'Associate',
        image: 'Photos/Raghav.jpg',
        description: '1RR22CS122',
        actions: {
            linkedin: 'https://www.linkedin.com/in/raghav-v-bhat-2993322a3 ',
        },
        category: 'technical-team'
    },

    // AI ML Team

    {
        name: 'Achyuth S',
        role: 'Lead',
        image: 'Photos/Achyuth_S.jpg',
        description: '1RR21CS002',
        actions: {
            linkedin: 'https://www.linkedin.com/in/achyuth-s-8b733924a/',
        },
        category: 'ai-ml-team'
    },
    {
        name: 'Tejas Pavan B',
        role: 'Associate',
        image: 'Photos/Tejas-Pavan.jpg',
        description: '1RR23CS161',
        actions: {
            linkedin: 'https://www.linkedin.com/in/tejas-pavan-5a4521275/ ',
        },
        category: 'ai-ml-team'
    },
    {
        name: 'Anshika Aarya',
        role: 'Associate',
        image: 'Photos/Anshika-Aarya.jpg',
        description: '1RR23CS013',
        actions: {
            linkedin: 'https://www.linkedin.com/in/a-aarya02/ ',
        },
        category: 'ai-ml-team'
    },

    // Content and Media Team

    {
        name: 'Ashwin S',
        role: 'Lead',
        image: 'Photos/Nigga.jpg',
        description: '1RR21CS016',
        actions: {
            linkedin: 'https://www.linkedin.com/in/ashwin-s-b6664830a ',
        },
        category: 'content-media-team'
    },
    {
        name: 'Rajath K N',
        role: 'Associate',
        image: 'Photos/Rajath.jpg',
        description: '1RR22CS125',
        actions: {
            linkedin: 'https://www.linkedin.com/in/rajath-k-n-740001254',
        },
        category: 'content-media-team'
    },
    {
        name: 'Chinmayi VG',
        role: 'Associate',
        image: 'Photos/Chinmayi.jpg',
        description: '1RR23CS027',
        actions: {
            linkedin: 'https://www.linkedin.com/in/chinmayi-vg-8525b9335 ',
        },
        category: 'content-media-team'
    },
    {
        name: 'B L Vaishnavi',
        role: 'Associate',
        image: 'Photos/Vaishnavi.jpg',
        description: '1RR23CS022',
        actions: {
            linkedin: 'https://www.linkedin.com/in/vaishnavi-bl-3305b8335 ',
        },
        category: 'content-media-team'
    },

    // Marketing Team

    {
        name: 'Harshitha H Rao',
        role: 'Lead',
        image: 'Photos/Rao.jpg',
        description: '1RR21CS063',
        actions: {
            linkedin: 'https://www.linkedin.com/in/harshitha-rao-492902248/',
        },
        category: 'marketing-team'
    },
    {
        name: 'Ankitha S',
        role: 'Associate',
        image: 'Photos/Ankitha.jpg',
        description: '1RR21CS012',
        actions: {
            linkedin: 'https://www.linkedin.com/in/ankitha-s-143299329 ',
        },
        category: 'marketing-team'
    },
    {
        name: 'Thanushree M',
        role: 'Associate',
        image: 'Photos/Thanushree.jpg',
        description: '1RR22CS170',
        actions: {
            linkedin: 'https://www.linkedin.com/in/thanushree-m-733a49306 ',
        },
        category: 'marketing-team'
    },

    // Design Team

    {
        name: 'Prathiksha M',
        role: 'Lead',
        image: 'Photos/Prathiksha.webp',
        description: '1RR22CS114',
        actions: {
            linkedin: 'https://www.linkedin.com/in/prathiksha-m-524230259 ',
        },
        category: 'design-team'
    },
    {
        name: 'Harshitha A D',
        role: 'Associate',
        image: 'Photos/AD.jpg',
        description: '1RR21CS059',
        actions: {
            linkedin: 'https://www.linkedin.com/in/harshitha-ad-57274b262 ',
        },
        category: 'design-team'
    },
    {
        name: 'Bhavana H R',
        role: 'Associate',
        image: 'Photos/Bhavana.jpg',
        description: '1RR21CS027',
        actions: {
            linkedin: 'https://www.linkedin.com/in/bhavana-hr-99b31b332/',
        },
        category: 'design-team'
    },

    // Cybersecurity Team

    {
        name: 'Mehak Siddique',
        role: 'Lead',
        image: 'Photos/mehak.jpg',
        description: '1RR22CS093',
        actions: {
            linkedin: 'https://www.linkedin.com/in/mehak-siddique-051a38271',
        },
        category: 'cybersecurity-team'
    },
    {
        name: 'Kavana Raj',
        role: 'Associate',
        image: 'Photos/Kavana.jpg',
        description: '1RR23CS056',
        actions: {
            linkedin: 'https://www.linkedin.com/in/kavana-raj-899a32336',
        },
        category: 'cybersecurity-team'
    },
    {
        name: 'Md Arshad',
        role: 'Associate',
        image: 'Photos/Arshad.jpg',
        description: '1RR22CS091',
        actions: {
            linkedin: 'https://www.linkedin.com/in/md-arshad-5a005431a',
        },
        category: 'cybersecurity-team'
    },

    // Logistics Team

    {
        name: 'Vidyashree M',
        role: 'Lead',
        image: 'Photos/vidya.jpg',
        description: '1RR22CS184',
        actions: {
            linkedin: 'https://www.linkedin.com/in/vidyashree-m-756469337 ',
        },
        category: 'logistics-team'
    },
    {
        name: 'Sharvari U',
        role: 'Associate',
        image: 'Photos/Sharvari.jpeg',
        description: '1RR23CS141',
        actions: {
            linkedin: 'http://www.linkedin.com/in/sharvari-u-a1115824b ',
        },
        category: 'logistics-team'
    },
    {
        name: 'Vishwas S K',
        role: 'Associate',
        image: 'Photos/Vishwas S K.jpg',
        description: '1RR23CS183',
        actions: {
            linkedin: 'https://www.linkedin.com/in/vishwas-s-k-128378315 ',
        },
        category: 'logistics-team'
    },

    // Sponsorship Team

    {
        name: 'Souhana H',
        role: 'Lead',
        image: 'Photos/Souhana.jpg',
        description: '1RR21CS160',
        actions: {
            linkedin: 'https://www.linkedin.com/in/souhana-h-920180305 ',
        },
        category: 'sponsorship-team'
    },
    {
        name: 'Kavan Sudev',
        role: 'Associate',
        image: 'Photos/Kavan.jpg',
        description: '1RR23CS055',
        actions: {
            linkedin: 'https://www.linkedin.com/in/kavan-sudev-67522a257 ',
        },
        category: 'sponsorship-team'
    },
    {
        name: 'Sanjana K J',
        role: 'Associate',
        image: 'Photos/Sanjana.jpg',
        description: '1RR22CS138',
        actions: {
            linkedin: 'https://www.linkedin.com/in/sanjana-kj-87729732b',
        },
        category: 'sponsorship-team'
    },
];

// Function to load members
function loadMembers(category) {
    const container = document.getElementById(category + '-container');
    container.innerHTML = ''; // Clear the container before loading members

    // Loop to display all members in the category
    for (let i = 0; i < teamMembers.length; i++) {
        const member = teamMembers[i];

        if (member.category === category) {
            // Create the team member card
            const memberCard = document.createElement('div');
            memberCard.classList.add('team-member');

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <span class="badge">${member.role}</span>
                <p>${member.description}</p>
                <div class="action-icons">
                    <a href="${member.actions.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            `;

            // Append the member card to the container
            container.appendChild(memberCard);
        }
    }
}

// Function to toggle the visibility of a team category
function toggleTeam(containerId) {
    const container = document.getElementById(containerId);
    container.classList.toggle('active');

    // Load members for the toggled category
    loadMembers(containerId.split('-')[0]);
}

// Load the initial set of members when the page loads
window.onload = function() {
    loadMembers('faculty-coordinators');
    loadMembers('core');
    // loadMembers('lead');
    // loadMembers('co-lead');
    // loadMembers('treasurer');
    loadMembers('technical-team');
    loadMembers('ai-ml-team');
    loadMembers('content-media-team');
    loadMembers('marketing-team');
    loadMembers('design-team');
    loadMembers('cybersecurity-team');
    loadMembers('logistics-team');
    loadMembers('sponsorship-team');
};
