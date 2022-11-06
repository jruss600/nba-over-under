import styled, { css } from 'styled-components'

const CellStyles = css`
  padding: 0.25rem 1rem;
  border: 1px solid black;
  margin-top: 0.5rem;
`

export const HeaderCellContainer = styled.th`
  ${CellStyles}
`

export const DataCellContainer = styled.td`
  ${CellStyles}
`
