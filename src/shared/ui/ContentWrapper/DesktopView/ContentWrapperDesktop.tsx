import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './ContentWrapperDesktop.module.scss';

export type ContentTagList =
    'section'
    | 'article';

interface ContentWrapperDesktopProps {
    className?: string;
    children: ReactNode;
    ContentTag?: ContentTagList;
}

export const ContentWrapperDesktop = memo((props: ContentWrapperDesktopProps) => {
    const {
        className,
        children,
        ContentTag = 'div',
    } = props;

    return (
        <ContentTag
            className={classNames(cls.ContentWrapperDesktop, {}, [className])}
        >
            <HStack
                className={cls.additionalWrapper}
                maxH
            >
                {children}
            </HStack>
        </ContentTag>
    );
});
