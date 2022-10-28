// NESTING WITH DATA STRUCTURES

// Array Nesting
const pixarMovies = [
    [`Inside Out`, `Cars`],
    [`Monsters Inc`, `Toy Story 2`],
    [
        [`Up`, `Lightyear`],
        `Finding Nemo`
    ]
];

// console.log(pixarMovies);

// Example 1
console.log(pixarMovies[0]); // [ 'Inside Out', 'Cars' ]
console.log(pixarMovies[0][1]); // Cars

// Example 2
console.log(pixarMovies[1][0]); // Monsters Inc

// Example 3
console.log(pixarMovies[2][0][1]); //Lightyear
console.log(pixarMovies[2][1]); // Finding Nemo

// Object Nesting
const toyStory = {
    main: {
        buzzLightyear: `Tim Allen/Chris Evans`,
        sheriffWoody: `Tom Hanks`
    },
    other: {
        rex: `Wallace Shawn`,
        mrPotatoHead: `Don Rickles`,
        slinkyDog: `Jim Varney`
    }
};

// Example 1 (Using Square Brackets)
console.log(toyStory[`main`][`buzzLightyear`]); // Tim Allen/Chris Evans

// Example 2 (Using Dot)
console.log(toyStory.main.sheriffWoody); // Tom Hanks
console.log(toyStory.main);
console.log(toyStory);

// Example 3
console.log(toyStory.other.slinkyDog); // Jim Varney

// Mix of Array and Object Nesting
// Example of an Array nested inside an Object
const monstersInc = {
    main: [
        `Mike Wazowski`,
        `James P Sullivan`
    ],
    other: [
        `Boo`,
        `Randal`,
        `Waternoose`,
        `Roz`
    ]
};

// Example 1 (Using Square Brackets)
console.log(monstersInc[`main`][0]); // Mike Wazowski

// Example (Using a Dot)
console.log(monstersInc.other[3]); // Roz

// Example of an Object nested inside an Array
const findingMovies = [
    {
        title: `Finding Nemo`,
        yearReleased: 2003
    },
    {
        title: `Finding Dory`,
        yearReleased: 2016
    }
];

// Example using Square Brackets
console.log(findingMovies[0][`title`]); // Finding Nemo

// Example using a Dot
console.log(findingMovies[1].yearReleased); // 2016