# RDS Connection String [![Build Status](https://travis-ci.org/mtso/rds-connection-string.svg?branch=master)](https://travis-ci.org/mtso/rds-connection-string)

Drop-in connection URI builder for RDS data stores.

## Installation

```
npm install --save rds-connection-string
```

## Usage

```js
const connectionString = require('rds-connection-string')({scheme: 'postgres'});
```
