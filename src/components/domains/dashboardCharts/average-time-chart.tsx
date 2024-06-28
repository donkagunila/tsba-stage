import VerticalBarChart from "../../charts/VerticalBarChart";
import Lucide from "../../base/Lucide";

const AverageTimeChart = () => {
    return (
        <div className="box px-4 py-2 h-full flex flex-col">
            <div className="flex justify-center items-center py-3">

                <div className="text-slate-600 text-center">
                    <div className="text-slate-600 font-semibold">5h 38m</div>
                    <div className="text-slate-400 text-xs">Average time you spent per day</div>
                </div>

            </div>
            <div className="p-4 flex-1 h-full">
                <VerticalBarChart
                    barWidth={16}
                    barRadius={5}
                    height={200}
                    yGridDisplay={false}
                    items={
                        {
                            label: ["M", "T", "W", "T", "F", "S", "Today"],
                            data: [45, 67, 87, 62, 98, 56, 58]
                        }
                    }
                />
            </div>
            <div className="py-3 px-4 border-t border-slate-200 dark:border-darkmode-200 flex justify-between items-center gap-4">

                <div className="text-sm flex-1">
                    <p className="text-slate-600 font-semibold">Set Reminders</p>
                    <p className="text-slate-400 text-xs">Reminder once the daily limit is met</p>
                </div>
                <div>
                    <button
                        className="h-[40px] w-[40px] flex justify-center items-center p-3  rounded-full">
                        <Lucide icon={"ChevronRight"}/>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default AverageTimeChart