import { Box, Text, TextInput, TextInputProps } from '@rcmonteiro-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Your info:</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter your info',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'rcmonteiro.com/',
    placeholder: 'Your username',
  },
}
