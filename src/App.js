import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import InputComponent from './component/input.js';
import SelectComponent from './component/select.js';
import ButtonComponent from './component/button.js';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <InputComponent />
        <SelectComponent />
        <ButtonComponent />
      </div>
    </Provider>
  );
};

export default App;
