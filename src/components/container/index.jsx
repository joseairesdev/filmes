import * as C from './styled.js'

function Container (props){
    return (
        <C.Container>
           {props.children}
        </C.Container>
    );
}

export default Container;