import { Greeting } from '../../app/classes/Greeting.js'
import { getValues } from './getValues.js'

export async function getGreetings(path){
    let greetings = []
    const values = await getValues(path)
    for(let i in values){
        greetings.push(new Greeting(values[i]))
    }
    return greetings
}