import mainStack from "../../assets/images/main-technos.png";
import otherTechnos from "../../assets/images/other-technos.png";
import softSkills from "../../assets/images/soft-skills.png";

export default function Skills() {
  return (
    <div className="flex flex-1 flex-col items-center min-h-screen space-y-12 px-5 py-12 bg-background-900">
      <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
        My skills
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-9xl mx-auto w-full max-w-[1500px]">
        <div className="flex flex-col space-y-5 rounded-3xl bg-background-600 col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] p-5">
          <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">
            Main technical stack
          </p>
          <div className="flex flex-col lg:flex-row flex-auto justify-center items-center px-3 space-y-5 lg:space-y-0 lg:space-x-8 md:px-12">
            <p className="lg:text-xl">
              I work on both websites and mobile apps. To do so, I mainly use
              the ReactJS framework (or React Native for mobile apps), combined
              with a Node.js server and an API in Express.js, with data hosted
              on a MongoDB database. All development was version-controlled with
              Git, using advanced branching workflows to manage features, fixes,
              and production releases.
            </p>

            <img className="h-72 aspect-square" src={mainStack}></img>
          </div>
        </div>
        <div className="flex flex-col space-y-5 rounded-3xl bg-[#330922] col-span-1 h-full min-h-[300px] p-5">
          <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">
            Soft skills
          </p>
          <div className="flex flex-row flex-auto justify-center items-center px-3 space-x-8">
            <img className="h-72 object-contain" src={softSkills}></img>
          </div>
        </div>
        <div className="flex flex-col space-y-5 rounded-3xl bg-background-700 col-span-1 h-full min-h-[300px] p-5">
          <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">
            Project Management Skills
          </p>
          <div className="flex flex-row flex-auto justify-center items-center px-3 space-x-8">
            <p className="lg:text-xl">
              I developed strong project management skills through both my
              company experience and university training, enabling me to
              prioritize tasks, manage time efficiently, and stay organized. I
              am proficient in using agile methods and handling client meetings
              effectively.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 rounded-3xl bg-background-800 col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] p-5">
          <p className="flex font-Literata tracking-widest text-2xl md:text-3xl text-start">
            Supplementary technical skills
          </p>
          <div className="flex flex-col lg:flex-row flex-auto justify-center items-center px-3 space-y-3 lg:space-x-8 md:px-12">
            <img className="md:w-40 lg:w-52 xl:w-80" src={otherTechnos}></img>

            <p className="lg:text-xl">
              Through personal projects and university evaluations, I've gained
              a wide range of skills such as SwiftUI development, machine
              learning, deep learning, .NET development, Unity's environment,
              algorithm design, testing, embedded development, Docker, graph and
              mathematical theory, code optimization, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
