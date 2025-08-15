# Lib Average

## Description

Simple function to calculate the average of numbers and vector of numbers developed in Javascript.

## Debugging

1. The function checks whether the argument passed as a parameter is a vector of numbers or numbers;
2. Filters out invalid numbers, whether they are in a vector or not;
3. Adds the numbers using the reduce function;
4. Returns the average.

## Installation

```
npm install lib-average
```

## Use Example

```
const {average} = require(../index);

console.log(average(10, 20, 30));

// output: 20
```

## Test

The Jest framework was used to perform the tests.

