import {
  Button,
  Input,
  Typography,
  OutlinedInput,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import {
  EXAMPLE_PROPERTIES,
  PropertyIndustryEnum,
  PropertyIndustryRecord,
} from "./utils";
import { useTranslation } from "react-i18next";
import { SimpleTextInput } from "../../components/shared/SimpleTextInput";
import { SimpleSelect } from "../../components/shared/SimpleSelect";
import { ArrowForward } from "@mui/icons-material";
import { MutableRefObject } from "react";

export function CreatePropertyPage() {
  const [propertyDetails, setPropertyDetails] = useState(EXAMPLE_PROPERTIES[0]);

  const propertyNameRef = useRef(null);
  const propertyDescriptionRef = useRef<HTMLInputElement>(null);
  const contentURLRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const industryOptions = Object.keys(PropertyIndustryRecord).map((key) => {
    const industryEnum = key as PropertyIndustryEnum;
    return {
      id: key,
      title: PropertyIndustryRecord[industryEnum],
      subtitle: "",
    };
  });

  const [elementHeight, setElementHeight] = useState(500);

  useEffect(() => {
    if (contentURLRef.current) {
      setElementHeight(contentURLRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col mb-16 xl:-mt-8rem">
        <Typography variant={isLargeScreen ? "h4" : "h2"}>
          {t("properties.createProperty.header.title")}
        </Typography>
        <div className="text-soft-black/50">
          <Typography variant="body1" fontFamily={"Helvetica Neue"}>
            {t("properties.createProperty.header.subtitle")}
          </Typography>
        </div>
      </div>
      <div className="flex w-4/5">
        <div className="w-3/4 bg-red-200 h-full">
          <div
            className="p-3 bg-soft-black/80 text-white rounded-md shadow-md"
            style={{
              height: `${elementHeight}px`,
            }}
          >
            <Typography variant="body1">
              This is meant to be an incredibly helpful blurb of text. If for
              some reason you don't find this blurb to be at all helpful, then
              you may locate the nearest exit.
            </Typography>
          </div>
        </div>
        <form
          noValidate
          autoComplete="off"
          className="flex flex-col justify-center w-full"
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
              ref={contentURLRef}
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
          </div>
          <div className="flex justify-center px-5 pb-5 text-soft-black mt-5 lg:mt-10 xl:mt-15">
            <Button variant="outlined" color="inherit" type="submit">
              <ArrowForward fontSize="small" />
            </Button>
          </div>
        </form>
        <div className="w-3/4 bg-red-200 h-full">Stuff</div>
      </div>
    </div>
  );
}
