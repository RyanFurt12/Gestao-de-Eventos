import React, { useState } from 'react';
import './Carousel.css';

function Carousel({ children }) {

	const [currentIndex, setCurrentIndex] = useState(0);
	const totalItems = React.Children.count(children);

	const goToNext = () => {
			setCurrentIndex((prevIndex) =>
					prevIndex === totalItems - 1 ? 0 : prevIndex + 1
			);
	};

	const goToPrev = () => {
			setCurrentIndex((prevIndex) =>
					prevIndex === 0 ? totalItems - 1 : prevIndex - 1
			);
	};

	const goToIndex = (index) => { setCurrentIndex(index) };

	return (
		<>
			<div className="carrossel">
				<div className="carrossel-content">
					{React.Children.map(children, (child, index) => (
						<div
							className={`carrossel-item ${index === currentIndex ? 'active' : ''}`}
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						>
							{child}
						</div>
					))}
				</div>

				<button className="carrossel-controls prev" onClick={goToPrev}>{'<<'}</button>
				<button className="carrossel-controls next" onClick={goToNext}>{'>>'}</button>

				<div className="carrossel-indicators">
					{Array.from({ length: totalItems }).map((_, index) => (
						<div
							key={index}
							className={`indicator ${index === currentIndex ? 'active' : ''}`}
							onClick={() => goToIndex(index)}
						></div>
					))}
				</div>
			</div>
		</>
	)
}

export default Carousel