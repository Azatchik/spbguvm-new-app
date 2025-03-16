import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { FooterSmallScreen } from './FooterSmallScreen';

export default {
    title: 'widgets/FooterSmallScreen',
    component: FooterSmallScreen,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FooterSmallScreen>;

const Template: ComponentStory<typeof FooterSmallScreen> = (args) => <FooterSmallScreen {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
