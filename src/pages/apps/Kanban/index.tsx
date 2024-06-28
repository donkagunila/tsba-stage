import PageHeader from "../../../components/base/PageHeader";
import Tabbed from "../../../components/Headless/Tabbed";
import BoardView from "../../../components/domains/apps/kanbans/BoardView";
import GhanttView from "../../../components/domains/apps/kanbans/GhanttView";
import CalendarView from "../../../components/domains/apps/kanbans/CalendarView";
import KanbanView from "../../../components/domains/apps/kanbans/KanbanView";

const Kanban = () => {
    return (
        <div>

            <PageHeader title={"Kanban"} className={"bg-white px-4 border-b border-slate-100"} />
            <Tabbed tabs={[
                {   title: "Board View",
                    icon: "LayoutDashboard",
                    content: (<div><BoardView /></div>)
                },
                {   title: "Gantt View",
                    icon: "FileBarChart2",
                    content: (<div><GhanttView /></div>)
                },
                {   title: "Calendar View",
                    icon: "Calendar",
                    content: (<div><CalendarView /></div>)
                },
                {   title: "Kanban View",
                    icon: "SquareKanban",
                    content: (<div><KanbanView /></div>)
                }
                ]} />


        </div>
    );
}

export default Kanban