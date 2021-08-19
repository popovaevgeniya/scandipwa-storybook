import UiButton from './UiButton';
import React from 'react';

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton
}

const Template = (args) => <UiButton {...args} />;

const props = {
    text: 'Hello',
    onClick: () => console.log('Button Click'),
    disabled: false,
    theme: 'light',
    classes: '',
    pseudo: {
        hover: false
    },
    backgrounds: {
        values: [
            { name: 'light', value: '#000' },
            { name: 'dark', value: '#fff' },
        ],
    },
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light',
    pseudo: {
        hover: true
    },
    backgrounds: {values: {name: 'light'}}
};

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark',
    pseudo: {
        hover: true
    },
    backgrounds: {values: {name: 'dark'}}
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true,
};

export const Hover = () => Template.bind({});

Hover.args = {
    pseudo: { hover: true }
}
