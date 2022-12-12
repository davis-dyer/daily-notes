/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [];


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
const notesAdd1 = {
    id: 001,
    text: 'a bridge too far',
    author: 'Tom Collins',
    date: '11/13/1945',
    topics: ['mystery', 'thriller', 'suspense']
}

notes.push(notesAdd1);

//Adding 3 more objects to the notes array using the .push() method on the notes array
const notesAdd2 = {
    id: 002,
    text: 'where we at?',
    author: 'Rachel Dratch',
    date: '06/25/2005',
    topics: ['commedy', 'romance']
}

const notesAdd3 = {
    id: 003,
    text: 'go your home way',
    author: 'Nicki Stix',
    date: '04/21/1977',
    topics: ['music', 'violent', 'tender']
}

const notesAdd4 = {
    id: 004,
    text: 'I put a smell on you',
    author: 'Pina Ramone',
    date: '12/09/1984',
    topics: ['sci-fi', 'suspense']
}

notes.push(notesAdd2);
notes.push(notesAdd3);
notes.push(notesAdd4);

//console.log(notes);

//List all the notes's text in the terminal
/* for (const note of notes) {
    console.log(note.text);
}; */

//List all the topics that have been used to describe the notes.
/* console.log('*** All Note Topics ***')
for (let note of notes) {
    for (let topic of note.topics) {
        console.log(topic);
    }
} */


/* //Add information where you can see average # of topics by author
console.log('*** Average Topics Per Note ***')
//const avgNumOfTopics = (author) => {
let totalTopics = 0;
for (let note of notes) {
    totalTopics += note.topics.length;
};
//console.log(totalTopics)

avgTopics = totalTopics / notes.length;

console.log(avgTopics); */

//---------- List of Notes by Topic ------------
// Example
/* [
    {
        id: 1,
        topics: [ "strategy", "professional", "help" ],
        text: "Review all my old code before asking for help or looking at hints.",
        author: "Samantha Maas",
        date: "2020-11-09"
    },
    {
        id: 2,
        topics: [ "thinking", "help" ],
        text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
        author: "Gib Jeffries",
        date: "2021-01-18"
    },
    {
        id: 3,
        topics: [ "reminder", "github" ],
        text: "Need to have all my code backed up to Github by the end of the week.",
        author: "Rebecca Parker",
        date: "2021-02-25"
    },
    {
        id: 4,
        topics: [ "strategy", "github" ],
        text: "Always work on a branch and submit a PR, even if I'm working on my own project.",
        author: "Red Tilson",
        date: "2020-11-25"
    }
] */

//Creating an array of notes based on a topic

//#1 Create your empty array that will be iterated to & variable you want to filter on
const filteredNotes = [];
const criteria = 'suspense'

//#2 Iterate through the original array to get the topics. Iterate through the topics array and check the conditional topic you need
/* for (let note of notes) {
    for (let topic of note.topics) {
        if (topic === criteria) {
            filteredNotes.push(note);
        }
    }
}

console.log(filteredNotes) */

// -------- Note Articles --------
/* console.log('*** Note Articles ***')
for (let note of notes) {
    console.log(`<article>${note.text}</article>`)
} */

// --------- Note Topic Sections ---------- //
/* console.log('*** Note Articles ***')
for (let note of notes) {
    for (let topic of note.topics) {
        console.log(`
        <article>
            ${note.text}
            <section>${topic}</section>
        </article>`)
    }       
} */

