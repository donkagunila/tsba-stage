import {Handle, Position} from 'reactflow';
import Lucide from "../../../../base/Lucide";


const StartNode = () => {
    return (
        <div className={"bg-gray-800 rounded-full"}>
            <Handle type="source" position={Position.Right} id="a" className="h-[8px] w-[8px] bg-slate-500 rounded-full"/>

            <div className={"flex justify-between items-center text-white p-4 gap-2 text-xs "}>
                <div>
                    <Lucide icon={"Play"} className={"h-4 w-4 mr-2"}/></div>
                <div className="font-semibold">Start</div>
                <div className={"h-[17px] w-[17px] rounded-full bg-slate-500 flex justify-center items-center ml-2"}>
                    <div className={"h-[8px] w-[8px] rounded-full bg-slate-100 flex justify-center items-center"}>
                        <div className={"h-[4px] w-[4px] rounded-full bg-black"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartNode;