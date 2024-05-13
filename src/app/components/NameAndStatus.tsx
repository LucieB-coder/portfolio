const NameAndStatus = () => {
    return (
        <div className="h-fit py-12 md:16 lg:24 xl:py-32 flex flex-1 flex-col items-center justify-center overflow-hidden rounded-md">
            <h2 className="font-WindSong text-2xl lg:text-4xl xl:text-6xl font-bold text-center">Lucie Bedouret</h2>
            <h1 className="text-xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-center text-white relative px-5">
                DÉVELOPPEUSE WEB <span className="text-primary-500">&</span>{" "}MOBILE
            </h1>
            <div className="w-[25rem] lg:w-[40rem] h-3 relative">
                {/* Gradient  Line */}
                <div className="absolute inset-x-20 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-10 lg:inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-200 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-44 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary-200 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 lg:inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary-200 to-transparent h-px w-1/4" />
            </div>
        </div>
    )
}

export default NameAndStatus;