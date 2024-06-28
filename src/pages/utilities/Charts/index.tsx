import WeeklySalesChart from "../../../components/domains/dashboardCharts/weekly-sales-chart.tsx";
import WeeklyOverviewChart from "../../../components/domains/dashboardCharts/weekly-overview-chart.tsx";
import AverageTimeChart from "../../../components/domains/dashboardCharts/average-time-chart.tsx";
import OverallPerformanceChart from "../../../components/domains/dashboardCharts/overall-performance-chart.tsx";
import WeeklyAverageTravelChart from "../../../components/domains/dashboardCharts/weekly-average-travel-chart.tsx";
import Lucide from "../../../components/base/Lucide";
import PageHeader from "../../../components/base/PageHeader";

const ChartsPage = () => {
    return (
        <div>
            <PageHeader title={"Charts"} className={"bg-white px-4 border-b border-slate-100"} />
            <div>
                <div className="bg-slate-100 p-2">
                    <div className="mx-3 my-2">
                        <div>
                            <div>
                                <nav className="flex" aria-label="Breadcrumb">
                                    <ol role="list" className="flex items-center text-xs text-slate-500 gap-2">
                                        <li>
                                            <div className="flex justify-center items-center gap-1">
                                                <a href="#" className="text-slate-500">Utilities</a>
                                                <Lucide icon={"ChevronRight"}  className="h-3 w-3 text-slate-400"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-center items-center gap-1">
                                                <a href="#" >Charts</a>
                                            </div>
                                        </li>

                                    </ol>
                                </nav>
                            </div>
                            <div className="flex justify-between items-center">
                                <div><h2 className="text-xl font-semibold">Chart Samples</h2></div>
                                <div className="flex justify-between items-center gap-2">
                                    <button type="button"
                                            className="px-4 py-2 text-sm bg-white font-semibold border border-slate-200 rounded-md">Edit
                                    </button>
                                    <button type="button"
                                            className="px-4 py-2 text-sm bg-primary text-white rounded-md font-semibold border border-slate-200">Publish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 p-5">
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                    <WeeklySalesChart/>
                </div>

                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                    <WeeklyOverviewChart/>
                </div>

                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                    <AverageTimeChart/>
                </div>

                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                    <OverallPerformanceChart/>
                </div>

                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12">
                    <WeeklyAverageTravelChart/>
                </div>
            </div>
        </div>
    );
};

export default ChartsPage;