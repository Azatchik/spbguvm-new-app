import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Menu } from 'shared/ui/Popups/Menu/Menu';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import cls from './HeaderNavigator.module.scss';

const universityMenu = {
    title: 'Университет',
    section1: {
        main1: {
            name: 'Об университете',
            link: '#',
            subsections: [],
        },
        main2: {
            name: 'Структура и контакты',
            link: '#',
            subsections: [],
        },
        main3: {
            name: 'Ректорат',
            link: '#',
            subsections: [
                { name: 'О ректоре', link: '#' },
                { name: 'Проректор по учебно-воспитательной работе и молодежной политике', link: '#' },
                { name: 'Проректор по научной работе и международным связям', link: '#' },
                { name: 'Проректор по развитию, качеству образования и цифровой трансформации', link: '#' },
            ],
        },
    },
    section2: {
        main1: {
            name: 'Новости и афиша',
            link: '#',
            subsections: [],
        },
        main2: {
            name: 'Цифровая трансформация',
            link: '#',
            subsections: [],
        },
        main3: {
            name: 'Инклюзивное образования',
            link: '#',
            subsections: [],
        },
        main4: {
            name: 'Ветеринарная клиники',
            link: '#',
            subsections: [],
        },
        main5: {
            name: 'Музеи',
            link: '#',
            subsections: [
                { name: 'Музей кафедры анатомии животных', link: '#' },
                { name: 'Музей кафедры патологической анатомии и судебной ветеринарной медицины', link: '#' },
                { name: 'Музей кафедры ветеринарно-санитарной экспертизы', link: '#' },
                { name: 'Музей кафедры паразитологии', link: '#' },
            ],
        },
    },
    section3: {
        main1: {
            name: 'Работникам',
            link: '#',
            subsections: [],
        },
        main2: {
            name: 'Партнерам',
            link: '#',
            subsections: [],
        },
        main3: {
            name: 'Выпускникам',
            link: '#',
            subsections: [
                { name: 'Практика студентов', link: '#' },
                { name: 'Трудоустройство выпускников', link: '#' },
            ],
        },
    },
};

export enum HeaderNavigatorTheme {
    LIGHT = 'light',
    DARK = 'dark',
}

interface HeaderNavigatorProps {
    className?: string;
    theme: HeaderNavigatorTheme;
}

export const HeaderNavigator = memo((props: HeaderNavigatorProps) => {
    const { className, theme } = props;
    const { t } = useTranslation();
    const [universityOpen, bindUniversityOpen] = useModal();

    const onTextClick = useCallback(() => {
        if (universityOpen) {
            bindUniversityOpen.onCloseModal();
        } else {
            bindUniversityOpen.onShowModal();
        }
    }, [bindUniversityOpen, universityOpen]);

    return (
        <HStack
            className={classNames(cls.HeaderNavigator, {}, [className])}
            justify="center"
            maxW
        >
            <HStack gap="10">
                <Menu
                    isOpen={universityOpen}
                    data={universityMenu}
                    onClose={bindUniversityOpen.onCloseModal}
                    lazy
                />
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={onTextClick}
                >
                    {t('УНИВЕРСИТЕТ')}
                </Text>

                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={onTextClick}
                >
                    {t('ПОСТУПАЮЩИМ')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={onTextClick}
                >
                    {t('СТУДЕНТАМ')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={onTextClick}
                >
                    {t('НАУКА')}
                </Text>
                <Text
                    theme={theme === HeaderNavigatorTheme.LIGHT ? TextTheme.HEADER_LIGHT : TextTheme.HEADER_DARK}
                    size={TextSize.MENU_CAPS_DESKTOP}
                    onClick={onTextClick}
                >
                    {t('МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО')}
                </Text>
            </HStack>
        </HStack>
    );
});
