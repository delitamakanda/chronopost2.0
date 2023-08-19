import { useState, useEffect } from 'react';
import Image from '../assets/images/customers.jpeg';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from 'graphql/queries';
import CustomerCard from 'components/ui/CustomerCard';
import { Outlet } from 'react-router-dom';

const CustomersScreen = () => {
    const [input, setInput] = useState<string>('');
    const { loading, data, error } = useQuery(GET_CUSTOMERS, { variables: { offset: 0 } });
    
    useEffect(() => {
    }, []);

    const handleSubscribeToNewCustomers = () => {
       console.log('Subscribe to new customers')
    }
    return (
        <div style={{ backgroundColor: '#59C1CC'}}>
            <div className="w-full h-64">
                <img src={Image} alt="" />
            </div>
            <div className="bg-white pt-5 pb-5 px-10">
                <input type="text" placeholder="Search by Customer" value={input} onChange={(e) => setInput(e.target.value)} className="w-full border-b" />
            </div>
            <div className="px-5 pb-20 pt-5">
                {error && <p className="text-red-500 text-center">{JSON.stringify(error)}</p>}
                {data?.listCustomers?.results?.filter((customer: any) => customer.lastName.includes(input))
                .map((customer: any, idx: number) => (
                    <CustomerCard key={idx} email={customer.email} id={customer.id} name={`${customer.firstName} ${customer.lastName }`} />
                ))
            }
                <button style={{ color: '#59C1CC'}} onClick={handleSubscribeToNewCustomers} className="w-full rounded bg-white p-2">Load more results</button>
            </div>
            {loading && <div>Loading...</div>}
            <Outlet />
        </div>
    )
}

export default CustomersScreen;