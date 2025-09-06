import { Button } from "./ui/button";

const Pagination = ({
  startIndex,
  rowsPerPage,
  invoices,
  page,
  totalPages,
  setPage,
}) => {
  return (
    <div className="flex  items-end justify-between gap-4">
      <div>
        <span className="text-gray-500">
          {startIndex + 1}-{startIndex + rowsPerPage} out of {invoices.length}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="h-8 w-14"
        >
          Pre
        </Button>
        <span className="text-gray-700">
          Page {page} of {totalPages}
        </span>
        <Button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="h-8 w-14"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
