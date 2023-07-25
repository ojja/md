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
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { LABEL_CLASSES } from "~/commonUIClasses";

export default function SelectDelivery() {
  const { t } = useTranslation('fields');
  const { i18n } = useTranslation();
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [govs, setGovs] = useState([]);
  const [areas, setAreas] = useState<any[]>([]);
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
        setGovs(response.govs);
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
  useEffect(() => {
    if (selectedGovId) {
      Cookies.set("selectedGovId", selectedGovId);
    }
  }, [selectedGovId]);

  useEffect(() => {
    if (selectedAreaId) {
      Cookies.set("selectedAreaId", selectedAreaId);
      const selectedArea = areas.find((area: any) => area.city_id === selectedAreaId);
      setValue("shipping_fee", selectedArea ? selectedArea.city_rate : 0);
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

  function closeModal() {
    setIsOpenSize(false);
  }

  function openModal() {
    setIsOpenSize(true);
  }

  return (
    <>
      <button
        type="button"
        className="text-xl font-semibold text-white p-6 flex gap-2"
        onClick={openModal}
      >
        {t("delivery")} {t("to")} {selectedAreaId} - {selectedGovId}
        <ChevronDownIcon className="w-6 h-6" />
      </button>
      {isOpenSize && (
        <Popup isOpen={true} close={closeModal}>
          <div className=" divide-y divide-gray-200">
            <div className="px-8 py-5">
              <h3 className="text-2xl font-bold">{t('choose_branch')}</h3>
            </div>
            <div className="px-8 py-5 space-y-4">
              <div>
                <label className={LABEL_CLASSES}>
                  {t('city')}
                </label>
                <SelectInput
                  value={watch("gov_id") || ""}
                  options={[
                    { label: t('select_city'), value: "" },
                    ...govs.map((item: any) => ({ label: i18n.language === 'ar' ? item.gov_name : item.gov_name_en, value: item.gov_id })),
                  ]}
                  register={register("gov_id")}
                />
              </div>
              <div>
                <label className={LABEL_CLASSES}>
                  {t("area")}
                </label>
                <SelectInput
                  value={watch("area_id") || ""}
                  options={[
                    { label: t("select_area"), value: "" },
                    ...areas?.map((area) => ({
                      label:
                        i18n.language === "ar" ? area.city_name : area.city_name_en,
                      value: area.city_id,
                    })),
                  ]}
                  register={register("area_id")}
                />
              </div>
            </div>
            <div className="px-8 py-5">
              <button onClick={closeModal} className="px-8 font-semibold text-white bg-green-200 hover:bg-green-400 text-xl rounded-100 w-full whitespace-nowrap py-4 text-center">
                {t('choose_branch')}
              </button>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}
