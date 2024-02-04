// singleton 

// object literals
// object literals

const mySym = symbol ("key1")
const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",
    [mySym]:"myKey1",
    age : 18,
    location :"Jaipur",
    email :"hitesh@google.com",
    isLoggesIn :false,
    lastLoginDays : ["Monday","Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name "]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@gamil.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
