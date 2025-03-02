import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Opening } from './Opening';

export default {
    title: 'shared/Opening',
    component: Opening,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Opening>;

const Template: ComponentStory<typeof Opening> = (args) => <Opening {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
