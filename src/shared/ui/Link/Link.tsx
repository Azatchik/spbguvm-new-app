import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties, memo, ReactNode } from 'react';
import cls from './Link.module.scss';

export enum LinkTheme {
    CLEAN = 'clean',
    AUTHOR = 'author',
}

interface LinkProps {
    className?: string;
    theme?: LinkTheme;
    children: ReactNode;
    href?: string;
    target?: string;
    style?: CSSProperties;
}

export const Link = memo((props: LinkProps) => {
    const {
        className,
        children,
        href,
        target = '_blank',
        theme = LinkTheme.CLEAN,
        style,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <a
            {...otherProps}
            className={classNames(cls.Link, {}, [className, cls[theme]])}
            href={href}
            target={target}
            style={style}
        >
            {children}
        </a>
    );
});
