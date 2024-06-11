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
  categoryData:{
    categoryId: number;
    categoryName: string;
  }[];
  subcategoryData?:{
    subCategoryMasterId: number;
    subCategoryName: string;
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
  osData?:{
    odMasterId: number;
    osMasterName: string;
  }[];
  processorData?:{
    processorMasterId: number;
    processorName:string;
  }
}
const assetSchema = z.object(
  {
    categoryMasterId: z.string().min(1, {
    message: "Required.",
  }),
  subCategoryMasterId: z.string().min(1, {
    message: "Required.",}),
  }
)
const AssetForm = ({categoryData,subcategoryData,assetData,locationData, manufacturerData}:AssetFormProps) => {
  //console.log("data",categoryData);
  const [isPending, startTransition] = useTransition();
  const [filteredSubCategoryData, setFilteredSubCategoryData] = useState<{ subCategoryMasterId: number; subCategoryName: string }[]>([]);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null); // Store the selected country ID
  const form = useForm<z.infer<typeof assetSchema>>({
    resolver: zodResolver(assetSchema),
    defaultValues: {
      categoryMasterId:"",
      subCategoryMasterId:""
    },
  });


  function onCategoryChange(value:any) {
  const filteredSubcategories = subcategoryData?.filter(subcategory => subcategory.categoryMasterId === parseInt(value));
  setFilteredSubCategoryData(filteredSubcategories || []);
}

  function onSubmit(values: z.infer<typeof assetSchema>) {
    //console.log("sdhb k")
    console.log("subutmiited values:", values);
    setError("");
  }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-2 space-x-4">
          <FormField
            control={form.control}
            name="categoryMasterId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asset List</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                     onCategoryChange(value); 
                    }
                  }
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue
                        placeholder="Select a category..."
                        defaultValue={field.value || ""} // Set default value to an empty string
                      />
                      <SelectContent>
                        {categoryData?.map((category) => (
                          <SelectItem
                            key={category.categoryId}
                            value={category.categoryId.toString()}
                          >
                            {category.categoryName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subCategoryMasterId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asset List</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue
                        placeholder="Select a category..."
                        defaultValue={field.value || ""} // Set default value to an empty string
                      />
                      <SelectContent>
                        {filteredSubCategoryData?.map((category) => (
                          <SelectItem
                            key={category.subCategoryMasterId}
                            value={category.subCategoryMasterId.toString()}
                          >
                            {category.subCategoryName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          Add Asset
        </Button>
      </form>
    </Form>
  );
};

export default AssetForm;
