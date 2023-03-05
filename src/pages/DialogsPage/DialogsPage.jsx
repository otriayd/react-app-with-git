import styles from './DialogsPage.module.scss'

export const DialogsPage = () => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsProfiles}>
				<ul>
					<li><a href="#s">Piter</a></li>
					<li><a href="#s">Piter</a></li>
					<li><a href="#s">Piter</a></li>
					<li><a href="#s">Piter</a></li>
				</ul>
			</div>
			<div className={styles.dialogsItems}>
				<div className={styles.dialog}>
					<p>Hi how are you?</p>
				</div>
				<div className={styles.dialog}>
					<p>Hi how are you?</p>
				</div>
				<div className={styles.dialog}>
					<p>Hi how are you?</p>
				</div>
				<div className={styles.dialog}>
					<p>Hi how are you?</p>
				</div>
				<div className={styles.newDialogsText}>
					<textarea name="" id="" cols="30" rows="5"></textarea>
					<button>Add Message</button>
				</div>
			</div>

		</div>
	)
}