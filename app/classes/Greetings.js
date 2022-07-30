import { getProperties } from '../../data/services/getProperties.js'
import { CreateClass } from '../classes/CreateClass.js'

const properties = await getProperties('./data/util/greetings.csv')
export const Greetings = await new CreateClass(properties)