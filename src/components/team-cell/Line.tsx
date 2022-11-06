import { P } from './TeamCell.styles'

interface ILine {
  line: number
}

const Line = ({ line }: ILine) => {
  return <P>{`Line: ${line}`}</P>
}

export { Line }
