export function isValidName(name: string, min: number, max: number) {
	const expression = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/
	return expression.test(name) && name.length >= min && name.length <= max
}

export function isValidEmail(email: string) {
	const expression = /\S+@\S+\.\S+/
	return expression.test(email)
}
