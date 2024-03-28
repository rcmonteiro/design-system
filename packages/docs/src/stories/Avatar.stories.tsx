import { Avatar, AvatarProps } from '@rcmonteiro-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/rcmonteiro.png',
    alt: 'rcmonteiro',
  },
  argTypes: {
    src: {
      control: {
        type: 'file',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
