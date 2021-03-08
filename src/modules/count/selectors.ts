import { useSelector } from 'hooks/hooks'

export const useCount = () => {
  return useSelector((state) => state.count.count)
}
