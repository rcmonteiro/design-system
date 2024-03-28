import { Box, Checkbox, CheckboxProps, Text } from '@rcmonteiro-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    'aria-label': 'Accept the terms of service',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', gap: '$2', alignContent: 'center' }}
        >
          {Story()}
          <Text>Accept the terms of service:</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {},
}
