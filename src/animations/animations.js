export const animation = {
	initial: {
		scale: 0.9,
		opacity: 0,
		y: 10
	},
	animate: {
		scale: 1,
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			staggerChildren: 1
		}
	},
	exit: {
		scale: 0,
		opacity: 0,
		y: 10,
		transition: {
			duration: 0.2,
			ease: 'easeInOut'
		}
	}
}
