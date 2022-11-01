import router, {useRouter} from "next/router"
import CampoTexto from "../components/CampoTexto"

export default function init(){
    return(
            <div className="flex items-center h-screen justify-center">
                <div className="hidden sm:block md:w1/2 lg:w-2/3">
                    <img src="https://source.unsplash.com/random" className="h-screen w-full"/>
                </div>
                <div className="m-10 w-full md:w-1/2 lg:w-2/3">
                <CampoTexto label="E-mail" tipo="email" valor="teste" />
                <CampoTexto label="Senha" tipo="password" valor="teste" />
                <button className="bg-indigo-500 hover:bg-indigo-400 w-full rounded-lg px-4 py-3 text-white mt-6" onClick={()=>router.push("/")} >Entrar</button>
                </div>
        </div>
    )
}