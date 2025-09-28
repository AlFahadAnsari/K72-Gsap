import { Link } from "react-router-dom"

const BottomText = () => {
    return (
        <div className='font-[font2]'>
            <div className='absolute bottom-56 right-12 w-[17vw] text-sm'>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
            </div>

            <div className="uppercase flex justify-center gap-5 ">
                <Link to={'/work'} className="border-4 text-[6vw] rounded-full px-8 leading-28 hover:text-[#D3FD50] pt-1">Work</Link>
                <Link to={'/agency'} className="border-4 text-[6vw] rounded-full px-8 leading-28 hover:text-[#D3FD50] pt-1">Agency</Link>
            </div>
        </div>
    )
}

export default BottomText