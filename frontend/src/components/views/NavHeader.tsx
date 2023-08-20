import ChevronLeft from "components/icons/chevron-left";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
    title: string,
    backTitle: string,
    color: string,
}

const NavHeader = ({ title, backTitle, color}: Props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(location.pathname.split("/")[1], { replace: true });
    };

    return (
        <div className="flex flex-row items-center py-2 border-b" style={{flex: '1 1 0%'}}>
                    <button onClick={handleBack} className="flex items-center" style={{color: color}}>
                        <ChevronLeft color={color} /> {backTitle}
                    </button>
                    <div className="text-center px-10 font-bold text-black">{title}</div>
        </div>
    )
}

export default NavHeader;