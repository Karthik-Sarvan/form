import { TailSpin } from "react-loader-spinner";
const Loader = ({load}) => {
    return (
        <>
            {load && <div className="fixed top-0 left-0 bg-opacity-25 bg-black h-[100vh] w-[100vw] flex flex-col justify-center items-center">
            <TailSpin
            height="50"
            width="50"
            color="#ffff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={load}
        />
        <p className="text-white">Loading...</p>
        </div>}
        </>
    );
};  
export default Loader;