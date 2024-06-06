"use client"
import AddAssetForm from "@/components/addAssetForrm";


import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
  SelectLabel,
  SelectGroup
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TrashIcon, UploadIcon, Wand2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import FormError from "@/components/form-error";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AssetSchema } from "@/schemas";



export default function Home() {


    
    
    const [error, setError] = useState<string>("Something went wrong");
    const [selectedCountry, setSelectedCountry] = useState<number | null>(null); // Store the selected country ID

    



// useEffect(() => {
//     if (selectedCountry !== null) {
//       axios
//         .get(`/categorymaster/${selectedCountry}`)
//         .then((response) => {
//           console.log(response);
//           // Populate the form fields with the fetched data
//           const countryData = response.data;
//           form.setValue("country_id", countryData.Country_Id.toString());
//           form.setValue("country_name", countryData.COUNTRY_NAME);
//           form.setValue(
//             "country_flag_location",
//             countryData.COUNTRY_FLAG_LOCATION
//           );
//           form.setValue(
//             "country_map_location",
//             countryData.COUNTRY_MAP_LOCATION
//           );
//         })
//         .catch((error) => {
//           console.error("Error posting data:", error);
//         });
//     }
//   }, [form, selectedCountry]);

  useEffect(() => {
    axios.get("http://10.14.84.38:9001/api/fetchlocation")
        .then((response) => {
            const data = response.data;
            
            console.log("client data", data); 
        })
        .catch((error) => {
            setError("Something went wrong");
            console.error("Error fetching category data", error);
        });
}, []);

  
  return (
   <main className="mt-16 h-auto md:ml-48">
    <div className="text-2xl rounded-md px-4 text-white/90 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% "> Add Assets
        <p className=" text-base text-white/90 dark:text-gray-400">
            Fill out the form to request a new laptop, printer, or other asset. Or Upload the CSV file
        </p>
    </div>
    <div className="p-4 space-4 flex">
        <div className="w-1/2 space-y-4">
            
    <div className="h-full p-2 space-y-2 max-w-3xl mx-auto">
      <AddAssetForm categoryData={[]} subcategoryData={[]} assetData={[]} locationData={[]}/>
    </div>
 
        </div>
        <Separator className="bg-blue-600" orientation="vertical"></Separator>
        <div className="w-1/2 ">
            <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Upload Assets</h1>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                            Add files to your asset library.
                        </p>
                    </div>
                <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <form className="space-y-6">
                            <div>
                           
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm justify-center text-center text-gray-600 dark:text-gray-400">
                                    <label className="relative cursor-pointer bg-white dark:bg-gray-900 rounded-md 
                                        font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file" name="file" type="file" className="sr-only" />
                                    </label>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">CSV file up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <FormError message={error} />
                        <Button type="submit" className="w-full">
                            Upload Assets
                        </Button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
