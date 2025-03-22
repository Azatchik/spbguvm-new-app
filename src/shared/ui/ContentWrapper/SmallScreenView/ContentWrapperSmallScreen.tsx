import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './ContentWrapperSmallScreen.module.scss';

export type ContentTagList =
    'section'
    | 'article';

interface ContentWrapperSmallScreenProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    ContentTag?: ContentTagList;
}

export const ContentWrapperSmallScreen = memo((props: ContentWrapperSmallScreenProps) => {
    const {
        className,
        children,
        ContentTag = 'div',
        ...otherProps
    } = props;

    return (
        <ContentTag
            className={classNames(cls.ContentWrapperSmallScreen, {}, [className])}
            {...otherProps}
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
