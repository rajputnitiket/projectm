// App.js
import React from 'react';
import Input from './component/Input';
import Select from './component/Select';
import Button from './component/Button';
import { getDatabase } from "firebase/database";
import { app } from './firebase.js';

const db = getDatabase(app);


function App() {
  return (
    <div>
      <h1>Redux Toolkit Shared Components</h1>
      <Input />
      <Input />
      <Select />
      <Button />
    </div>
  );
}

export default App;
