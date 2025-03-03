import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import logoLightDesktop from 'shared/assets/icons/logo-light-desktop.svg';
import logoMinistyAgriculture from 'shared/assets/icons/logo-ministry-agriculture.svg';
import logoMinistyEducation from 'shared/assets/icons/logo-ministry-education.svg';
import logoMinistyHigherEducation from 'shared/assets/icons/logo-ministry-higher-education.svg';
import cls from './FooterLeft.module.scss';

interface FooterLeftProps {
    className?: string;
}

export const FooterLeft = memo((props: FooterLeftProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterLeft, {}, [className])}
            justify="between"
        >
            <Icon
                Svg={logoLightDesktop}
                theme={IconTheme.CLEAN}
            />
            <VStack
                gap="40"
            >
                <VStack
                    gap="10"
                >
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
                </VStack>
                <Text
                    theme={TextTheme.WHITE}
                    size={TextSize.BODY_DESKTOP}
                    opacity="70"
                >
                    {t('2025 © СПБГУВМ. Все права защищены')}
                </Text>
            </VStack>
        </VStack>
    );
});
