import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useState } from 'react';
import { Language, Languages } from 'entities/Languages';
import languageDarkDefaultIcon from 'shared/assets/icons/language-dark-default.svg';
import languageLightDefaultIcon from 'shared/assets/icons/language-light-default.svg';
import languageDarkHoveredIcon from 'shared/assets/icons/language-dark-hovered.svg';
import languageLightHoveredIcon from 'shared/assets/icons/language-light-hovered.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import cls from './LangSwitcher.module.scss';

export enum LangSwitcherTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface LangSwitcherProps {
    className?: string;
    theme: LangSwitcherTheme;
}

export const LangSwitcher = memo(({ className, theme }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

    const onIconClick = useCallback(() => {
        setIsDropdownVisible((prevState) => !prevState);
    }, []);

    const onTransparentOverlayClick = useCallback(() => {
        setIsDropdownVisible(false);
    }, []);

    const onClickLanguage = useCallback((value: string) => {
        switch (value) {
        case Language.RU:
            i18n.changeLanguage('RU');
            break;
        case Language.EN:
            i18n.changeLanguage('EN');
            break;
        case Language.HI:
            i18n.changeLanguage('HI');
            break;
        case Language.AR:
            i18n.changeLanguage('AR');
            break;
        default:
            break;
        }
    }, [i18n]);

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            {isDropdownVisible && (
                <div className={cls.transparentOverlay} onClick={onTransparentOverlayClick} />
            )}
            <Icon
                Svg={theme === LangSwitcherTheme.LIGHT ? languageLightDefaultIcon : languageDarkDefaultIcon}
                HoveredSvg={theme === LangSwitcherTheme.LIGHT ? languageLightHoveredIcon : languageDarkHoveredIcon}
                theme={IconTheme.CLEAN}
                onClick={onIconClick}
                className={cls.icon}
                isDisabled={false}
            />
            {isDropdownVisible && (
                <Languages
                    isVisible
                    onClickLanguage={onClickLanguage}
                    className={cls.dropdown}
                />
            )}
        </div>
    );
});
