import { useMemo } from 'react'
import styled from 'styled-components'
import { useTeamData } from '../../context/useTeamData'
import { IAchiever } from '../../interfaces/IAchiever'
import { TeamModel } from '../../models/TeamModel'
import { TeamCell } from '../team-cell/TeamCell'

const AchiverContainer = styled.div``

const Achievers = () => {
  const { teamsWinsData } = useTeamData()

  const overAchivers: IAchiever = useMemo(() => {
    let maxPoints = 0
    teamsWinsData.forEach((team: TeamModel) => {
      maxPoints = team.overAchievementPoints > maxPoints ? team.overAchievementPoints : maxPoints
    })
    return {
      teams: teamsWinsData.filter((team) => team.overAchievementPoints === maxPoints),
      points: maxPoints,
    }
  }, [teamsWinsData])

  const underAchivers: IAchiever = useMemo(() => {
    let maxPoints = 0
    teamsWinsData.forEach((team: TeamModel) => {
      maxPoints = team.underAchievementPoints > maxPoints ? team.underAchievementPoints : maxPoints
    })
    return {
      teams: teamsWinsData.filter((team) => team.underAchievementPoints === maxPoints),
      points: maxPoints,
    }
  }, [teamsWinsData])

  return (
    <div>
      <AchiverContainer>
        <h4>{`The biggest overachiever${overAchivers.teams.length > 1 ? '(s)' : ''}:`}</h4>
        {overAchivers.teams.map((team) => {
          return <TeamCell team={team} key={`team-cell-overachiever-${team.id}:`} />
        })}
      </AchiverContainer>
      <AchiverContainer>
        <h4>{`The biggest underachiever${underAchivers.teams.length > 1 ? '(s)' : ''}:`}</h4>
        {underAchivers.teams.map((team) => {
          return <TeamCell team={team} key={`team-cell-underachiever-${team.id}`} />
        })}
      </AchiverContainer>
    </div>
  )
}

export { Achievers }
