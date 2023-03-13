export const isRequired = (value) => {
	if (value) return undefined
	return 'The field is required'
}

export const maxLengthCreator = (length) => {
	return (value) => {
		if (value.length > length) return `Max length must be less ${length}`
		return undefined
	}
}