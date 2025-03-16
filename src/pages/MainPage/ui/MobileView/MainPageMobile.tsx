import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { Opening } from 'shared/ui/Opening/Opening';
import { AboutUniversity } from 'shared/ui/AboutUniversity/AboutUniversity';
import { Mission } from 'shared/ui/Mission/Mission';
import cls from './MainPageMobile.module.scss';

interface MainPageMobileProps {
    className?: string;
}

const MainPageMobile = (props: MainPageMobileProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <Page className={classNames(cls.MainPageMobile, {}, [className])}>
            Мобильная версия
        </Page>
    );
};

export default MainPageMobile;
