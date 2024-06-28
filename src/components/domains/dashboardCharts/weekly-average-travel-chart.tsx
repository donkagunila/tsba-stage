import Lucide from "../../base/Lucide";
import VerticalBarChart from "../../charts/VerticalBarChart";

const WeeklyAverageTravelChart = () => {
    return <div className="box px-4 py-2 h-full flex flex-col">
        <div className="flex flex-col justify-center items-center py-3 gap-3">

            <div className="min-h-[50px] min-w-[50px] flex justify-center items-center bg-primary/20 rounded-full p-3">
                <Lucide icon={"Plane"} className={"text-primary dark:text-slate-200"} />
            </div>

            <div className="text-slate-600 dark:text-slate-400 text-center">
                <div className="font-semibold">Your Weekly average is <span className={"text-blue-500"}>$235</span></div>
            </div>

        </div>
        <div className="p-4 flex-1 h-full">
            <VerticalBarChart height={200} items={{
                label: [10, 11, 12, 13, 14],
                data: [25, 56, 45, 45, 23]
            }}/>
        </div>
            <div className={"flex justify-center items-center py-3"}>
                <button className={"text-primary bg-primary/20 px-4 py-2 rounded-md text-sm font-normal"}>
                    View Details
                </button>
            </div>
    </div>
}

export default WeeklyAverageTravelChart