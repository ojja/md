import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Popup from "./Popup";
import SelectInput from "./SelectInput";
import {
  getSelectedCurrency,
  setSelectedCurrency,
} from "~/utils/currencyUtils";
import { fetchAreas, fetchGovs } from "~/utils/general";
import Cookies from "js-cookie";

export default function ChangeCountry() {
  const { t, i18n } = useTranslation();
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [govs, setGovs] = useState([]);
  const [areas, setAreas] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchGovs();
      if (response) {
        setGovs(response);
      } else {
        // Handle the case when fetching the cities fails
      }
    };

    fetchData();
  }, []);

  const selectedGovId = watch("gov_id");
  useEffect(() => {
    const fetchAreasByGovId = async () => {
      if (selectedGovId) {
        const response = await fetchAreas(selectedGovId);
        if (response === "Err in payload") {
          return;
        }
        if (response) {
          setAreas(response);
        } else {
          // Handle the case when fetching the areas fails
        }
      } else {
        setAreas([]);
      }
    };

    fetchAreasByGovId();
  }, [selectedGovId]);

  const selectedAreaId = watch("area_id");
  const formData = watch();
//   console.log(formData);

  useEffect(() => {
    if (selectedGovId) {
      Cookies.set("selectedGovId", selectedGovId);
    }
  }, [selectedGovId]);

  useEffect(() => {
    if (selectedAreaId) {
      Cookies.set("selectedAreaId", selectedAreaId);
    }
  }, [selectedAreaId]);

  // Check if cookies exist
  const selectedGovIdFromCookie = Cookies.get("selectedGovId");
  const selectedAreaIdFromCookie = Cookies.get("selectedAreaId");

  useEffect(() => {
    if (selectedGovIdFromCookie) {
      setValue("gov_id", selectedGovIdFromCookie);
    }
    if (selectedAreaIdFromCookie) {
      setValue("area_id", selectedAreaIdFromCookie);
    }
  }, []);
  const [currency, setCurrency] = useState(getSelectedCurrency());

  function closeModal() {
    setIsOpenSize(false);
  }

  function openModal() {
    setIsOpenSize(true);
  }

  const handleCountryChange = (selectedCurrency) => {
    // console.log("handleCountryChange", selectedCurrency);
    setCurrency(selectedCurrency);
    setSelectedCurrency(selectedCurrency); // Update the selected currency
  };
//   console.log('isOpenSize',isOpenSize)
  return (
    <>
      <button
        type="button"
        className="text-sm font-medium text-primary-600 hover:text-primary-500"
        onClick={openModal}
      >
        {t("common.change_country")}
      </button>
      {isOpenSize && (
        <Popup isOpen={true} close={closeModal}>
          <div className="mt-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 whitespace-nowrap">
              <span
                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-gray-100 px-3 py-2 transition-all scale-105 bg-blue-500 bg-opacity-25"
                // onClick={closeModal}
              >
                <div className="p-2.5">
                  <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-gray-900">
                    Egypt
                  </h4>
                </div>
              </span>
              <span
                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-gray-500 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-gray-100 hover:bg-gray-500 hover:bg-opacity-25"
                // onClick={closeModal}
              >
                <div className="p-2.5">
                  <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-gray-900">
                    Qatar
                  </h4>
                </div>
              </span>
              <span
                className="grid w-full min-w-[7rem] transform cursor-pointer  rounded-xl border border-gray-500 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-gray-100 hover:bg-gray-500 hover:bg-opacity-25"
                // onClick={closeModal}
              >
                <div className="p-2.5">
                  <h4 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-center text-gray-900">
                    Saudi Arabia
                  </h4>
                </div>
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="gov"
                  className="block mb-1 text-xs text-gray-400 "
                >
                  {t("checkout.city")}
                </label>
                <SelectInput
                  value={watch("gov_id") || ""}
                  options={[
                    { label: t("checkout.select_city"), value: "" },
                    ...govs.map((gov) => ({
                      label: i18n.language === "ar" ? gov.name_ar : gov.name_en,
                      value: gov.id,
                    })),
                  ]}
                  register={register("gov_id")}
                />
              </div>
              <div>
                <label
                  htmlFor="area"
                  className="block mb-1 text-xs text-gray-400"
                >
                  {t("checkout.area")}
                </label>
                <SelectInput
                  value={watch("area_id") || ""}
                  options={[
                    { label: t("checkout.select_area"), value: "" },
                    ...areas?.map((area) => ({
                      label:
                        i18n.language === "ar" ? area.name_ar : area.name_en,
                      value: area.area_id,
                    })),
                  ]}
                  register={register("area_id")}
                />
              </div>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}
