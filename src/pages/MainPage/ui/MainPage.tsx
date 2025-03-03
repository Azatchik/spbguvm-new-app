import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { Opening } from 'shared/ui/Opening/Opening';
import { AboutUniversity } from 'shared/ui/AboutUniversity/AboutUniversity';
import { Mission } from 'shared/ui/Mission/Mission';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            <Opening />
            <AboutUniversity />
            <Mission />
        </Page>
    );
};

export default MainPage;
