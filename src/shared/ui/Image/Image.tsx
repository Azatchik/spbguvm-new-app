import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { CSSProperties, memo } from 'react';
import photoFrameLowerBlueCorner from 'shared/assets/icons/photo-frame-lower-blue-corner.svg';
import photoFrameUpperBlueCorner from 'shared/assets/icons/photo-frame-upper-blue-corner.svg';
import photoFrameLowerWhiteCorner from 'shared/assets/icons/photo-frame-lower-white-corner.svg';
import photoFrameUpperWhiteCorner from 'shared/assets/icons/photo-frame-upper-white-corner.svg';
import photoFrameLowerBlueLargeArrow from 'shared/assets/icons/photo-frame-lower-blue-large-arrow.svg';
import photoFrameUpperBlueLargeArrow from 'shared/assets/icons/photo-frame-upper-blue-large-arrow.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import cls from './Image.module.scss';

export enum ImageFrames {
    ARROW = 'arrow',
    CORNER_BLUE = 'corner_blue',
    CORNER_WHITE = 'corner_white',
}

interface ImageProps {
    className?: string;
    width?: string;
    height?: string;
    frames?: ImageFrames;
    src: string;
}

export const Image = memo((props: ImageProps) => {
    const {
        className,
        width = '100',
        height = '100',
        frames,
        src,
    } = props;
    const { t } = useTranslation();

    const mapSvgToImageFrames: Record<ImageFrames, any> = {
        [ImageFrames.CORNER_WHITE]: {
            upper: photoFrameUpperWhiteCorner,
            lower: photoFrameLowerWhiteCorner,
        },
        [ImageFrames.CORNER_BLUE]: {
            upper: photoFrameUpperBlueCorner,
            lower: photoFrameLowerBlueCorner,
        },
        [ImageFrames.ARROW]: {
            upper: photoFrameUpperBlueLargeArrow,
            lower: photoFrameLowerBlueLargeArrow,
        },
    };

    const style: CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
    };

    return (
        <div
            style={style}
            className={classNames(cls.Image, {}, [className])}
        >
            {frames && (
                <Icon
                    Svg={mapSvgToImageFrames[frames].upper}
                    theme={IconTheme.CLEAN}
                    className={frames === ImageFrames.ARROW
                        ? cls.arrowUpper
                        : cls.cornerUpper}
                />
            )}
            <img
                className={cls.img}
                src={src}
                alt={`${width}x${height}`}
            />
            {frames && (
                <Icon
                    Svg={mapSvgToImageFrames[frames].lower}
                    theme={IconTheme.CLEAN}
                    className={frames === ImageFrames.ARROW
                        ? cls.arrowLower
                        : cls.cornerLower}
                />
            )}
        </div>
    );
});
