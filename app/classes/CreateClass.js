export class CreateClass {
  
    constructor(propNames){
        return class {
            constructor(propValues){
                propNames.forEach((name, idx) => {
                    this[name] = propValues[idx];
                });
            }
        }
    }
}