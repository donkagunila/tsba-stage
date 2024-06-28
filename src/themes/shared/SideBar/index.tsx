import {NavLink} from "react-router-dom";
import {twMerge} from "tailwind-merge";
import Lucide from "../../../components/base/Lucide";
import {useAppSelector} from "../../../stores/hooks.ts";
import {selectMenu} from "../../../stores/menuSlice.ts";
import SideBarItems from "./side-bar-items.tsx";
import {MenuBlock} from "../../../types/menu.types.ts";

const SideBar = () => {

    const menus = useAppSelector(selectMenu("side-menu"));

    return <nav
        className="w-[85px] xl:w-[260px] px-2 h-screen overflow-hidden z-50 py-2 md:block fixed top-0 left-0 bg-transparent">
        <div className="bg-primary dark:bg-darkmode-700 rounded-lg h-full p-4 flex flex-col">
            {/* Start Static menu items*/}
            <div>
                <div className="flex flex-col">
                    {/*<div className="pb-2 text-white">*/}
                    {/*    Orgone Logo*/}
                    {/*</div>*/}
                    <ul className="mb-3 flex flex-col gap-1.5">
                        <li>
                            <NavLink to={'/'}
                                     className={({isActive}) => twMerge(["flex justify-center items-center md:gap-2 px-3 py-2.5 rounded-md text-white",
                                         isActive && 'side-menu-link-active border border-slate-100/10 bg-white/10'
                                     ])}>
                                <Lucide icon="LayoutGrid" className="h-4 w-4"/>
                                <span className="text-sm flex-1 hidden xl:block">Dashboard</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End:: Static menu items*/}

            <div className={"overflow-x-hidden w-full"}>
                {menus.map((_menu: MenuBlock, index: number) => (
                    <div key={index} className="flex flex-col duration-300 ease-linear w-full">
                        <h3 className="mb-2 ml-1 text-xss uppercase text-white/50 border-t border-slate-200/30 pt-2 ">
                            <span className="hidden xl:block">{_menu.category}</span>
                        </h3>
                        {_menu.menuItems && (
                            <SideBarItems menu={_menu.menuItems}/>
                        )}
                    </div>
                ))}

            </div>


        </div>

    </nav>

}

export default SideBar