import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import vkIconWhite from 'shared/assets/icons/vk-icon-white.svg';
import vkIconWhiteHovered from 'shared/assets/icons/vk-icon-white-hovered.svg';
import telegramIconWhite from 'shared/assets/icons/telegram-icon-white.svg';
import telegramIconWhiteHovered from 'shared/assets/icons/telegram-icon-white-hovered.svg';
import rutubeIconWhite from 'shared/assets/icons/rutube-icon-white.svg';
import rutubeIconWhiteHovered from 'shared/assets/icons/rutube-icon-white-hovered.svg';
import { Link, LinkTheme } from 'shared/ui/Link/Link';
import cls from './FooterContactsMobile.module.scss';

interface FooterContactsMobileProps {
    className?: string;
}

export const FooterContactsMobile = memo((props: FooterContactsMobileProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <VStack
            className={classNames(cls.FooterContactsMobile, {}, [className])}
            gap="40"
        >
            <Text
                theme={TextTheme.BLUE_GREY}
                size={TextSize.BODY_DESKTOP}
                opacity="60"
            >
                {`[ ${t('Контакты')} ]`}
            </Text>
            <VStack
                gap="15"
            >
                <VStack
                    gap="2"
                >
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Приемная ректора')}:`}
                    </Text>
                    <Text
                        theme={TextTheme.BLUE_LIGHT}
                        size={TextSize.BODY_S_DESKTOP}
                    >
                        {t('+7 (812) 388-36-31')}
                    </Text>
                </VStack>
                <VStack
                    gap="2"
                >
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Горячая линия приемной комиссии')}:`}
                    </Text>
                    <Text
                        theme={TextTheme.BLUE_LIGHT}
                        size={TextSize.BODY_S_DESKTOP}
                    >
                        {t('8-800-200-00-57')}
                    </Text>
                </VStack>
                <VStack
                    gap="2"
                >
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Общая почта')}:`}
                    </Text>
                    <Text
                        theme={TextTheme.BLUE_LIGHT}
                        size={TextSize.BODY_S_DESKTOP}
                    >
                        {t('secretary@spbguvm.ru')}
                    </Text>
                </VStack>
                <VStack
                    gap="2"
                >
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Почта приемной комиссии')}:`}
                    </Text>
                    <Text
                        theme={TextTheme.BLUE_LIGHT}
                        size={TextSize.BODY_S_DESKTOP}
                    >
                        {t('priem@spbguvm.ru')}
                    </Text>
                </VStack>
                <VStack
                    gap="2"
                >
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Адрес')}:`}
                    </Text>
                    <Text
                        theme={TextTheme.BLUE_LIGHT}
                        size={TextSize.BODY_S_DESKTOP}
                    >
                        {t('196084, г.Санкт-Петербург, ул.Черниговская, д. 5')}
                    </Text>
                </VStack>
                <VStack
                    gap="2"
                >
                    <Text
                        theme={TextTheme.BLUE_GREY}
                        size={TextSize.BODY_FOOTER_DESKTOP}
                    >
                        {`${t('Соцсети')}:`}
                    </Text>
                    <HStack
                        gap="15"
                    >
                        <Link
                            theme={LinkTheme.CLEAN}
                            href="https://vk.com/spbguvm"
                        >
                            <Icon
                                Svg={vkIconWhite}
                                HoveredSvg={vkIconWhiteHovered}
                                theme={IconTheme.CLEAN}
                            />
                        </Link>
                        <Link
                            theme={LinkTheme.CLEAN}
                            href="https://t.me/spbguvmofficial"
                        >
                            <Icon
                                Svg={telegramIconWhite}
                                HoveredSvg={telegramIconWhiteHovered}
                                theme={IconTheme.CLEAN}
                            />
                        </Link>
                        <Link
                            theme={LinkTheme.CLEAN}
                            href="https://rutube.ru/channel/23637865/"
                        >
                            <Icon
                                Svg={rutubeIconWhite}
                                HoveredSvg={rutubeIconWhiteHovered}
                                theme={IconTheme.CLEAN}
                            />
                        </Link>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
});
