module.exports = {
  types: [
    { value: 'feat', name: 'feat:       A new feature' },
    { value: 'fix', name: 'fix:        A bug fix' },
    {
      value: 'style',
      name: 'style:      Sass or css changes',
    },
    {
      value: 'refactor',
      name: 'refactor:   A code change that neither fixes a bug nor adds a feature',
    },
    { value: 'docs', name: 'docs:       Documentation only changes' },
    {
      value: 'perf',
      name: 'perf:       A code change that improves performance',
    },
    {value: 'conflict', name: 'conflict:   Resolve conflicts'},
    {value: 'test', name: 'test:       Adding missing tests'},
    {
      value: 'chore',
      name: 'chore:      Changes to the build process or auxiliary tools\n              and libraries such as documentation generation',
    },
    {
      value: 'build',
      name: 'build:      Changes that affect the build system or external\n              dependencies (example scopes: webpack, npm)',
    },
    {value: 'config', name: 'revert:     Revert to a commit'},
    {value: 'WIP', name: 'WIP:        Work in progress'},
  ],

  // scopes: [{name: 'accounts'}, {name: 'admin'}, {name: 'exampleScope'}, {name: 'changeMe'}],
  typePrefix: '[',
  typeSuffix: ']',
  subjectSeparator: ':',
  allowTicketNumber: false,

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: 'What is the scope or module of this change: (press enter to skip)\n',
    // used if allowCustomScopes is true
    customScope: 'What is the scope or module of this change: (press enter to skip)\n',
    subject: 'Write a short, imperative tense description of the change: (required)\n',
    body: 'Provide a longer description of the change. Use "|" to break new line:  (press enter to skip)\n',
    breaking: 'Are there any breaking changes? (optional):\n',
    footer: 'Does this change affect any open issues? (press enter to skip)\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?(y:yes/n:no/e:edit)',
  },

  allowCustomScopes: true,
  allowBreakingChanges: false,
  // skip any questions you want
  skipQuestions: ['footer'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
