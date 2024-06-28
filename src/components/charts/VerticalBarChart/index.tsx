import {ComponentPropsWithoutRef, useMemo} from "react";
import {ChartOptions} from "chart.js";
import Chart from "../index.tsx";
import {useAppSelector} from "../../../stores/hooks.ts";
import {selectColorScheme} from "../../../stores/colorSchemeSlice.ts";
import {getColorSchemeHex} from "../../../utils/chart.helpers.ts";





interface VerticalBarChartProps extends ComponentPropsWithoutRef<"canvas"> {
    width: number;
    height: number;
    items: {
        label: string [] | number [],
        data?: any,
        color?:string,
    };
    barWidth?: number,
    barRadius?:number,
    yGridDisplay?:boolean
}
const VerticalBarChart = (props: VerticalBarChartProps) => {

    // Get the current color scheme from the store
    const activeColorScheme = useAppSelector(selectColorScheme);

    // Memoized data for the chart, dependent on color scheme, radius, width and items
    const data = useMemo(() => {

        return {
           labels: props.items.label,
            datasets: [{
                data: props.items.data,
                barPercentage: 0.5,
                barThickness: props.barWidth ?? 8,
                maxBarThickness: props.barWidth ?? 8,
                borderRadius: props.barRadius ?? Number.MAX_VALUE,
                borderSkipped: false,
                minBarLength: 2,
                backgroundColor: getColorSchemeHex(activeColorScheme)
            }],

        }


    }, [activeColorScheme, props.barRadius, props.barWidth, props.items.data, props.items.label])

    // Construct the options for the chart with memoization
    const options: ChartOptions = useMemo(() => {
        return {
            indexAxis: "x",
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                datalabels: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    }, border: {
                        display: false,
                    }
                },
                y: {
                    ticks: {
                        display: false,
                    },
                    grid: {
                        display: props.yGridDisplay,
                        color: "#e5e7eb",
                        drawTicks: false,
                        offset: true
                    },
                    border: {
                        dash: [2, 2],
                        display: false,
                    },
                    drawTicks: false,
                    tickBorderDashOffset: 12
                }
            }
        }
    },[props.yGridDisplay])

    // Rendering the Chart with provided props
    return  <Chart
        type="bar"
        width={props.width}
        height={props.height}
        data={data}
        options={options}
        className={props.className}
    />
    
}

// Pre-defined default props for the component
VerticalBarChart.defaultProps = {
    width: "auto",
    height: "auto",
    className: "",
};

export default  VerticalBarChart;