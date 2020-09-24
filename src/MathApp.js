import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

import MatrixScreen from './components/matrix/MatrixScreen';

const Math = () => {
    return (
        <Provider store={store}>
            <MatrixScreen />
        </Provider>
    )
}

export default Math;
