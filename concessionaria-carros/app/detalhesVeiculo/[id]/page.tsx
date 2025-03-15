
import { carrosData } from "@/data/carrosData";
import Link from 'next/link';

type detalhesVeiculoProps = {
    params: {
        id: string; 
    }
}
function detalhesVeiculo(props: detalhesVeiculoProps) {
    var veiculoID = parseInt(props.params.id);
    var veiculo = carrosData.find(function (item) {
        return item.id === veiculoID;
    });
    return (
        <>
            <h1>DETALHES DO VEÍCULO</h1>
            <div className="card-carro">
                <div className="ft-carro">
                    <img src={veiculo?.foto} alt={`${veiculo?.modelo}`} />
                </div>
                <div className="info-carro">
                        <h2>Ficha técnica</h2>
                        <p><strong>Preço a vista: </strong>R${veiculo?.valor} </p>
                        <p><strong>Marca: </strong>{veiculo?.marca}</p>
                        <p><strong>Modelo: </strong>{veiculo?.modelo}</p>
                        <p><strong>Ano de lançamento: </strong>{veiculo?.ano}</p>
                </div>
            </div>
            <div className='btn2'>
                <Link href={`/listaCarros/`}>
                    Ir para a lista de carros
                </Link>
            </div>
        </>
    )
}
export default detalhesVeiculo; 