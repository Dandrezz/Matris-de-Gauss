import React from 'react';

const Answer = ({matrixA, matrixB}) => {
    matrixA.forEach(element => {
        console.log(element)
    });
    return (
        <div>
            <table className="table-matrix">
                <tbody>
                    {
                        matrixA.map((element, index) => (
                            <tr key={index}>
                                {element.map( (i, position) => (
                                    <td key={position}>{i.toPrecision(4)} </td>
                                ))}
                                <td></td>
                                <td>
                                    { matrixB[index].toPrecision(4) }
                                </td>
                            </tr>
                        ))
                    }       
                </tbody>
            </table>
        </div>
    )
}

export default Answer
