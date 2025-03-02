import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './ContentWrapper.module.scss';

interface ContentWrapperProps {
    className?: string;
    children: ReactNode;
    divide1H?: string;
    divide2H?: string;
    divide3H?: string;
    divide4H?: string;
    divide5H?: string;
}

export const ContentWrapper = memo((props: ContentWrapperProps) => {
    const {
        className,
        children,
        divide1H,
        divide2H,
        divide3H,
        divide4H,
        divide5H,
    } = props;
    const { t } = useTranslation();

    return (
        <HStack
            className={classNames(cls.ContentWrapper, {}, [className])}
            align="start"
            justify="center"
        >
            <div className={cls.additionalWrapper}>
                <div
                    className={cls.divider1}
                    style={{ height: divide1H ? `${divide1H}px` : '100%' }}
                />
                <div
                    className={cls.divider2}
                    style={{ height: divide2H ? `${divide2H}px` : '100%' }}
                />
                <div
                    className={cls.divider3}
                    style={{ height: divide3H ? `${divide3H}px` : '100%' }}
                />
                <div
                    className={cls.divider4}
                    style={{ height: divide4H ? `${divide4H}px` : '100%' }}
                />
                <div
                    className={cls.divider5}
                    style={{ height: divide5H ? `${divide5H}px` : '100%' }}
                />
                {children}
            </div>
        </HStack>
    );
});
