import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BurgerMenuSpoilerSmallScreen } from './BurgerMenuSpoilerSmallScreen';

export default {
    title: 'shared/BurgerMenuSpoilerSmallScreen',
    component: BurgerMenuSpoilerSmallScreen,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BurgerMenuSpoilerSmallScreen>;

const Template: ComponentStory<typeof BurgerMenuSpoilerSmallScreen> = (args) => <BurgerMenuSpoilerSmallScreen {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
