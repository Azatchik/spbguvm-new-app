import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ContentWrapper } from 'shared/ui/ContentWrapper/ContentWrapper';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Link, LinkTheme } from 'shared/ui/Link/Link';
import { FooterContactsMobile } from '../FooterContactsMobile/FooterContactsMobile';
import { FooterNavigationMobile } from '../FooterNavigationMobile/FooterNavigationMobile';
import { FooterMenuMobile } from '../FooterMenuMobile/FooterMenuMobile';
import cls from './FooterMobile.module.scss';
import { FooterLeftMobile } from '../FooterLeftMobile/FooterLeftMobile';

interface FooterMobileProps {
    className?: string;
}

export const FooterMobile = memo((props: FooterMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <ContentWrapper
            className={classNames(cls.FooterMobile, {}, [className])}
            ContentTag="footer"
        >
            Нижняя мобильная панель
        </ContentWrapper>
    );
});
