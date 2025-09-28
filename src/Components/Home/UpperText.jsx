import Video from "./Video"


const UpperText = () => {
    return (
        <div className="font-[font1] text-[10vw] text-center pt-3 uppercase">

            <div className="leading-32">
                The spark for
            </div>
            <div className="leading-32 flex justify-center items-center">
                all <div className="h-[9vw] overflow-hidden rounded-full"><Video/> </div> things
            </div>
            <div className="leading-32 pt-2">
                creative
            </div>

        </div>
    )
}

export default UpperText