import ChessFooter from "./components/ChessFooter";
import NameAndStatus from "./components/NameAndStatus";
import me from "./assets/me.jpg";
import Image from 'next/image';

export default function Home() {
  return (
      <div className="flex flex-col flex-1 px-5 md:px-12 lg:px-26 xl:px-32 pb-10 md:pb-32">
        <NameAndStatus />
        <div className="flex flex-col md:flex-row rounded-3xl p-12 space-y-12 md:space-x-12 justify-center items-center">
          <p className="flex flex-auto text-md md:text-lg text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className="h-64 aspect-square bg-primary-600 rounded-3xl" >
            <Image className="object-cover overflow-hidden h-64 bg-primary-600 rounded-3xl" src={me} alt="me" />
          </div>
        </div>
      </div>
  );
}
