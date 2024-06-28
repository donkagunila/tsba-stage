import WeeklySalesChart from "../../../components/domains/dashboardCharts/weekly-sales-chart.tsx";
import WeeklyOverviewChart from "../../../components/domains/dashboardCharts/weekly-overview-chart.tsx";
import AverageTimeChart from "../../../components/domains/dashboardCharts/average-time-chart.tsx";
import OverallPerformanceChart from "../../../components/domains/dashboardCharts/overall-performance-chart.tsx";
import WeeklyAverageTravelChart from "../../../components/domains/dashboardCharts/weekly-average-travel-chart.tsx";

const Multipurpose = () => {


    return (

        <div>
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
    )
}

export default Multipurpose