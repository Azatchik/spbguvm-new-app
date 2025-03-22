import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Menu } from 'shared/ui/Popups/Menu/Menu';
import { getForStudentsMenu } from '../../../model/selectors/headerNavigatorMenus/getForStudentsMenu';
import { getUniversityMenu } from '../../../model/selectors/headerNavigatorMenus/getUniversityMenu';
import cls from './HeaderNavigatorDesktop.module.scss';
import { navigationMenuNames } from '../../../model/types/navigationMenuNames';
import { getForApplicantsMenu } from '../../../model/selectors/headerNavigatorMenus/getForApplicantsMenu';
import { getScienceMenu } from '../../../model/selectors/headerNavigatorMenus/getScienceMenu';
import { getCooperationMenu } from '../../../model/selectors/headerNavigatorMenus/getCooperationMenu';

export enum HeaderNavigatorDesktopTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface HeaderNavigatorDesktopProps {
    className?: string;
    theme: HeaderNavigatorDesktopTheme;
}

export const HeaderNavigatorDesktop = memo((props: HeaderNavigatorDesktopProps) => {
    const { className, theme } = props;
    const { t } = useTranslation();
    const universityMenuData = getUniversityMenu();
    const forApplicantsMenuData = getForApplicantsMenu();
    const forStudentsMenuData = getForStudentsMenu();
    const scienceMenuData = getScienceMenu();
    const cooperationMenu = getCooperationMenu();
    const [currentMenu, setCurrentMenu] = useState<navigationMenuNames | null>(null);

    const mapNavigatorMenus: Record<navigationMenuNames, any> = {
        [navigationMenuNames.UNIVERSITY]: universityMenuData,
        [navigationMenuNames.FOR_APPLICANTS]: forApplicantsMenuData,
        [navigationMenuNames.FOR_STUDENTS]: forStudentsMenuData,
        [navigationMenuNames.SCIENCE]: scienceMenuData,
        [navigationMenuNames.COOPERATION]: cooperationMenu,
    };

    useEffect(() => {
        if (currentMenu) {
            document.body.classList.add('menu-open-body');
        } else {
            document.body.classList.remove('menu-open-body');
        }
    }, [currentMenu]);

    const onMouseEnterNavigation = useCallback((menu: navigationMenuNames) => {
        switch (menu) {
        case navigationMenuNames.UNIVERSITY:
            setCurrentMenu(navigationMenuNames.UNIVERSITY);
            break;
        case navigationMenuNames.FOR_APPLICANTS:
            setCurrentMenu(navigationMenuNames.FOR_APPLICANTS);
            break;
        case navigationMenuNames.FOR_STUDENTS:
            setCurrentMenu(navigationMenuNames.FOR_STUDENTS);
            break;
        case navigationMenuNames.SCIENCE:
            setCurrentMenu(navigationMenuNames.SCIENCE);
            break;
        case navigationMenuNames.COOPERATION:
            setCurrentMenu(navigationMenuNames.COOPERATION);
            break;
        default:
            break;
        }
    }, []);

    const onClickNavigation = useCallback((menu: navigationMenuNames) => {
        if (currentMenu === menu) {
            setCurrentMenu(null);
        } else {
            setCurrentMenu(menu);
        }
    }, [currentMenu]);

    const onCloseMenu = useCallback(() => {
        setCurrentMenu(null);
    }, []);

    return (
        <HStack
            className={classNames(cls.HeaderNavigatorDesktop, { [cls.menuIsOpen]: !!currentMenu }, [className])}
            justify="center"
            align="center"
            maxW
        >
            <HStack
                gap="10"
            >
                <Menu
                    isOpen={!!currentMenu}
                    data={currentMenu ? mapNavigatorMenus[currentMenu] : undefined}
                    onClose={onCloseMenu}
                    lazy
                />
                <Text
                    theme={theme === HeaderNavigatorDesktopTheme.LIGHT
                        ? TextTheme.NAVIGATOR_UNDERLINE_LIGHT
                        : TextTheme.NAVIGATOR_UNDERLINE_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={() => onClickNavigation(navigationMenuNames.UNIVERSITY)}
                    onMouseEnter={() => onMouseEnterNavigation(navigationMenuNames.UNIVERSITY)}
                >
                    {t('УНИВЕРСИТЕТ')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorDesktopTheme.LIGHT
                        ? TextTheme.NAVIGATOR_UNDERLINE_LIGHT
                        : TextTheme.NAVIGATOR_UNDERLINE_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={() => onClickNavigation(navigationMenuNames.FOR_APPLICANTS)}
                    onMouseEnter={() => onMouseEnterNavigation(navigationMenuNames.FOR_APPLICANTS)}
                >
                    {t('ПОСТУПАЮЩИМ')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorDesktopTheme.LIGHT
                        ? TextTheme.NAVIGATOR_UNDERLINE_LIGHT
                        : TextTheme.NAVIGATOR_UNDERLINE_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={() => onClickNavigation(navigationMenuNames.FOR_STUDENTS)}
                    onMouseEnter={() => onMouseEnterNavigation(navigationMenuNames.FOR_STUDENTS)}
                >
                    {t('СТУДЕНТАМ')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorDesktopTheme.LIGHT
                        ? TextTheme.NAVIGATOR_UNDERLINE_LIGHT
                        : TextTheme.NAVIGATOR_UNDERLINE_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={() => onClickNavigation(navigationMenuNames.SCIENCE)}
                    onMouseEnter={() => onMouseEnterNavigation(navigationMenuNames.SCIENCE)}
                >
                    {t('НАУКА')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorDesktopTheme.LIGHT
                        ? TextTheme.NAVIGATOR_UNDERLINE_LIGHT
                        : TextTheme.NAVIGATOR_UNDERLINE_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={() => onClickNavigation(navigationMenuNames.COOPERATION)}
                    onMouseEnter={() => onMouseEnterNavigation(navigationMenuNames.COOPERATION)}
                >
                    {t('МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО')}
                </Text>
            </HStack>
        </HStack>
    );
});
