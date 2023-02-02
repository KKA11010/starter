export function getRandomInt(min: number, max: number) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// Example output: 21:42:59 (hrs:mins:secs)
export function toHHMMSS(secs: string) {
	const sec_num = parseInt(secs, 10)
	const hours = Math.floor(sec_num / 3600)
	const minutes = Math.floor(sec_num / 60) % 60
	const seconds = sec_num % 60
	return [hours, minutes, seconds]
		.map(v => v < 10 ? '0' + v : v)
		.filter((v, i) => v !== '00' || i > 0)
		.join(':')
}

// Example "EN" outpout: 1K - 100K - 1.5M - 1B - 1T
export function getCompactCount(val: number, locale: string, notation: 'standard' | 'engineering' | 'scientific' | 'compact') {
	// locale: en - de - fr -... 
	const numberFormatter = Intl.NumberFormat(locale, { notation })
	return numberFormatter.format(val)
}
