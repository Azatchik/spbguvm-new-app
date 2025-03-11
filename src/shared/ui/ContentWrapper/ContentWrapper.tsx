import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { HStack } from 'shared/ui/Stack';
import cls from './ContentWrapper.module.scss';

export type ContentTagList =
    'section'
    | 'footer'
    | 'article';

interface ContentWrapperProps {
    className?: string;
    children: ReactNode;
    ContentTag?: ContentTagList;
}

export const CONTENT_WRAPPER_ID = 'CONTENT_WRAPPER_ID';

export const ContentWrapper = memo((props: ContentWrapperProps) => {
    const {
        className,
        children,
        ContentTag = 'div',
    } = props;
    const { t } = useTranslation();

    return (
        <ContentTag
            className={classNames(cls.ContentWrapper, {}, [className])}
            id={CONTENT_WRAPPER_ID}
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
