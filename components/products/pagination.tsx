"use client";

import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

interface Meta {
  pageCount: number;
  page: number;
}

interface PaginationDemoProps {
  meta: Meta;
}

export function PaginationDemo({ meta }: PaginationDemoProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Build an array for each page number.
  const pages = Array.from({ length: meta.pageCount }, (_, i) => i + 1);

  // Update the page query param and push new URL.
  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`?${params.toString()}`);
  };

  if (meta.pageCount < 2) return null;

  return (
    <section>
      <div className="flex justify-end items-center pt-40">
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() => {
                    let prevPage = meta.page - 1;
                    if (prevPage < 1) prevPage = meta.pageCount;
                    handlePageChange(prevPage);
                  }}
                />
              </PaginationItem>
              {pages.map((pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    className="cursor-pointer"
                    isActive={pageNumber === meta.page}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() => {
                    let nextPage = meta.page + 1;
                    if (nextPage > meta.pageCount) nextPage = 1;
                    handlePageChange(nextPage);
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
