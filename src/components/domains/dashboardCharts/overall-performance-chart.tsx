import AreaLineChart from "../../charts/AreaLineChart";

const OverallPerformanceChart = () => {
    return (
        <div className="box px-4 py-2 h-full flex flex-col">
            <div className="flex justify-center items-center py-3">

                <div className="text-slate-600 text-center">
                    <div className="text-slate-600 font-semibold">Overall Performance</div>
                </div>

            </div>
            <div className="p-4 flex-1 h-full">
                <AreaLineChart height={200} />
            </div>
            <div>
                <ul className="text-slate-600 font-semibold text-sm">


                    <li className="flex justify-between py-3">
                        <div>Average</div>
                        <div>$21.65</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default OverallPerformanceChart