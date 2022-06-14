import ChildOne from "./Component/ChildOne";


// Como condicion para poder reutilizar un componentente debo asegurarme que en cualquier lugar donde lo importe el reciba la misma propiedad a los componentes padre
// Es por esta razon que pasamo la propiedad nameOfChild
// Estamo reutilizando un mismo hijo que childOne en tres componentes padre diferentes
const ThirdComponent = () => {
    return(
        <div>Third Compononent
            <ChildOne nameOfChild="This is the third component"/>
        </div>
    )
}

export default ThirdComponent;