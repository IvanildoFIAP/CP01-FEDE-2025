// Definir itens e conteudo

// Definir type
export type Item = {
    foto: string; //foto do carro
    id: number; //identificador unico do carro
    marca: string; //marca da marca
    modelo: string; //marca do modelo
    ano: number; //ano de lançamento
};

// Array com a lista de compra, contendo vários produtos
export const carrosData: Item[] = [
    { foto: 'https://motorshow.com.br/wp-content/uploads/sites/2/2016/09/11_ms399_onix1-e1515007175528.jpg', id: 1, marca: 'Chrvrolet', modelo: 'Onix', ano: 2017 },
    { foto: 'https://blog.olhonocarro.com.br/wp-content/uploads/2024/02/hyundai-hb20-comfort-2014-frente.jpg', id: 2, marca: 'Hyundai', modelo: 'HB20', ano: 2014 },
    { foto: 'https://blog.deltafiat.com.br/wp-content/uploads/2020/06/Fiat-Argo-2020.jpg', id: 3, marca: 'Fiat', modelo: 'Argo', ano: 2020 },
    { foto: 'https://cdn.motor1.com/images/mgl/6xYbG/s1/ford-focus-2016.jpg', id: 4, marca: 'Ford', modelo: 'Focus', ano: 2019 },
    { foto: 'https://cdn.motor1.com/images/mgl/YA7Ewq/s1/vollkswagen-polo-tsi-2023.jpg', id: 5, marca: 'Volkswagen', modelo: 'Polo', ano: 2023 },
];