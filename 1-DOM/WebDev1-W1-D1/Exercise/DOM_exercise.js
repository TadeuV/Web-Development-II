/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const doct = document.querySelector("p");
const doc = document.querySelector('p').innerText.split(' ');
// console.log(doc);

console.log(doc.length);



const newa = doc.map(word => {
  if(word.length > 8){
    return "<span style='background-color:yellow'>"+word+"</span>"
  }
  return word
}).join(' ')


// console.log(newa);
doct.innerHTML=newa


/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const link = document.createElement("a")
link.href="http://officeipsum.com/"
link.innerText="This is a link"
document.body.appendChild(link)

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

doct.innerHTML = doct.innerHTML.split(".").join("</p><p>")


/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const h = document.getElementsByTagName("h1")


const test=doct.innerText.split(" ")

const numb = document.createElement("div")
const man = test.length
numb.innerText=man
document.body.insertBefore(numb,doct)


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

doct.innerText = doct.innerText.replaceAll("?","🤔").replaceAll("!","😲")

