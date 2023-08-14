import { useState } from 'react';
import Image from '../assets/images/customers.jpeg';
const CustomersScreen = () => {
    const [input, setInput] = useState<string>('');
    return (
        <div style={{ backgroundColor: '#59C1CC', height: '100vh'}}>
            <div className="w-full h-64">
                <img src={Image} alt="" />
            </div>
            <div className="bg-white pt-5 pb-5 px-10">
                <input type="text" placeholder="Search by Customer" value={input} onChange={(e) => setInput(e.target.value)} className="w-full border-b" />
            </div>
        </div>
    )
}

export default CustomersScreen;