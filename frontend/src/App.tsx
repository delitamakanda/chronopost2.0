import CustomersScreen from 'screens/customers';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OrdersScreen from 'screens/orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/orders" />} />
        <Route path="/orders" element={<OrdersScreen />} />
        <Route path="/customers" element={<CustomersScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
