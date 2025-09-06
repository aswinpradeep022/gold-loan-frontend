import { FaGem, FaIdCard, FaRegCopy, FaUser } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GiScales } from "react-icons/gi";
import { LuScale } from "react-icons/lu";
import { AiFillGold } from "react-icons/ai";
import { AiOutlineDollar } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { toast } from "react-toastify";

const SidePanel = ({ selectedCustomer, closeSidePanel }) => {
  const handleCopy = () => {
    if (selectedCustomer?.kycId) {
      navigator.clipboard.writeText(selectedCustomer.kycId);
      toast.success("Copied to clipboard");
    }
  };

  return (
    <div>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeSidePanel}
      />

      {/* Side Panel */}
      <div className="fixed right-0 top-0 h-full w-[600px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCustomer?.name}
            </h2>
            <div
              onClick={handleCopy}
              className="w-24 gap-2 h-8 text-md cursor-pointer rounded-md bg-green-100 flex items-center justify-center font-medium text-green-700"
            >
              <FaRegCopy />
              {selectedCustomer?.kycId}
            </div>
          </div>

          {/* Customer Details */}
          <div className="pb-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Customer Info
                </h3>
                <div className=" bg-[#f9fafc] divide-y divide-gray-200 p-4 rounded-md">
                  <div className="flex justify-between py-3">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <span className="text-sm text-gray-500">Full Name</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {selectedCustomer?.name}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <div className="flex items-center gap-2">
                      <FaIdCard />
                      <span className="text-sm text-gray-500">KYC ID</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {selectedCustomer?.kycId}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <div className="flex items-center gap-2">
                      <MdPhone />
                      <span className="text-sm text-gray-500">
                        Phone Number
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {selectedCustomer?.phoneNumber}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <div className="flex items-center gap-2">
                      <IoLocationSharp />
                      <span className="text-sm text-gray-500">Address</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-right">
                      {selectedCustomer?.address}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <div className="flex items-center gap-2">
                      <MdEmail />
                      <span className="text-sm text-gray-500">
                        Email Address
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900 text-right">
                      abc@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Item Info */}
          <div className="pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Gold Item Info
            </h3>

            <div className=" bg-[#f9fafc] divide-y divide-gray-200 p-4 rounded-md">
              <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                  <HiOutlineDocumentText />
                  <span className="text-sm text-gray-500">Description</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {selectedCustomer?.name}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                  <GiScales />
                  <span className="text-sm text-gray-500">Gross Weight</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {selectedCustomer?.kycId}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                  <LuScale />
                  <span className="text-sm text-gray-500">Net Weight</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {selectedCustomer?.phoneNumber}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                  <FaGem />
                  <span className="text-sm text-gray-500">Purity</span>
                </div>
                <span className="text-sm font-medium text-gray-900 text-right">
                  {selectedCustomer?.address}
                </span>
              </div>
            </div>
          </div>

          {/* Loan Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Loan Info
            </h3>

            <div className=" bg-[#f9fafc] divide-y divide-gray-200 p-4 rounded-md">
              <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                  <AiFillGold />
                  <span className="text-sm text-gray-500">Gold Item</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {selectedCustomer?.name}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                  <AiOutlineDollar />
                  <span className="text-sm text-gray-500">Loan Amount</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {selectedCustomer?.kycId}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                  <IoMdTrendingUp />
                  <span className="text-sm text-gray-500">Interest Rate</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {selectedCustomer?.phoneNumber}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <div className="flex items-center gap-2">
                  <SlCalender />
                  <span className="text-sm text-gray-500">Due Date</span>
                </div>
                <span className="text-sm font-medium text-gray-900 text-right">
                  {selectedCustomer?.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
