import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ContentWrapper } from 'shared/ui/ContentWrapper/ContentWrapper';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Link, LinkTheme } from 'shared/ui/Link/Link';
import { FooterNavigationSmallScreen } from '../FooterNavigationSmallScreen/FooterNavigationSmallScreen';
import { FooterMenuSmallScreen } from '../FooterMenuSmallScreen/FooterMenuSmallScreen';
import { FooterContactsSmallScreen } from '../FooterContactsSmallScreen/FooterContactsSmallScreen';
import cls from './FooterSmallScreen.module.scss';
import { FooterLeftSmallScreen } from '../FooterLeftSmallScreen/FooterLeftSmallScreen';

interface FooterSmallScreenProps {
    className?: string;
}

export const FooterSmallScreen = memo((props: FooterSmallScreenProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <ContentWrapper
            className={classNames(cls.FooterSmallScreen, {}, [className])}
            ContentTag="footer"
        >
            Нижняя панель уменьшенной версии
        </ContentWrapper>
    );
});
