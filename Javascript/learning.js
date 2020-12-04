/** 

console.log('FUCK YOU BITCHES I DON ARRIVE');
console.warn('this is an error')

const name = 'Emma'
const age = '25'

const p = 'dad, mum sis, bro'

console.log(p.split(''));


alert('THis is a virus attack')


const Me = {

    Name: 'John',
    lastName: 'Doe',
    State: 'Imo',
    Age: 30,
    Address: 'Precious Lodge Aluu',
    Ismale: true,
    Hobbies: new Array('Eating', 'Sleeping', 'Pawning'),

}

console.log(Me.Hobbies[1]);


const todos = [
    {
        id: 1,
        text: 'Do your asssignment',
        isComplete: true,
    },
    {
        id: 2,
        text: 'collect your money',
        isComplete: true,
    },
    {
        id: 3,
        text: 'See the dentist',
        isComplete: true,
    }
];

console.log(todos[2].isComplete);

todos.forEach(function(todo) {
    console.log(todo.id);});

  //Map
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

//Filter
const todoComplete = todos.filter(function(todo) {
 return todo.isComplete === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoComplete);




/*8
for(let noh of note) {
    console.log(note.id);
}


for( let i = 0; i < note.lenght; i++) {
    console.log(note[i].text);
    }

//FOR LOOPS

for(let i = 0; i <= 10; i++) {
console.log(`For Loop Number: ${i}`);
}

//While Loop 
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}




const x = 4;

if(x == 10) {
    console.log(`x is 10`);
}else if(x > 10) {
    console.log(`x is greater than 10`);
}else{
    console.log(`x less than 10`)
}


const a = 6;
const b = 11;

if(a > 5 && b> 10) {
    console.log(`a is more than 5 or y is more than 10`);
}

const q = 0;

const color = q > 10 ? `red` : `blue`;

switch(color) {
    case `red`:
    console.log(`color is red`);
    break;
    case `blue`:
    console.log(`color is blue`);
    break;
    default:
    console.log(`color is NOT red or blue`);
                break;
}

**/

function Mina(name, age) {
    console.log("<h1>This is" + " "  + name+ "</h1>");
}

Mina("Emmanuel");
Mina("Hannah");
