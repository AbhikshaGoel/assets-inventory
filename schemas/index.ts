import * as zod from "zod";

export const LoginSchema = zod.object({
  email: zod
    .string({
      invalid_type_error: "Must be a string", // first one does not have message prop
    })
    .email({ message: "Please provide a valid employee number" }),
  password: zod.string().min(1, { message: "Password is required" }),
  code: zod.optional(
    zod.string().min(6, { message: "Code must be 6 characters" })
  ),
});

const DesktopComputingSchema = zod.object({
  category: zod.literal("Desktop Computing"),
  subcategory: zod.enum(["Desktops", "Laptops", "Peripherals"]),
  items: zod
    .array(
      zod.enum([
        // Desktops
        "CPU",
        "Monitor",
        "Keyboard",
        "Mouse",
        "Speakers",
        "Graphics Card",
        "RAM",
        "Hard Drive/SSD",
        // Laptops
        "Laptop",
        "Docking Station",
        "External Monitor",
        "External Keyboard",
        "External Mouse",
        "Laptop Bag",
        // Peripherals
        "Printer",
        "Scanner",
        "External Hard Drive",
        "USB Flash Drive",
        "Webcam",
        "Headset",
        "Microphone",
      ])
    )
    .min(1, { message: "At least one item must be selected" }),
});

const NetworkingEquipmentSchema = zod.object({
  category: zod.literal("Networking Equipment"),
  subcategory: zod.enum([
    "Routers",
    "Switches",
    "Access Points",
    "Network Cables",
    "Modems",
    "Firewalls",
    "Network Interface Cards (NICs)",
  ]),
  items: zod
    .array(zod.string())
    .min(1, { message: "At least one item must be selected" }),
});

const ServersSchema = zod.object({
  category: zod.literal("Servers"),
  subcategory: zod.enum([
    "Physical Servers",
    "Server Components",
    "Virtual Servers",
  ]),
  items: zod
    .array(
      zod.enum([
        // Physical Servers
        "Rack Servers",
        "Tower Servers",
        // Server Components
        "Server CPUs",
        "Server RAM",
        "Server Hard Drives/SSDs",
        "RAID Controllers",
        "Power Supplies",
        // Virtual Servers
        "Virtual Machines",
        "Hypervisors",
      ])
    )
    .min(1, { message: "At least one item must be selected" }),
});

const StorageSchema = zod.object({
  category: zod.literal("Storage"),
  subcategory: zod.enum([
    "External Storage",
    "Internal Storage",
    "Backup Solutions",
  ]),
  items: zod
    .array(
      zod.enum([
        // External Storage
        "NAS (Network Attached Storage)",
        "SAN (Storage Area Network)",
        // Internal Storage
        "SSDs",
        "HDDs",
        // Backup Solutions
        "Tape Drives",
        "Backup Servers",
      ])
    )
    .min(1, { message: "At least one item must be selected" }),
});

const SoftwareSchema = zod.object({
  category: zod.literal("Software"),
  subcategory: zod.enum([
    "Operating Systems",
    "Office Productivity",
    "Development Tools",
    "Security Software",
    "Creative Software",
  ]),
  items: zod
    .array(
      zod.enum([
        // Operating Systems
        "Windows",
        "macOS",
        "Linux Distributions",
        // Office Productivity
        "Microsoft Office",
        "Google Workspace",
        // Development Tools
        "IDEs (Integrated Development Environments)",
        "Version Control Systems (e.g., Git)",
        // Security Software
        "Antivirus",
        "Firewall Software",
        "Encryption Tools",
        // Creative Software
        "Adobe Creative Suite",
        "Video Editing Software",
      ])
    )
    .min(1, { message: "At least one item must be selected" }),
});

const MobileDevicesSchema = zod.object({
  category: zod.literal("Mobile Devices"),
  subcategory: zod.enum(["Smartphones", "Tablets", "Accessories"]),
  items: zod
    .array(
      zod.enum([
        // Smartphones
        "iOS",
        "Android",
        // Tablets
        "iPads",
        "Android Tablets",
        // Accessories
        "Chargers",
        "Cases",
        "Screen Protectors",
      ])
    )
    .min(1, { message: "At least one item must be selected" }),
});

const OfficeEquipmentSchema = zod.object({
  category: zod.literal("Office Equipment"),
  subcategory: zod.enum(["Furniture", "Other Office Devices"]),
  items: zod
    .array(
      zod.enum([
        // Furniture
        "Desks",
        "Chairs",
        "Filing Cabinets",
        // Other Office Devices
        "Projectors",
        "Telephones (VOIP and Traditional)",
        "Conference Equipment",
      ])
    )
    .min(1, { message: "At least one item must be selected" }),
});

const OtherITEquipmentSchema = zod.object({
  category: zod.literal("Other IT Equipment"),
  subcategory: zod.enum(["Power Supply", "Cooling Solutions"]),
  items: zod
    .array(
      zod.enum([
        // Power Supply
        "UPS (Uninterruptible Power Supply)",
        "Surge Protectors",
        // Cooling Solutions
        "Fans",
        "Air Conditioners for Server Rooms",
      ])
    )
    .min(1, { message: "At least one item must be selected" }),
});

const MiscellaneousSchema = zod.object({
  category: zod.literal("Miscellaneous"),
  subcategory: zod.enum(["Licenses", "Cables and Adapters"]),
  items: zod
    .array(
      zod.enum([
        // Licenses
        "Software Licenses",
        "Cloud Service Subscriptions",
        // Cables and Adapters
        "HDMI Cables",
        "USB Cables",
        "Power Cables",
        "Adapters (e.g., USB to Ethernet)",
      ])
    )
    .min(1, { message: "At least one item must be selected" }),
});

export const RequestAssetSchema = zod.object({
  name: zod.string().min(1, { message: "Name is required" }),
  email: zod.string().email({ message: "Invalid email address" }),
  assets: zod.union([
    DesktopComputingSchema,
    NetworkingEquipmentSchema,
    ServersSchema,
    StorageSchema,
    SoftwareSchema,
    MobileDevicesSchema,
    OfficeEquipmentSchema,
    OtherITEquipmentSchema,
    MiscellaneousSchema,
  ]),
  urgency: zod.enum(["low", "medium", "high"]),
  details: zod.string().optional(),
});
