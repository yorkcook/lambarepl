array = ["Make Money", "Make More Money", "Be Happy", "Be The Happiest"];

// function longestString(arr) {
//   let start = 0
//   let longest
//   for(let i = 0; i < arr.length; i++)

//   if (arr[i].length > start){
//     start = arr[i].length
//     longest = arr[i]
//   }
//   return longest
// }

function longestString(arr) {
  let longestWord = arr.reduce(function (a, b) {
    return a.length >= b.length ? a : b;
  });

  return longestWord;
}

// function longestString(arr){

//   let longestWord = arr.sort((a,b)=>b.length-a.length)[0]

//   return longestWord
// }

longestString(array);
