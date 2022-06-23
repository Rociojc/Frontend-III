import { Contenedor, Lista } from '../Style/TarjetaStyle'

const Tarjeta = ({ items }) => {
    return (
        <Contenedor>
            <Lista>
            {items.map((item) => (
                <li key={item.id}>
                    {item.movie ? item.movie : item.institute}
                </li>
            ))}
            </Lista>
        </Contenedor>
    )
}

export default Tarjeta;