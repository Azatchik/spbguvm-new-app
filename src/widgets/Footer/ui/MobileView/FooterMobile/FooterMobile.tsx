import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Link, LinkTheme } from 'shared/ui/Link/Link';
import logoLightDesktop from 'shared/assets/icons/logo-light-desktop.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { FooterGovMobile } from '../FooterGovMobile/FooterGovMobile';
import { FooterContactsMobile } from '../FooterContactsMobile/FooterContactsMobile';
import { FooterNavigationMobile } from '../FooterNavigationMobile/FooterNavigationMobile';
import { FooterMenuMobile } from '../FooterMenuMobile/FooterMenuMobile';
import cls from './FooterMobile.module.scss';

interface FooterMobileProps {
    className?: string;
}

export const FooterMobile = memo((props: FooterMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <footer
            className={classNames(cls.FooterMobile, {}, [className])}
        >
            <VStack
                gap="50"
                maxW
                maxH
                align="center"
            >
                <Icon
                    Svg={logoLightDesktop}
                    theme={IconTheme.CLEAN}
                />
                <FooterNavigationMobile />
                <FooterMenuMobile />
                <FooterContactsMobile />
                <FooterGovMobile />
                <VStack
                    gap="20"
                >
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.BODY_DESKTOP}
                        opacity="60"
                        width="300"
                    >
                        {t('2025 © СПБГУВМ. Все права защищены')}
                    </Text>
                    <Link
                        theme={LinkTheme.AUTHOR}
                        href="https://vikushydesign.ru"
                    >
                        {`${t('Дизайн сайта')} - vikushydesign.ru`}
                    </Link>
                </VStack>
            </VStack>
        </footer>
    );
});
