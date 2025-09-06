import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import SidePanel from "./SidePanel";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const invoices = [
  {
    name: "John Doe",
    kycId: "KYC001",
    phoneNumber: "+1-555-123-4567",
    address: "123 Main Street, New York, NY",
  },
  {
    name: "Jane Smith",
    kycId: "KYC002",
    phoneNumber: "+1-555-987-6543",
    address: "456 Park Avenue, Los Angeles, CA",
  },
  {
    name: "Robert Brown",
    kycId: "KYC003",
    phoneNumber: "+1-555-333-2222",
    address: "789 Oak Street, Chicago, IL",
  },
  {
    name: "Emily Johnson",
    kycId: "KYC004",
    phoneNumber: "+1-555-444-1111",
    address: "101 Pine Road, Houston, TX",
  },
  {
    name: "Michael Lee",
    kycId: "KYC005",
    phoneNumber: "+1-555-888-7777",
    address: "202 Maple Avenue, San Francisco, CA",
  },
  {
    name: "Sophia Davis",
    kycId: "KYC006",
    phoneNumber: "+1-555-222-9999",
    address: "12 Elm Street, Seattle, WA",
  },
  {
    name: "William Harris",
    kycId: "KYC007",
    phoneNumber: "+1-555-666-5555",
    address: "34 Pine Avenue, Austin, TX",
  },
  {
    name: "Olivia Clark",
    kycId: "KYC008",
    phoneNumber: "+1-555-777-1111",
    address: "90 Lakeview Road, Miami, FL",
  },
  {
    name: "James Lewis",
    kycId: "KYC009",
    phoneNumber: "+1-555-555-1212",
    address: "77 Oakwood Lane, Denver, CO",
  },
  {
    name: "Isabella Walker",
    kycId: "KYC010",
    phoneNumber: "+1-555-444-8989",
    address: "15 Meadow Street, Boston, MA",
  },
  {
    name: "Benjamin Hall",
    kycId: "KYC011",
    phoneNumber: "+1-555-222-7878",
    address: "45 Willow Drive, Phoenix, AZ",
  },
  {
    name: "Mia Young",
    kycId: "KYC012",
    phoneNumber: "+1-555-999-3232",
    address: "88 Birch Road, Dallas, TX",
  },
  {
    name: "Lucas King",
    kycId: "KYC013",
    phoneNumber: "+1-555-111-2323",
    address: "11 Sunset Boulevard, Orlando, FL",
  },
  {
    name: "Amelia Scott",
    kycId: "KYC014",
    phoneNumber: "+1-555-333-4545",
    address: "66 Highland Street, Atlanta, GA",
  },
  {
    name: "Ethan Martinez",
    kycId: "KYC015",
    phoneNumber: "+1-555-666-7878",
    address: "99 River Road, Portland, OR",
  },
];

export default function CustomersList() {
  const navigate = useNavigate();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleRowClick = (customer) => {
    setIsSidePanelOpen(true);
    setSelectedCustomer(customer);
  };

  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
    setSelectedCustomer(null);
  };

  const totalPages = Math.ceil(invoices.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = invoices.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex justify-center pt-16">
      <div className="w-full max-w-7xl bg-white rounded-xl p-4 shadow-sm">
        <div>
          <div className="flex justify-between items-center">
            <div className="relative flex items-center max-w-sm shadow-sm ml-2 mt-4 mb-6">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name, KYC ID, phone..."
                className="pl-10"
              />
            </div>
            <Button
              className="mt-4 mr-5 w-34 bg-green-600 text-white hover:bg-emerald-700"
              onClick={() => navigate("/new-customer")}
            >
              Add Customer
            </Button>
          </div>
          <Table className="table-fixed w-full">
            <TableHeader className="sticky top-0 z-10 bg-white shadow-sm">
              <TableRow>
                <TableHead className="w-[60px]">SL No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>KYC ID</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Address</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedData.map((invoice, index) => (
                <TableRow
                  key={invoice.kycId}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRowClick(invoice)}
                >
                  <TableCell className="font-medium">
                    {startIndex + index + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 font-medium rounded-full bg-green-100 flex items-center justify-center text-xs text-green-700">
                        {invoice.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <span className="font-medium text-md">
                        {invoice.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="w-16 h-8 text-md rounded-md bg-green-100 flex items-center justify-center font-medium text-green-700">
                      {invoice.kycId}
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <span className="text-gray-700 font-medium text-md">
                      {invoice.phoneNumber}
                    </span>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <span className="text-gray-600 text-md leading-relaxed">
                      {invoice.address}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <!-- Pagination --> */}
          <Pagination
            startIndex={startIndex}
            rowsPerPage={rowsPerPage}
            invoices={invoices}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </div>
      </div>

      {/* Side Panel */}
      {isSidePanelOpen && (
        <SidePanel
          selectedCustomer={selectedCustomer}
          closeSidePanel={closeSidePanel}
        />
      )}
    </div>
  );
}
