// NESTING WITH DATA STRUCTURES REVIEW

// Array Nesting
const halloweenMovies = [
    [`Hocus Pocus`, `Halloweentown`],
    [`Chucky`, `Friday the 13th`],
    [
        [`The Witch`, `Scooby Doo and the Witch's Ghost`],
        `Halloween`
    ]
];

// Each time you add an additional index, it moves in from the previous index. (Ex: [0][1] will first move into the array item at the 0 index, then within the 0 index, [1] will identify what the 1 index is)

// Example 1
console.log(halloweenMovies[0]); // [ 'Hocus Pocus', 'Halloweentown' ]
console.log(halloweenMovies[0][1]); //Halloweentown

// Example 2
console.log(halloweenMovies[1][0]); //Chucky

// Example 3
console.log(halloweenMovies[2][0][1]); // Scooby Doo and the Witch's Ghost
console.log(halloweenMovies[2][1]); //Halloween

// Object Nesting
const sciFiFantasyWeapons = {
    starWars: {
        obiWan: `Lightsaber`,
        hanSolo: `A Good Blaster`
    },
    lotr: {
        aragorn: `A Big Sword`,
        legolas: `Bow`,
        gimli: `And my axe`
    }
};

// Example 1 (Using Square Brackets)
console.log(sciFiFantasyWeapons[`starWars`][`obiWan`]); //Lightsaber

// Example 2 (Using Dot)
console.log(sciFiFantasyWeapons.lotr.gimli); // And my axe

// Mix of Array and Object Nesting
// Example of an Array nested inside an Object
const sweeneyTodd = {
    main: [
        `Mr. Sweeney Todd`,
        `Mrs. Lovett`
    ],
    other: [
        `Adolfo Pirelli`,
        `Judge Turpin`,
        `Toby`,
        `Johanna`
    ]
};

// Example 1 (Using Square Brackets)
console.log(sweeneyTodd[`main`][0]); // Mr. Sweeney Todd

// Example 2 (Using a Dot)
console.log(sweeneyTodd.other[3]); //Johanna

// Example of an Object nested inside an Array
const hocusPocus = [
    {
        title: `Hocus Pocus`,
        yearReleased: 1993
    },
    {
        title: `Hocus Pocus 2`,
        yearReleased: 2022
    }
];

// Example using Square Brackets
console.log(hocusPocus[0][`title`]); // Hocus Pocus

// Example using a Dot
console.log(hocusPocus[1].yearReleased); // 2022