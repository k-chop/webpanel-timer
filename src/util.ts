export const disp = (n: number, usePad = false) =>
  Math.floor(n)
    .toString()
    .padStart(usePad ? 2 : 0, "0")

export const unitMS = {
  hour: 3600_000,
  minute: 60_000,
  second: 1000,
} as const

export const msToHour = (ms: number) => Math.floor(ms / unitMS.hour)
export const msToMin = (ms: number) =>
  Math.floor((ms % unitMS.hour) / unitMS.minute)
export const msToSec = (ms: number) =>
  Math.floor((ms % unitMS.minute) / unitMS.second)
export const msToMSec = (ms: number) => Math.floor((ms % unitMS.second) / 100)

export const hmsToMS = (h: number, m: number, s: number) =>
  h * unitMS.hour + m * unitMS.minute + s * unitMS.second

export const toDisplaySec = (ms: number) => {
  if (ms < 0) return ""

  const hasH = msToHour(ms) !== 0
  const hasM = msToMin(ms) !== 0

  const h = hasH ? `${disp(msToHour(ms))}:` : ""
  const m = hasM || hasH ? `${disp(msToMin(ms), hasH)}:` : ""
  const s = disp(msToSec(ms), hasM || hasH)

  return `${h}${m}${s}`
}

export const toDisplayMilliSec = (ms: number): string => {
  if (ms < 0) return ""

  return disp(msToMSec(ms))
}

export const textSizes = [50, 35, 25]

export const getFontSizeFromDuration = (ms: number): string => {
  const size = Math.floor((toDisplaySec(ms).replaceAll(":", "").length - 1) / 2)
  return `${textSizes[size]}vw`
}
