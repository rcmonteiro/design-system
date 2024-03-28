import { Text, TextProps } from '@rcmonteiro-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum modi facilis cum iste deleniti quod nemo fugit consequuntur, ratione, minima nam alias commodi mollitia quam. Hic voluptatibus laborum cupiditate.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'As "<strong>" text',
    as: 'strong',
  },
}
