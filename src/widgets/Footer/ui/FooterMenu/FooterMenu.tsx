import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './FooterMenu.module.scss';

interface FooterMenuProps {
    className?: string;
}

export const FooterMenu = memo((props: FooterMenuProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterMenu, {}, [className])}
            gap="40"
        >
            <Text
                theme={TextTheme.BLUE_GREY}
                size={TextSize.BODY_DESKTOP}
                opacity="60"
            >
                {`[ ${t('Меню')} ]`}
            </Text>
            <VStack
                gap="16"
            >
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Об университете')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Структура и контакты')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Поступающим')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Студентам')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Факультеты и кафедры')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.FOOTER}
                    to="#"
                >
                    {t('Международное сотрудничество')}
                </AppLink>
            </VStack>
        </VStack>
    );
});
