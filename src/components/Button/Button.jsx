import styles from './styles/Button.module.scss';
import { motion } from 'framer-motion';

function Button({ children, onClick, backgroundColor, textColor }) {
	return (
		<motion.button
			className={styles.button}
			onClick={onClick}
			style={{ backgroundColor, color: textColor }}
			whileHover={{ scale: 1.05 }}
		>
			{children}
		</motion.button>
	);
}

export default Button;
