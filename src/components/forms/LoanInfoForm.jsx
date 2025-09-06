import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { AiFillGold } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { Input } from "../ui/input";
import { AiOutlineDollar } from "react-icons/ai";

const LoanInfoForm = ({ form }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
        Loan Info
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="gold"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <AiFillGold className="h-4 w-4" />
                  Gold Item
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Gold Item Reference" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <AiOutlineDollar className="h-4 w-4" />
                  Amount
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter loan amount" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2">
          <FormField
            control={form.control}
            name="interestRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <IoMdTrendingUp className="h-4 w-4" />
                  Interest Rate
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter interest rate (%)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <SlCalender className="h-4 w-4" />
                  Start Date
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter start date"
                    type="date"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2">
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <SlCalender className="h-4 w-4" />
                  Due Date
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter due date" type="date" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default LoanInfoForm;
