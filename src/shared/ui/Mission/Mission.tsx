import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ContentWrapper } from 'shared/ui/ContentWrapper/ContentWrapper';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import cls from './Mission.module.scss';

interface MissionProps {
    className?: string;
}

export const Mission = memo((props: MissionProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <ContentWrapper
            className={classNames(cls.Mission, {}, [className])}
            ContentTag="section"
        >
            <HStack
                maxW
                maxH
                align="center"
                justify="center"
            >
                <Text
                    theme={TextTheme.BLACK}
                    size={TextSize.H3_DESKTOP}
                >
                    {t('В разработке...')}
                </Text>
            </HStack>
        </ContentWrapper>
    );
});
