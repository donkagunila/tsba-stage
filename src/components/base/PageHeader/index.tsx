import Lucide from "../Lucide";
import {twMerge} from "tailwind-merge";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

interface PageHeaderProps {
    title: string;
    className?: string;
    children?: React.ReactElement
}

const PageHeader = ({title, className, children}: PageHeaderProps) => {
    const location = useLocation();
    const [breadcrumbPaths, setBreadcrumbPaths] = useState<any[]>([]);

    useEffect(() => {
        const paths = location.pathname.split("/");
        paths.shift();
        setBreadcrumbPaths(paths);
    }, [location]);

    return (
        <div className=" mx-auto min-h-[200px] w-full flex justify-center items-center">
            <div className={twMerge([" p-2 ", className])}>
                <div className="mx-3 my-2">
                    <div>
                        <div>
                            <nav className="flex justify-center " aria-label="Breadcrumb">
                                <ol className="flex items-center text-xs text-accentText gap-2">
                                    {breadcrumbPaths.map((path: string, index: number) => (
                                        <li key={path}>
                                            <div className="flex justify-center items-center gap-1">
                                                <Link
                                                    to={
                                                        index === 0
                                                            ? `/${path}`
                                                            : `/${breadcrumbPaths
                                                                .slice(0, index + 1)
                                                                .join("/")}`
                                                    }
                                                    className="text-accentText capitalize"
                                                >
                                                    {path}
                                                </Link>
                                                {index !== breadcrumbPaths.length - 1 && (
                                                    <Lucide
                                                        icon={"ChevronRight"}
                                                        className="h-3 w-3 text-slate-400"
                                                    />
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-4xl font-semibold text-center max-w-7xl">{title}</h2>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
