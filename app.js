const tooltip = document.querySelector('.tooltip');
const tooltipDescription = document.querySelector('.description-of-tooltip');

tooltip.addEventListener('mouseover', () => {
    tooltipDescription.style.opacity = '1';
    tooltipDescription.style.transform = 'translateY(0)';
});

tooltip.addEventListener('mouseout', () => {
    tooltipDescription.style.opacity = '0';
    tooltipDescription.style.transform = 'translateY(-15px)';
});