import inquirer from 'inquirer';
import info from './info';
import store from './store';

export default {
   // App Setup...
   askRerunSetup() {
      return inquirer.prompt([
         {
            name: 'rerunSetup',
            type: 'confirm',
            message: 'would you like to re-run the setup:',
            default: false,
         },
      ]);
   },

   // App config...
   askEditConfig() {
      return inquirer.prompt([
         {
            name: 'autoCommit',
            type: 'list',
            message: 'do you want to auto commit & push when having contents inside repo:',
            choices: ['always', 'never', 'ask each time'],
            default: 0,
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your auto commit choice';
            },
         },
         {
            name: 'autoCommitMessage',
            type: 'input',
            message: 'default initial auto commit message:',
            default: 'Initial Commit',
            when({ autoCommit }) {
               return autoCommit !== 'never';
            },
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your default initial commit message';
            },
         },
         {
            name: 'hints',
            type: 'list',
            message: 'show hints?',
            choices: ['on', 'off'],
            default: 0,
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your choice';
            },
         },
      ]);
   },
   askResetConfig() {
      return inquirer.prompt([
         {
            name: 'resetConfig',
            type: 'confirm',
            message: 'are you sure you want to reset app:',
            default: false,
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your choice';
            },
         },
      ]);
   },

   // Token Stuff...
   askConfirmNewToken() {
      return inquirer.prompt([
         {
            name: 'confirmNewToken',
            type: 'confirm',
            message: 'are you sure you want to add a new token:',
            default: false,
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your choice.';
            },
         },
      ]);
   },
   askAddNewToken() {
      return inquirer.prompt([
         {
            name: 'newToken',
            type: 'input',
            message: 'enter personal access token:',
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your personal access token.';
            },
         },
      ]);
   },
   askDeleteToken() {
      return inquirer.prompt([
         {
            name: 'deleteToken',
            type: 'confirm',
            message: 'are you sure you want to delete the stored token:',
            default: false,
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your choice.';
            },
         },
      ]);
   },

   // Repo Stuff..
   askRemoteRepositoryDetails() {
      return inquirer.prompt([
         {
            name: 'name',
            type: 'input',
            message: 'name of your repository:',
            default: info.directoryBase,
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter a name for the repository.';
            },
         },
         {
            name: 'description',
            type: 'input',
            message: 'description of your repository:',
            default: null,
         },
         {
            name: 'visibility',
            type: 'list',
            message: 'visibility of your repository:',
            choices: ['public', 'private'],
            default: 0,
         },
      ]);
   },
   askToCreateInitialCommit() {
      return inquirer.prompt([
         {
            name: 'initialCommit',
            type: 'confirm',
            message: 'do you wish creat an initial commit',
            default: true,
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your wish.';
            },
         },
      ]);
   },
   askInitialCommitMessage() {
      return inquirer.prompt([
         {
            name: 'initialCommitMessage',
            type: 'input',
            message: 'enter your initial commit message:',
            default: store.getAutoCommitMessage,
            validate(value) {
               if (value.length) {
                  return true;
               }
               return 'please enter your initial commit message.';
            },
         },
      ]);
   },
};