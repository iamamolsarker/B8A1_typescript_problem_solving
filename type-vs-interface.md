Type Alias হলো যেকোনো data set / data type-এর জন্য একটা সহজ, বোধগম্য নাম দেওয়া, যেটা আমরা পুনরায় ব্যবহার (reuse) করতে পারি।

Type alias লেখার জন্য আমরা `type` keyword ব্যবহার করি। যেমন: `type status = "pending" | "approved" | "rejected";`

অন্যদিকে, `interface` দিয়ে আমরা একটি object-এর structure নির্ধারণ করে দেই এবং এই structure অনুযায়ী object গঠিত হবে। এটা blueprint-এর মতো কাজ করে। `interface` দিয়ে আমরা ঠিক করে দিতে পারি একটা object-এ কী কী property ও method থাকবে এবং সেগুলোর data type কী হবে:

`interface User {

id: number;

name: string;

email: string;

}`

`interface` মূলত object-এর structure তৈরি করতে ব্যবহৃত হয়।
`type` কে আমরা object, primitive type, tuple সব জায়গায় ব্যবহার করতে পারি। 

`interface` কে extend করা যায় `extends` keyword ব্যবহার করে। 
//* Interface কে extend করা যায়। যেমন,

interface Animal {
  species: string;
}
//!অ্যানিমেলের মধ্যে যা যা আছে, আমরা যদি তা ক্যাটের মধ্যেও আনতে চাই, সেক্ষেত্রে আমরা `extends` ইউজ করব।
interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  breed: "Persian",
  species: "Felix Catus",
};

`type` কে intersection করা যায় `&` দিয়ে। 
//!আমরা যদি এই same কাজটা Type alias মধ্যে করতে চাই, সেক্ষেত্রে আমাদেরকে intersection ব্যবহার করতে হবে।
যেমন,
type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  //!Type alias-এর মধ্যে এভাবে intersection করতে হয়।
  model: string;
};

const car: Car = {
  model: "X-Corolla",
  brand: "Toyota",
};


আমরা যদি একই নাম দিয়ে `interface` তৈরি করি, সেটা merge হয়ে যায়। যেমন,
interface Iemployee {
  name: string;
}

interface Iemployee {
  id: number;
}

const employee: Iemployee = {
  id: 568,
  name: "Hasan",
};

একই নাম দিয়ে `type` declare করলে error চলে আসে।
//!কিন্তু
যেমন,
type Temployee = {
  name: string;
};

type Temployee = {
  id: number;
};


কখন `interface` ব্যবহার করব? 
Object-এর structure তৈরি করার সময় অথবা Object-Oriented Programming-এর class তৈরি করার সময় আমরা `interface` ব্যবহার করতে পারি। 

কখন `type alias` ব্যবহার করব? 
যখন আমরা variable-এর union type বা literal type set করি, তখন `type alias` ব্যবহার করতে পারি।
tuple তৈরি করার সময় আমরা `type` ব্যবহার করতে পারি। 

আমরা সবসময় `interface` ব্যবহার করার try করব। কিন্তু যখন শুধু `interface` দিয়ে আমাদের চাহিদা বা প্রয়োজন মিটাতে পারব না, যেমন union বা tuple, সেই ক্ষেত্রে আমরা `type` ব্যবহার করব।