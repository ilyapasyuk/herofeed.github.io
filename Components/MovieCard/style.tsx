import styled from 'styled-components'

import { variables } from 'Components/styles/variables'

function getTypeBg(type: string) {
  switch (type) {
    case 'movie':
      return '#716aca'
    case 'serial':
      return '#f4516c'
    case 'animation':
      return '#34bfa3'
    default:
      return '#eaeaea'
  }
}

const StyledCard = styled('div')`
  display: block;
  padding: 0;
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.08);
  background-color: #fff;
  border-radius: 4px;
`

const StyledPoster = styled('div')`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px 4px 0 0;
  z-index: 1;
  text-decoration: none;
  position: relative;

  img {
    max-width: 100%;
    display: block;
  }
`

const StyledTitle = styled('h4')`
  padding: 0 20px;
  color: #575962;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-top: 1px solid #ebedf2;
  margin: 0;
`

const StyledRealise = styled('span')`
  color: white;
  position: absolute;
  right: ${variables.baseSize * 2}px;
  top: ${variables.baseSize * 2}px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: ${variables.baseSize}px;
  white-space: nowrap;
  font-size: 12px;
  pointer-events: none;
  z-index: 2;
`
interface TypeProps {
  type: string
}

const StyledType = styled.span<TypeProps>`
  position: absolute;
  left: ${variables.baseSize * 2}px;
  top: ${variables.baseSize * 2}px;
  background: ${props => getTypeBg(props.type)};
  font-size: 0.8rem;
  line-height: 20px;
  min-height: 20px;
  min-width: 20px;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
  letter-spacing: 0.6px;
  padding: 1px 10px;
  border-radius: 0.75rem;
  color: #fff;
  z-index: 2;
`

export { StyledCard, StyledType, StyledTitle, StyledRealise, StyledPoster }
