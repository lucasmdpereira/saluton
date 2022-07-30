import { getProperties } from '../../data/services/getProperties.js'
import { CreateClass } from './CreateClass.js'

const properties = await getProperties('./data/util/greetings.csv')
export const Greeting = await new CreateClass(properties)