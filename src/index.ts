// 請介紹兩個字串方法跟數字方法

/*toUpperCase 將調用該方法的字符串值轉換為大寫形式，並返回。
  toUpperCase 方法不影響字符串本身的值。*/
//字串1
console.log("alphabet".toUpperCase()); // "ALPHABET"



/*endsWith()方法用來判斷當前字符串是否是以另外一個給定的子字符串“結尾”的
  根據判斷結果返回true或false。*/
//字串2
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best', 17));

const str2 = 'Is this a question';
console.log(str2.endsWith('?'));



//Number.isInteger() 方法用來判斷給定的參數是否為整數。
//數字1
function fits(x: number, y: number) {
    if (Number.isInteger(y / x)) {
        return 'Fits!';
    }
    return 'Does NOT fit!';
}
console.log(fits(5, 10));
// expected output: "Fits!"

console.log(fits(5, 11));
// expected output: "Does NOT fit!"



//Number.isNaN()方法確定傳遞的值是否為NaN和其類型是Number。它是原始的全局isNaN()的更強大的版本。
//數字2
function typeOfNaN(z: any) {
    if (Number.isNaN(z)) {
        return 'Number NaN';
    }
    if (isNaN(z)) {
        return 'NaN';
    }
}
console.log(typeOfNaN('100F'));
// expected output: "NaN"

console.log(typeOfNaN(NaN));
// expected output: "Number NaN"



// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > limit) {
    console.log("叫乾爹");
} else {
    console.log("繼續加油");
}
