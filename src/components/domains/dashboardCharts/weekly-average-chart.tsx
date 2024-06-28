import Lucide from "../../base/Lucide";

const WeeklyAverageChart = () => {
    return (
        <div className="box p-4 h-full">
            <div className="flex flex-col justify-center items-center py-2 gap-1">
                <div className="p-4 rounded-full bg-blue-100">
                    <Lucide icon={"Home"} className={"text-blue-700 h-4 w-4"}/>
                </div>
                <div>Your Weekly average is <span className="text-blue-500">$200</span></div>
            </div>
            <div className="p-4">

            </div>
            <div className="flex justify-center items-center">
                <button>View Details</button>
            </div>
        </div>
    );
}

export default WeeklyAverageChart