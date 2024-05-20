import * as Icons from '@mui/icons-material'

export type IconNames = keyof typeof Icons
export type IconProps = {
  iconName: IconNames
}

export function IconComponent({
  iconName,
}: IconProps) {
  const Icon = Icons[iconName]
  return <Icon />
}
