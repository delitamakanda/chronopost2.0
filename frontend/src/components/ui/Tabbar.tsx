import { useNavigate } from "react-router-dom";
import { useTabs } from "store";
import ShoppingBag from "components/icons/shopping-bag";
import UserCircle from "components/icons/user-circle";


const Tabbar = () => {
    const { state: { tabs } } = useTabs()
    const navigate = useNavigate()
    return (
        <nav className="flex h-20 justify-center items-center">
        <ul className="flex">
          {tabs.map((tab: { path: string; title: string, icon: string}, idx: number) => (<li key={idx} onClick={() => navigate( tab.path)} className="cursor-pointer">
            <div>
                {tab.icon === 'orders' ? <ShoppingBag /> : <UserCircle />}
            </div>
            <div>
                {tab.title}
            </div>
          </li>))}
        </ul>
        </nav>
    )
}

export default Tabbar;