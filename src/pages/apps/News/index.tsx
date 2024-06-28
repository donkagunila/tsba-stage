import PageHeader from "../../../components/base/PageHeader";
import {BentoGrid, BentoGridItem} from "../../../components/ui/bento-grid.tsx";
import {IconClipboardCopy, IconFileBroken, IconSignature} from "@tabler/icons-react";

const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const NewsPage = () => {

    const items = [
        {
            title: "TSBA WELCOMES THE BEGINNING OF REFORMS IN SPORTS BETTING TAXATION",
            description: "Explore the birth of groundbreaking ideas and inventions.",
            header: <Skeleton/>,
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500"/>,
        },
        {
            title: "Sports Betting Earns Govt Tens of Billions in Revenue",
            description: "Dive into the transformative power of technology.",
            header: <Skeleton/>,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500"/>,
        },
        {
            title: "Taxation in Tanzania not Economically Viable",
            description: "Discover the beauty of thoughtful and functional design.",
            header: <Skeleton/>,
            icon: <IconSignature className="h-4 w-4 text-neutral-500"/>,
        },
        {
            title: "Implications of Tax in International Markets",
            description: "If The Regulator and The Operators Cannot Identify Common Grounds for Cooperation",
            header: <Skeleton/>,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500"/>,
        },
        {
            title: "Regulator and The Operators",
            description: "If The Regulator and The Operators Cannot Identify Common Grounds for Cooperation",
            header: <Skeleton/>,
            icon: <IconSignature className="h-4 w-4 text-neutral-500"/>,
        },]
    return (
        <div>
            <PageHeader title={"News and Events"} className={"px-4"}/>

            <section className="my-20">
                <BentoGrid className="my-12 mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </section>
        </div>
    );
}

export default NewsPage