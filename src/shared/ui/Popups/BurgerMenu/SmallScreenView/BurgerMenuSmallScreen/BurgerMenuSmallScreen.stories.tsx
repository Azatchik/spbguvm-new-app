import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BurgerMenuSmallScreen } from './BurgerMenuSmallScreen';

export default {
    title: 'shared/BurgerMenuSmallScreen',
    component: BurgerMenuSmallScreen,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BurgerMenuSmallScreen>;

const Template: ComponentStory<typeof BurgerMenuSmallScreen> = (args) => <BurgerMenuSmallScreen {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
