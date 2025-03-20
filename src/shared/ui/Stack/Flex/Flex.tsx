import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    CSSProperties,
    DetailedHTMLProps, HTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alingClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: string;
    grow?: boolean;
    maxW?: boolean;
    maxH?: boolean;
    wrap?: boolean;
}

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'start',
        gap,
        grow,
        maxW,
        maxH,
        wrap,
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alingClasses[align],
        directionClasses[direction],
    ];

    const style: CSSProperties = {
        gap: gap ? `${gap}px` : undefined,
        flexWrap: wrap ? 'wrap' : undefined,
        flexGrow: grow ? '1' : undefined,
        width: maxW ? '100%' : undefined,
        height: maxH ? '100%' : undefined,
    };

    return (
        <div
            className={classNames(cls.Flex, {}, classes)}
            {...otherProps}
            style={style}
        >
            {children}
        </div>
    );
});
