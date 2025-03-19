import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import arrowSpoilerDownIcon from 'shared/assets/icons/arrow-spoiler-down.svg';
import arrowSpoilerUpIcon from 'shared/assets/icons/arrow-spoiler-up.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import cls from './BurgerMenuSpoilerSmallScreen.module.scss';

interface Subsection {
    name: string;
    link: string;
}

interface MainSection {
    name: string;
    link: string;
    subsections: Subsection[];
}

interface Section {
    [key: string]: MainSection;
}

interface MenuData {
    title: string;
    section1: Section;
    section2: Section;
    section3: Section;
}

interface BurgerMenuSpoilerSmallScreenProps {
    className?: string;
    data?: MenuData;
}

export const BurgerMenuSpoilerSmallScreen = memo((props: BurgerMenuSpoilerSmallScreenProps) => {
    const {
        className,
        data,
    } = props;
    const { t } = useTranslation();
    const [spoilerIsOpen, setSpoilerIsOpen] = useState<boolean>(false);

    const onToggleSpoiler = useCallback(() => {
        setSpoilerIsOpen((prevState) => !prevState);
    }, []);

    if (!data) return null;

    return (
        <HStack className={classNames(cls.BurgerMenuSpoilerSmallScreen, {}, [className])}>
            <VStack>
                <Text
                    theme={TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={onToggleSpoiler}
                >
                    {t(data.title.toUpperCase())}
                </Text>
                <VStack
                    className={cls.spoilerContent}
                >
                    контент
                </VStack>
            </VStack>
            <Icon
                Svg={spoilerIsOpen ? arrowSpoilerUpIcon : arrowSpoilerDownIcon}
                theme={IconTheme.CLEAN}
                isDisabled
                onClick={onToggleSpoiler}
            />
        </HStack>
    );
});
