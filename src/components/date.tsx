import styled from 'styled-components'
import { formatDate } from 'utils/datatime'

export default function DateComponent({ dateString }: { dateString: string }) {
  const date = new Date(dateString)
  return <Time dateTime={dateString}>{formatDate(date, 'YYYY/MM/DD hh:mm')}</Time>
}

const Time = styled.time`
  color: #666;
`
