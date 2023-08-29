import Bar from "@/components/Bar"
import Contenido from "@/components/Main"

function Page(){
    return(
        <div>
            <div className="body-1">
                <Bar />
            </div>
            <div className="body-2">
                <Contenido />
            </div>
        </div>
    )
}

export default Page