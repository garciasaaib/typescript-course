There are many types in JS & TS

Primitives
- string
- number
- boolean
- symbol

Compount
- literal objects
- functions
- classes
- arrays

Custom types
- create new types
- interfaces
- generics
- tuples

Docs to config ts configuration
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

Tsconfig
- strict: set Strict mode in js
- strictNullChecks: set undefined
- noImplicitAny: doesn't allow any implicit
- removeComments: just remove comments in generated js files 
- "exclude": ["node_modules"]: exclude folders from compile ts
- sourceMap: shows line error or log in ts, in a map file reference
- outFile: where you want the compiled app in an end file
- "include": ["ES6"]: include only folders from compile ts