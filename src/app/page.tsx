import ChessFooter from "./components/ChessFooter";
import Main from "./components/Main";
import me from "./assets/me.jpg";
import Image from 'next/image';
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 pb-10 md:pb-32">
      <Main />
      <div className="bg-background-800">
        <div className="px-5 md:px-12 lg:px-26 xl:px-32">
          <div className="flex flex-col md:flex-row rounded-3xl p-12 space-y-12 md:space-x-12 justify-center items-center md:py-32">
            <p className="flex flex-auto text-md md:text-lg text-center md:text-start">Bonjour et bienvenue sur mon portfolio ! Je suis développeuse full stack avec une expertise particulière en ReactJS et React Native. Actuellement en alternance, je partage mon temps entre l'entreprise BECOMS et l'IUT Informatique de Clermont-Auvergne, où je suis en dernière année de BUT Informatique. Passionnée par la technologie, je suis constamment à la recherche de nouvelles connaissances et de moyens d'améliorer mes compétences. Mon dynamisme et ma curiosité me poussent à explorer de nouveaux horizons et à relever des défis passionnants.</p>
            <div className="h-64 xl:h-72 aspect-square bg-primary-600 rounded-3xl" >
              <Image className="object-cover overflow-hidden h-64 xl:h-72 bg-primary-600 rounded-3xl" src={me} alt="me" />
            </div>
          </div>
        </div>
      </div>

      {/* <p>Et en dehors du travail ?</p>
      <p>En dehors de mon travail de développeuse, je nourris une passion pour les échecs que j'ai commencée il y a un peu plus d'un an. Chaque partie est une nouvelle occasion d'apprendre et de perfectionner mes stratégies. Les animaux occupent également une place importante dans ma vie. L'année prochaine, j'ai pour projet de devenir bénévole dans un refuge, une manière pour moi de rendre aux animaux l'amour qu'ils m'ont toujours apporté. J'ai grandi entourée d'animaux et je partage actuellement ma vie avec un adorable chat.<br /><br />Merci d'avoir pris le temps de découvrir mon univers. N'hésitez pas à me contacter pour toute collaboration !</p> */}
      <Skills />
    </div>
  );
}
