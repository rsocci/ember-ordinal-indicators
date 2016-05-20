# ember-ordinal-indicators
[![Build
Status](https://travis-ci.com/rsocci/ember-ordinal-indicators.svg?token=u8nEZqCti1s9YTdNGA5X&branch=master)](https://travis-ci.com/rsocci/ember-ordinal-indicators)

Helper for obtaining the ordinal indicator of a number.
It returns one of the following suffixes: `st`, `nd`, `rd`, or `th`.

## Installation

`npm install ember-ordinal-indicators --save-dev`

with ember-cli:

`ember install ember-ordinal-indicators`

## Usage

```hbs
{{ordinal-for <number>}}
```

Examples:

```hbs
{{ordinal-for 1}} {{! => st}}
{{ordinal-for 2}} {{! => nd}}
{{ordinal-for 3}} {{! => rd}}
```

## Development
* `git clone https://github.com/rsocci/ember-ordinal-indicators.git`
* `npm install`

## Running Tests
* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
