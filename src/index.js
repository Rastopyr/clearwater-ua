import { join } from 'path'
import { readFileSync, access, writeFile } from 'fs'

import chalk from 'chalk'
import hogan from 'hogan.js'

import { defaultQuiz } from './quiz'

const DOTFILE = './orderTemplate.tpl'

const OPTIONS_FILE_NAME = join(process.env.HOME, '.clearwater-ua')
const TPL = hogan.compile(`${readFileSync(join(__dirname, DOTFILE))}`)

/*
 *  Check file in HOME directory
 *
 *  @returns {boolean}
 */
export const hasDotfile = async () => {
  let isExists = false

  try {
    await access(OPTIONS_FILE_NAME)
    isExists = true
  } catch (e) {
    chalk.red('Dotfile not exists')
  }

  return isExists
}

/*
 *  Create dotfile
 *
 *  @param    {object}  options payload object
 *  @return   {boolean}
 */
export const createDefaultFile = options => TPL.render(options)

/*
 *  Write dotfile
 *
 *  @param    {object}  options payload object
 *  @return   {boolean}
 */
export const writeDefaultFile = async str =>
  await writeFile(OPTIONS_FILE_NAME, str)

/*
 *  Run default quiz for generation dotfile
 *
 *  @return   {promise}
 */
export const runDefaultQuiz = async () => {
  const responses = await defaultQuiz()

  await writeDefaultFile(
    createDefaultFile(responses)
  )
}

runDefaultQuiz()
