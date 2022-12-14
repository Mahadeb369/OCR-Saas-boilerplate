import { randomizeEmail, generateEmail } from '../support/helpers';
import {
  COMMON,
  COMMON_PASSWORD_ERROR_TEXT,
  EMAIL_EXISTS_ERROR_TEXT,
  EMPTY,
  EMPTY_EMAIL_ERROR_TEXT,
  EMPTY_PASSWORD_ERROR_TEXT,
  EXISTING,
  INVALID,
  INVALID_EMAIL_ERROR_TEXT,
  SELECTED,
  TOO_SHORT,
  TOO_SHORT_PASSWORD_ERROR_TEXT,
  UNSELECTED,
  UNSELECTED_TERMS_ERROR_TEXT,
  VALID,
} from '../support/assertion';
import API_ERROR_CODES from './apiErrorCodes';

const {
  commonPasswordApiError,
  notUniqueEmailApiError,
  existingEmailCommonPasswordApiError,
} = API_ERROR_CODES;

const EXISTING_EMAIL = Cypress.env('EMAIL');
export const SIGNUP_EMAIL = generateEmail(Cypress.env('EMAIL'), 'signup');
const VALID_EMAIL = randomizeEmail(SIGNUP_EMAIL);
export const INVALID_EMAIL = 'text@example';

export const EMPTY_INPUT = '';
export const TOO_SHORT_PASSWORD = 'qwerty1';
export const COMMON_PASSWORD = 'aaaaaaaa';
export const VALID_PASSWORD = Cypress.env('PASSWORD');
export const NUMERIC_PASSWORD = '1234123456';

export default [
  {
    userEmail: EMPTY_INPUT,
    emailState: EMPTY,
    password: EMPTY_INPUT,
    passwordState: EMPTY,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMPTY_EMAIL_ERROR_TEXT, EMPTY_PASSWORD_ERROR_TEXT],
  },
  {
    userEmail: EMPTY_INPUT,
    emailState: EMPTY,
    password: EMPTY_INPUT,
    passwordState: EMPTY,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [EMPTY_EMAIL_ERROR_TEXT, EMPTY_PASSWORD_ERROR_TEXT, UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: EMPTY_INPUT,
    emailState: EMPTY,
    password: TOO_SHORT_PASSWORD,
    passwordState: INVALID,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMPTY_EMAIL_ERROR_TEXT],
  },
  {
    userEmail: EMPTY_INPUT,
    emailState: EMPTY,
    password: TOO_SHORT_PASSWORD,
    passwordState: INVALID,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [EMPTY_EMAIL_ERROR_TEXT, UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: EMPTY_INPUT,
    emailState: EMPTY,
    password: COMMON_PASSWORD,
    passwordState: COMMON,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMPTY_EMAIL_ERROR_TEXT],
  },
  {
    userEmail: EMPTY_INPUT,
    emailState: EMPTY,
    password: COMMON_PASSWORD,
    passwordState: COMMON,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [EMPTY_EMAIL_ERROR_TEXT, UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: EMPTY_INPUT,
    emailState: EMPTY,
    password: VALID_PASSWORD,
    passwordState: VALID,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMPTY_EMAIL_ERROR_TEXT],
  },
  {
    userEmail: EMPTY_INPUT,
    emailState: EMPTY,
    password: VALID_PASSWORD,
    passwordState: VALID,
    checkbox: false,
    checkboxState: SELECTED,
    errorText: [EMPTY_EMAIL_ERROR_TEXT, UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: INVALID_EMAIL,
    emailState: INVALID,
    password: TOO_SHORT_PASSWORD,
    passwordState: TOO_SHORT,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [INVALID_EMAIL_ERROR_TEXT],
  },
  {
    userEmail: INVALID_EMAIL,
    emailState: INVALID,
    password: TOO_SHORT_PASSWORD,
    passwordState: TOO_SHORT,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: INVALID_EMAIL,
    emailState: INVALID,
    password: COMMON_PASSWORD,
    passwordState: COMMON,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [INVALID_EMAIL_ERROR_TEXT],
  },
  {
    userEmail: INVALID_EMAIL,
    emailState: INVALID,
    password: COMMON_PASSWORD,
    passwordState: COMMON,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: INVALID_EMAIL,
    emailState: INVALID,
    password: EMPTY_INPUT,
    passwordState: EMPTY,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMPTY_PASSWORD_ERROR_TEXT],
  },
  {
    userEmail: INVALID_EMAIL,
    emailState: INVALID,
    password: EMPTY_INPUT,
    passwordState: EMPTY,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [EMPTY_PASSWORD_ERROR_TEXT, UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: INVALID_EMAIL,
    emailState: INVALID,
    password: VALID_PASSWORD,
    passwordState: VALID,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [INVALID_EMAIL_ERROR_TEXT],
  },
  {
    userEmail: INVALID_EMAIL,
    emailState: INVALID,
    password: VALID_PASSWORD,
    passwordState: VALID,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: VALID_EMAIL,
    emailState: VALID,
    password: TOO_SHORT_PASSWORD,
    passwordState: TOO_SHORT,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [TOO_SHORT_PASSWORD_ERROR_TEXT],
  },
  {
    userEmail: VALID_EMAIL,
    emailState: VALID,
    password: TOO_SHORT_PASSWORD,
    passwordState: TOO_SHORT,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: VALID_EMAIL,
    emailState: VALID,
    password: COMMON_PASSWORD,
    passwordState: COMMON,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [COMMON_PASSWORD_ERROR_TEXT],
    apiError: commonPasswordApiError,
  },
  {
    userEmail: VALID_EMAIL,
    emailState: VALID,
    password: COMMON_PASSWORD,
    passwordState: COMMON,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: VALID_EMAIL,
    emailState: VALID,
    password: EMPTY_INPUT,
    passwordState: EMPTY,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMPTY_PASSWORD_ERROR_TEXT],
  },
  {
    userEmail: VALID_EMAIL,
    emailState: VALID,
    password: EMPTY_INPUT,
    passwordState: EMPTY,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [EMPTY_PASSWORD_ERROR_TEXT, UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: VALID_EMAIL,
    emailState: VALID,
    password: VALID_PASSWORD,
    passwordState: VALID,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: EXISTING_EMAIL,
    emailState: EXISTING,
    password: VALID_PASSWORD,
    passwordState: VALID,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMAIL_EXISTS_ERROR_TEXT],
    apiError: notUniqueEmailApiError,
  },
  {
    userEmail: EXISTING_EMAIL,
    emailState: EXISTING,
    password: VALID_PASSWORD,
    passwordState: VALID,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: EXISTING_EMAIL,
    emailState: EXISTING,
    password: TOO_SHORT_PASSWORD,
    passwordState: TOO_SHORT,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [TOO_SHORT_PASSWORD_ERROR_TEXT],
  },
  {
    userEmail: EXISTING_EMAIL,
    emailState: EXISTING,
    password: TOO_SHORT_PASSWORD,
    passwordState: TOO_SHORT,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: EXISTING_EMAIL,
    emailState: EXISTING,
    password: COMMON_PASSWORD,
    passwordState: COMMON,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMAIL_EXISTS_ERROR_TEXT, COMMON_PASSWORD_ERROR_TEXT],
    apiError: existingEmailCommonPasswordApiError,
  },
  {
    userEmail: EXISTING_EMAIL,
    emailState: EXISTING,
    password: COMMON_PASSWORD,
    passwordState: COMMON,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
  {
    userEmail: EXISTING_EMAIL,
    emailState: EXISTING,
    password: EMPTY_INPUT,
    passwordState: EMPTY,
    checkbox: true,
    checkboxState: SELECTED,
    errorText: [EMPTY_PASSWORD_ERROR_TEXT],
  },
  {
    userEmail: EXISTING_EMAIL,
    emailState: EXISTING,
    password: EMPTY_INPUT,
    passwordState: EMPTY,
    checkbox: false,
    checkboxState: UNSELECTED,
    errorText: [UNSELECTED_TERMS_ERROR_TEXT],
  },
];
