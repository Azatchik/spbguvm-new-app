import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import eyeDarkDefaultIcon from 'shared/assets/icons/eye-dark-default.svg';
import eyeDarkHoveredIcon from 'shared/assets/icons/eye-dark-hovered.svg';
import eyeLightDefaultIcon from 'shared/assets/icons/eye-light-default.svg';
import eyeLightHoveredIcon from 'shared/assets/icons/eye-light-hovered.svg';
import { Tooltip } from 'shared/ui/Popups/Tooltip/Tooltip';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { useTranslation } from 'react-i18next';
import cls from './ThemeSwitcher.module.scss';

export enum ThemeSwitcherTheme {
    LIGHT = 'light',
    DARK = 'dark'
}

interface ThemeSwitcherProps {
    className?: string;
    theme: ThemeSwitcherTheme;
    isMobile?: boolean;
}

export const ThemeSwitcher = memo(({ className, theme, isMobile = false }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const { t } = useTranslation();
    const [isHoverTooltip, bindIsHoverTooltip] = useHover();

    const onToggle = () => {
        toggleTheme();
    };

    return (
        <div
            className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}
            onClick={onToggle}
        >
            {!isMobile && (
                <Tooltip
                    isVisible={isHoverTooltip}
                    className={cls.tooltipEye}
                >
                    {t('Версия для слабовидящих')}
                </Tooltip>
            )}
            <Icon
                Svg={theme === ThemeSwitcherTheme.LIGHT
                    ? eyeLightDefaultIcon
                    : eyeDarkDefaultIcon}
                HoveredSvg={theme === ThemeSwitcherTheme.LIGHT
                    ? eyeLightHoveredIcon
                    : eyeDarkHoveredIcon}
                theme={IconTheme.CLEAN}
                className={cls.icon}
                {...bindIsHoverTooltip}
            />
        </div>
    );
});
