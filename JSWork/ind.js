// var a = 12;
// if(a > 10){
//     let b = 23;
//     a = 40;
//     console.log("b = " + b);
// }
// console.log("Hi, a = "+a);

// function fun(a,b,c){
//     console.log("hello");
//     return a + b + c;
// }
// let data = fun(23,45);
// console.log(data);

// function cCompiler(){
//     return "C Compiler"
// }

// function javaCompiler(){
//     return "Java Compiler"
// }

// function selectLanguage(clbk){
//     return "You have selected:" + clbk();
// }
// const result = selectLanguage(cCompiler);
// console.log(result);


// function selectLanguage(language="no compiler selected"){
//     let data = language;

//     if(language == 'C'){
//         function cCompiler(){
//             return "C Compiler"
//         }
//         data = cCompiler();
//     }

//     if(language == 'Java'){
//         function javaCompiler(){
//             return "Java Compiler"
//         }
//         data = javaCompiler();
//     }
//     return data;
// }
// const result = selectLanguage("java");
// console.log(result);

// const div = document.getElementsByClassName("parent");
// console.log(div);
// div[0].innerHTML = "<h2 style = color:red>Hello World</h2>";
// const h1 = document.createElement("h1");
// h1.innerText="This is generated by DOM";
// h1.style.backgroundColor='cyan';
// console.log(h1);
// div[0].appendChild(h1);
// const image = document.createElement('img');
// image.src='./image.jpg';
// image.setAttribute("height", 200);
// console.log(image);
// div[0].appendChild(image);

// const btn = document.getElementById("btn");
// const disp = document.getElementById("disp");
// console.dir(disp);
// function getData(){
//     console.log("Get data Called");
//     disp.innerHTML = "<h2>Hello, You have called getData</h2>";    
// }
// BigInt.addEventListener("click", getData);

const promise = new Promise((resolve, reject) => {
    let a = 12;
    if(a > 10){
        resolve({name : "Rahul", branch : "AIMLCSE"});
    }
    else{
        reject("Rejected");
    }
});

promise.then((msg) => console.log(msg.name)).catch(msg => console.log(msg));