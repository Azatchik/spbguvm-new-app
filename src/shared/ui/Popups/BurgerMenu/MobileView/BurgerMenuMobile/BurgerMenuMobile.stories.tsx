import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BurgerMenuMobile } from './BurgerMenuMobile';

export default {
    title: 'shared/BurgerMenuSmallScreen',
    component: BurgerMenuMobile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BurgerMenuMobile>;

const Template: ComponentStory<typeof BurgerMenuMobile> = (args) => <BurgerMenuMobile {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
