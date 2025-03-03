import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DetailedHTMLProps, HTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap =
    '2'
    | '4'
    | '6'
    | '8'
    | '10'
    | '14'
    | '15'
    | '16'
    | '20'
    | '24'
    | '28'
    |'30'
    |'40'
    |'44'
    |'50'
    | '64'
    | '80'
    | '85'
    | '105'
    | '124'
    | '167'
    | '192';

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

const gapClasses: Record<FlexGap, string> = {
    2: cls.gap2,
    4: cls.gap4,
    6: cls.gap6,
    8: cls.gap8,
    10: cls.gap10,
    14: cls.gap14,
    15: cls.gap15,
    16: cls.gap16,
    20: cls.gap20,
    24: cls.gap24,
    28: cls.gap28,
    30: cls.gap30,
    40: cls.gap40,
    44: cls.gap44,
    50: cls.gap50,
    64: cls.gap64,
    80: cls.gap80,
    85: cls.gap85,
    105: cls.gap105,
    124: cls.gap124,
    167: cls.gap167,
    192: cls.gap192,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
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
        maxW,
        maxH,
        wrap,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    const classes = [
        className,
        justifyClasses[justify],
        alingClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.maxW]: maxW,
        [cls.maxH]: maxH,
        [cls.wrap]: wrap,
    };

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    );
});
