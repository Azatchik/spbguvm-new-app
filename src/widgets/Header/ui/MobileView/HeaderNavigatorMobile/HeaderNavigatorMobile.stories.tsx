import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { HeaderNavigatorMobile } from './HeaderNavigatorMobile';

export default {
    title: 'shared/HeaderNavigator',
    component: HeaderNavigatorMobile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderNavigatorMobile>;

const Template: ComponentStory<typeof HeaderNavigatorMobile> = (args) => <HeaderNavigatorMobile {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
