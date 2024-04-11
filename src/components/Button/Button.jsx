import styles from './styles/Button.module.scss';

function Button({ children, onClick, backgroundColor, textColor }) {
	return (
		<button
			className={styles.button}
			onClick={onClick}
			style={{ backgroundColor, color: textColor }}
		>
			{children}
		</button>
	);
}

export default Button;
