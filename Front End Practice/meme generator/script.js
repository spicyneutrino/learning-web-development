// const btn= document.querySelector('#btn-1');

// function addParagraph(){
//     const randomNum = Math.floor(Math.random()*100);
//     const pContent = 'The random number is: ' + randomNum;
//     console.log(pContent);
//     const newElem = document.createElement('p');
//     newElem.textContent = pContent;
//     document.body.appendChild(newElem);
// }

// btn.addEventListener('click',addParagraph);

//buttons
const showMemeBtn = document.querySelector('.show-meme');
const showJokeBtn = document.querySelector('.show-joke');
const showQuoteBtn = document.querySelector('.show-quote');
const showRiddleBtn = document.querySelector('.show-riddle');
const riddleAnswerBtn = document.querySelector('#riddle-answer');
//hiding the riddle answer button
riddleAnswerBtn.style.display ='none';

//
let riddleAnswer ='';

//content change area
let contentArea = document.querySelector('#output-text');

// lists
let memeList = ["images/meme1.png","images/meme2.png","images/meme3.png","images/meme4.png","images/meme5.png",];
let jokeList = [
    `What’s the best thing about Switzerland?

    I don’t know, but the flag is a big plus.`,


    `I invented a new word!

    Plagiarism!`,


    `Did you hear about the mathematician who’s afraid of negative numbers?

    He’ll stop at nothing to avoid them.`,


    `Helvetica and Times New Roman walk into a bar.

    “Get out of here!” shouts the bartender. “We don’t serve your type.”`,


    `Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?”

    Once my dog ate all the Scrabble tiles. For days he kept leaving little messages around the house. Don’t miss these hilarious egg puns that will absolutely crack you up.`,


    `Knock! Knock!

    Who’s there?
    Control Freak.
    Con…
    OK, now you say, “Control Freak who?” `,


    `Hear about the new restaurant called Karma?

    There’s no menu: You get what you deserve.`,


    `A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”

    “Don’t worry,” said the doc. “Those are just contractions.”`,
    

    `A bear walks into a bar and says, “Give me a whiskey and … cola.”

    “Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.”`,

    `Did you hear about the claustrophobic astronaut?

    He just needed a little space.`

];
let quoteList = [
    `“Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it.” ― Andy Rooney`,

    `“Always remember, your focus determines your reality.” ― George Lucas`,

    `“Inspiration usually comes during work, rather than before it.” ― Madeleine L'Engle, The Summer of the Great-Grandmother`,

    `“Inspiration is a guest that does not willingly visit the lazy.” ― Tchaikovsky`,

    `“Women belong in all places where decisions are being made.” ― Ruth Bader Ginsburg`,

    `“I don't think of all the misery, but of the beauty that still remains.” ― Anne Frank, The Diary of a Young Girl`,

    `“One child, one teacher, one book, one pen can change the world.” ― Malala Yousafzai`,

    `“It is hard to fail, but it is worse never to have tried to succeed.” ― Theodore Roosevelt`,

    ` “When someone tells me "no," it doesn't mean I can't do it, it simply means I can't do it with them.” ― Karen E. Quinones Miller`,

    `“Always remember, your focus determines your reality.” ― George Lucas`,

    `“Be yourself; everyone else is already taken.” ― Oscar Wilde`,

    `“Have no fear of perfection - you'll never reach it.” ― Salvador Dali`
];
let riddleList = [
    {riddle:'What has to be broken before you can use it?',
    answer:'An egg'},
    {riddle:'I’m tall when I’m young, and I’m short when I’m old. What am I?',
    answer:'A candle'},
    {riddle:' What month of the year has 28 days?',answer:'All of them'},
    {riddle:' What is full of holes but still holds water?',answer:'A sponge'},
    {riddle:'What question can you never answer yes to?',answer:'Are you asleep yet?'},
    {riddle:'What is always in front of you but can’t be seen?',answer:'The future'},
    {riddle:'There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?',answer:'There aren’t any—it’s a one-story house.'},
    {riddle:'What can you break, even if you never pick it up or touch it?',answer:' A promise'},
    {riddle:'What goes up but never comes down?',answer:'Your age'},
    {riddle:'A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?',answer:'He was bald.'},
    {riddle:'What gets wet while drying?',answer:' A towel'},
    {riddle:'What can you keep after giving to someone?',answer:'Your word'},
    {riddle:'I shave every day, but my beard stays the same. What am I?',answer:'A barber'},
    {riddle:'You see a boat filled with people, yet there isn’t a single person on board. How is that possible?',answer:'All the people on the boat are married.'},
    {riddle:'You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?',answer:'The match'}
];


//functions
function randomElement(list){
    return list[Math.floor(Math.random()*list.length)];
}

function showMeme(){
    riddleAnswerBtn.style.display ='none';
    let randomMeme = randomElement(memeList);
    let newElement = document.createElement('img');
    newElement.setAttribute('src',randomMeme);
    newElement.setAttribute('alt','This image is a meme.')
    newElement.setAttribute('height','400px');
    if (contentArea.children.length>=1){
        contentArea.replaceChildren(newElement);
    }
    contentArea.appendChild(newElement);
}
let showJoke = ()=>{
    riddleAnswerBtn.style.display ='none';
    let randomJoke = randomElement(jokeList);
    let newElement= document.createElement('p');
    newElement.textContent= randomJoke;

    if (contentArea.children.length>=1){
        contentArea.replaceChildren(newElement);
    }
    contentArea.appendChild(newElement);
}
let showQuote = ()=>{
    riddleAnswerBtn.style.display ='none';
    let randomQuote = randomElement(quoteList);
    let newElement= document.createElement('p');
    newElement.textContent= randomQuote;

    if (contentArea.children.length>=1){
        contentArea.replaceChildren(newElement);
    }
    contentArea.appendChild(newElement);
};
let showRiddle = ()=>{
    riddleAnswerBtn.style.display ='inline';
    let randomRiddle = randomElement(riddleList);
    let riddle = randomRiddle['riddle'];
    riddleAnswer = randomRiddle['answer'];

    let newElement= document.createElement('p');
    newElement.textContent= riddle;

    if (contentArea.children.length>=1){
        contentArea.replaceChildren(newElement);
    }
    contentArea.appendChild(newElement);
    
}

let showRiddleAnswer =()=>{
    if (contentArea.children.length==1){
        let newElement= document.createElement('p');
    newElement.textContent= riddleAnswer;
    contentArea.appendChild(newElement);
    }
    riddleAnswerBtn.style.display ='none';
}

// assigning events to button
showMemeBtn.addEventListener('click', showMeme);
showJokeBtn.addEventListener('click', showJoke);
showQuoteBtn.addEventListener('click', showQuote);
showRiddleBtn.addEventListener('click', showRiddle);
riddleAnswerBtn.addEventListener('click', showRiddleAnswer);
