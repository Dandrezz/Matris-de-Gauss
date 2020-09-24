import { types } from "../types/types";

 export const eliminacionGauss = ( input ) => {
    return ( dispatch ) => {
        
        let matrixA = [];
        let matrixB = [];
        let [mtxA, mtxB] = input.split('=');
        if( (mtxA[0] === '{') && (mtxA[1] === '{') && (mtxA[mtxA.length - 1] === '}') && (mtxA[mtxA.length - 2] === '}') ){
            mtxA = mtxA.substr( 2, mtxA.length - 4 );
            let count = 0;
            mtxA.split('},{').forEach(element => {
                matrixA[count] = [...element.split(',').map(parseFloat)];
                count++;
            });
        }else{
            return;
        }
        if( (mtxB[0] === '{') && (mtxB[mtxB.length - 1] === '}') ){
            mtxB = mtxB.substr( 1, mtxA.length - 2 );
            matrixB = [...mtxB.split(',').map(parseFloat)];
        }else{
            return;
        }

        dispatch( loadInput( matrixA.map( element => [...element] ) ) );
        dispatch( loadAnswerTemp( [...matrixB] ) )

        let x = [];
        for (let index = 0; index < matrixA.length; index++) {
            x[index] = 0;
        }

        for (let i = 0; i < matrixA.length - 1; i++) {
            for (let j = i + 1; j < matrixA.length; j++) {
                let mik=matrixA[j][i]/matrixA[i][i];
                for (let k = 0; k < matrixA.length; k++) {
                    matrixA[j][k]=matrixA[j][k]-mik*matrixA[i][k];
                }                
                matrixB[j]=matrixB[j]-mik*matrixB[i];
            }            
        }

        dispatch( loadEchelonMatrix( {matrixA, matrixB} ) );

        for (let i = matrixA.length - 1; i >= 0; i--) {
            let suma = 0;
            for (let j = i; j < matrixA.length; j++) {
                suma+=matrixA[i][j]*x[j];                
            }
            x[i]=(1/matrixA[i][i])*(matrixB[i]-suma);
        }

        dispatch( loadAnswer(x) )

        console.log(x);

    }
 }

 const loadInput = ( input ) => ({
     type: types.calculateLoadInput,
     payload: input
 })

 const loadAnswer = ( answer ) => ({
    type: types.calculateLoadAnswer,
    payload: answer
 })

 const loadEchelonMatrix = ( echelonMatrix ) => ({
    type: types.calculateLoadEchelonMatrix,
    payload: echelonMatrix
 })

 const loadAnswerTemp = ( answerTemp ) => ({
    type: types.calculateLoadAnswerTemp,
    payload: answerTemp
 })