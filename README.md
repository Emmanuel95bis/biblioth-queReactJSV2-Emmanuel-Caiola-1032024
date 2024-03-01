# Installation

npm i react-table-npm-library-v6

# Introduction

this library was used to validate my last project school

it was used for adding a table in my React programm .

# Installation

first of all install the library in your environment with :
npm i react-table-npm-library-v6

you need to set the typescripe mode for using

after you just have to import like this :
import { Table } from "react-table-npm-library-v6";

you need 2 arrays for that, one for the header, and the second for the informations like in the example bellow:

const header=["nom","prénom","age"...]

The second array can be an array of object like this :

const user=[{nom:"Dupont",prenom:"Robert",age:"36 ans"},{nom:"Martin",prenom:"Maurice",age:"56 ans"}...]

# Usage

When the déclarations are done, you can use it like that

```js
render: function () {
return (
// ...
<Table header={header} users={user}>
// Content

);
}
```

Enjoy...
