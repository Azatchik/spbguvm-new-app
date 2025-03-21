import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        // @ts-ignore
        <Flex {...props} direction="column" align={align} />
    );
};
