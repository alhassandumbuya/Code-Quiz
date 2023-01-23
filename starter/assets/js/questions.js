var questionMode = document.querySelectorA("#questions");
var startQuiz = document.querySelector("#start");
console.log(questionMode);
//Call up the is win 
if (isWin = false) {
    ptag1()
    
}

//creating the questions useing appenchild elements
const ptag1 = document.createElement("p");
ptag1.textContent = "Where is the correct place to insert a JavaScript?";
questiontitle.appendChild(ptag1)


//Choices option 
//creating the div to keep the button options
const choice1 = document.createElement("div");
choice1.textContent = "Pick the correct anwser";
options.appendChild(choice1);

//options for question 1
const example1 = document.createElement('button');
   example1.innerText="The <Head> section";
const example2 = document.createElement('button');
   example2.innerText="The <body> section";
const example3 = document.createElement('button');
   example3.innerText="Both";

choice1.appendChild(example1);
choice1.appendChild(example2);
choice1.appendChild(example3);



/*
const ptag2 = document.createElement("p");
ptag2.textContent = "How do you write 'Hello World' in an alert box?";
questiontitle.appendChild(ptag2)

const ptag3 = document.createElement("p");
ptag3.textContent = "How do you create a function in JavaScript??";
questiontitle.appendChild(ptag3)

/*
var tag = document.createElement(tagName);
tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  document.body.appendChild(tag);


//Choices option 
//creating the div to keep the button options
const choice1 = document.createElement("div");
choice1.textContent = "Pick the correct anwser";
options.appendChild(choice1);

//options for question 1
const example1 = document.createElement('button');
   example1.innerText="The <Head> section";
const example2 = document.createElement('button');
   example2.innerText="The <body> section";
const example3 = document.createElement('button');
   example3.innerText="Both";

choice1.appendChild(example1);
choice1.appendChild(example2);
choice1.appendChild(example3);


//creating the div to keep the button options 2
const alertAnswers = document.createElement("div");
alertAnswers.textContent = "Pick the correct anwser";
options.appendChild(alertAnswers);

//options for question 2
const sample1 = document.createElement('button');
   sample1.innerText="alertbox('hello world');";
const sample2 = document.createElement('button');
   sample2.innerText="alert('hello world');";
const sample3 = document.createElement('button');
   sample3.innerText="None of the above";

   alertAnswers.appendChild(sample1);
   alertAnswers.appendChild(sample2);
   alertAnswers.appendChild(sample3);


   //options for question 3

   //creating the div to keep the button options 2
const functionAnswers = document.createElement("div");
functionAnswers.textContent = "Pick the correct anwser";
options.appendChild(functionAnswers);

//options for question 3
const functionChoice1 = document.createElement('button');
   sample1.innerText="function name(params)";
const functionChoice2 = document.createElement('button');
   sample2.innerText="function = name()";
const functionChoice3 = document.createElement('button');
   sample3.innerText="Both";

   functionAnswers.appendChild(sample1);
   functionAnswers.appendChild(sample2);
   functionAnswers.appendChild(sample3);


function name(params) {
    
}
*/