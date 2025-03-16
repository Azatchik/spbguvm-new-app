import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { HeaderDesktop } from './HeaderDesktop';

export default {
    title: 'widgets/HeaderDesktop',
    component: HeaderDesktop,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderDesktop>;

const Template: ComponentStory<typeof HeaderDesktop> = (args) => <HeaderDesktop {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
