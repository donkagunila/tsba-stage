import Lucide from "../../base/Lucide";
import dayjs from "dayjs";
import VerticalBarChart from "../../charts/VerticalBarChart";

const WeeklySalesChart = () => {
    return (
        <div className="box p-4 h-full">
        <div className="flex justify-between items-center py-2">
            <div>
                <Lucide icon="ChevronLeft" className="text-slate-500 dark:text-slate-200"/>
            </div>
            <div className="text-slate-600 font-semibold">{dayjs(new Date).format('MMMM YY')} </div>
            <div>
                <Lucide icon="ChevronRight" className="text-slate-500"/>
            </div>
        </div>
        <div className="p-4">

            <VerticalBarChart items={
                {
                    label: [11, 12, 13, 14, 14],
                    data: [2, 4, 2, 1, 3]
                }
            }/>
        </div>
        <div>
            <ul className="text-slate-600 dark:text-slate-400 font-semibold text-sm">
                <li className="flex justify-between border-b border-slate-100 dark:border-darkmode-200 py-3">
                    <div>Today</div>
                    <div>$20.00</div>
                </li>
                <li className="flex justify-between border-b border-slate-100 dark:border-darkmode-200 py-3">
                    <div>Best</div>
                    <div>$23.00</div>
                </li>
                <li className="flex justify-between py-3">
                    <div>Average</div>
                    <div>$21.65</div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default WeeklySalesChart