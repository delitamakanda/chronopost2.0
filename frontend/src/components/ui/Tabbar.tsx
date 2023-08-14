import { useNavigate, useLocation } from "react-router-dom";
import { useTabs } from "store";
import ShoppingBag from "components/icons/shopping-bag";
import UserCircle from "components/icons/user-circle";


const Tabbar = () => {
    const { state: { tabs } } = useTabs()
    const navigate = useNavigate();
    const location = useLocation();

    const focused = (path: string) => {
        return location.pathname === path ? true : false;
    }
    return (
        <div id="tabs" className='flex justify-between'>
            <>
            {tabs.map((tab: { path: string; title: string, icon: string}, idx: number) => (<div key={idx} onClick={() => navigate( tab.path )} className={`cursor-pointer w-full justify-center inline-block text-center pt-2 pb-1 text-gray-500 ${tab.path === '/orders' && focused(tab.path) ? 'text-pink-500': ''} ${tab.path === '/customers' && focused(tab.path) ? 'text-blue-500': ''}`}>
                <span className="inline-block mb-1">
                    {tab.icon === 'orders' ? <ShoppingBag color={focused(tab.path) ? '#EC4899': '#6B7280'} /> : <UserCircle color={focused(tab.path) ? '#3B82F6': '#6B7280'} />}
                </span>
                <span className="tab tab-home block text-sm">
                    {tab.title}
                </span>
            </div>))}
            </>
        </div>
    )
}

export default Tabbar;