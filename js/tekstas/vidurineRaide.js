function vidurineRaide(text) {
    const textIlgis = text.length;

    const index = Math.ceil(textIlgis / 2 - 1); 
    return text[index];
}

export {vidurineRaide}

/*
tetis -> t (nelyginis)
teksto ilgis 5
vidurine raide 1.5

mano -> a (lyginis)
teksto ilgis 4
vidurine 1
*/