import { classNames } from 'shared/lib/classNames/classNames';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import logoLightDesktopIcon from 'shared/assets/icons/logo-light-desktop.svg';
import { HStack } from 'shared/ui/Stack';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <HStack
        className={classNames(cls.PageLoader, {}, [className])}
        justify="center"
        align="center"
    >
        <Icon
            Svg={logoLightDesktopIcon}
            theme={IconTheme.CLEAN}
            className={cls.icon}
        />
    </HStack>
);
