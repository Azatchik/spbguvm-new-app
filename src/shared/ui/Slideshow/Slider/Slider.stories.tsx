import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Slider } from './Slider';

export default {
    title: 'shared/Slider',
    component: Slider,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
