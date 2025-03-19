import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    memo, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './BurgerMenuSmallScreen.module.scss';

interface Subsection {
    name: string;
    link: string;
}

interface MainSection {
    name: string;
    link: string;
    subsections: Subsection[];
}

interface Section {
    [key: string]: MainSection;
}

interface MenuData {
    title: string;
    section1: Section;
    section2: Section;
    section3: Section;
}

interface BurgerMenuSmallScreenProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    data?: MenuData[];
}

const ANIMATION_DELAY = 600;

export const BurgerMenuSmallScreen = memo((props: BurgerMenuSmallScreenProps) => {
    const {
        className,
        data,
        isOpen,
        onClose,
        lazy = true,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { t } = useTranslation();
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [closeHandler, isOpen]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // Новые ссылки!!!
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if ((lazy && !isMounted) || !data) {
        return (
            <Portal>
                <div className={classNames(cls.BurgerMenuSmallScreen, mods, [className])}>
                    <div
                        className={cls.overlay}
                    >
                        <div
                            className={cls.content}
                        />
                    </div>
                </div>
            </Portal>
        );
    }

    return (
        <Portal>
            <div className={classNames(cls.BurgerMenuSmallScreen, mods, [className])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={cls.content}
                        onClick={onContentClick}
                    />
                </div>
            </div>
        </Portal>
    );
});
