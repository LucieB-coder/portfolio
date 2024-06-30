import resume from "../assets/CV-Lucie-BEDOURET.pdf";

const Resume = () => {
    return (
        <div className="flex flex-1 flex-col items-center space-y-8 min-h-screen py-12">
            <h3 className="flex font-Literata tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">Resume</h3>
            <p className="px-5 text-center">Here is my resume in french, don't hesitate to contact me if you need it in english</p>
            <iframe className="flex flex-1" src={resume} width={"90%"} />
        </div>
    );
}
export default Resume;