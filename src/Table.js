
function Table(props){
    return (
        <section className="flex flex-col shadow-lg pt-7 pb-7 w-10/12 ml-8 z-10 mt-44 bg-white rounded-2xl absolute lg:flex-row lg:ml-44 lg:p-16 lg:w-9/12 lg:">
            <div className="m-auto lg:mt-0 lg:ml-0 lg:mr-20">
                <h4 className="text-gray-500 font-bold text-xs text-center lg:text-left lg:text-sm">IP ADDRESS</h4>
                <p className="font-bold lg:text-2xl lg:mt-2">{props.client_ip}</p>
            </div>
            <div className="m-auto mt-4 lg:mt-0 lg:ml-0 lg:border-l-2 lg:mr-16">
                <h4 className="text-gray-500 font-bold text-xs text-center lg:text-left lg:ml-6 lg:text-sm">LOCATION</h4>
                <p className="font-bold lg:text-2xl lg:mt-2  lg:ml-6">{props.client_location}</p>
            </div>
            <div className="m-auto mt-4 lg:mt-0 lg:ml-0 lg:border-l-2 lg:mr-16">
                <h4 className="text-gray-500 font-bold text-xs text-center lg:text-left lg:ml-6 lg:text-sm">Continante Name</h4>
                <p className="font-bold lg:text-2xl lg:mt-2 lg:ml-6">{props.client_timeZone}</p>
            </div>
            <div className="m-auto mt-4 lg:mt-0 lg:ml-0 lg:border-l-2 ">
                <h4 className="text-gray-500 font-bold text-xs text-center lg:text-left lg:ml-6 lg:text-sm">Client ISP</h4>
                <p className="font-bold lg:text-2xl lg:mt-2 lg:ml-6">{props.client_Isp}</p>
            </div>
        </section>
    )
}

export default Table;