const Skills = () => {
    return (
        <div className="w-full rounded-md py-32 relative flex flex-col items-center justify-center space-y-24">
            <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl font-bold text-center text-white relative px-5">Mes <span className="bg-gradient-to-r from-primary-400 to-primary-500 via-primary-300 rounded-lg px-2 py-1 md:px-5 md:py-3">compétences</span></h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <div className="rounded-3xl bg-primary-700 col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]">
                    <p>coucou</p>
                </div>
                <div className="rounded-3xl bg-primary-600 col-span-1 min-h-[300px]">
                    <p>lol</p>
                </div>
                <div className="rounded-3xl bg-primary-400 col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                    <p>wihuu</p>
                </div>
            </div>
        </div >
    )
}

export default Skills;