import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { HeaderNavigatorDesktop } from './HeaderNavigatorDesktop';

export default {
    title: 'shared/HeaderNavigator',
    component: HeaderNavigatorDesktop,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderNavigatorDesktop>;

const Template: ComponentStory<typeof HeaderNavigatorDesktop> = (args) => <HeaderNavigatorDesktop {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
