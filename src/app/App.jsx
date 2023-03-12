import { useState } from 'react';
import { ProductList } from '../pages/ProductList/ProductList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
