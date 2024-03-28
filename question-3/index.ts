// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.

//Solution:-
let str="JavaScript is a high-level, interpreted programming language primarily used for client-side web development. JavaScript allows for dynamic content manipulation, interactive features, and asynchronous communication with servers. JavaScript is also increasingly utilized for server-side development (Node.js) and mobile app development (React Native)."

    function replaceString(str){
        return str.replace("JavaScript","TypeScript")
}
console.log("\n");

console.log(replaceString(str));

//Author-"HUMA MOHSIN"