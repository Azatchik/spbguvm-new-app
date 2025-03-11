import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ContentWrapper } from 'shared/ui/ContentWrapper/ContentWrapper';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Link, LinkTheme } from 'shared/ui/Link/Link';
import { FooterNavigation } from '../FooterNavigation/FooterNavigation';
import { FooterMenu } from '../FooterMenu/FooterMenu';
import { FooterContacts } from '../FooterContacts/FooterContacts';
import cls from './Footer.module.scss';
import { FooterLeft } from '../FooterLeft/FooterLeft';

interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <ContentWrapper
            className={classNames(cls.Footer, {}, [className])}
            ContentTag="footer"
        >
            <HStack
                maxW
                justify="between"
                align="center"
                maxH
            >
                <FooterLeft />
                <VStack
                    justify="between"
                    className={cls.rightBlocks}
                >
                    <HStack
                        gap="44"
                        align="start"
                    >
                        <FooterNavigation />
                        <FooterMenu />
                        <FooterContacts />
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
