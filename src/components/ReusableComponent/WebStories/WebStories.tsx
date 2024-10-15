

function WebStories() {
  return (
    <main>
        <section>

        <section className="slideDown flex justify-start items-start h-[100px]  overflow-x-scroll scroll-smooth scrollbar-hide space-x-3 mx-5 mt-5">
                        {[1,2,3,4,5].map((i: any, d: number) => (
                            <main
                                onClick={() => {
                                    
                                }}
                                key={d}
                                className="flex flex-col items-center   "
                            >
                                <div className="w-[75px] h-[75px] rounded-full relative p-[3px]">
                                    <div className="gradient-bg" />
                                    <div className="flex flex-col justify-between h-full bg-white text-white rounded-full p-[3px] ">
                                        <img
                                            className="border-3 border-red-300 max-h-[63px] w-[63px] rounded-full object-cover"
                                            src={i?.data[0]?.avatar}
                                            alt={i?.name}
                                        />
                                    </div>
                                </div>

                                <div className="overflow-x-hidden font-roboto font-light text-xs text-center mt-1 ">
                                    {'Azad'}
                                </div>
                            </main>
                        ))}
                    </section>
        </section>
    </main>
  )
}

export default WebStories