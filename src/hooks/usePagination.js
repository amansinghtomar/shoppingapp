import { useMemo } from 'react';

export const DOT = '...';

const range = (start, end) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalPage, currentPage, siblingCount = 1 }) => {
	const paginationRange = useMemo(() => {
		const totalPageNumbers = siblingCount + 5;

		if (totalPageNumbers >= totalPage) {
			return range(1, totalPage);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPage);

		const showLeftDots = leftSiblingIndex > 2;
		const showRightDots = rightSiblingIndex < totalPage - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPage;

		if (!showLeftDots && showRightDots) {
			const leftItemCount = 3 + 2 * siblingCount;
			const leftRange = range(1, leftItemCount);
			return [...leftRange, DOT, lastPageIndex];
		}
		if (showLeftDots && !showRightDots) {
			const rightItemCount = 3 + 2 * siblingCount;
			const rightRange = range(totalPage - rightItemCount + 1, totalPage);
			return [firstPageIndex, DOT, ...rightRange];
		}

		if (showLeftDots && showRightDots) {
			const middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOT, ...middleRange, DOT, lastPageIndex];
		}
	}, [totalPage, currentPage, siblingCount]);

	return paginationRange;
};
