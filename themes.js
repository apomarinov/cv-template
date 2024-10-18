const colors = {
    default: [
        '#bfbfbf',
        '#838383',
        '#575757',
        '#464646',
        '#393939',
        '#282828'
    ],
    mutedBlue: [
        '#91aec4', // Darker Light Blue
        '#728ea5', // Darker Muted Blue
        '#5a7287', // Darker Blue
        '#475b6f', // Even Darker Blue
        '#3a495b', // Very Dark Blue
        '#2f3a4a'  // Darkest Blue
    ],
    mutedRed: [
        '#c78d8d', // Darker Light Red
        '#a76b6b', // Darker Muted Red
        '#8a4f4f', // Darker Red
        '#703e3e', // Even Darker Red
        '#593333', // Very Dark Red
        '#472828'  // Darkest Red
    ],
    mutedGreen: [
        '#a3c3a3', // Darker Light Green
        '#83a383', // Darker Muted Green
        '#687e68', // Darker Green
        '#546754', // Even Darker Green
        '#455645', // Very Dark Green
        '#384438'  // Darkest Green
    ],
    mutedPurple: [
        '#a992c0', // Darker Light Purple
        '#8b739e', // Darker Muted Purple
        '#715a7f', // Darker Purple
        '#5b4866', // Even Darker Purple
        '#4a3a52', // Very Dark Purple
        '#3b2e40'  // Darkest Purple
    ],
    mutedOrange: [
        '#c79a7e', // Darker Light Orange
        '#a3795f', // Darker Muted Orange
        '#86604a', // Darker Orange
        '#6b4d3b', // Even Darker Orange
        '#554034', // Very Dark Orange
        '#45332a'  // Darkest Orange
    ],
    mutedYellow: [
        '#c6bf7e', // Darker Light Yellow
        '#a39d64', // Darker Muted Yellow
        '#877f50', // Darker Yellow
        '#6c6640', // Even Darker Yellow
        '#555236', // Very Dark Yellow
        '#45422d'  // Darkest Yellow
    ],
    mutedTeal: [
        '#99c1b0', // Darker Light Teal
        '#7da394', // Darker Muted Teal
        '#618578', // Darker Teal
        '#4e6b62', // Even Darker Teal
        '#405953', // Very Dark Teal
        '#334742'  // Darkest Teal
    ],
    mutedPink: [
        '#c28ea3', // Darker Light Pink
        '#a06f85', // Darker Muted Pink
        '#81596b', // Darker Pink
        '#674555', // Even Darker Pink
        '#523847', // Very Dark Pink
        '#41303b'  // Darkest Pink
    ],
    mutedBrown: [
        '#b9a488', // Darker Light Brown
        '#98816a', // Darker Muted Brown
        '#7b6853', // Darker Brown
        '#645346', // Even Darker Brown
        '#51433b', // Very Dark Brown
        '#403632'  // Darkest Brown
    ],
};
const themes = {
    default: {
        // 1 - 3 | undefined
        waves: 3,
        photoCircle: true,

        // gradient or solid
        headerGradient: [
            "#ee7752",
            "#e73c7e",
            "#23a6d5",
            "#23d5ab"
        ],

        // optional
        sideChevron: {
            animateSm: true,
        },
    },
    base: {},
    minimal: {
        waves: 3,
        // headerSolidColor: "#644b4b",
    },
}
