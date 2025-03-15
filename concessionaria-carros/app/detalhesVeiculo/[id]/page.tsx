//app /detalhesProduto/[id]/page.tsx 
import { carrosData } from "@/data/carrosData";
//em next.js 13 os parâmetros de rota são recebidos 
// através do objeto 'params' passado como propriedade 
type detalhesVeiculoProps = {
    params: {
        id: string; // O id do produto é recebido como string. 
    }
}
function detalhesVeiculo(props: detalhesVeiculoProps) {
    //Convert do id(string) para inteiro 
    var veiculoID = parseInt(props.params.id);
    //Procurar em uma array carrosData o produto com id correspondente. 
    var veiculo = carrosData.find(function (item) {
        return item.id === veiculoID;
    });
    //se o produto encontrado exibe detahes dele 
    return (
        <>
            <h2>DETALHES DO VEÍCULO</h2>
            <img src={veiculo?.foto} alt={`${veiculo?.modelo}`} />
            <p><strong>ID:</strong>{veiculo?.id} </p>
            <p><strong>Marca:</strong>{veiculo?.marca}</p>
            <p><strong>Modelo:</strong>{veiculo?.modelo}</p>
            <p><strong>Ano de lançamento:</strong>{veiculo?.modelo}</p>
        </>
    )
}
export default detalhesVeiculo; 