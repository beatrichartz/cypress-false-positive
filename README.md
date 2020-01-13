# Cypress false positive repo

This repo demonstrates a false positive bug in Cypress.

## How to run

```bash
CYPRESS_base_url=https://google.com yarn cypress run
```

or

```bash
CYPRESS_base_url=https://google.com yarn cypress open
```

If there are no failures, you've been able to reproduce the bug. Cypress should fail on line 23 of `integration/e2e.js`, which tests for something that does not exist:

```js
cy.contains('Something that the page does not contain', LONG_TIMEOUT_OPTION)
```

## Configurations this bug has been reproduced on:

You can find configurations this bug has been reproduced on in the `reproduced-with-configurations` folder. If you'd like to add a configuration to the list, open an issue.

