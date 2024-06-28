import PageHeader from "../../../components/base/PageHeader";
import {LampDemo} from "../../../components/ui/lamp.tsx";

const PrinciplesPage = () => {
    return (
        <div>
            <PageHeader title={"Principles"} className={"bg-white px-4"}/>

            <LampDemo/>

        </div>
    );
}

export default PrinciplesPage