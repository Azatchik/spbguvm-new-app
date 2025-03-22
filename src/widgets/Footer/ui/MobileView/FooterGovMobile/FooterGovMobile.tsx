import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import logoLightDesktop from 'shared/assets/icons/logo-light-desktop.svg';
import logoMinistyAgriculture from 'shared/assets/icons/logo-ministry-agriculture.svg';
import logoMinistyEducation from 'shared/assets/icons/logo-ministry-education.svg';
import logoMinistyHigherEducation from 'shared/assets/icons/logo-ministry-higher-education.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './FooterGovMobile.module.scss';

interface FooterGovMobileProps {
    className?: string;
}

export const FooterGovMobile = memo((props: FooterGovMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterGovMobile, {}, [className])}
            gap="20"
            justify="end"
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
            <HStack>
                <VStack
                    gap="10"
                >
                    <Icon
                        Svg={logoMinistyAgriculture}
                        theme={IconTheme.CLEAN}
                    />
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                        className={cls.textMinistry}
                    >
                        {t('Министерство сельского хозяйства Российской Федерации')}
                    </Text>
                </VStack>
                <VStack
                    gap="10"
                >
                    <Icon
                        Svg={logoMinistyEducation}
                        theme={IconTheme.CLEAN}
                    />
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                        className={cls.textMinistry}
                    >
                        {t('Министерство просвещения Российской Федерации')}
                    </Text>
                </VStack>
                <VStack
                    gap="10"
                >
                    <Icon
                        Svg={logoMinistyHigherEducation}
                        theme={IconTheme.CLEAN}
                    />
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                        className={cls.textMinistry}
                    >
                        {t('Министерство науки и высшего образования Российской Федерации')}
                    </Text>
                </VStack>
            </HStack>
        </VStack>
    );
});
