import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Mission } from './Mission';

export default {
    title: 'shared/Mission',
    component: Mission,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Mission>;

const Template: ComponentStory<typeof Mission> = (args) => <Mission {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
