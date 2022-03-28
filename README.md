# react-soft-ui

> React component library for soft / neumorphic design

<!-- Badges -->

<!-- Screenshot -->

![Screenshot](https://github.com/bryce-mcmath/react-soft-ui/blob/main/docs/screenshot.png?raw=true)

View the Storybook for these components [here](https://bryce-mcmath.github.io/react-soft-ui/)

## Table of contents

- [Usage](#usage)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing and running](#installing-and-running)
  - [Running the tests](#running-the-tests)
- [Deployment](#deployment)
- [Built with](#built-with)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Release history](#release-history)
- [Meta](#meta)
- [License](#license)
- [Known issues / bugs](#known-issues-/-bugs)
- [Feature roadmap](#feature-roadmap)
- [Acknowledgements](#acknowledgements)

## Usage

```
npm i react-soft-ui
```

```jsx
import React from "react";

import { SoftButton } from "react-soft-ui";
import "react-soft-ui/dist/esm/index.css";

function App() {
  return <SoftButton>Button</SoftButton>;
}

export default App;
```

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

What things you need to install the software and how to install them

If you don't have Node.js 14+ and npm installed, install them from [here.](https://nodejs.org/en/)

### Installing and Running

In the root directory:

```
npm install
```

```
npm run storybook
```

### Running the tests

```
npm run test
```

## Built with

- [React](https://reactjs.org/) - Front-end framework
- [styled-components](https://styled-components.com/) - CSS-in-JS
- [TypeScript](https://www.typescriptlang.org/) - Strongly-typed programming language that builds on JavaScript
- [Storybook](https://storybook.js.org/) - UI component explorer
- [rollup](https://rollupjs.org/guide/en/) - JavaScript module bundler
- [Jest](https://jestjs.io/) - JavaScript testing framework

## Contributing

1. Fork it (<https://github.com/bryce-mcmath/react-soft-ui/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Versioning

[SemVer](http://semver.org/) will only start being used for versioning once the base library is complete (1.0.0). For the versions available, see the [tags on this repository](https://github.com/bryce-mcmath/react-soft-ui/tags).

## Release history

- 0.1.2
  - WIP
  - First few components
- 0.1.1
  - The first release
  - Just the scaffolding of the library

## Meta

Bryce McMath – bryce.mcmath.work@gmail.com

[https://github.com/bryce-mcmath](https://github.com/bryce-mcmath)

## License

MIT

See the [LICENSE.md](LICENSE.md) file for details

## Known issues / bugs

- Infant library, still needs more experienced eyes to guide its development

_To add an issue, start a new one [here.](https://github.com/bryce-mcmath/react-soft-ui/issues)_

## Feature roadmap

- Radio buttons
- Checkbox
- Switch
- Select dropdown
- Inputs
- Choice group
- Verticle and horizontal sliders
- Verticle and horizontal progress bars
- Circular progress bar

_If you'd like to add a feature yourself, please see the [Contributing](#contributing) guidelines._

## Acknowledgements

- Shout out to all the attempts to build a neumorphic React library thus far, definitely drawing inspiration from some of them
- There are some major drawbacks to neumorphic style that are very difficult to practically address but it's just too cool to ignore

---
