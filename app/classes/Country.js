import { getProperties } from '../../data/services/getProperties.js'
import { CreateClass } from '../classes/CreateClass.js'

const properties = await getProperties('./data/util/countriesData.csv')
export const Country = await new CreateClass(properties)