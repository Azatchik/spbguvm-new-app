import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './HeaderMobile.module.scss';

interface HeaderMobileProps {
    className?: string;
}

export const HeaderMobile = memo((props: HeaderMobileProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <header
            className={classNames(cls.HeaderMobile, {}, [className])}
        >
            Мобильная верхняя панель
        </header>
    );
});
