
import Link from 'next/link';

function Header() {
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/listaCarros">Lista de Compras</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;