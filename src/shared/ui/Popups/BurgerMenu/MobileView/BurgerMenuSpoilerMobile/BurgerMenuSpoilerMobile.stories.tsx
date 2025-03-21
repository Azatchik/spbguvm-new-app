import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BurgerMenuSpoilerMobile } from './BurgerMenuSpoilerMobile';

export default {
    title: 'shared/BurgerMenuSpoilerMobile',
    component: BurgerMenuSpoilerMobile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BurgerMenuSpoilerMobile>;

const Template: ComponentStory<typeof BurgerMenuSpoilerMobile> = (args) => <BurgerMenuSpoilerMobile {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
