import { Outlet} from "react-router-dom";
import SideBar from "../../shared/SideBar";
import ActionTopBar from "../../shared/ActionTopBar";

const VibrantSideMenu = () => {

    return <div className="bg-slate-100 dark:bg-slate-900">
        <div className="flex overflow-hidden bg-slate-100 dark:bg-slate-900">
            {/* Start:: Side Menu */}
            <SideBar />
            {/* Start:: Main Content*/}
            <div className="relative ml-[85px] xl:ml-[260px] flex-1 flex flex-col max-w-full md:max-w-none  min-w-0 min-h-screen bg-white border border-slate-200 my-2 mx-2 dark:bg-slate-900 pb-[20px] rounded-lg overflow-hidden">
                <ActionTopBar/>
                <Outlet/>
            </div>
        </div>
    </div>
}


export default VibrantSideMenu