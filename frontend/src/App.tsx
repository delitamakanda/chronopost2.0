import Tabbar from 'components/ui/Tabbar';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import CustomersScreen from 'screens/customers';
import OrdersScreen from 'screens/orders';

function App() {
  return (
    <div className="App">
      <main>
      {/* TODO: add content */}
      <Routes>
        <Route path="/" element={<Navigate to="/orders" />} />
        <Route path="/orders" element={<OrdersScreen />} />
        <Route path="/customers" element={<CustomersScreen />} />
      </Routes>
      </main>
      <Tabbar />
    </div>
  );
}

export default App;
