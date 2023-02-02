export function clearArr<T extends Array<U>, U>(array: T) {
	array.length = 0
}

export function rmArrEntry(arr: unknown[], idx: number) {
	if (idx < 0) { return }
	arr[idx] = arr[arr.length - 1]
	arr.pop()
}

export function rmDuplicates(arr: unknown[]) {
	return [...new Set(arr)]
}