

export default function Container({ children }){
    return (
        <>
        <div className=" lg:p-11 max-w-[1836px] overflow-hidden ">
            {children}
        </div>
        </>
    )
}