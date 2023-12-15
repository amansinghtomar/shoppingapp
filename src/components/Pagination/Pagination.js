import { usePagination, DOT } from '../../hooks/usePagination';
import React from 'react';
import {
	Container,
	Next,
	Prev,
	PaginationList,
	PaginationListContainer,
	Ellipsis,
	PrevIcon,
	NextIcon,
} from './PaginationStyles';

export default function Pagination({
	totalPage,
	currentPage,
	onPageChange,
	siblingCount = 1,
}) {
	const paginationRange = usePagination({
		totalPage,
		currentPage,
		siblingCount,
	});
	console.log(paginationRange);
	return (
		<Container>
			<Prev
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<PrevIcon disabled={currentPage === 1} />
			</Prev>
			<PaginationListContainer>
				{paginationRange.map((pageNumber, index) => {
					//console.log(pageNumber,DOT);

					if (pageNumber === DOT) {
						console.log('inside');
						return <Ellipsis key={index}> &#8230;</Ellipsis>;
					}
					return (
						<PaginationList
							key={pageNumber}
							onClick={() => onPageChange(pageNumber)}
							isActive={currentPage === pageNumber}
						>
							{pageNumber}
						</PaginationList>
					);
				})}
			</PaginationListContainer>
			<Next
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPage}
			>
				<NextIcon disabled={currentPage === totalPage} />
			</Next>
		</Container>
	);
}
