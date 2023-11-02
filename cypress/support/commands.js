// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'
const { MailSlurp } = require('mailslurp-client');

const mailslurp = new MailSlurp({ apiKey:  "192969b009995ef30c39729873b2b6636ef6dd603c290075c7b0c23b4fdad529"  });
// const inbox = await mailslurp.inboxController.createInboxWithDefaults();

Cypress.Commands.add("createInbox", () => 
{
  return mailslurp.createInbox()
})

Cypress.Commands.add("waitForLatestEmail", (inboxId) => 
{
  // how long we should hold connection waiting for an email to arrive
  const timeoutMillis = 50000
  return mailslurp.waitForLatestEmail(inboxId, timeoutMillis)
})