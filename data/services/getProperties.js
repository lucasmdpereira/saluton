import fs from 'fs/promises'

//./data/util/countriesData.csv
//./data/util/greetings.csv

export async function getProperties(path){
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const dataSplit = data.split(/\r?\n/);
    
    const properties = dataSplit[0]
        .replaceAll(" ","_")
        .replaceAll("%","Percent")
        .replaceAll("?","")
        .split(";");
    return properties
}
