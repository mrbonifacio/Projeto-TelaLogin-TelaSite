import { iconeAjuda ,iconeCasa, iconeAjustes} from "./icons/index";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return (
        <aside>
            <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-300 flex flex-col items-center justify-center">
                LOGO
            </div> 
            <ul>
                <MenuItem url="/" texto ="Inicial" icone={iconeCasa}></MenuItem>
                <MenuItem url="ajuda" texto="Ajuda" icone={iconeAjuda}></MenuItem>
                <MenuItem url="ajustes" texto="Ajustes" icone={iconeAjustes}></MenuItem>
            </ul>           
        </aside>
    )
}