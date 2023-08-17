import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import XCircle from "components/icons/close-circle";

type Props = {
    children: React.ReactNode
};
const Modal = ({children }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleClose = () => {
        setShowModal(false)
        navigate(`/${location.pathname.split("/")[1]}`, { replace: true });
    };
    
    useEffect(() => {
        const id = location.pathname.split("/")[2];
        if (id) {
            setShowModal(true);
        }

    }, [location.pathname]);
    return (
        <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-5 flex-auto">
                <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-1 absolute right-5 top-5 text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClose}
                  >
                    <XCircle />
                  </button>
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    )
}

export default Modal;