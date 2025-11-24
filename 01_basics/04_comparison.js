console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); // string ko number 2 min badal diya jayega 2, 1 se bada hai
console.log("02" > 1); // 2, 0 se bada nahi hota shuru ke zero ignore ho jata hai

console.log("2" > true) // js dono ko number mein convert kr dega "2" ko 2 aur true 1 hota 2 > 1
console.log("2" > false); // "2" ko 2 aur false 0 hota hai


console.log(null > 0); // relational operator 0, 0 se bada nahi hota
console.log(null == 0); // loose equality opetator null aur 0 alag values hai null sirf undefined ke barabar hota hai
console.log(null >= 0); // relational operator so 0, 0 ke barabar hota hai

console.log("2" === 2); // value & type not same