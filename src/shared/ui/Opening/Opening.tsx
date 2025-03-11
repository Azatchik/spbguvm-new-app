import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Image, ImageFrames } from 'shared/ui/Image/Image';
import openingLeftImg from 'shared/assets/images/opening-left.png';
import openingMiddleImg from 'shared/assets/images/opening-middle.png';
import openingMainImg from 'shared/assets/images/opening-main.png';
import { ContentWrapper } from 'shared/ui/ContentWrapper/ContentWrapper';
import cls from './Opening.module.scss';

interface OpeningProps {
    className?: string;
}

export const Opening = memo((props: OpeningProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <ContentWrapper
            className={classNames(cls.Opening, {}, [className])}
            ContentTag="section"
        >
            <HStack
                gap="28"
            >
                <VStack maxH gap="64">
                    <VStack gap="124">
                        <VStack maxW>
                            <Text
                                theme={TextTheme.BLUE}
                                size={TextSize.H2_DESKTOP}
                                className={cls.nameUniversityText}
                            >
                                {t('САНКТ-ПЕТЕРБУРГСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ')}
                            </Text>
                            <Text
                                theme={TextTheme.BLUE}
                                size={TextSize.H2_LIGHT_DESKTOP}
                                className={cls.specialityUniversityText}
                            >
                                {t('ВЕТЕРИНАРНОЙ МЕДИЦИНЫ')}
                            </Text>
                        </VStack>
                        <HStack gap="85">
                            <Text
                                theme={TextTheme.BLUE}
                                size={TextSize.H4_DESKTOP}
                                className={cls.ratingText}
                            >
                                {t('№1 в рейтинге агентства RAEX в сфере “Ветеринария и зоотехния”')}
                            </Text>
                            <Text
                                theme={TextTheme.BLUE}
                                size={TextSize.H4_DESKTOP}
                                className={cls.experienceText}
                            >
                                {t('215 лет ветеринарному образованию России')}
                            </Text>
                        </HStack>
                    </VStack>
                    <HStack gap="28">
                        <Image
                            src={openingLeftImg}
                            width="464"
                            height="406"
                        />
                        <Image
                            src={openingMiddleImg}
                            width="320"
                            height="406"
                        />
                    </HStack>
                </VStack>
                <Image
                    src={openingMainImg}
                    width="664"
                    height="802"
                    frames={ImageFrames.ARROW}
                />
            </HStack>
        </ContentWrapper>
    );
});
