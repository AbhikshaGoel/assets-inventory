import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from 'axios';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";

import { useTransition, useState, useEffect } from "react";
interface AssetFormProps{
  categoryData?:{
    categoryId: number;
    categoryName: string;
  }[];
  subcategoryData?:{
    categoryId: number;
    categoryName: string;
    categoryMasterId: number;
  }[];
  assetData?:{
    assetModelId: number;
    manufacturerId: number;
    subcategoryId: number;
    assetModelName: string;
  }[];
  locationData?:{
    locationId: number;
    locationName: string;
  }[];
  manufacturerData?:{
    manufacturerId: number;
    manufacturerName: string;
  }[];
}

const LoginForm = ({categoryData,subcategoryData,assetData,locationData, manufacturerData}:AssetFormProps) => {
  //console.log("data",categoryData);
  const [isPending, startTransition] = useTransition();
  const [isTwoFactor, setTwoFactor] = useState(false); // TODO: ADD 2FA
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

    const [dataLoaded, setDataLoaded] = useState(false);

  // Check if all necessary data is loaded
  // useEffect(() => {
  //   if (categoryData && subcategoryData && assetData && locationData && manufacturerData) {
  //     //console.log("category", categoryData)
  //     setDataLoaded(true);
  //   }
  // }, [categoryData, subcategoryData, assetData, locationData, manufacturerData]);

  // Render the form only when data is loaded
  // if (!dataLoaded) {
  //   return <p>Loading...</p>;
  // }


  function onSubmit(values: z.infer<typeof LoginSchema>) {
    setError("");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-2 space-x-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asset Category</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue
                                defaultValue={field.value}
                                placeholder="Select Asset"
                              />                    </SelectTrigger>
                    <SelectContent>
                      {categoryData?.map((category) => (
                              <SelectItem
                                key={category.categoryId}
                                value={category.categoryName}
                              >
                                {category.categoryName}
                              </SelectItem>
                            ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Render other form fields similarly */}
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          Add Asset
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
