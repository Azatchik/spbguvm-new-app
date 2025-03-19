import { memo, useCallback, useState } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Image, ImageFrames } from 'shared/ui/Image/Image';
import laboratory1Image from 'shared/assets/images/laboratory1.png';
import cat1Image from 'shared/assets/images/cat1.png';
import event1Image from 'shared/assets/images/event1.png';
import museum1Image from 'shared/assets/images/museum1.png';
import arrowLeftIcon from 'shared/assets/icons/arrow-left-white-clean.svg';
import arrowRightIcon from 'shared/assets/icons/arrow-right-white-clean.svg';
import arrowLeftDisabledIcon from 'shared/assets/icons/arrow-left-white-clean-disabled.svg';
import arrowRightDisabledIcon from 'shared/assets/icons/arrow-right-white-clean-disabled.svg';
import { Icon, IconTheme } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Slider.module.scss';

export enum SliderVariants {
    IMAGE_LEFT = 'image_left',
    IMAGE_RIGHT = 'image_right',
}

interface SliderProps {
    className?: string;
    variant?: SliderVariants;
}

const mapNumberSliderImages: Record<number, string> = {
    1: laboratory1Image,
    2: cat1Image,
    3: event1Image,
    4: museum1Image,
};

export const Slider = memo((props: SliderProps) => {
    const {
        className,
        variant = SliderVariants.IMAGE_LEFT,
    } = props;
    const [currentSliderImage, setCurrentSliderImage] = useState<number>(1);

    const onClickArrowRight = useCallback(() => {
        setCurrentSliderImage((prevState) => prevState + 1);
    }, []);

    const onClickArrowLeft = useCallback(() => {
        setCurrentSliderImage((prevState) => prevState - 1);
    }, []);

    return (
        <HStack
            justify="between"
            align="end"
            maxW
            className={classNames(cls.Slider, {}, [className])}
        >
            <Image
                src={mapNumberSliderImages[currentSliderImage]}
                width="1180"
                height="597"
                frames={ImageFrames.CORNER_WHITE}
                className={cls.image}
            />
            <HStack
                gap="16"
            >
                <Icon
                    Svg={currentSliderImage === 1 ? arrowLeftDisabledIcon : arrowLeftIcon}
                    theme={IconTheme.CLEAN}
                    onClick={onClickArrowLeft}
                    isClickable
                />
                <Icon
                    Svg={currentSliderImage === 4 ? arrowRightDisabledIcon : arrowRightIcon}
                    theme={IconTheme.CLEAN}
                    onClick={onClickArrowRight}
                    isClickable
                />
            </HStack>
        </HStack>
    );
});
