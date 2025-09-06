import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../components/ui/form";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import CustomerInfoForm from "../components/forms/CustomerInfoForm";
import GoldItemInfoForm from "../components/forms/GoldItemInfoForm";
import LoanInfoForm from "../components/forms/LoanInfoForm";

// TODO: Sample validations, Need to improve
const customerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  kycId: z.string().min(1, { message: "KYC ID is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  description: z.string().min(1, { message: "Description is required" }),
  grossWeight: z.string().min(1, { message: "Gross weight is required" }),
  purity: z.string().min(1, { message: "Purity is required" }),
  netWeight: z.string().min(1, { message: "Net weight is required" }),
  gold: z.string().min(1, { message: "Gold is required" }),
  amount: z.string().min(1, { message: "Amount is required" }),
  interestRate: z.string().min(1, { message: "Interest rate is required" }),
  duration: z.string().min(1, { message: "Duration is required" }),
  startDate: z.string().min(1, { message: "Start date is required" }),
  dueDate: z.string().min(1, { message: "End date is required" }),
});

const CustomerForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: "",
      kycId: "",
      phone: "",
      address: "",
      email: "",
      description: "",
      grossWeight: "",
      purity: "",
      netWeight: "",
      gold: "",
      amount: "",
      interestRate: "",
      startDate: "",
      dueDate: "",
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center pt-16">
      <div className="w-full max-w-7xl bg-white rounded-xl p-4 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold">Add New Customer</h1>
        </div>

        <div className="min-h-[500px] overflow-y-auto h-[700px] custom-scroll">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="p-6 space-y-8"
            >
              {/* Customer Info Section */}
              <CustomerInfoForm form={form} />

              {/* Gold Item Info Section */}
              <GoldItemInfoForm form={form} />

              {/* Loan Info Section */}
              <LoanInfoForm form={form} />

              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => navigate("/customers")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Add Customer
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
