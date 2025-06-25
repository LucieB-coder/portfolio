import meNoBg from "../../assets/images/me-no-bg.jpg";
import me from "../../assets/images/me.webp";


export default function Welcome() {
  return (
    <div >
      <DesktopWelcome />
      <MobileWelcome />
    </div>
  )
}


export function MobileWelcome() {
  return (
    <div className="flex lg:hidden flex-1 flex-col items-center py-8 min-h-screen">
      <p className="pb-3 flex font-Literata tracking-widest text-5xl text-center text-nowrap">LUCIE B.</p>

      <div className="flex flex-auto flex-col space-y-5 px-8 max-h-3/4 max-w-lg">
        <div className="relative flex flex-1 m" >
          <img className="object-cover overflow-hidden" src={me} alt="me" />
          <div className="absolute w-full h-full bg-black opacity-25" />
        </div>
        <h1 className="-mt-24 z-50 font-Literata tracking-widest text-5xl text-end">FULL<br /> STACK DEVELOPER</h1>
      </div>
    </div>
  )
}

export function DesktopWelcome() {

  return (
    <div className="hidden lg:flex w-screen min-h-screen max-h-screen items-center justify-center relative bg-primary-100">
      <img className="object-cover overflow-hidden h-screen max-w-9xl object-top" src={meNoBg} alt="me" />
      <div className="absolute w-full h-full text-background-400 pt-34 xl:pt-24 items-center justify-center">
        <p className="font-Literata italic text-7xl xl:text-[8rem] flex space-x-56 justify-center pl-34 xl:pl-56"><span>Hey</span> <span>There !</span></p>
      </div>

      <div className="absolute flex w-screen h-screen bottom-0 left-0 text-background-400 justify-center items-center">
        <div className="flex flex-1 p-14 items-end justify-between max-w-7xl">
          <p className="text-lg xl:text-xl flex px-5 py-3 justify-center text-start bg-white shadow-sm rounded-full items-center"><span className="bg-primary-500 rounded-full h-3 w-3 animate-pulse mr-2" /> Open to new opportunities</p>
          <p className="xl:text-lg flex space-x-56 justify-center tracking-tight pr-5">Junior web developer skilled in<br />React and Express, committed<br />to ongoing growth.</p>
        </div>
      </div>

      <div className="absolute flex w-screen bottom-0 left-0 text-background-400 justify-center">
        <div className="flex flex-1 p-14 items-end justify-between max-w-7xl">
          <p className="font-semibold text-7xl xl:text-8xl flex space-x-56 justify-center tracking-tight text-start">I AM <br />LUCIE</p>
          <p className="font-semibold text-3xl xl:text-5xl flex space-x-56 justify-center tracking-tight">FULL<br />STACK<br />DEVELOPER</p></div>
      </div>
    </div>
  )
}
