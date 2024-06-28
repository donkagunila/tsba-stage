import VerticalBarChart from "../../charts/VerticalBarChart";

const WeeklyOverviewChart = () => {
    return (
        <div className="box px-4 py-2 h-full flex flex-col">
            <div className="flex justify-center items-center py-3">

                <div className="text-slate-600 text-center">
                    <div className="text-slate-600 font-semibold">Weekly Overview</div>
                    <div className="text-slate-400 text-xs">Apr 10 - Apr 17</div>
                </div>

            </div>
            <div className="p-4 flex-1 h-full">
                <VerticalBarChart
                    barWidth={12}
                    height={180}
                    yGridDisplay={false}
                    items={
                        {
                            label: ["M", "T", "W", "T", "F", "S", "S"],
                            data: [45, 67, 87, 62, 98, 56, 58]
                        }
                    }
                />
            </div>
            <div className="py-3 px-4 border-t border-slate-200 dark:border-darkmode-200 flex justify-between items-center gap-4">
                <div>
                    <div
                        className="h-[40px] w-[40px] flex justify-center items-center p-3 bg-blue-100 rounded-full">
                        <svg height="512" viewBox="0 0 48 48" width="512" xmlns="http://www.w3.org/2000/svg">
                            <g id="_02-smile" data-name="02-smile">
                                <circle cx="24" cy="24" fill="#ffce52" r="23"/>
                                <ellipse cx="33" cy="18" fill="#273941" rx="3" ry="4"/>
                                <ellipse cx="15" cy="18" fill="#273941" rx="3" ry="4"/>
                                <ellipse cx="33" cy="18" fill="#141e21" rx="2" ry="3"/>
                                <ellipse cx="15" cy="18" fill="#141e21" rx="2" ry="3"/>
                                <circle cx="34" cy="17" fill="#f6fafd" r="1"/>
                                <circle cx="16" cy="17" fill="#f6fafd" r="1"/>
                                <path
                                    d="m24 39c-7.72 0-14-5.832-14-13h2c0 6.065 5.383 11 12 11s12-4.935 12-11h2c0 7.168-6.28 13-14 13z"
                                    fill="#273941"/>
                                <path
                                    d="m24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0 -45.95 0h.975c0-10.493 9.85-19 22-19z"
                                    fill="#ffe369"/>
                                <path
                                    d="m46 23c0 10.493-9.85 19-22 19s-22-8.507-22-19h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
                                    fill="#ffb32b"/>
                                <g fill="#f6fafd">
                                    <ellipse cx="37" cy="9" rx=".825" ry="1.148"
                                             transform="matrix(.707 -.707 .707 .707 4.48 28.81)"/>
                                    <ellipse cx="30.746" cy="4.5" rx=".413" ry=".574"
                                             transform="matrix(.707 -.707 .707 .707 5.829 23.067)"/>
                                    <ellipse cx="34" cy="7" rx="1.65" ry="2.297"
                                             transform="matrix(.707 -.707 .707 .707 5.015 26.102)"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="text-sm flex-1">
                    <p className="text-slate-600 dark:text-slate-400 font-semibold">On Track!</p>
                    <p className="text-slate-400 dark:text-slate-400 text-xs">All goals have been achieved</p>
                </div>
            </div>
        </div>
    );
}

export default WeeklyOverviewChart