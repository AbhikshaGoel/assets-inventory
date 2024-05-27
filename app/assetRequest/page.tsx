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

const page = () => {
  return <div>page</div>;
};

export default page;
