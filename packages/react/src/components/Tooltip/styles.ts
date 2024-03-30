import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipBox = styled(Tooltip.Content, {
  display: 'flex',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  borderRadius: '$sm',
  padding: '$3 $4',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
