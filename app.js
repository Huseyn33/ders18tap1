let user1= +prompt("birinci ededi daxil edin")
let user2= +prompt("ikinci ededi daxil edin")
let user3= +prompt("ucuncu ededi daxil edin")
if (user1>user2&&user1>user3) {
    console.log("user1 daha boyukdur");
    
} else if(user2>user1&&user2>user3) {
    console.log("user2 daha boyukdur");
    
}
else{
    console.log("user3 daha boyukdur")
}