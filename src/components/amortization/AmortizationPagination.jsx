const AmortizationPagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className=" mt-8 flex items-center justify-center gap-4 ">
            <button onClick={() => onPageChange(currentPage - 1) } disabled={currentPage === 1} className="button-secondary">
                Anterior
            </button>
            <p className="text-extras">
                Página
                {" "}
                {currentPage}
                {" "}
                de
                {" "}
                {totalPages}
            </p>
            <button onClick={() => onPageChange(currentPage + 1) } disabled={currentPage === totalPages} className="button-primary">
                Siguiente
            </button>
        </div>
    );
};

export default AmortizationPagination;