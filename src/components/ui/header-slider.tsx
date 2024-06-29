import Slider from "react-slick";

const HeaderSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
            <div className="h-[calc(100vh-200px)] rounded-xl flex">
                <div className="flex justify-between flex-col h-full p-20">
                    <div></div>
                    <div>
                        <div>
                            <div
                                className="bg-amber-600 text-white px-3 py-2 text-xs uppercase w-[80px] rounded-full text-center mb-3">Games
                            </div>
                            <div className="text-7xl text-white font-semibold my-5">title text here</div>
                            <div className="text-sm font-light text-slate-100">Date - details</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div
                            className="bg-gray-100 bg-opacity-50 backdrop-blur-lg px-3 py-4 rounded-lg min-h-[120px] flex justify-center items-center gap-3">
                            <div className="bg-white rounded-md h-full w-[100px]"></div>
                            <div className="flex-1">
                                <div>Event title</div>
                                <div>Content</div>
                            </div>
                        </div>
                        <div
                            className="bg-gray-100 bg-opacity-50 backdrop-blur-lg px-3 py-4 rounded-lg min-h-[120px] flex justify-center items-center gap-3">
                            <div className="bg-white rounded-md h-full w-[100px]"></div>
                            <div className="flex-1">
                                <div>Event title</div>
                                <div>Content</div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-100 bg-opacity-50 backdrop-blur-lg px-3 py-4 rounded-lg min-h-[120px] flex justify-center items-center gap-3">
                            <div className="bg-white rounded-md h-full w-[100px]"></div>
                            <div className="flex-1">
                                <div>Event title</div>
                                <div>Content</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[calc(100vh-200px)] rounded-xl flex">
                <div className="flex justify-between flex-col h-full p-20">
                    <div></div>
                    <div>
                        <div>
                            <div
                                className="bg-amber-600 text-white px-3 py-2 text-xs uppercase w-[80px] rounded-full text-center mb-3">Games
                            </div>
                            <div className="text-7xl text-white font-semibold my-5">title text here</div>
                            <div className="text-sm font-light text-slate-100">Date - details</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div
                            className="bg-gray-100 bg-opacity-50 backdrop-blur-lg px-3 py-4 rounded-lg min-h-[120px] flex justify-center items-center gap-3">
                            <div className="bg-white rounded-md h-full w-[100px]"></div>
                            <div className="flex-1">
                                <div>Event title</div>
                                <div>Content</div>
                            </div>
                        </div>
                        <div
                            className="bg-gray-100 bg-opacity-50 backdrop-blur-lg px-3 py-4 rounded-lg min-h-[120px] flex justify-center items-center gap-3">
                            <div className="bg-white rounded-md h-full w-[100px]"></div>
                            <div className="flex-1">
                                <div>Event title</div>
                                <div>Content</div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-100 bg-opacity-50 backdrop-blur-lg px-3 py-4 rounded-lg min-h-[120px] flex justify-center items-center gap-3">
                            <div className="bg-white rounded-md h-full w-[100px]"></div>
                            <div className="flex-1">
                                <div>Event title</div>
                                <div>Content</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default HeaderSlider;