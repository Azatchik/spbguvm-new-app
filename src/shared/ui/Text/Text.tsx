import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    CSSProperties, HTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Text.module.scss';

export type TextOpacity =
    '80'
    | '70'
    | '60';

const opacityClasses: Record<TextOpacity, string> = {
    80: cls.opacity80,
    70: cls.opacity70,
    60: cls.opacity60,
};

export enum TextTheme {
    BLUE = 'blue',
    DARK = 'dark',
    BLUE_GREY = 'blue_grey',
    WHITE = 'white',
    BLACK = 'black',
    RED = 'red',
    GREY = 'grey',
    GREY_DARK = 'grey_dark',
    GREY_LIGHT = 'grey_light',
    BLUE_LIGHT2 = 'blue_light2',
    BLUE_LIGHT = 'blue_light',
    NAVIGATOR_UNDERLINE_LIGHT = 'navigator_underline_light',
    NAVIGATOR_UNDERLINE_DARK = 'navigator_underline_dark',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    NUMBERS_DESKTOP = 'numbers_desktop',
    H1_DESKTOP = 'h1_desktop',
    H2_DESKTOP = 'h2_desktop',
    H2_LIGHT_DESKTOP = 'h2_light_desktop',
    H3_DESKTOP = 'h3_desktop',
    H4_DESKTOP = 'h4_desktop',
    H4_MEDIUM_DESKTOP = 'h4_medium_desktop',
    H4_ITALIC_DESKTOP = 'h4_italic_desktop',
    BODY_L_DESKTOP = 'body_l_desktop',
    BODY_DESKTOP = 'body_desktop',
    BODY_S_DESKTOP = 'body_s_desktop',
    BODY_S_MEDIUM_DESKTOP = 'body_s_medium_desktop',
    BODY_FOOTER_DESKTOP = 'body_footer_desktop',
    BUTTON_DESKTOP = 'button_desktop',
    MENU_DESKTOP = 'menu_desktop',
    MENU_CAPS_DESKTOP = 'menu_caps_desktop',
    MENU_LARGE_ITALIC_DESKTOP = 'menu_large_italic_desktop',
    MENU_LARGE_ITALIC_MEDIUM_DESKTOP = 'menu_large_italic_medium_desktop',
}

interface TextProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: ReactNode;
    theme: TextTheme;
    align?: TextAlign;
    size: TextSize;
    opacity?: TextOpacity;
    width?: string;
    height?: string;
    isInline?: boolean;
}

type TextTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p'

const mapSizeToTextTag: Record<TextSize, TextTagType> = {
    [TextSize.NUMBERS_DESKTOP]: 'h1',
    [TextSize.H1_DESKTOP]: 'h1',
    [TextSize.H2_DESKTOP]: 'h2',
    [TextSize.H2_LIGHT_DESKTOP]: 'h2',
    [TextSize.H3_DESKTOP]: 'h3',
    [TextSize.H4_DESKTOP]: 'h4',
    [TextSize.H4_MEDIUM_DESKTOP]: 'h4',
    [TextSize.H4_ITALIC_DESKTOP]: 'h4',
    [TextSize.BODY_L_DESKTOP]: 'p',
    [TextSize.BODY_DESKTOP]: 'p',
    [TextSize.BODY_S_DESKTOP]: 'p',
    [TextSize.BODY_S_MEDIUM_DESKTOP]: 'p',
    [TextSize.BODY_FOOTER_DESKTOP]: 'p',
    [TextSize.BUTTON_DESKTOP]: 'p',
    [TextSize.MENU_DESKTOP]: 'p',
    [TextSize.MENU_CAPS_DESKTOP]: 'p',
    [TextSize.MENU_LARGE_ITALIC_DESKTOP]: 'p',
    [TextSize.MENU_LARGE_ITALIC_MEDIUM_DESKTOP]: 'p',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        theme,
        align = TextAlign.LEFT,
        size,
        children,
        opacity,
        width,
        height,
        isInline,
        ...otherProps
    } = props;

    const TextTag = mapSizeToTextTag[size];
    const isThemeNavigator = theme === TextTheme.NAVIGATOR_UNDERLINE_LIGHT
        || theme === TextTheme.NAVIGATOR_UNDERLINE_DARK;

    const classes = [
        className,
        cls[theme],
        cls[size],
        cls[align],
        opacity && opacityClasses[opacity],
    ];

    const style: CSSProperties = {
        width: width && `${width}px`,
        height: height && `${height}px`,
        display: isInline ? 'inline' : undefined,
    };

    return (
        <TextTag
            className={classNames(cls.Text, {}, classes)}
            data-testid="TextTest"
            style={style}
            {...otherProps}
        >
            {isThemeNavigator && (
                <span className={cls.borderBottom} />
            )}
            {children}
        </TextTag>
    );
});
