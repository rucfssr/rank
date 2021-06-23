# Rank

command line nodejs app to calculate rankings with a given input file.

# Build

To build the app install dependencies using the below mentioned command

```
npm install
```

Install will automatically run the post command to build the app with ```npm run build```

# Run

To run the app with sample input, use the below mentioned command

```
npm start input
or
npm start [another file name or file with path]
```

Output

```
> rank@1.0.0 start /rank
> node built/main.js "input"

1. Tarantulas, 6 pts
2. Lions, 5 pts
3. FC Awesome, 1 pt
3. Snakes, 1 pt
5. Grouches, 0 pts
```

# Test

To run automated test use the below mentioned command

```
npm test
```

Output

```
  9 passing (23ms)

--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------|---------|----------|---------|---------|-------------------
All files           |     100 |      100 |     100 |     100 |                   
 parser             |     100 |      100 |     100 |     100 |                   
  parser.ts         |     100 |      100 |     100 |     100 |                   
 service            |     100 |      100 |     100 |     100 |                   
  matchResult.ts    |     100 |      100 |     100 |     100 |                   
  rankCalculator.ts |     100 |      100 |     100 |     100 |                   
--------------------|---------|----------|---------|---------|-------------------

```

# Stack
- Node
- TypeScript
- Mocha
- Chai
- Eslint

# Expectation

Input is well-formed, as informed already