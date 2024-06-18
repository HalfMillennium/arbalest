import { Button, Input, Typography, OutlinedInput } from "@mui/material";
import React, { useRef } from "react";
import { useState } from "react";
import {
  EXAMPLE_PROPERTIES,
  PropertyIndustryEnum,
  PropertyIndustryRecord,
} from "./utils";
import { useTranslation } from "react-i18next";
import { SimpleTextInput } from "../../../components/shared/SimpleTextInput";
import { SimpleSelect } from "../../../components/shared/SimpleSelect";
import { ArrowForward } from "@mui/icons-material";

export function CreatePropertyPage() {
  const [propertyDetails, setPropertyDetails] = useState(EXAMPLE_PROPERTIES[0]);
  const propertyNameRef = useRef(null);
  const propertyDescriptionRef = useRef(null);
  const { t } = useTranslation();

  const industryOptions = Object.keys(PropertyIndustryRecord).map((key) => {
    const industryEnum = key as PropertyIndustryEnum;
    return {
      id: key,
      title: PropertyIndustryRecord[industryEnum],
      subtitle: "",
    };
  });

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatePropertyDetails = propertyDetails;
      if (updatePropertyDetails && updatePropertyDetails[field]) {
        updatePropertyDetails[field] = event.target.value;
      }
      setPropertyDetails(updatePropertyDetails);
    };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-fit mt-4rem">
      <div className="flex flex-col mb-16 xl:-mt-8rem">
        <Typography variant="h2">
          {t("properties.createProperty.header.title")}
        </Typography>
        <div className="text-soft-black/50">
          <Typography variant="body1" fontFamily={"Helvetica Neue"}>
            {t("properties.createProperty.header.subtitle")}
          </Typography>
        </div>
      </div>
      <form
        noValidate
        autoComplete="off"
        className="flex flex-col justify-center w-3/4"
      >
        <div>
          <SimpleTextInput
            ref={propertyNameRef}
            label="Property Name"
            maxLength={50}
            style="underline"
            initialValue="Coolest Property"
            setValue={(name: string) =>
              setPropertyDetails({ ...propertyDetails, name })
            }
            isRequired={true}
          />
          <SimpleTextInput
            ref={propertyDescriptionRef}
            label="Description"
            maxLength={100}
            style="underline"
            initialValue=""
            setValue={(description: string) =>
              setPropertyDetails({ ...propertyDetails, description })
            }
            isRequired={true}
          />
          <SimpleTextInput
            ref={propertyDescriptionRef}
            label="Content Root Url"
            maxLength={100}
            style="underline"
            initialValue=""
            setValue={(contentRoot: string) =>
              setPropertyDetails({
                ...propertyDetails,
                website: { ...propertyDetails.website, contentRoot },
              })
            }
            isRequired={true}
          />
          <SimpleTextInput
            ref={propertyDescriptionRef}
            label="Content Root Url"
            maxLength={100}
            style="underline"
            initialValue=""
            setValue={(contentRoot: string) =>
              setPropertyDetails({
                ...propertyDetails,
                website: { ...propertyDetails.website, contentRoot },
              })
            }
            isRequired={true}
          />
          <SimpleSelect
            label="Industry"
            isRequired={true}
            initialValue={PropertyIndustryEnum.E_COMMERCE}
            options={industryOptions}
            setValue={(industry: string) =>
              setPropertyDetails({
                ...propertyDetails,
                industry: industry as PropertyIndustryEnum,
              })
            }
          />
        </div>
        <div className="flex justify-center px-5 pb-5 text-soft-black mt-5 lg:mt-10 xl:mt-15">
          <Button variant="outlined" color="inherit" type="submit">
            <ArrowForward fontSize="small" />
          </Button>
        </div>
      </form>
    </div>
  );
}
