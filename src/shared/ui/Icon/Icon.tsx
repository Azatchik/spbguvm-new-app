import { classNames } from 'shared/lib/classNames/classNames';
import React, { HTMLAttributes, memo, RefObject } from 'react';
import cls from './Icon.module.scss';

export enum IconTheme {
    CLEAN = 'clean',
    MENU_ARROW = 'menu_arrow',
}

interface IconProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    HoveredSvg?: React.VFC<React.SVGProps<SVGSVGElement>>;
    theme: IconTheme;
    onClick?: () => void;
    isClickable?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        HoveredSvg,
        theme,
        isClickable = false,
        ...otherProps
    } = props;

    const classes = [
        className,
        cls[theme],
        HoveredSvg ? cls.isNotPassive : undefined,
        isClickable ? cls.isClickable : undefined,
    ];

    return (
        <div
            role={HoveredSvg ? 'button' : undefined}
            className={classNames(cls.Icon, {}, classes)}
            {...otherProps}
        >
            <Svg className={cls.svg} />
            {HoveredSvg && <HoveredSvg className={cls.hoveredSvg} />}
        </div>
    );
});
