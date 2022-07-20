// Generic types
function addItemToList<GeneralProperty>(vector: any[], value: GeneralProperty){
    return vector.map(element => element + value);
}

addItemToList([1, 3, 5], 2);