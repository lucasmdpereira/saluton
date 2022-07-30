import { Country } from '../app/classes/Country.js'
import { Greetings } from '../app/classes/Greetings.js'

const country = await new Country([])
console.log(country)
const greetings = await new Greetings([])
console.log(greetings)
