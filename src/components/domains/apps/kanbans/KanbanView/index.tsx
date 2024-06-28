import DataTable from "../../../../base/Table/DataTable";
import Menu from "../../../../base/headless/Menu";
import Button from "../../../../base/buttons/Button";
import {formatReadableDate} from "../../../../../utils/date.helper.ts";
import DatePicker from "react-datepicker";
import {useState} from "react";

const KanbanView = () => {

    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;


    return (
        <div>
            <DataTable flat columns={[
                {
                    name: "Date",
                    field: "date"
                },
                {
                    name: "Batch",
                    field: "batch"
                },
                {
                    name: "Start Stock",
                    field: "startStock"
                },
                {
                    name: "Mortality",
                    field: "mortality"
                },
                {
                    name: "Percentage",
                    field: "percentage"
                },
                {
                    name: "Age",
                    field: "age"
                },
                {
                    name: "In Production",
                    field: "stock"
                },
                {
                    name: "action",
                    field: "action"
                }
            ]} rows={[]}>


                <Menu>
                    <Menu.Button>
                        <Button
                            variant="primary"
                            className="ml-2 text-xs py-2.5 border-slate-500 text-white px-5 flex justify-center items-center gap-1">
                            {startDate && (
                                <div>{formatReadableDate(startDate.toDateString())} </div>
                            )}
                            <span>-</span>
                            {endDate && (
                                <div> {formatReadableDate(endDate.toDateString())}</div>
                            )}

                        </Button>
                    </Menu.Button>
                    <Menu.Items>
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            inline
                            maxDate={new Date()}
                            endDate={endDate}
                            onChange={(update) => {
                                setDateRange(update);
                            }}
                            monthsShown={2}
                            isClearable={true}
                        />

                    </Menu.Items>
                </Menu>
            </DataTable>
        </div>
    );
};

export default KanbanView;