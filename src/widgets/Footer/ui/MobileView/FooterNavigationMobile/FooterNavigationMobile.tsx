import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './FooterNavigationMobile.module.scss';

interface FooterNavigationMobileProps {
    className?: string;
}

export const FooterNavigationMobile = memo((props: FooterNavigationMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterNavigationMobile, {}, [className])}
            gap="20"
        >
            <Text
                theme={TextTheme.BLUE_GREY}
                size={TextSize.BODY_DESKTOP}
                opacity="60"
            >
                {`[ ${t('Навигация')} ]`}
            </Text>
            <VStack
                gap="16"
            >
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Новости и мероприятия')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Нормативные документы')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Онлайн-приемная ректора')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Медиа-центр')}
                </AppLink>
            </VStack>
        </VStack>
    );
});
