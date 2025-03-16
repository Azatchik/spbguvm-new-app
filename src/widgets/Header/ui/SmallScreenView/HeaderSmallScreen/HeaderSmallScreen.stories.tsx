import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { HeaderSmallScreen } from './HeaderSmallScreen';

export default {
    title: 'widgets/HeaderSmallScreen',
    component: HeaderSmallScreen,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderSmallScreen>;

const Template: ComponentStory<typeof HeaderSmallScreen> = (args) => <HeaderSmallScreen {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
