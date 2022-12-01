---
templateKey: components
title: Cards
path: Cards
---
**Installation**
First, import the Cards component from the shared folder
```js
import Cards from "<root>/src/shared/Cards";
```

**Usage**
> Card Types: Info, Article and Transaction


For **Info** and **Article** Card, pass the type name and card data as object to the Card component.
```js
const allData = { { type: <CardTypeName-String>, data: <CardData-ArrayOfObjects>} };
```

Examples:
**Article Card**

```js
const sampleArticleCards = [
    { id: 1, title: "Sample Title 1", description: "Sample Description 1", img: "www.test.com/test.png", link: "/article/sample-article-1" },
    { id: 2, title: "Sample Title 1", description: "Sample Description 2", img: "www.test.com/test.png", link: "/article/sample-article-2" },
];

<Cards data={ { type: "article", data: sampleArticleCards } } />
```

**Info Card**
```js
const sampleInfoCards = [
    { id: 1, title: "Sample Title 1", description: "Sample Description 1", img: "www.test.com/test.png" },
    { id: 2, title: "Sample Title 1", description: "Sample Description 2", img: "www.test.com/test.png" },
];

<Cards data={ { type: "article", data: sampleArticleCards } } />
```



For **Transaction** Card, pass the type name and card data as object to the Card component. And inside the Card Component, put your desired content/elements as child.

**Transaction Card**
> **title** - Transaction Card Title
> **idName** - property can be used for styling the Transaction Card child elements

```js
const sampleTransactionsCards = {
    title: "Sample Title 1",
    img: "www.test.com/test.png",
    idName: "sample-id-name"
};

<Cards data={ { type: "transaction", data: {sampleTransactionsCards} } }>
    {/* Put children here */}
    <p>Sample Child</p>
</Cards>
```