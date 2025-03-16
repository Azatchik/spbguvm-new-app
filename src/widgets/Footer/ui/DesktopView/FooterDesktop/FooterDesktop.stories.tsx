import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FooterDesktop } from './FooterDesktop';

export default {
    title: 'widgets/FooterDesktop',
    component: FooterDesktop,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FooterDesktop>;

const Template: ComponentStory<typeof FooterDesktop> = (args) => <FooterDesktop {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
