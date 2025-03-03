import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AboutUniversity } from './AboutUniversity';

export default {
    title: 'shared/AboutUniversity',
    component: AboutUniversity,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutUniversity>;

const Template: ComponentStory<typeof AboutUniversity> = (args) => <AboutUniversity {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
