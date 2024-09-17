export interface IStatusColor {
  statuscolor: keyof typeof STATUS_COLORS;
}

export const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500'
} as const