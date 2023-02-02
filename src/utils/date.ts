export function formatDate(locale: string, date: Date) {
	const dateFormatter = Intl.DateTimeFormat(locale)
	return dateFormatter.format(date)
}
