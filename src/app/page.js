import Image from "next/image";
import pista from '../../public/siluetaPista.png'
import pelota from '../../public/pelota.png'
import './globals.css'
import { Seo } from "@/components/Seo";
import { Body } from "@/components/body/body";
import Video from "@/components/video";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen items-center justify-center p-24">


//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src={pelota}
//           alt="Pelota de tenis"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>


//     </main>
//   )
// }
export default function App(){
  return(
      <div>
          <Seo 
            title={'Escuela de Tenis en Los Cristianos | Tenerife Sur Tennis School'}
            metaName={"description"}    
            metaContent={'Aprende y mejora tus habilidades de tenis en Los Cristianos, Tenerife Sur. Nuestra escuela de tenis ofrece clases de alta calidad para todas las edades y niveles con entrenadores experimentados.'}
            metaKey={'escuela de tenis, Los Cristianos, Tenerife Sur, clases de tenis, entrenadores de tenis'}
          />
          <Body/>
      </div>
  )
}