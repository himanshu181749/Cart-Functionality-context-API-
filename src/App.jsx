import Card from './components/Card';
import products from '../product.json'; // Assuming you saved the JSON data in products.json
import { MyProvider, MyContext } from './MyContext.jsx';
import NavComponent from './components/NavComponent.jsx';

const App = () => {
  return (
    <MyProvider>
      <NavComponent />
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Card product={product} />
        ))}
        {/* <Card product={products[0]} /> */}
      </div>
    </MyProvider>
  );
};

export default App;
