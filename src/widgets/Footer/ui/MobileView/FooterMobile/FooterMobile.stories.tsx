import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FooterMobile } from './FooterMobile';

export default {
    title: 'widgets/FooterMobile',
    component: FooterMobile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FooterMobile>;

const Template: ComponentStory<typeof FooterMobile> = (args) => <FooterMobile {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
