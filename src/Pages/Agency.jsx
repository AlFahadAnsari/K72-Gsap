import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { imageArray } from '../Data'
import CarlMain from "../assets/agencyImage/Carl_480x640-480x640.jpg";

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger)
  const ImageDiv = useRef(null)
  const ImageSrc = useRef(null)


  // console.log(ImageSrc.current.src)

  useGSAP(() => {
    gsap.to(ImageDiv.current, {
      scrollTrigger: {
        trigger: ImageDiv.current,
        start: "top 20%",
        end: "top -80%",
        scrub: 1,
        pinSpacing: true,
        pinType: "transform",
        pinReparent: true,
        invalidateOnRefresh: true,
        anticipatePin: true,
        pin: true,
        onUpdate: (el) => {
          // console.log(Math.floor(el.progress * imageArray.length))
          let ImageIndex;
          if (el.progress < 1) {
            ImageIndex = Math.floor(el.progress * imageArray.length)
          } else {
            ImageIndex = imageArray.length - 1
          }
          ImageSrc.current.src = imageArray[ImageIndex]
          // console.log(imageArray[ImageIndex])
        }
      }
    })
  })

  return (
    <>
      <div className=" py-1">

        <div ref={ImageDiv} className='h-[20vw] w-[15vw] absolute overflow-hidden top-40 left-1/3'>
          <img ref={ImageSrc} src={CarlMain} alt="" className='rounded-2xl' />
        </div>

        <div className='font-[font2] relative'>
          <div className='mt-[50vh]'>
            <h1 className='text-[20vw] text-center uppercase  leading-[16vw] '>SEVEN7Y
              TWO</h1>
          </div>

          <div className='ml-[40%] '>
            <p className='text-6xl mt-20'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>


      </div>
    </>
  )
}

export default Agency