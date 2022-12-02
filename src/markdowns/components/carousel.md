---
templateKey: components
title: Carousel
path: Carousel
---
**Installation**
First, install the reack slick carousel component using npm (If react slick is not installed)

```console
npm install react-slick --save
npm install slick-carousel --save
```
Second, import the Carousel Component
```js
import Carousel from "./components/shared/Carousel.tsx";
```

**Usage**
> Carousel Types: Hero, Cards, Clients

Pass the type name **(hero, cards, clients)** of carousel and card data as object to the Card component.
```js
const allData = { { type: <CardTypeName-String>, data: <CardData-ArrayOfObjects> } }
```
Examples:

**Hero Carousel**
```js
let data = [ 
    { id: 1, title: "Sample", description: "Sample" }, 
    { id: 2, title: "Sample2", description: "Sample2"}
]; 

<Carousel data={ { type: "hero", data: data } }/>
```

**Cards Carousel**
```js
let data = [ 
    { id: 1, title: "Sample", description: "Sample", img: "www.test.com/test.png" }, 
    { id: 2, title: "Sample2", description: "Sample2", img: "www.test.com/test.png" }
]; 

<Carousel data={ { type: "cards", data: data } }/>
```

**Clients Carousel**
```js
let data = [ 
    { id: 1, title: "Sample", description: "Sample", img: "www.test.com/test.png"}, 
    { id: 2, title: "Sample2", description: "Sample2", img: "www.test.com/test.png" }
]; 

<Carousel data={ { type: "clients", data: data } } />
```