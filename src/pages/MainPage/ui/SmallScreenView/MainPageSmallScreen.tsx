import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { Opening } from 'shared/ui/Opening/Opening';
import { AboutUniversity } from 'shared/ui/AboutUniversity/AboutUniversity';
import { Mission } from 'shared/ui/Mission/Mission';
import cls from './MainPageSmallScreen.module.scss';

interface MainPageSmallScreenProps {
    className?: string;
}

const MainPageSmallScreen = (props: MainPageSmallScreenProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <Page className={classNames(cls.MainPageSmallScreen, {}, [className])}>
            Версия для маленьких экранов
        </Page>
    );
};

export default MainPageSmallScreen;
