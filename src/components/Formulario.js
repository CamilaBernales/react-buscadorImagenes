import React,{useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({guardarBusqueda}) => {
    const[termino, guardarTermino] = useState('');
    const[error, guardarError]  = useState(false);

    const buscarImagenes = e => {
            e.preventDefault();
            //validar
            if(termino.trim()===""){
                guardarError(true);
                return;
            }
            guardarError(false);
            //enviar el termino de busqueda hacia el componente princial
            guardarBusqueda(termino);
    }

return (
    <form onSubmit={buscarImagenes}>
        <div className="row">
        <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol o café"
                        onChange={ e=> guardarTermino(e.target.value)}
                    />
        </div>
            <div className="form-group col-md-3">
                <input
                    type="submit"
                    className="btn btn-lg btn-danger btn-block"
                   value="buscar">
                </input>
            </div>
        </div>
        {error ? <Error mensaje="El campo no puede estar vacio." /> :null  }
    </form>

    );

}


export default Formulario;