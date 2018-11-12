
const inquirer = require('inquirer')

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))

const orderQuestions = [
  {
    type: 'datetime',
    name: 'ordate',
    message: 'Дата та час доставки',
    format: ['m', '/', 'd', ' ', 'h', ':', 'MM']
  },

  {
    type: 'list',
    name: 'orcw',
    message: 'Вода класична (бут.)',
    choices: ['1', '2', '3', '4', '5', '6']
  },

  {
    type: 'list',
    name: 'orcwf',
    message: 'Вода фторована (бут.)',
    choices: ['0', '1', '2', '3', '4', '5', '6']
  },

  {
    type: 'list',
    name: 'orcwf',
    message: 'Вода йодована (бут.)',
    choices: ['0', '1', '2', '3', '4', '5', '6']
  },

  {
    type: 'input',
    name: 'orcomm',
    message: 'Коментар'
  }
]

const defaultQuestions = [
  {
    name: 'orcode',
    type: 'input',
    message: 'Код клієнта'
  },

  {
    name: 'orcity',
    type: 'input',
    message: 'Місто',
    default: 'Київ'
  },

  {
    name: 'orstrit',
    type: 'input',
    message: 'Вуліця',
    validate: (val) => !!val
  },

  {
    name: 'orhouse',
    type: 'input',
    message: 'Будинок, корпус',
    validate: (val) => !!val
  },

  {
    name: 'oroffice',
    type: 'input',
    message: 'Квартира / офіс',
    validate: (val) => !!val
  },

  {
    name: 'orname',
    type: 'input',
    message: 'Контактна особа',
    validate: (val) => !!val
  },

  {
    name: 'ortel',
    type: 'input',
    message: 'Контактний телефон',
    validate: (val) => !!val
  },

  {
    name: 'orconfsms',
    type: 'list',
    message: 'Підтвердження про прийом замовлення по SMS',
    choices: ['так', 'ні'],
    default: 'ні'
  },

  {
    name: 'orconftel',
    type: 'list',
    message: 'Підтвердження про прийом замовлення по телефону',
    choices: ['так', 'ні'],
    default: 'ні'
  }
]

export const transformQuiz = (options) => {}

export const defaultQuiz = () => inquirer.prompt(defaultQuestions)
export const orderQuiz = () => inquirer.prompt(orderQuestions)
