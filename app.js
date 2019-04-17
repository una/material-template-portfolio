import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldCharacterCounter} from '@material/textfield/character-counter';
import {MDCRipple} from '@material/ripple';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const nameField = new MDCTextField(document.querySelector('.mdc-text-field--name'));
const emailField = new MDCTextField(document.querySelector('.mdc-text-field--email'));
const messageField = new MDCTextField(document.querySelector('.mdc-text-field--message'));
const characterCounter = new MDCTextFieldCharacterCounter(document.querySelector('.mdc-text-field-character-counter'));

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));