import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { ArrowPosition, Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ContentWrapperDesktop } from 'shared/ui/ContentWrapper/DesktopView/ContentWrapperDesktop';
import { Slider } from 'shared/ui/Slideshow/Slider/Slider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './AboutUniversity.module.scss';

interface AboutUniversityProps {
    className?: string;
}

export const AboutUniversity = memo((props: AboutUniversityProps) => {
    const { className } = props;
    const { t } = useTranslation('mainPage');

    return (
        <ContentWrapperDesktop className={classNames(cls.AboutUniversity, {}, [className])}>
            <VStack
                gap="50"
                maxW
            >
                <HStack
                    justify="between"
                    maxW
                >
                    <Text
                        size={TextSize.BODY_DESKTOP}
                        theme={TextTheme.WHITE}
                        opacity="80"
                    >
                        {`[ ${t('Об университете')} ]`}
                    </Text>
                    <VStack>
                        <Text
                            size={TextSize.H3_DESKTOP}
                            theme={TextTheme.WHITE}
                            width="1010"
                            height="88"
                        >
                            {t('Санкт-Петербургский государственный университет ветеринарной медицины —')}
                        </Text>
                        <Text
                            size={TextSize.H3_DESKTOP}
                            theme={TextTheme.WHITE}
                            width="1010"
                            height="132"
                        >
                            {t('старейшее учебное заведение и родина высшего ветеринарного образования в России, с более чем 200-летней историей')}
                        </Text>
                    </VStack>
                </HStack>
                <Slider />
                <HStack
                    justify="end"
                    maxW
                >
                    <HStack
                        gap="167"
                        align="end"
                    >
                        <HStack
                            gap="20"
                        >
                            <Text
                                theme={TextTheme.WHITE}
                                size={TextSize.BODY_DESKTOP}
                                width="327"
                                height="152"
                            >
                                {t('Сложившиеся в течение столетий научно-педагогические школы университета, его кадровый потенциал, направлен на решение государственных задач по обеспечению страны высококвалифицированными специалистами. В университете работает коллектив ученых, признанных не только в России, но и за рубежом.')}
                            </Text>
                            <Text
                                theme={TextTheme.WHITE}
                                size={TextSize.BODY_DESKTOP}
                                width="305"
                                height="152"
                            >
                                {t('Более 80% профессорско-преподавательского состава имеет ученые степени и звания. В настоящее время на 4 факультетах и 23 кафедрах университета обучаются почти 3000 студентов и аспирантов.')}
                            </Text>
                        </HStack>
                        <AppLink
                            theme={AppLinkTheme.CLEAN}
                            to="#"
                        >
                            <Button
                                theme={ButtonTheme.PRIMARY_WHITE_FILL}
                                width="190"
                                arrowPosition={ArrowPosition.ARROW_RIGHT}
                            >
                                {t('Об университете')}
                            </Button>
                        </AppLink>
                    </HStack>
                </HStack>
            </VStack>
        </ContentWrapperDesktop>
    );
});
