```markdown
# js-type-predict

`js-type-predict` is a lightweight TypeScript/JavaScript utility for predicting the data type of an array of values. It can determine whether the values in the array are strings, numbers, booleans, dates, or datetime objects.

## Features

- Predicts common data types: `string`, `number`, `float`, `boolean`, `date`, and `datetime2`.
- Optionally treat `0` and `1` as boolean values.
- Lightweight and easy to use.

## Installation

You can install the package via npm:

```bash
npm install js-type-predict
```

## Usage

Here’s a simple example of how to use `js-type-predict`:

```typescript
import { predictType } from 'js-type-predict';

const input = {
    values: ["2022-01-01", "2022-02-01"],
    treatZeroOneAsBoolean: false
};

const result = predictType(input);
console.log(result);  // Outputs: "date"
```

### Parameters

- **`values`**: An array of values of any type.
- **`treatZeroOneAsBoolean`** (optional): A boolean flag (default is `false`). If set to `true`, `0` and `1` are treated as boolean values (`false` and `true`, respectively).

### Return Value

The function returns a string representing the predicted type of the values in the array. Possible return values include:
- `"string"`
- `"number"`
- `"float"`
- `"boolean"`
- `"date"`
- `"datetime2"`

## Examples

### Basic Example

```typescript
import { predictType } from 'js-type-predict';

let input = {
    values: ["true", "false", "true"],
    treatZeroOneAsBoolean: false
};
console.log(predictType(input));  // Outputs: "boolean"
```

### Treating 0 and 1 as Boolean

```typescript
import { predictType } from 'js-type-predict';

let input = {
    values: ["0", "1", "1"],
    treatZeroOneAsBoolean: true
};
console.log(predictType(input));  // Outputs: "boolean"
```

### Handling Dates and Datetimes

```typescript
import { predictType } from 'js-type-predict';

let input = {
    values: ["2022-01-01T12:00:00", "2022-02-01T15:30:00"],
    treatZeroOneAsBoolean: false
};
console.log(predictType(input));  // Outputs: "datetime2"
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

