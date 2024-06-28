import {Menu, MenuBlock} from "../../../types/menu.types.ts";
import {slideDown, slideUp} from "../../../utils/general.helpers.ts";


interface Location {
    pathname: string;
    forceActiveMenu?: string;
}

export interface FormattedMenu extends Menu {
    active?: boolean;
    activeDropdown?: boolean;
    subMenu?: FormattedMenu[];
}

const isMatchingPath = (item: Menu, location: Location): boolean => {
    const pathSegments = item.path?.split("/");
    const locationSegments = location.pathname.split("/");

    if (
        (location.forceActiveMenu !== undefined &&
            item.path === location.forceActiveMenu) ||
        (location.forceActiveMenu === undefined &&
            item.path === location.pathname)
    ) {
        return true;
    }

    return (
        pathSegments?.[1] === locationSegments[1] &&
        (pathSegments?.[2] === undefined || pathSegments[2] === locationSegments[2])
    );
};


const findActiveMenu = (subMenu: Menu[], location: Location): boolean => {
    for (const item of subMenu) {
        if (isMatchingPath(item, location) && !item.ignore) {
            return true;
        } else if (
            !item.ignore &&
            item.subMenu &&
            findActiveMenu(item.subMenu, location)
        ) {
            return false;
        }
    }
    return false;
};

const nestedMenu = (menu: Array<Menu>, location: Location) => {

    const formattedMenu: Array<FormattedMenu> = [];
    menu.forEach((item) => {
        const menuItem: FormattedMenu = {
            icon: item.icon,
            title: item.title,
            path: item.path,
            subMenu: item.subMenu,
            ignore: item.ignore,
        };
        menuItem.active =
            ((location.forceActiveMenu !== undefined &&
                    menuItem.path === location.forceActiveMenu) ||
                (location.forceActiveMenu === undefined &&
                    menuItem.path === location.pathname) ||
                (menuItem.subMenu && findActiveMenu(menuItem.subMenu, location))) &&
            !menuItem.ignore;
        if (menuItem.subMenu) {
            menuItem.activeDropdown = findActiveMenu(menuItem.subMenu, location);

            // Nested menu
            const subMenu: Array<FormattedMenu> = [];
            nestedMenu(menuItem.subMenu, location).map(
                (menu) => subMenu.push(menu)
            );
            menuItem.subMenu = subMenu;
        }
        formattedMenu.push(menuItem);
    });

    return formattedMenu;
};


const enter = (el: HTMLElement) => {
    slideDown(el, 300);
};

const leave = (el: HTMLElement) => {
    slideUp(el, 300);
};


const menu: Array<MenuBlock> = [
    {
        order: 1,
        category: "Business",
        visibility: true,
        menuItems: [
            {
                icon: "Blocks",
                path: "/stock",
                title: "Stock",
            },
            {
                icon: "NotepadText",
                path: "/production",
                title: "Daily Collection",
            },
            {
                icon: "Coins",
                path: "/sales",
                title: "Daily Sales",
            },
            {
                icon: "HandCoins",
                path: "/expenditures",
                title: "Daily Expenses",
            },
        ] as Menu[]
    },
    {
        order: 2,
        category: "Reports",
        visibility: true,
        menuItems: [
            {
                icon: "BarChart3",
                path: "/reports",
                title: "Reports",
            }
        ] as Menu[]
    },
    {
        order: 2,
        category: "Administration",
        visibility: true,
        menuItems: [
            {
                icon: "Users",
                path: "/users",
                title: "User Management",
            },
            {
                icon: "Settings",
                path: "/configurations",
                title: "System Settings",
            },
        ] as Menu[]
    }
]

export {nestedMenu, enter, leave, menu};