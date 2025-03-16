import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ContentWrapperDesktop } from 'shared/ui/ContentWrapper/DesktopView/ContentWrapperDesktop';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Image } from 'shared/ui/Image/Image';
import rector1Image from 'shared/assets/images/rector1.png';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import quoteLargeIcon from 'shared/assets/icons/quote-large.svg';
import lineGrayIcon from 'shared/assets/icons/line-gray.svg';
import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Mission.module.scss';

interface MissionProps {
    className?: string;
}

export const Mission = memo((props: MissionProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <ContentWrapperDesktop
            className={classNames(cls.Mission, {}, [className])}
            ContentTag="section"
        >
            <HStack
                maxW
                gap="74"
            >
                <Text
                    size={TextSize.BODY_DESKTOP}
                    theme={TextTheme.GREY}
                    opacity="60"
                >
                    {`[ ${t('Миссия')} ]`}
                </Text>
                <HStack
                    gap="24"
                >
                    <VStack
                        gap="15"
                    >
                        <Image
                            src={rector1Image}
                            height="492"
                            width="320"
                        />
                        <VStack
                            gap="5"
                        >
                            <Text
                                theme={TextTheme.DARK}
                                size={TextSize.BODY_S_DESKTOP}
                            >
                                {t('Ректор СПБГУВМ')}
                            </Text>
                            <Text
                                theme={TextTheme.GREY}
                                size={TextSize.BODY_S_DESKTOP}
                            >
                                {t('Племяшов Кирилл Владимирович')}
                            </Text>
                        </VStack>
                    </VStack>
                    <VStack
                        gap="24"
                    >
                        <Icon
                            Svg={quoteLargeIcon}
                            theme={IconTheme.CLEAN}
                        />
                        <Text
                            theme={TextTheme.BLUE}
                            size={TextSize.H3_DESKTOP}
                            width="853"
                        >
                            <Text
                                theme={TextTheme.DARK}
                                size={TextSize.H3_DESKTOP}
                                isInline
                            >
                                {t('Мы стремимся быть')}
                            </Text>
                            {' '}
                            {t('центром ветеринарного образования России')}
                        </Text>
                        <Icon
                            Svg={lineGrayIcon}
                            theme={IconTheme.CLEAN}
                        />
                        <Text
                            theme={TextTheme.DARK}
                            size={TextSize.H4_DESKTOP}
                            width="628"
                        >
                            {t('создавать научные прорывы для практического применения в обществе, охранять здоровье животных для обеспечения устойчивой окружающей среды, готовить специалистов, способных эффективно и успешно работать в условиях быстро меняющего технологического мира”')}
                        </Text>
                        <Button
                            theme={ButtonTheme.PRIMARY_DARK_OUTLINE}
                            arrowPosition={ArrowPosition.ARROW_RIGHT}
                            width="165"
                        >
                            {t('О ректоре')}
                        </Button>
                    </VStack>
                </HStack>
            </HStack>
        </ContentWrapperDesktop>
    );
});
