import {useAppDispatch, useAppSelector} from "../stores/hooks.ts";
import {getTheme, selectTheme, setTheme, themes, Themes} from "../stores/themeSlice.ts";
import {useEffect, useMemo} from "react";
import {useLocation} from "react-router-dom";


function MainTheme() {

    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);
    const Component = getTheme(theme).component;


    const {search} = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(search), [search]);

    useEffect(() => {

        const switchTheme = (theme: Themes["name"]) => {
            dispatch(setTheme(theme));
        };

        if (queryParams.get("theme")) {
            const selectedTheme = themes.find(
                (theme) => theme.name === queryParams.get("theme")
            );

            if (selectedTheme) {
                switchTheme(selectedTheme.name);
            }
        }
    }, [dispatch, queryParams]);




    return (
        <div>
            <Component/>
        </div>
    );
}

export default MainTheme;