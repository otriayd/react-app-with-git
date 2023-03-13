import styles from './FormControls.module.scss'

export const InputText = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<input className={styles.text + ' ' + (hasError ? styles.error : '')} {...input} {...props} />
	)
}