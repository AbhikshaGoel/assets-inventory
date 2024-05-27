// "use client";
// import { useState } from "react";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
// } from "@shards/react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "@/components/ui/button"; // Assuming these are Shards UI components

// const RequestAssetSchema = z.object({
//   category: z.string().nonempty(),
//   subcategory: z.string().nonempty(),
//   name: z.string().nonempty(),
//   quantity: z.number().positive().int(),
//   freshRequest: z.boolean(),
// });

// const RequestAssetPage = () => {
//   const [open, setOpen] = useState(false);
//   const { handleSubmit, control } = useForm({
//     resolver: zodResolver(RequestAssetSchema),
//   });

//   const toggleDialog = () => {
//     setOpen(!open);
//   };

//   const onSubmit = (data) => {
//     console.log(data); // Handle form submission here
//     toggleDialog(); // Close dialog after form submission
//   };

//   return (
//     <>
//       <Button variant="outline" onClick={toggleDialog}>
//         Request Asset
//       </Button>
//       <Dialog open={open} onClose={toggleDialog}>
//         <DialogTrigger asChild>
//           <Button variant="outline" onClick={toggleDialog}>
//             Request Asset
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Request for Asset</DialogTitle>
//             <DialogDescription>
//               Kindly select the category and subcategory of the asset, provide
//               name and quantity, and choose whether it's a fresh request or buy
//               back against stale or broken items. Click save when you're done.
//             </DialogDescription>
//           </DialogHeader>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="category" className="text-right">
//                   Category
//                 </Label>
//                 <Select
//                   id="category"
//                   {...control("category")}
//                   className="col-span-3"
//                 >
//                   <option value="hardware">Hardware</option>
//                   <option value="software">Software</option>
//                   {/* Add more options as needed */}
//                 </Select>
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="subcategory" className="text-right">
//                   Subcategory
//                 </Label>
//                 <Select
//                   id="subcategory"
//                   {...control("subcategory")}
//                   className="col-span-3"
//                 >
//                   {/* Populate subcategories based on selected category */}
//                   {control.category.value === "hardware" && (
//                     <>
//                       <option value="computer">Computer</option>
//                       <option value="laptop">Laptop</option>
//                       <option value="printer">Printer</option>
//                       <option value="server">Server</option>
//                       <option value="mouse">Mouse</option>
//                       <option value="keyboard">Keyboard</option>
//                       {/* Add more options as needed */}
//                     </>
//                   )}
//                   {control.category.value === "software" && (
//                     <>
//                       <option value="license">License</option>
//                       <option value="application">Application</option>
//                       {/* Add more options as needed */}
//                     </>
//                   )}
//                 </Select>
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="name" className="text-right">
//                   Name
//                 </Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter name"
//                   {...control("name")}
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="quantity" className="text-right">
//                   Quantity
//                 </Label>
//                 <Input
//                   id="quantity"
//                   type="number"
//                   placeholder="Enter quantity"
//                   {...control("quantity")}
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Checkbox
//                   id="freshRequest"
//                   {...control("freshRequest")}
//                   className="col-span-4"
//                 >
//                   Fresh Request
//                 </Checkbox>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button type="submit">Save changes</Button>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default RequestAssetPage;

import React from "react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BYBZaA3KIDa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="mt-16 mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Request an Asset</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form to request a new laptop, printer, or other asset.
        </p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="asset-type">Asset Type</Label>
          <Select defaultValue="other">
            <SelectTrigger>
              <SelectValue placeholder="Select asset type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="laptop">Laptop</SelectItem>
              <SelectItem value="printer">Printer</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="laptop">Laptop</Label>
          <Select defaultValue="macbook-pro">
            <SelectTrigger>
              <SelectValue placeholder="Select laptop model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="macbook-pro">MacBook Pro</SelectItem>
              <SelectItem value="macbook-air">MacBook Air</SelectItem>
              <SelectItem value="dell-xps">Dell XPS</SelectItem>
              <SelectItem value="hp-spectre">HP Spectre</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="printer">Printer</Label>
          <Select defaultValue="hp-laserjet">
            <SelectTrigger>
              <SelectValue placeholder="Select printer model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hp-laserjet">HP LaserJet</SelectItem>
              <SelectItem value="canon-pixma">Canon PIXMA</SelectItem>
              <SelectItem value="epson-ecotank">Epson EcoTank</SelectItem>
              <SelectItem value="brother-mfc">Brother MFC</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="gradient">Gradient Color</Label>
          <Select defaultValue="blue-to-purple">
            <SelectTrigger>
              <SelectValue placeholder="Select gradient color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blue-to-purple">Blue to Purple</SelectItem>
              <SelectItem value="green-to-teal">Green to Teal</SelectItem>
              <SelectItem value="red-to-orange">Red to Orange</SelectItem>
              <SelectItem value="pink-to-red">Pink to Red</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="details">Additional Details</Label>
          <Textarea
            id="details"
            placeholder="Enter any additional details"
            rows={4}
          />
        </div>
        <Button className="w-full" type="submit">
          Submit Request
        </Button>
      </form>
    </div>
  );
}
