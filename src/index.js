// const name = "HIRO";
// const age = 28;

// // テンプレート文字列の中で変数を読み込む
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

/**
 * アロー関数
 */
// 従来の関数
// function func1(name, num){
//   const txt = `私の名前は${name}です。年齢は${num}です`
//   return txt;
// }

// const func1 = function (name, num) {
//   const txt = `私の名前は${name}です。年齢は${num}です`;
//   return txt;
// };

//アロー関数
// const func1 = (name, num) => {
//   const txt = `私の名前は${name}です。年齢は${num}です`;
//   return txt;
// };
// console.log(func1("hiro", 50));

//単一式は記号を省略できる
// const animal = (name) => name;
// console.log(animal("dog"));

// const func1 = (name, num) => `私の名前は${name}です。年齢は${num}です`;
// console.log(func1("hiro", 50));

/**
 * 分割代入　Destructuring assignment
 */
// const myProfile = {
//   name: "るん",
//   age: 30
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['るん', 38];
// const [name, age] = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("あすか");

/**
 * スプレッド構文...
 */
// 配列の展開
// const arr1 = [1, 2, 3];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
// sumFunc(arr1[0], arr1[1], arr1[2]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

/**
 *  mapやfilterを使った配列の処理
 */

const nameArr = ["鈴木", "国分寺", "神田"];

//  nameArr.map((name)=>{
//   console.log(name);
//  });

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}さんです`));

//  const nameArr2 = nameArr.map(name => `${name}さん`);
//  console.log(nameArr2);

// const numArr = [1,2,3,4,5];

// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "鈴木") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
