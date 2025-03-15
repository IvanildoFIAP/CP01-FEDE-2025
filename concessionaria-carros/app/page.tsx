import ListaCarros from '@/components/listaCarros';
import '../app/globals.css';
import { carrosData} from "../data/carrosData";

function page() {
  return (
    <>
      <h1>CONCESSIONÁRIO DE CARROS</h1>
        <ListaCarros itens={carrosData} />
    </>
  )
};

export default page;