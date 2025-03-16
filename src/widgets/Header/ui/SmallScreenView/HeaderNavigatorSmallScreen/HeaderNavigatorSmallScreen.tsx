import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './HeaderNavigatorSmallScreen.module.scss';

interface HeaderNavigatorSmallScreenProps {
    className?: string;
}

export const HeaderNavigatorSmallScreen = memo((props: HeaderNavigatorSmallScreenProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.HeaderNavigatorSmallScreen, {}, [className])}
            justify="center"
            align="center"
            maxW
        >
            Бургер меню
        </HStack>
    );
});
