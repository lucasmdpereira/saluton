import { getCountries } from './services/getCountries.js'
import { getGreetings } from './services/getGreetings.js'

//'./data/util/countriesData.csv'
//'./data/util/greetings.csv'

export const countries = await getCountries('./data/util/countriesData.csv')
export const greetings = await getGreetings('./data/util/greetings.csv')

export async function queryInCountries(query, response){
    const countryIndex = countries.findIndex(country => country.Name === query.params.query);
    if(countryIndex !== -1) return response.status(200).json(countries[countryIndex])
    return response.status(404).json("Not Found")
}

export async function queryGreetings(query, response){
    const greetingIndex = greetings.findIndex(greeting => greeting.Language === query.params.query);
    if(greetingIndex !== -1) return response.status(200).json(greetings[greetingIndex])
    return response.status(404).json("Not Found")
}

