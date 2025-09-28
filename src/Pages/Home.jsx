import BottomText from '../Components/Home/BottomText'
import UpperText from '../Components/Home/UpperText'

import Video from '../Components/Home/Video'

const Home = () => {
    return (
        <div  className='text-white'>
            <div className='h-screen w-screen fixed '>
                <Video />
            </div>

            <div className='h-screen w-screen relative flex flex-col justify-between pb-4'>
                <UpperText />
                <BottomText />

            </div>

        </div>
    )
}

export default Home