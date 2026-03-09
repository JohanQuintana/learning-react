import { TailSpin } from 'react-loader-spinner'

export default function Loader(){
    return (
        <div style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)"}}>
            <TailSpin 
            height={80}
            width={80}
            color="#646cff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#646cff"
            strokeWidth={2}
            strokeWidthSecondary={2}/>
        </div>    
    )
}