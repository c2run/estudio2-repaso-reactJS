
export function HelloWorld(props) {

    // nombre = 'Pepe';

    return (
    <>
    <h1>Hola Mundo!!! desde función</h1>
    <h2>Que tal? {props.user} con el id: {props.id}</h2>
    </>
)
}