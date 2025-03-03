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
    isBtn?: boolean;
    isDisabled?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        HoveredSvg,
        theme,
        isBtn = false,
        isDisabled = false,
        ...otherProps
    } = props;

    const classes = [
        className,
        cls[theme],
        isBtn ? cls.isBtn : undefined,
        isDisabled ? cls.isDisabled : undefined,
    ];

    return (
        <div
            role={isBtn ? 'button' : undefined}
            className={classNames(cls.Icon, {}, classes)}
            {...otherProps}
        >
            <Svg className={cls.svg} />
            {HoveredSvg && <HoveredSvg className={cls.hoveredSvg} />}
        </div>
    );
});
