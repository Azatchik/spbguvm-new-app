import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Link } from './Link';

export default {
    title: 'shared/Link',
    component: Link,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
