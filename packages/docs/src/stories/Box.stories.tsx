import { Box, BoxProps, Text } from '@rcmonteiro-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text as="span">Box element</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: 'null',
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
