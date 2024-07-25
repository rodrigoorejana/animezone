import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Total de botões exibidos na tela
const totButtons = 9;
// Total de botões que aparecem em cada lado
const sideButtons = (totButtons - 1) / 2;

interface PaginationProps {
    limit: number;
    total: number;
    offset: number;
    setOffset: (offset: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ limit, total, offset, setOffset }) => {
    // Calcula a página atual com base no offset
    const currentPage = Math.floor(offset / limit) + 1;
    // Calcula o total de páginas
    const totalPages = Math.ceil(total / limit);
    // Calcula a primeira página a ser exibida
    const firstPage = Math.max(currentPage - sideButtons, 1);
    // Calcula a última página a ser exibida
    const lastPage = Math.min(firstPage + totButtons - 1, totalPages);

    // Função para criar um array de páginas a serem exibidas
    const pageNumbers = Array.from({ length: lastPage - firstPage + 1 }, (_, i) => firstPage + i);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => setOffset(Math.max((currentPage - 2) * limit, 0))}
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => setOffset((number - 1) * limit)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className="page-link"
                        onClick={() => setOffset(Math.min(currentPage * limit, (totalPages - 1) * limit))}
                        aria-label="Next"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
