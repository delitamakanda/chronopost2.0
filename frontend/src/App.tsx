import Tabbar from 'components/ui/Tabbar';
import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import CustomersScreen from 'screens/customers';
import OrdersScreen from 'screens/orders';
import Header from 'components/ui/Header';
import Modal from 'components/modal/Modal';
import Customer from 'screens/modals/customer';
import Order from 'screens/modals/order';
import NestedView from 'components/views/NestedView';

const App = () => {
  const location = useLocation();
  return (
    <div className="w-full h-screen">
        <div id="top-navigation" className="block fixed inset-x-0 top-0 z-10 bg-white shadow">
          <Header headerShown={false} title={location.pathname.split('/')[1]} />
        </div>
        <main>
          <Routes>
            <Route path="*" element={<Navigate to="/orders" />} />
            <Route path="/orders" element={<OrdersScreen />} children={
              <>
                <Route path="/orders/:orderId" element={
                  <NestedView>
                    <Order />
                  </NestedView>
                } />
              </>
            } />
            <Route path="/customers" element={<CustomersScreen />} children={
              <>
                <Route path="/customers/:id" element={<Modal>
                  <Customer />
                </Modal>} />
              </>
            } />
          </Routes>
        </main>
        <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
          <Tabbar />
        </section>
    </div>
  );
}

export default App;
