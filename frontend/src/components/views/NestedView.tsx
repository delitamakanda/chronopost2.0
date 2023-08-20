import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {
    children: React.ReactNode
}
const NestedView = ({ children }: Props) => {
    const [view, setView] = useState(false);
    const { orderId } = useParams();

    useEffect(() => {
        if (orderId) {
            setView(true);
        }
    }, [orderId]);
    return (
        <>
            {view ? (<div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none bg-white">
                <div className="relative my-6 mx-auto  w-full h-full">
                {children}
                </div>
            </div>) : null}
        </>
    );
}

export default NestedView;