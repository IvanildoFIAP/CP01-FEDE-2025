import { Item } from '../data/carrosData';
import Link from 'next/link';

type listaCarrosProps = {
    itens: Item[];
}

function listaCarros(props: listaCarrosProps) {
    // Limita a exibição aos 3 primeiros itens
    const itensExibidos = props.itens.slice(0, 3);

    return (
        <>
            <h2>Modelos mais procurados</h2>
            {itensExibidos.map(function (item) {
                return (
                    <div className='lista-veiculos' key={item.id}>
                        <p>Marca: {item.marca}</p>
                        <p>Modelo: {item.modelo}</p>
                        <p>Ano de lançamento: {item.ano}</p>
                        <Link href={`/detalhesVeiculo/${item.id}`}>
                            Mais Detalhes &gt;
                        </Link>
                        <hr />
                    </div>
                );
            })}
            <div className='btn2'>
                <Link href={`/listaCarros/`}>
                    Ver lista completa
                </Link>
            </div>
        </>
    );
}

export default listaCarros;