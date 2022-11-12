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

export const Table = styled.table`
  width: 100%;
  margin-top: 1rem;
`

export const ScrollableContainer = styled.div`
  overflow-x: auto;
`

interface IRow {
  index: number
}

export const Row = styled.tr<IRow>`
  background-color: ${({ index }) => (index % 2 ? '' : '#dcdedd')};
`
