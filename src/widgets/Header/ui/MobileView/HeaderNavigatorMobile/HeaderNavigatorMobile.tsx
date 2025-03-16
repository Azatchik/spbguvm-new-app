import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './HeaderNavigatorMobile.module.scss';

interface HeaderNavigatorMobileProps {
    className?: string;
}

export const HeaderNavigatorMobile = memo((props: HeaderNavigatorMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.HeaderNavigatorMobile, {}, [className])}
            justify="center"
            align="center"
            maxW
        >
            Нижняя часть верхней мобильной панели
        </HStack>
    );
});
