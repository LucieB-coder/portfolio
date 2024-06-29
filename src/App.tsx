import AboutMe from "./components/AboutMe.tsx";
import Welcome from "./components/Welcome.tsx";
// import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 pb-10 md:pb-32">
      <Welcome />
      <AboutMe />

      {/* <p>Et en dehors du travail ?</p>
      <p>En dehors de mon travail de développeuse, je nourris une passion pour les échecs que j'ai commencée il y a un peu plus d'un an. Chaque partie est une nouvelle occasion d'apprendre et de perfectionner mes stratégies. Les animaux occupent également une place importante dans ma vie. L'année prochaine, j'ai pour projet de devenir bénévole dans un refuge, une manière pour moi de rendre aux animaux l'amour qu'ils m'ont toujours apporté. J'ai grandi entourée d'animaux et je partage actuellement ma vie avec un adorable chat.<br /><br />Merci d'avoir pris le temps de découvrir mon univers. N'hésitez pas à me contacter pour toute collaboration !</p> */}
      {/* <Skills /> */}
    </div>
  );
}
