import fs from 'fs/promises'

//'./data/util/countriesData.csv'
//'./data/util/greetings.csv'

export async function getValues(path){    
    let data = await fs.readFile(path, { encoding: 'utf8' });
    data = data.split(/\r?\n/).slice(1);
    let dataArray = []
    for (let i in data){
        dataArray.push(data[i].split(";"))
    }
    return dataArray
}