
import { Item } from '../data/carrosData';
import Link from 'next/link';

type listaCarrosProps = {
    itens: Item[];
}

function listaCarros(props: listaCarrosProps) {
    return (
        <>
            <h2>Lista de Carros</h2>
            {props.itens.map(function (item) {
                return (
                    <div key={item.id}>
                        <p>Marca: {item.marca}</p>
                        <p>Modelo: {item.modelo}</p>
                        <p>Ano de lançamento: {item.ano}</p>
                        <Link href={`/detalhesVeiculo/${item.id}`}>
                            Mais Detalhes
                        </Link>
                        <hr />
                    </div>
                );
            })};
        </>
    )
};

export default listaCarros;