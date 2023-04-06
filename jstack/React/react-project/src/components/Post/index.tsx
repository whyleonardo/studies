// import { Box, Text } from '@chakra-ui/react'

// interface PostProps {
//   title: string
//   subtitle: string
// }

// export const Post = ({ title = 'Title', subtitle }: PostProps) => {
//   return (
//     <Box display="flex" flexDirection="column" as="article">
//       <Text as="strong">{title}</Text>
//       <Text as="small">{subtitle}</Text>
//     </Box>
//   )
// }

import { useReducer } from 'react'

type State = {
  counter: number
  clicks: number
}

type Action = { type: 'plus' } | { type: 'minus' }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'plus':
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1
      }

    case 'minus':
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1
      }
  }

  return state
}

const initialValue = {
  counter: 0,
  clicks: 0
}

export const Post = () => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  function handlePlus() {
    dispatch({ type: 'plus' })
  }

  function handleMinus() {
    dispatch({ type: 'minus' })
  }

  console.log(reducer)
  return (
    <div>
      <h1>{state.counter}</h1>
      <h2>{state.clicks}</h2>

      <button onClick={handlePlus}>+</button>
      <br />
      <button onClick={handleMinus}>-</button>
    </div>
  )
}
