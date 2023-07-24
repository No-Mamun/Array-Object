
// Destructuring assignment Array, Object

/*
Node:1
let user = ["John",

              "Mamun",
              "Babu",
              "Moyna",
              "Kamal",
              "Benjer",
              "Sumon",
              ];

[u1,u2,u3,u4,u5,u6,u7] = user;

console.log(u5);

*/

/*
Node:2.Object;

let user = {

              id:1,
              name:"Mamun",
              age:40,
              email:"mamun@gmail",
              hobby:"Flying in the sky"
};

let {id ,name,age,email,hobby} = user;

console.log(hobby);

*/

/*
Node:3.Object;

let user = {

              id:1,
              name:"Mamun",
              age:40,
              email:"mamun@gmail",
              hobby:"Flying in the sky"
};

let auth = { password: "abcd123", phon:123562155}

let add ={auth,...user}

console.log(add)

*/

/*
Node:4,Function;

function jogkoro(...y){

let total = 0;

y.forEach((value) =>{
                            total += value;
})

console.log(total)

}

jogkoro(10,50,440);

*/
