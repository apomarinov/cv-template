
let data = {
    // theme
    theme: {
        ...themes.default,
        colors: colors.default
    },

    // data
    name: "Thomas Coderson",
    position: "FullStack Mouse Operator",

    // contacts optional
    location: "Bulgaria",
    phone: "+359 88 069 420",
    email: {
        to: "thomas@tnj.com",
        subject: "Pest inquiry",
    },
    linkedin: "thomas-coderson",
    github: "thomas",

    // optional (or is it?)
    education: "Masters in Computer Science at MIT",

    // optional
    languages: [
        {name: "English"},
        {name: "Chinese", percent: 35}
    ],

    aboutMe: "My background in creative problem-solving and designing traps on the fly shows my resourcefulness and mechanical skills. While I didn’t always catch Jerry, each attempt taught me persistence and the value of learning from failure. I’m ready to bring that same dedication to engineering challenges!",
    skillsPadding: "8rem",
    techSkills: [
        {
            title: "Languages",
            list: [
                "JavaScript",
                "TypeScript",
                "PHP",
                "Golang",
                "Ruby"
            ]
        },
        {
            title: "Trap Design",
            list: [
                "Springs",
                "Nets",
                "Cages",
                "Pulleys"
            ]
        },
        {
            title: "Problem Solving",
            list: [
                "Creativity",
                "Adaptability",
                "Quick decisions",
                "Iteration"
            ]
        },
        {
            title: "Tools",
            list: [
                "Hammers",
                "Saws",
                "Anvils",
                "Fireworks"
            ]
        },
    ],

    // optional
    softSkills: [
        "Persistence",
        "Problem-Solving",
        "Adaptability"
    ],

    experience: [
        {
            position: "Lead Strategist",
            company: {
                name: "Feline Tactical Solutions",
                location: "Anywhere Jerry Goes",
                // optional
                url: "https://google.com"
            },
            duration: "1945 - Present",
            bulletPoints: [
                "Developed strategic plans to outsmart targets",
                "Managed multiple projects simultaneously under pressure",
                "Worked closely with fellow animals to collaborate on joint operations"
            ],
            // optional
            description:
                "As Lead Strategist, my responsibilities have included crafting long-term plans to achieve operational goals, particularly focusing on capturing high-profile targets. This role required quick thinking, teamwork with various species, and effective project management, all while maintaining a calm demeanor despite high-pressure scenarios."
        },
        {
            position: "Trap Design Specialist",
            company: {
                name: "Self-Employed",
                location: "Various Locations"
            },
            duration: "1940 - Present",
            bulletPoints: [
                "Designed and built complex traps for catching high-speed targets",
                "Adapted plans quickly based on target's behavior and environment",
                "Experimented with various materials and designs for optimal outcomes"
            ],
        },
        {
            position: "Chief Cat",
            company: {
                name: "Household Security Services",
                location: "Owner's Residence"
            },
            duration: "1940 - Present",
            bulletPoints: [
                "Protected property from unauthorized mouse activities",
                "Collaborated with other household pets to maintain peace",
                "Regularly assessed security vulnerabilities and adjusted strategies"
            ],
            description:
                "In this role, I have taken full responsibility for household security, ensuring the property is safe from unwelcome mouse activities. As the Chief Cat, I have consistently adapted strategies to handle recurring issues and worked alongside other household pets to maintain harmony and efficiency."
        }
    ]
};
data.theme.waves = data.theme.waves && data.theme.waves > 0 ? Array.from({length: data.theme.waves}, (_, i) => i) : [];
if (data.phone) {
    data.tel = data.phone.replaceAll(' ', '');
}
