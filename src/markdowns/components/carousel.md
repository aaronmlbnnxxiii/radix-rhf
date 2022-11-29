---
templateKey: components
title: Carousel
path: Carousel
---
**Installation**
First, install the reack slick carousel component using npm

```console
npm install react-slick --save
```
Second, create reusable component in your shared component folder "./components/shared"
```js
import * as React from "react";
    
const Carousel = () => {
    return <p>Sample Reusable Component</p>
}
export default Carousel;
```
Third, import react slick css (scss)
```js
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss"; 
```

Fourth, import the Carousel Component
```js
import Carousel from "./components/shared/Carousel.tsx";
```

**Usage**

Carousel Types:
- Hero
- Cards
- Clients

Fifth, pass the type name **(hero, cards, clients)** of carousel and data/props as object to the component
```js
const allData = { type: <typeName>, data: <dataObjects> }
<Carousel data={ allData } />
```
Examples:

**Hero**
```js
const data = [ 
    { id: 1, title: "Sample", description: "Sample" }, 
    { id: 2, title: "Sample2", description: "Sample2"}
]; 

<Carousel data={ { type: "hero", data: data } }/>
```

**Cards**
```js
const data = [ 
    { id: 1, title: "Sample", description: "Sample", img: "www.test.com/test.png" }, 
    { id: 2, title: "Sample2", description: "Sample2", img: "www.test.com/test.png" }
]; 

<Carousel data={ { type: "hero", data: data } }/>
```

**Clients**
```js
let data = [ 
    { id: 1, title: "Sample", description: "Sample", img: "www.test.com/test.png"}, 
    { id: 2, title: "Sample2", description: "Sample2", img: "www.test.com/test.png" }
]; 

<Carousel data={ { type: "hero", data: data } } />
```

**Sample code using Reusable Carousel Component**
```js
import * as React from "react";

import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss"; 

import Carousel from "./components/shared/Carousel.tsx";

const Carousel = () => {
    const data = [ 
        { id: 1, title: "Sample", description: "Sample" }, 
        { id: 2, title: "Sample2", description: "Sample2" }
    ]; 
    return (
        <>
            <Carousel data={ { type: "hero", data: data } }/>
        </>
    );
}
export default Carousel;
```