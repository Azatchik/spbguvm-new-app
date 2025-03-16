import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { HeaderNavigatorSmallScreen } from './HeaderNavigatorSmallScreen';

export default {
    title: 'shared/HeaderNavigator',
    component: HeaderNavigatorSmallScreen,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderNavigatorSmallScreen>;

const Template: ComponentStory<typeof HeaderNavigatorSmallScreen> = (args) => <HeaderNavigatorSmallScreen {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
