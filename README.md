<p align="center">
<a href="https://travel-agency-project.herokuapp.com/"><img src="src/assets/logo.png" title="travel-app" alt="snippet of travel agency homepage"></a>
</p>



# <p align="center">🌴 Travel agency</p>
<p align="center">Project for mastering React, Redux and learn TDD</p>

</br>

## Table of Contents

- [What's this project about?](#about)
- [Technologies used](#technologies)
- [What I learned?](#what)
- [Interesting code snippet](#interesting)
- [Installation](#install)
- [NPM scripts](#npm)
- [GIT hooks](#git)
- [Website (on Heroku)](#site)

</br>

## <a name="about"></a>What's this project about?

This is a website for a travel agency that offers tours with various options. Tours search is implemented by length, name and tags. Contact with the office is possible using a form that provides possible additional options for the trip. There is a countdown timer for HappyHour on the home page. An interesting feature is the change of contact person and number depending on the time of the day (UTC time).

</br>

## <a name="technologies"></a>Technologies used
- HTML
- CSS
- SCSS
- JavaScript
- React
- Redux
- Router
- webpack
- Jest/Enzyme
- GIT

</br>

## <a name="what"></a>What I learned?

- use different file structures in the React application (functional structure, files type structure),
- use the [JSON file generator](https://next.json-generator.com/),
- create grid layout using the [React-FlexBox-Grid](https://roylee0704.github.io/react-flexbox-grid/) package,
- build React components composed of many subcomponents (options),
- work with dates in JS in a more advanced way,
- general information about tests (types, use, frameworks etc.),
- write code in the TDD approach (Test-driven development - Red, Green, Refactor),
- test React with [Jest](https://jestjs.io/en/)/[Enzyme](https://enzymejs.github.io/enzyme/),
- what is edge-case testing and what is the best approach to code testing,
- create mocks for props and functions,



</br>

## <a name="interesting"></a>Interesting code snippet (for me of course 😉)
- mock date and checking the correct operation of the HappyHourAd component:

```js
const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }

  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});
```
- countdown function until the next noon:

```js
  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }
```

</br>

## <a name="install"></a>Installation

- use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies:

```bash
npm install

or

npm i
```
- run watch mode to start the server, constantly refreshing and more:

```bash
npm start
```

<br/>



## <a name="npm"></a>NPM scripts

There are 3 main scripts to speed up work:

- `start`: observes changes in the` src` folder and starts working preview,
- `build`: builds a project in the` build` folder based on files from the `src` and` public` folders,
- `test`: starting the unit tests,

check the additional scripts in the `package.json` file


<br/>


## <a name="git"></a>GIT hooks
The project uses Git Hooks - the ability to run scripts in response to selected Git events.

Each time you execute the `git commit` command, unit tests, formatting, and linting will be run
for files selected with `git add` and to be saved in commit.

<br/>



## <a name="site"></a>Website (on Heroku)
[Travel agency](https://travel-agency-project.herokuapp.com/)
- if the page loads slowly, wait a moment, the server is waking up because it is hosted on a free platform Heroku.

</br>
</br>

  *project implemented as part of the 9-month [Web Developer Plus](https://kodilla.com/pl/bootcamp/webdeveloper/?type=wdp&editionId=309) course organized by [Kodilla](https://drive.google.com/file/d/1AZGDMtjhsHbrtXhRSIlRKKc3RCxQk6YY/view?usp=sharing)
