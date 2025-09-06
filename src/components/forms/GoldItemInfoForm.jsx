import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Textarea } from "../ui/textarea";
import { GiScales } from "react-icons/gi";
import { Input } from "../ui/input";
import { FaGem } from "react-icons/fa";

const GoldItemInfoForm = ({ form }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
        Gold Item Info
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 md:col-span-2">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <HiOutlineDocumentText className="h-4 w-4" />
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    rows={3}
                    {...field}
                    placeholder="Describe the gold item"
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
            name="grossWeight"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <GiScales className="h-4 w-4" />
                  Gross Weight
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter gross weight(in grams)"
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
            name="netWeight"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <GiScales className="h-4 w-4" />
                  Net Weight
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter net weight(in grams)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <FormField
            control={form.control}
            name="purity"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <FaGem className="h-4 w-4" />
                  Purity
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter purity(eg: 22K, 24K)" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default GoldItemInfoForm;
