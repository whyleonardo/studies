/* eslint-disable react/display-name */
import { useEffect, useRef } from 'react'

import {
  Button,
  useDisclosure,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const buttons = [
  {
    name: 'Foguete',
    icon: '🚀'
  },
  {
    name: 'Sol',
    icon: '☀️'
  },
  {
    name: 'Engrenagem',
    icon: '⚙️'
  }
]

const VStack = chakra(motion.div, {
  baseStyle: {
    height: '100%'
  },
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop)
})

export const Sidebar = () => {
  const { onClose, isOpen, onToggle } = useDisclosure()

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(() => divRef.current?.addEventListener('mouseleave', onClose))()

    const removeEvent = () =>
      divRef.current?.removeEventListener('mouseleave', onClose)

    return removeEvent
  }, [])

  return (
    <VStack
      filter="auto"
      boxShadow="dark-lg"
      ref={divRef}
      initial={false}
      animate={{ width: isOpen ? '8rem' : '4em' }}
    >
      {buttons &&
        buttons.map((btn) => (
          <Button
            bg="none"
            key={btn.name}
            overflowX="hidden"
            width="full"
            onClick={onToggle}
          >
            {isOpen ? `${btn.name} ${btn.icon}` : btn.icon}
          </Button>
        ))}
    </VStack>
  )
}
