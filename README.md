# ClearWaterUa

ClearWaterUa is a small package, that allow make order from your cli. This is unofficial script

## Installation

Use the package manager [yarn](https://yarnpkg.com/en/docs/install#mac-stable) to install ClearWaterUa.

```bash
yarn global add clearwater-ua
```

## Usage
For properly work, this package required default template of your order. Empty template `~/.clearwater-ua` looks next:
```json
{
  orcode: '',
  orcomm: '',
  orconfemail: '',
  orconfsms: '',
  orconftel: '',
  orcw: '',
  orcwf: '',
  orcwi: '',
  ordate: '',
  ortime: '',
  orname: '',
  orcity: '',
  orstrit: '',
  orhouse: '',
  oroffice: '',
  ortel: ''
}
```

On first run, package ask you complete a small quiz for fill it, and use default values from them, for creating order.

For create new order just call in you
```bash
clearwater-ua new [--quiz] [--full-quiz] [--remove-template]
```

### Options
- **--quiz** - rewirte default values for `ordate`, `ordate`, `orcw`, `orcwi`, `orcwf`
- **--full-quiz** - rewrite all values for template(just run quiz from first run)
- **--remove-template** - remove template from home directory

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
