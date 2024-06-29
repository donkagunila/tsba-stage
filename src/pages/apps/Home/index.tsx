import {BentoGrid, BentoGridItem} from "../../../components/ui/bento-grid.tsx";

import {IconClipboardCopy, IconFileBroken, IconSignature,} from "@tabler/icons-react";
import Marquee from "react-fast-marquee";
import {Play} from "lucide-react";
import HeaderSlider from "../../../components/ui/header-slider.tsx";


const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const HomePage = () => {

    const items = [
        {
            title: "TSBA WELCOMES THE BEGINNING OF REFORMS IN SPORTS BETTING TAXATION",
            description: "Explore the birth of groundbreaking ideas and inventions.",
            header: <Skeleton/>,
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500"/>,
        },
        {
            title: "Sports Betting Earns Govt Tens of Billions in Revenue",
            description: "Dive into the transformative power of technology.",
            header: <Skeleton/>,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500"/>,
        },
        {
            title: "Taxation in Tanzania not Economically Viable",
            description: "Discover the beauty of thoughtful and functional design.",
            header: <Skeleton/>,
            icon: <IconSignature className="h-4 w-4 text-neutral-500"/>,
        },]
    return (
        <div>

            <section className="mx-[96px]">
                <div className="min-h-[calc(100vh-200px)] bg-primary text-white rounded-xl">
                    <HeaderSlider/>
                </div>
            </section>

            {/*What we do*/}
            <section className="my-32 mx-auto max-w-7xl">
                <div>
                    <div className="text-sm mb-4 font-semibold text-amber-400">WHAT WE DO</div>
                    <h3 className="text-[3.5rem] w-[50%] font-bold leading-none text-slate-800">Promoting fair,
                        reasonable and
                        justified
                        taxation
                        in all games</h3>
                </div>

                <div className="grid grid-cols-2 gap-2 my-8">
                    <div className="col-span-1 flex flex-col justify-between gap-3 pr-[60px]">
                        <div className="text-slate-600">
                            Laws should be clearly defined with regard to all taxes payable by operators as a result of
                            the promotion of games of chance.
                        </div>
                        <div>

                            <div className="flex items-center mt-8">
                                <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                                     src="/img/avatar.jpeg"
                                     alt=""/>
                                <div className="ml-4">
                                    <p className="text-base font-semibold text-slate-500">John Kokusima Muloki</p>
                                    <p className="mt-px text-sm text-gray-400">Sports Enthusiast</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-span-1">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="col-span-2">
                                <div className="text-slate-600">

                                    <div className="prose">
                                        <p className="leading-normal">
                                            <span className="text-4xl font-bold">W</span>e aim to work with specialists
                                            in international gaming regulation, decision makers, governmental
                                            departments and non-governmental institutions in order to improve and
                                            promote regulatory gaming and sports betting practice in Tanzania.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 mt-5">
                                <div className="text-slate-600">
                                    Laws should be clearly defined with regard to all taxes payable by operators as a
                                    result of
                                    the promotion of games of chance.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-primary sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-accentText sm:text-4xl sm:leading-tight">Numbers tell all
                            the
                            hard
                            works we’ve done in the past years</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-16 sm:grid-cols-2 md:gap-8">
                        <div className="overflow-hidden bg-white rounded-lg">
                            <div className="px-7 py-9">
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 w-16 h-16 text-gray-300"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                              d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                    <h3 className="ml-2 text-6xl font-bold text-gray-900">6</h3>
                                </div>
                                <p className="mt-6 text-base text-gray-600 md:max-w-xs">
                                    Members We have partnered and are working with
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-lg">
                            <div className="px-7 py-9">
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 w-16 h-16 text-gray-300"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                    <h3 className="ml-2 text-6xl font-bold text-gray-900">471+</h3>
                                </div>
                                <p className="mt-6 text-base text-gray-600 md:max-w-xs">
                                    Effected Regulations
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-lg">
                            <div className="px-7 py-9">
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 w-16 h-16 text-gray-300"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                                        />
                                    </svg>
                                    <h3 className="ml-2 text-6xl font-bold text-gray-900">1846</h3>
                                </div>
                                <p className="mt-6 text-base text-gray-600 md:max-w-xs">
                                    Addressed Complaints both from members and other stakeholders
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white rounded-lg">
                            <div className="px-7 py-9">
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 w-16 h-16 text-gray-300"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                        />
                                    </svg>
                                    <h3 className="ml-2 text-6xl font-bold text-gray-900">97%</h3>
                                </div>
                                <p className="mt-6 text-base text-gray-600 md:max-w-xs">
                                    Regulation Succcess Rate since we started advocating for all games in Tanzania
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* our Latest Blog*/}
            <section className="my-20 mx-auto max-w-7xl">
                <div>
                    <div className="text-sm mb-4 font-semibold text-amber-400 uppercase ">Our Latest News</div>
                    <h3 className="text-[3.5rem] w-[50%] font-bold leading-none text-slate-800">
                        What has been happening
                    </h3>
                </div>

                <BentoGrid className="my-12 mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </section>


            <section className="bg-primary min-h-[600px] flex justify-center items-center">
                <div className="h-[60px] w-[60px] rounded-full bg-white flex justify-center items-center">
                    <Play className="h-4"/>
                </div>
            </section>

            <section>

                <Marquee>

                    <div className="flex items-center gap-5 my-20 min-w-[600px]">
                        <div className="flex-1 h-[120px]">
                            <img src="/img/meridianbet.png" className="h-[120px] grayscale" alt="meridian"/>
                        </div>

                        <div className="flex-1 h-[120px]">
                            <img src="/img/galsportsbetting.png" className="h-[120px] grayscale" alt="meridian"/>
                        </div>
                        <div className="flex-1 h-[120px]">
                            <img src="/img/thronebet.png" className="h-[120px] grayscale" alt="meridian"/>
                        </div>

                        <div className="flex-1 h-[120px]">
                            <img src="/img/premierbet.png" className="h-[120px] grayscale" alt="meridian"/>
                        </div>

                        <div className="flex-1">
                            <img src="/img/sportpesa.png" className="h-[120px] grayscale" alt="meridian"/>
                        </div>

                        <div className="flex-1 h-[100px]">
                            <img src="/img/galsportsbetting.png" className="h-[120px] grayscale" alt="meridian"/>
                        </div>

                        <div className="flex-1 h-[100px]">
                            <img src="/img/playmaster.png" className="h-[120px] grayscale" alt="meridian"/>
                        </div>
                        <div className="flex-1">
                            <img src="/img/sportpesa.png" className="h-[100px] grayscale" alt="meridian"/>
                        </div>
                        <div className="flex-1">
                            <img src="/img/m-bet.png" className="h-[100px] grayscale" alt="meridian"/>
                        </div>


                    </div>
                </Marquee>

            </section>


        </div>
    );
}

export default HomePage