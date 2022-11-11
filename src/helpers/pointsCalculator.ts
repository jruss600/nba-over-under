import { OverUnder } from '../enums/OverUnder'

const pointsCalculator = (pace: number, line: number, pick: OverUnder, isLock: boolean): number => {
  return (pace - line) * (pick === 'O' ? 1 : -1) * (isLock ? 2 : 1)
}

export { pointsCalculator }
