import { Country } from '../../app/classes/Country.js'
import { getValues } from './getValues.js'

//'./data/util/countriesData.csv'
//'./data/util/greetings.csv'

export async function getCountries(path){
    let countries = []
    const values = await getValues(path)
    for(let i in values){
        countries.push(new Country(values[i]))
    }
    return countries
}