// join built in method  //
// join built in method returns array as a string

// if i dont use any separator inside the join function then by defalut ["comma" - ","] will be added.
const reverseSentence = () => {
    let n: string = String(prompt("enter a sentence"));
    return console.log(n.split(" ").reverse().join()); // Hello,World
  };
  reverseSentence();


// if  i use " " separator inside the join function then space will be added.
const reverseSentence = () => {
    let n: string = String(prompt("enter a sentence"));
    return console.log(n.split(" ").reverse().join(" ")); //Hello World
  };
  reverseSentence(); 

// if i use "123" separator inside the join function then 123 will be added.
const reverseSentence = () => {
    let n: string = String(prompt("enter a sentence"));
    return console.log(n.split(" ").reverse().join("123")); // World123Hello
  };
  reverseSentence(); 

