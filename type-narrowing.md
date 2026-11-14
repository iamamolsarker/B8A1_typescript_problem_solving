TypeScript-এ আমরা যখন একাধিক type নিয়ে কাজ করতে যাই, তখন যেকোনো একটা type-এর উপর যদি আমরা operation চালাই বা কোনো method চালাতে যাই, তখন error দেয়। সেই ক্ষেত্রে আমরা type narrowing ব্যবহার করে একটা নির্দিষ্ট type-এর জন্য এক নির্দিষ্ট method চালাতে পারি।

নিচে কিছু উদাহরণসহ জিনিসগুলোকে দেওয়া হলো।

যেমন, 

```ts
// type guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};
```

```ts
// in - operator

interface Bird {
  fly: () => void;
}
interface Fish {
  swim: () => void;
}

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }

  animal.swim();
};
```

```ts
// instanceof

const date = new Date();
console.log(date instanceof Date);
const err = new Error("Something went wrong!");
console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }
  const date = new Date(x);
  console.log(date.toISOString());
};
showDate(new Date("1991-05-15"));
```
