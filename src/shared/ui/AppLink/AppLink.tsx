import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import arrowRightIcon from 'shared/assets/icons/arrow-right-for-btn.svg';
import { Icon, IconTheme } from '../Icon/Icon';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    FOOTER = 'footer',
    NAVIGATOR_OPACITY_LIGHT = 'navigator_opacity_light',
    NAVIGATOR_OPACITY_DARK = 'navigator_opacity_dark',
    MENU_ARROW = 'menu_arrow',
    MENU_SUBSECTION = 'menu_subsection',
    BURGER_MENU_MAIN_LINK_SPOILER = 'burger_menu_main_link_spoiler',
    BURGER_MENU_SUBSECTION_LINK_SPOILER = 'burger_menu_subsection_link_spoiler',
    CLEAN = 'clean',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme,
        ...otherProps
    } = props;

    if (theme === AppLinkTheme.CLEAN) {
        return (
            <Link
                to={to}
                className={classNames(cls.AppLink, {}, [className, cls[theme]])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }

    const [isHoverText, bindIsHoverText] = useHover();
    const mods: Mods = {
        [cls.textHovered]: isHoverText,
        [cls.textNotHovered]: !isHoverText && theme === AppLinkTheme.FOOTER,
    };

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {theme === AppLinkTheme.MENU_ARROW && (
                <Icon
                    theme={IconTheme.MENU_ARROW}
                    Svg={arrowRightIcon}
                    className={cls.arrow}
                />
            )}
            <div className={cls.text} {...bindIsHoverText}>{children}</div>
        </Link>
    );
});
