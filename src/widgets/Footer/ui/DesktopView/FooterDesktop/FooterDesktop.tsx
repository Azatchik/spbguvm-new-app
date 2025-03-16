import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ContentWrapper } from 'shared/ui/ContentWrapper/ContentWrapper';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Link, LinkTheme } from 'shared/ui/Link/Link';
import { FooterNavigationDesktop } from '../FooterNavigationDesktop/FooterNavigationDesktop';
import { FooterMenuDesktop } from '../FooterMenuDesktop/FooterMenuDesktop';
import { FooterContactsDesktop } from '../FooterContactsDesktop/FooterContactsDesktop';
import cls from './FooterDesktop.module.scss';
import { FooterLeftDesktop } from '../FooterLeftDesktop/FooterLeftDesktop';

interface FooterDesktopProps {
    className?: string;
}

export const FooterDesktop = memo((props: FooterDesktopProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <ContentWrapper
            className={classNames(cls.FooterDesktop, {}, [className])}
            ContentTag="footer"
        >
            <HStack
                maxW
                justify="between"
                align="center"
                maxH
            >
                <FooterLeftDesktop />
                <VStack
                    justify="between"
                    className={cls.rightBlocks}
                >
                    <HStack
                        gap="44"
                        align="start"
                    >
                        <FooterNavigationDesktop />
                        <FooterMenuDesktop />
                        <FooterContactsDesktop />
                    </HStack>
                    <HStack
                        align="end"
                        maxW
                    >
                        <VStack
                            gap="16"
                        >
                            <AppLink
                                theme={AppLinkTheme.FOOTER}
                                to="#"
                            >
                                {t('Поступление в вуз через Госуслуги')}
                            </AppLink>
                            <AppLink
                                theme={AppLinkTheme.FOOTER}
                                to="#"
                            >
                                {t('Противодействие коррупции')}
                            </AppLink>
                            <AppLink
                                theme={AppLinkTheme.FOOTER}
                                to="#"
                            >
                                {t('Сведения об образовательной организации')}
                            </AppLink>
                        </VStack>
                        <Link
                            theme={LinkTheme.AUTHOR}
                            href="https://vikushydesign.ru"
                            style={{ marginLeft: '371px' }}
                        >
                            {`${t('Дизайн сайта')} - vikushydesign.ru`}
                        </Link>
                    </HStack>
                </VStack>
            </HStack>
        </ContentWrapper>
    );
});
