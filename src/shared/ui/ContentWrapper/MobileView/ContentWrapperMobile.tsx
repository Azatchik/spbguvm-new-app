import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './ContentWrapperMobile.module.scss';

export type ContentTagList =
    'section'
    | 'footer'
    | 'article';

interface ContentWrapperMobileProps {
    className?: string;
    children: ReactNode;
    ContentTag?: ContentTagList;
}

export const ContentWrapperMobile = memo((props: ContentWrapperMobileProps) => {
    const {
        className,
        children,
        ContentTag = 'div',
    } = props;

    return (
        <ContentTag
            className={classNames(cls.ContentWrapperMobile, {}, [className])}
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
