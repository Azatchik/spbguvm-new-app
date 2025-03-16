import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { HeaderMobile } from './HeaderMobile';

export default {
    title: 'widgets/HeaderMobile',
    component: HeaderMobile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderMobile>;

const Template: ComponentStory<typeof HeaderMobile> = (args) => <HeaderMobile {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
