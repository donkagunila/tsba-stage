import {useState} from 'react';
import {Handle, NodeProps, Position} from 'reactflow';
import Lucide from "../../../../base/Lucide";

const StageNode = (props: NodeProps) => {

    const [label] = useState(props.data?.label ?? "Label");
    const [color] = useState(props.data?.color ?? "bg-primary/90 text-white");
    const [description] = useState(props.data?.description ?? "");





    console.log(props.data);


    return (
        <div
            className={`${props.selected && 'border-2 border-amber-500'} rounded-2xl ${color} text-xs `}>
            <div className="border-2 border-transparent px-1 py-1 rounded-2xl ">
                <Handle type="target" position={Position.Left} className="h-[8px] w-[8px] bg-slate-500 rounded-full"/>
                <div className={"overflow-hidden"}>
                    <div className="px-3 text-xs mb-2 font-semibold py-1 mt-1">
                        {label}</div>
                    <div className="bg-white p-2 rounded-xl min-w-[230px] max-w-[230px]">
                        <div className={"border-b border-slate-100 px-1 py-2 pb-3"}>
                            <div className={"text-slate-600"}>
                                {description}
                            </div>
                            <div
                                className={"border border-slate-200 inline-flex justify-center items-center text-xs text-slate-400 min-w-[40px] px-2 py-0.5 rounded-md mt-2"}>
                                <Lucide icon={"Dice5"} className={"h-3 w-3 mr-1"}/>
                                <span>{props.data.priority}</span>
                            </div>
                        </div>
                        <div className={"flex justify-between items-start gap-2"}>
                            <div className={"p-3"}>
                                <Lucide icon={"Network"} className={"h-4 w-4 text-slate-500"}/>
                            </div>
                            <div className={"flex-1"}>
                                <div className={"py-2"}>
                                    <div
                                        className={"font-medium text-slate-500 border-b border-slate-100 border-dashed pb-2"}>
                                        <span className={"font-medium text-wrap"}>{props.data.type}</span>
                                    </div>

                                    <div
                                        className={"text-slate-500  border-dashed pt-2"}>
                                        New <br/>
                                        <span className={"font-medium text-wrap truncate"}>{props.data.role}</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                    <Handle type="source"
                            position={Position.Right}
                            id="a"
                            style={{bottom: 20, top: 'auto'}}
                            className="h-[8px] w-[8px] bg-slate-500 rounded-full">
                    </Handle>
                    <Handle type="source"
                            position={Position.Right}
                            id="b"
                            style={{bottom: 10, top: 'auto'}}
                            className="h-[8px] w-[8px] bg-slate-500 rounded-full">
                    </Handle>


            </div>
        </div>
    )
}

export default StageNode;