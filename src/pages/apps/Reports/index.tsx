import PageHeader from "../../../components/base/PageHeader";
import Tabbed from "../../../components/Headless/Tabbed";
import BoardView from "../../../components/domains/apps/kanbans/BoardView";
import GhanttView from "../../../components/domains/apps/kanbans/GhanttView";
import CalendarView from "../../../components/domains/apps/kanbans/CalendarView";
import KanbanView from "../../../components/domains/apps/kanbans/KanbanView";

const ReportsPage = () => {
    return (
        <div>

            <PageHeader title={"Reports"} className={"bg-white px-4 border-b border-slate-100"}/>
            <Tabbed tabs={[
                {
                    title: "Production Reports",
                    icon: "LayoutDashboard",
                    content: (<div><BoardView/></div>)
                },
                {
                    title: "Sales Reports",
                    icon: "FileBarChart2",
                    content: (<div><GhanttView/></div>)
                },
                {
                    title: "Expense Reports",
                    icon: "Calendar",
                    content: (<div><CalendarView/></div>)
                },
                {
                    title: "Stock Reports",
                    icon: "SquareKanban",
                    content: (<div><KanbanView/></div>)
                }
            ]}/>


        </div>
    );
}

export default ReportsPage