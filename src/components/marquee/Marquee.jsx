import { useEffect, useRef, useState } from 'react';
import './marquee.css';

const Marquee = ({ text, speed = 80 }) => {
	const containerRef = useRef(null);
	const itemRef = useRef(null);
	const [copies, setCopies] = useState(2);
	const [itemWidth, setItemWidth] = useState(0);

	useEffect(() => {
		const calculate = () => {
			if (!containerRef.current || !itemRef.current) return;

			const containerWidth = containerRef.current.offsetWidth;
			const singleWidth = itemRef.current.offsetWidth;

			setItemWidth(singleWidth);

			const neededCopies = Math.ceil((containerWidth * 2) / singleWidth);
			setCopies(neededCopies);
		};

		calculate();
		window.addEventListener('resize', calculate);
		return () => window.removeEventListener('resize', calculate);
	}, [text]);

	return (
		<section className="section" >
			<div className="marquee" ref={containerRef}>
				<div
					className="marquee__track"
					style={{
						'--marquee-distance': `${itemWidth}px`,
						'--marquee-duration': `${itemWidth / speed}s`,
					}}
				>
					{Array.from({ length: copies }).map((_, i) => (
						<div
							key={i}
							ref={i === 0 ? itemRef : null}
							className="marquee__item"
						>
							{text}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Marquee;
