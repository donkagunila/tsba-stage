import DataTable from "../../../../base/Table/DataTable";
import {useState} from "react";
import Button from "../../../../base/buttons/Button";
import Menu from "../../../../base/headless/Menu";
import DatePicker from "react-datepicker";
import {formatReadableDate} from "../../../../../utils/date.helper.ts";

const BoardView = () => {

    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;
    return (
        <div>
            <DataTable
                flat
                columns={[
                    {
                        name: "Date",
                        field: "date"
                    },
                    {
                        name: "collected",
                        field: "collected"
                    },
                    {
                        name: "breakage",
                        field: "breakage"
                    },
                    {
                        name: "trays",
                        field: "trays"
                    },
                    {
                        name: "eggs",
                        field: "eggs"
                    },
                    {
                        name: "Total",
                        field: "total"
                    },
                    {
                        name: "Action",
                        field: "action"
                    }
                ]}
                rows={[]}>

                <div>

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

                </div>
            </DataTable>
        </div>
    );
};

export default BoardView;