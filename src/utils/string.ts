// slugify("Hello, everyone!") -> hello-everyone
export function slugify(text: string) {
	return text.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '')
}

// camelToSnakeCase("camelCaseToSnakeCase") -> camel_case_to_snake_case
export function camelToSnakeCase(text: string) {
	return text.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

// snakeToCamelCase("snake_case_to_camel_case") -> snakeCaseToCamelCase
export function snakeToCamelCase(text: string) {
	text.toLowerCase().replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''))
}
