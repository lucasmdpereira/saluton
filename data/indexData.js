import { getCountries } from './services/getCountries.js'
import { getGreetings } from './services/getGreetings.js'

//'./data/util/countriesData.csv'
//'./data/util/greetings.csv'

const countries = await getCountries('./data/util/countriesData.csv')
const greetings = await getGreetings('./data/util/greetings.csv')
console.log(countries)
console.log(greetings)

