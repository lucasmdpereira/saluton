import fs from 'fs/promises'

export async function getProperties(){
    const data = await fs.readFile('./data/util/countriesData.csv', { encoding: 'utf8' });
    const dataSplit = data.split(/\r?\n/);
    
    const properties = dataSplit[0]
        .replaceAll(" ","_")
        .replaceAll("%","Percent")
        .replaceAll("?","")
        .split(";");
    return properties
}