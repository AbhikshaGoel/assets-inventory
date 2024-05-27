import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface AssetRequestProps {
  asset_category_id: number;
}

const formSchema = z.object({
  asset_id: z.string().min(0).default(""),
  asset_name: z.string().min(1),
});

const AssetRequestForm = ({ asset_category_id }: AssetRequestProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      asset_id: "",
      asset_name: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Handle form submission here
    console.log("Form data:", data);
  };

  return (
    <div className="h-full p-2 space-y-2 max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormItem>
            <FormLabel>Asset ID</FormLabel>
            <FormField
              control={form.control}
              name="asset_id"
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Asset Name</FormLabel>
            <FormField
              control={form.control}
              name="asset_name"
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full border rounded-md py-2 px-3"
                />
              )}
            />
            <FormMessage />
          </FormItem>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AssetRequestForm;
