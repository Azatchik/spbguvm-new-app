import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Link, LinkTheme } from 'shared/ui/Link/Link';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import logoLightDesktop from 'shared/assets/icons/logo-light-desktop.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { FooterGovSmallScreen } from '../FooterGovSmallScreen/FooterGovSmallScreen';
import { FooterNavigationSmallScreen } from '../FooterNavigationSmallScreen/FooterNavigationSmallScreen';
import { FooterMenuSmallScreen } from '../FooterMenuSmallScreen/FooterMenuSmallScreen';
import { FooterContactsSmallScreen } from '../FooterContactsSmallScreen/FooterContactsSmallScreen';
import cls from './FooterSmallScreen.module.scss';

interface FooterSmallScreenProps {
    className?: string;
}

export const FooterSmallScreen = memo((props: FooterSmallScreenProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <footer
            className={classNames(cls.FooterSmallScreen, {}, [className])}
        >
            <VStack
                gap="80"
                maxH
            >
                <VStack
                    gap="50"
                >
                    <Icon
                        Svg={logoLightDesktop}
                        theme={IconTheme.CLEAN}
                    />
                    <VStack
                        gap="20"
                    >
                        <HStack
                            gap="20"
                        >
                            <FooterNavigationSmallScreen />
                            <FooterMenuSmallScreen />
                        </HStack>
                        <HStack
                            gap="20"
                        >
                            <FooterContactsSmallScreen />
                            <FooterGovSmallScreen />
                        </HStack>
                    </VStack>
                </VStack>
                <HStack
                    gap="166"
                >
                    <Text
                        theme={TextTheme.WHITE}
                        size={TextSize.BODY_DESKTOP}
                        opacity="60"
                        width="164"
                    >
                        {t('2025 © СПБГУВМ. Все права защищены')}
                    </Text>
                    <Link
                        theme={LinkTheme.AUTHOR}
                        href="https://vikushydesign.ru"
                    >
                        {`${t('Дизайн сайта')} - vikushydesign.ru`}
                    </Link>
                </HStack>
            </VStack>
        </footer>
    );
});
