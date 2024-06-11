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
  subcategoryData:{
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
    osMasterId: number;
    osMasterName: string;
  }[];
  processorData?:{
    processorMasterId: number;
    processorName:string;
  }[];
}
const assetSchema = z.object(
  {
    categoryMasterId: z.string().min(1, {
    message: "Required.",
  }),
  subCategoryMasterId: z.string().min(1, {message: "Required.",}),
    manufacturerId: z.string().min(1, {message: "Required",}),
    locationId: z.string().min(1, {message: "Required.",}),
    osMasterId: z.string().min(1, {message: "Required.",}),
    processorMasterId: z.string().min(1, {message: "Required.",}),
  }
)
const AssetForm = ({categoryData,subcategoryData,assetData,locationData, manufacturerData,
  osData, processorData
}:AssetFormProps) => {
  //console.log("data",categoryData);
  const [isPending, startTransition] = useTransition();
  const [isComputer,setIsComputer] = useState<Boolean>(false);
  const [filteredSubCategoryData, setFilteredSubCategoryData] = useState<{ subCategoryMasterId: number; subCategoryName: string }[]>([]);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Store the selected country ID
  const form = useForm<z.infer<typeof assetSchema>>({
    resolver: zodResolver(assetSchema),
    defaultValues: {
      categoryMasterId:"",
      subCategoryMasterId:"",
      manufacturerId:"",
      locationId:"",
      osMasterId:"",
      processorMasterId:"",
    },
  });


  function onCategoryChange(value:any) {
  const filteredSubcategories = subcategoryData?.filter(subcategory => subcategory.categoryMasterId === parseInt(value));
  setFilteredSubCategoryData(filteredSubcategories || []);
  if(parseInt(value)===1 || parseInt(value) === 4){
    setSelectedCategory("1");
  }
  else{
    setSelectedCategory("0");
  }
  //if(categoryData.)
}

  function onSubmit(values: z.infer<typeof assetSchema>) {
    //console.log("sdhb k")
    console.log("subutmiited values:", values);
    setError("");
  }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
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
                <FormLabel>Sub Category</FormLabel>
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
                        placeholder="Select a sub-category..."
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
          <FormField
            control={form.control}
            name="manufacturerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manufacturer</FormLabel>
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
                        placeholder="Select a Manufacturer..."
                        defaultValue={field.value || ""} // Set default value to an empty string
                      />
                      <SelectContent>
                        {manufacturerData?.map((category) => (
                          <SelectItem
                            key={category.manufacturerId}
                            value={category.manufacturerId.toString()}
                          >
                            {category.manufacturerName}
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
            name="locationId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
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
                        placeholder="Select a Location..."
                        defaultValue={field.value || ""} // Set default value to an empty string
                      />
                      <SelectContent>
                        {locationData?.map((category) => (
                          <SelectItem
                            key={category.locationId}
                            value={category.locationId.toString()}
                          >
                            {category.locationName}
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
          {selectedCategory ==="1" ? (
            <>
              <FormField
                control={form.control}
                name="osMasterId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Operating System</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue
                            placeholder="Select an operating system..."
                            defaultValue={field.value || ""} 
                          />
                          <SelectContent>
                            {osData?.map((os) => (
                              <SelectItem
                                key={os.osMasterId}
                                value={os.osMasterId.toString()}
                              >
                                {os.osMasterName}
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
                name="processorMasterId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Processor</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue
                            placeholder="Select a processor..."
                            defaultValue={field.value || ""} 
                          />
                          <SelectContent>
                            {processorData?.map((processor) => (
                              <SelectItem
                                key={processor.processorMasterId}
                                value={processor.processorMasterId.toString()}
                              >
                                {processor.processorName}
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
            </>
          ) : null}


        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          Add Asset
        </Button>
      </form>
    </Form>
  );
};

export default AssetForm;
