import { Meta, StoryObj } from '@storybook/react'
import { styled } from '../../../react/src/styles'


const Button = styled("button", {
    fontFamily: "$default",
    backgroundColor: "$gray400",
    color: "$black",
    borderRadius: "$md",

    variants: {
        size: {
            small: {
                fontSize: 14,
                padding: '$2 $4'
            },
            big: {
                fontSize: 16,
                padding: '$3 $6'
            }
        }
    },
    defaultVariantes: {
        size: 'small'
    }
})

export default {
    title: 'Button',
    component: Button,
} as Meta

export const Primary: StoryObj = {
    args: {
        children: 'Enviar'
    }
}

export const Big: StoryObj = {
    args: {
        children: 'Enviar',
        size: 'big'
    }
}