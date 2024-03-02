const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// Using anonymous function expression:
numbers.forEach(function (num) {
  console.log(num * 2);
})

function printTriple(n) {
  console.log(n * 3);
}

// Using a pre-defined function:
numbers.forEach(printTriple);

// Using the index:
numbers.forEach(function (num, idx) {
  console.log(idx, num);
});



const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]

// Printing all book titles using forEach:
books.forEach(function (book) {
  console.log(book.title.toUpperCase())
})

// Printing all book titles using for...of:
for (let book of books) {
  console.log(book.title.toUpperCase())
}

// Printing all book titles using for loop:
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase())
}


////////////////////////////////////////////////////////////////////////////////////////////////


const numberss = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

//Map creates a new array by calling your callback function with each element in the original array.
const doubles = numberss.map(function (num) {
  return num * 2; //Need to return the value!
});
//[40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numberss.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
})

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split('').join('.');
})
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]


const bookss = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]

const titles = bookss.map(function (b) {
  return b.title;
})
//["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Non-arrow function expression:
// const square = function (x) {
//   return x * x;
// }

// Equivalent arrow function:
const squaree = (x) => {
  return x * x;
}

//parens are option when you have 1 parameter
const isEven = num => {
  return num % 2 === 0;
}

//Must include parens for multiple parameters
const multiply = (x, y) => {
  return x * y;
}

// Must include parens for zero parameters
const greet = () => {
  console.log("HI!")
}


/////////////////////////////////////////////////////////////////////////////////////////////////


// "Regular" arrow function:
const square = n => {
  return n * n;
}
// Implicit Return, on multiple lines using parens
const square1 = n => (
  n * n
)

// Implicit return one-liner:
const square2 = n => n * n;


const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
const doubles1 = nums.map(function (n) {
  return n * 2;
})

const doubles2 = nums.map(n => {
  return n * 2;
})

const doubles3 = nums.map(n => n * 2);


const parityList = nums.map(function (n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
})

const parityList1 = nums.map((n) => {
  if (n % 2 === 0) return 'even';
  return 'odd';
});
const parityList2 = nums.map((n) => (
  n % 2 === 0 ? 'even' : 'odd'
));

const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');


////////////////////////////////////////////////////////////////////////////////////////////////////////////


let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

// Find first movie that includes 'Mrs' in its title:
const movie = movies.find(movie => {
  return movie.includes('Mrs');
})

//Find first movie that begins with 'Mrs':
const movie2 = movies.find(m => m.indexOf("Mrs") === 0);

const bookks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]
//Find first book w/ rating over 4.3
const goodBook = bookks.find(b => b.rating >= 4.3);

//Find first book with Neil Gaiman as an author:
const neilBook = bookks.find(b => (
  b.authors.includes('Neil Gaiman')
))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const numms = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = numms.filter(n => n % 2 === 1);
const evens = numms.filter(n => n % 2 === 0);
const bigNums = numms.filter(n => n > 50);


const boooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]


//All books rated over 4.3:
const goodBooks = boooks.filter(b => b.rating > 4.3);

// All books with fantasy as a genre:
const fantasyBooks = boooks.filter(book => (
  book.genres.includes('fantasy')
))

// all books that are either short stories or essays:
const shortForm = boooks.filter(book => (
  book.genres.includes('short stories') || book.genres.includes('essays')
))

// Simple search functionality:
const query = 'The';
const results = boooks.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase())
})


/////////////////////////////////////////////////////////////////////////////////////////////////////////


const wordss = ["dog", 'dig', 'log', 'bag', 'wag'];

//Is every word 3 characters long?
const all3Letters = wordss.every(word => word.length === 3);

// Do all words end in 'g'?
const allEndInG = wordss.every(word => {
  const last = word.length - 1;
  return word[last] === 'g'
});

//Does at least 1 book start with 'd'?
const someStartWithD = words.some(word => word[0] === 'd');

// Do all words start with 'd'?
const allStartWithD = words.every(word => word[0] === 'd');

const bbooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]
//Are all books rated 3.5 or higher?
const allGoodBooks = bbooks.every(book => book.rating > 3.5);

//Do any books have 2 authors?
const any2Authors = bbooks.some(book => book.authors.length === 2)


///////////////////////////////////////////////////////////////////////////////////////////////////////


const nnums = [3, 4, 5, 6, 7];
// To multiply all values in nums:
const product = nnums.reduce((total, currentVal) => {
  return total * currentVal;
});

// total    currentVal    returnVal
// 3             4           12
// 12            5           60
// 60            6           360
// 360           7           2520

//Final Return Value: 2520




const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// One approach to find max using reduce:
// const maxGrade = grades.reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });

// A shorter version using Math.max:
const maxGrade = grades.reduce((max, currVal) => {
  return Math.max(max, currVal)
});
// Finding the min value using Math.min: 
const minGrade = grades.reduce((min, currVal) => (
  //using implicit return for variety's sake
  Math.min(min, currVal)
));

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

// We can specify an initial value as the 2nd argument to reduce:
// arr.reduce(reducerFunction, initialValue)
const total = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000) //sum starts at 1000, then each element is added to it



const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// The shorter version:
const resultss = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});

const bookkss = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'A Truly Horrible Book',
  authors: ['Xavier Time'],
  rating: 2.18,
  genres: ['fiction', 'garbage']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]
// To group books by rating: 
const groupedByRatings = bookkss.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
// REMEMBER THAT SORT() MUTATES THE ORIGINAL ARRAY!
// I'm using slice() to create a new copy, otherwise we would be sorting the same array 3 times:

// Default string sort :( 
const badSort = prices.slice().sort();

// Ascending Sort:
const ascSort = prices.slice().sort((a, b) => a - b);

// Descending Sort:
const descSort = prices.slice().sort((a, b) => b - a);


const booksss = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]

// Sorting books by their rating:
booksss.sort((a, b) => b.rating - a.rating)



///////////////////////////////////////////////////////////////////////////////////////////////////////


const dizi = [1, 2, 3, 4, 5];

dizi.forEach(function (eleman) {
  console.log(eleman);
});


const obje = {
  sayi: 10,
  dizi: [1, 2, 3],
  fonksiyon: function (eleman) {
    console.log(this.sayi * eleman);
  }
};

obje.dizi.forEach(obje.fonksiyon, obje); // this'i obje olarak belirtiyoruz





const diziii = [1, 2, 3, 4, 5];

const yeniDizi = diziii.map(function (eleman) {
  return eleman * 2;
});

console.log(yeniDizi); // Çıktı: [2, 4, 6, 8, 10]




const dizzii = [1, 2, 3, 4, 5];

const bulunanEleman = dizzii.find(function (eleman) {
  return eleman > 3; // Dizide 3'ten büyük olan ilk elemanı bul
});

console.log(bulunanEleman); // Çıktı: 4





const ddizi = [1, 2, 3, 4, 5];

const filtrelenmisDizi = ddizi.filter(function (eleman) {
  return eleman > 3; // Dizide 3'ten büyük olan tüm elemanları filtrele
});

console.log(filtrelenmisDizi); // Çıktı: [4, 5]





const diizi = [1, 2, 3, 4, 5];

// En az bir eleman 3'ten büyük mü?
const bazılariBuyuk = diizi.some(function (eleman) {
  return eleman > 3;
});

console.log(bazılarıBuyuk); // Çıktı: true

// Tüm elemanlar 3'ten küçük mü?
const hepsiKucuk = dizi.every(function (eleman) {
  return eleman < 3;
});

console.log(hepsiKucuk); // Çıktı: false





const dizzi = [1, 2, 3, 4, 5];

const toplam = dizzi.reduce(function (oncekiDeger, suankiDeger) {
  return oncekiDeger + suankiDeger;
}, 0); // İlk olarak 0 ile başla

console.log(toplam); // Çıktı: 15 (1+2+3+4+5)




const dizii = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5];

const sonuc = dizii.reduce(function (oncekiDeger, suankiDeger) {
  if (oncekiDeger[suankiDeger]) {
    oncekiDeger[suankiDeger]++;
  } else {
    oncekiDeger[suankiDeger] = 1;
  }
  return oncekiDeger;
}, {});

console.log(sonuc);
