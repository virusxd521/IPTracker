import Input from './Input';


function Header(props){
    return (
        <header className="bg-road-pattern bg-no-repeat bg-cover flex flex-col pb-20">
            <h1 className="pt-7 m-auto text-white font-bold text-2xl">IP Address Tracker</h1>
            <Input funcAPI={props.funcAPI} client_ip={props.client_ip} clearCodinates={props.clearCodinates}  />
        </header>
    )
}

export default Header;