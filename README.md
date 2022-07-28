# Cypress2022
Latest Cypress Learnings 2022



## Installation

**prerequisites:**
- Install NodeJS 
- install Visual Studio Code (Or another IDE)

**Step 1:**
In order to create the package.json file, open the terminal in Visual Studio Code and type the following command:
```
npm init
```

Install Cypress:

```
npm install cypress --save-dev
```

In order to open Cypress Debug Window type:
(If first time it will install)

```
npx cypress open
```

Installing Typescript:

```
npm install --save-dev typescript
```

Install Rimraf which takes care of cleaning before building

```
npm install --save-dev rimraf
```


-----------------------------------------------------------------------------

## Learning Objectives

- What is supported?
- What is not supported?

- Locator cheat sheet
- Command line runs (By filename, By Tag?, By directory)
- Passing args in command line
- Reports
- Mocking
- Assertions
- Page Object Model
- Debugging
- Intellisence in Visual Studio code
- Typescript?
- Running on more than one browser?
- How to setup to run in multiple environments - 
- How to set base URL
- Running headless
- Snapshot testing (DOM Comparison) - DONE
- Visual testing - DONE

Questions for Joel:

npm run cy.open - If I make a change and save will it update in cypress test window?
BaseUrl will it not automatically load this before tests
How can I run say a login sequence for all tests whichout added it to all test scripts?

