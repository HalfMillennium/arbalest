interface LogoOptions {
  large: string; // URL
  small: string; // URL
}

interface WebsiteDetails {
  /** Content root specifies to the lowest-level domain that contains the properties current and future content
   * e.g. An e-commerce shop that hosts their store at 'www.example.com/catalog/shop' would use this link as their content
   * root so that all future updates to the shop are tracked by Arbalest
   */
  contentRoot: string;
}

type PropertySize = "large" | "medium" | "small";

export interface Property {
  [key: string]:
    | string
    | PropertyIndustryEnum
    | "large"
    | "medium"
    | "small"
    | Date
    | number
    | WebsiteDetails
    | LogoOptions
    | undefined;
  id: string;
  name: string;
  description: string;
  /** Up-to-date count of the number of campaigns ever created for this property */
  campaignCount: number;
  createdAt: Date;
  industry: PropertyIndustryEnum;
  location?: string; // The physical location of the business, if applicable
  website: WebsiteDetails;
  size: PropertySize;
  logo: LogoOptions;
}

export enum PropertyIndustryEnum {
  AGRICULTURE = "agriculture",
  CONSTRUCTION = "construction",
  EDUCATION = "education",
  ENERGY = "energy",
  ENTERTAINMENT = "entertainment",
  FINANCE = "finance",
  FOOD_SERVICES = "food services",
  HEALTHCARE = "healthcare",
  HOSPITALITY = "hospitality",
  INFORMATION_TECHNOLOGY = "information technology",
  MANUFACTURING = "manufacturing",
  MINING = "mining",
  REAL_ESTATE = "real estate",
  E_COMMERCE = "e-commerce",
  TRANSPORTATION = "transportation",
  TELECOMMUNICATIONS = "telecommunications",
  WHOLESALE = "wholesale",
}

export const PropertyIndustryRecord: Record<PropertyIndustryEnum, string> = {
  [PropertyIndustryEnum.AGRICULTURE]: "Agriculture",
  [PropertyIndustryEnum.CONSTRUCTION]: "Construction",
  [PropertyIndustryEnum.EDUCATION]: "Education",
  [PropertyIndustryEnum.ENERGY]: "Energy",
  [PropertyIndustryEnum.ENTERTAINMENT]: "Entertainment",
  [PropertyIndustryEnum.FINANCE]: "Finance",
  [PropertyIndustryEnum.FOOD_SERVICES]: "Food Services",
  [PropertyIndustryEnum.HEALTHCARE]: "Healthcare",
  [PropertyIndustryEnum.HOSPITALITY]: "Hospitality",
  [PropertyIndustryEnum.INFORMATION_TECHNOLOGY]: "Information Technology",
  [PropertyIndustryEnum.MANUFACTURING]: "Manufacturing",
  [PropertyIndustryEnum.MINING]: "Mining",
  [PropertyIndustryEnum.REAL_ESTATE]: "Real Estate",
  [PropertyIndustryEnum.E_COMMERCE]: "E-commerce",
  [PropertyIndustryEnum.TRANSPORTATION]: "Transportation",
  [PropertyIndustryEnum.TELECOMMUNICATIONS]: "Telecommunications",
  [PropertyIndustryEnum.WHOLESALE]: "Wholesale",
};

export const EXAMPLE_PROPERTIES: Property[] = [
  {
    id: "1",
    name: "E-commerce Shop",
    description: "An online shop selling various items.",
    campaignCount: 5,
    createdAt: new Date(),
    industry: PropertyIndustryEnum.E_COMMERCE,
    location: "www.example.com",
    website: {
      contentRoot: "www.example.com/catalog/shop",
    },
    size: "large",
    logo: {
      large: "www.example.com/logo_large.png",
      small: "www.example.com/logo_small.png",
    },
  },
  {
    id: "2",
    name: "Tech Company",
    description: "A tech company providing IT solutions.",
    campaignCount: 10,
    createdAt: new Date(),
    industry: PropertyIndustryEnum.INFORMATION_TECHNOLOGY,
    website: {
      contentRoot: "www.techcompany.com",
    },
    size: "medium",
    logo: {
      large: "www.techcompany.com/logo_large.png",
      small: "www.techcompany.com/logo_small.png",
    },
  },
];
