import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eliminacionGauss } from '../../actions/calculation';
import Answer from './Answer';
import './MatrixScreen.css';

const MatrixScreen = () => {

    const {input:matrixA, answer, echelonMatrix, answerTemp} = useSelector(state => state.calculation);
    
    const dispatch = useDispatch();
    
    const [input, setInput] = useState("{{3,7,2},{5,1,7},{1,8,3}}={1,9,4}");
    const [answered, setAnswered] = useState(false);


    const handleInputChange = ({ target }) => {
        setInput( target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAnswered(true);
        dispatch( eliminacionGauss( input ) );
    }

    return (
        <>
            <form onSubmit={ handleSubmit } className="top-10">
                <div className="center-text mb-3">
                    <h1 className="color-blue same-line">
                        Diego
                    </h1>
                    <h1 className="color-orange same-line">
                        Alpha
                    </h1>
                </div>
                <input  
                    className="form-control main-input mb-3"
                    value={ input }
                    onChange={ handleInputChange }
                />
                <div className="text-center mb-5">
                    <h3>Eliminación de Gauss-Jordan</h3>
                </div>
            </form>
            { answered && (
            <div>
                <Answer matrixA={matrixA} matrixB={answerTemp}/>
                <hr></hr>
                <Answer matrixA={echelonMatrix.matrixA} matrixB={echelonMatrix.matrixB}/>
                <hr></hr>
                <table className="table-matrix">
                    <tbody>
                        {answer.map( (element, i) =>(
                            <tr key={i}>
                                <td>
                                    {element.toPrecision(3)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)}
        </>
    )
}

export default MatrixScreen;
