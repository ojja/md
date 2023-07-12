import { useEffect, useState } from "react";
import { API_ENDPOINT } from "~/config";
import { useTranslation } from "react-i18next";
import { fetchAreas, fetchGovs } from "~/utils/general";
import Cookies from "js-cookie";
import SelectInput from "./SelectInput";
import { RiCheckboxBlankCircleLine, RiRadioButtonLine } from "react-icons/ri";

export default function ShippingOptions({ setValue, register, errors, watch }: any) {
  const { t, i18n } = useTranslation();

  const [pickFromStore, setPickFromStore] = useState(false);
  const [typeApartment, setTypeApartment] = useState(true);

  const [govs, setGovs] = useState([]);
  // const [govs, setGovs] = useState([]);
  const [areas, setAreas] = useState<any[]>([]);
  const [street, setStreet] = useState('');
  // const [selectedGovId, setSelectedGovId] = useState();
  const [building_no, setBuilding_no] = useState('');
  const [floor_no, setFloor_no] = useState('');
  const [apartment_no, setApartment_no] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');

  // const handleOptionChangeType = (event: any) => {
  //   if (event.target.value === "villa") {
  //     setTypeApartment(false);
  //   } else {
  //     setTypeApartment(true);
  //   }
  // };

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAreaId = event.target.value;
    const selectedArea = areas.find((area: any) => area.area_id === selectedAreaId);
    //   handleChange(event);
    //   handleChange({
    //     target: {
    //         name: "shipping_fee",
    //         value: selectedArea ? selectedArea.rate : 0,
    //     },
    // });
  };

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
  const apartment_type = watch("apartment_type");
  const shipping_method = watch("shipping_method");
  // console.log('shipping_method', shipping_method)
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
  console.log(formData);

  useEffect(() => {
    if (selectedGovId) {
      Cookies.set("selectedGovId", selectedGovId);
    }
  }, [selectedGovId]);

  useEffect(() => {
    if (selectedAreaId) {
      Cookies.set("selectedAreaId", selectedAreaId);
      const selectedArea = areas.find((area: any) => area.area_id === selectedAreaId);
      setValue("shipping_fee", selectedArea ? selectedArea.rate : 0);
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

  return (
    <div>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        <li>
          <input
            type="radio"
            id="shipping_method_delivery"
            value="Delivery"
            className="hidden peer"
            {...register('shipping_method')}
            defaultChecked
          />
          <label
            htmlFor="shipping_method_delivery"
            className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">{t('checkout.ship_to_me')}</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="shipping_method_from_branch"
            {...register('shipping_method')}
            value="Branch"
            className="hidden peer"
          />
          <label
            htmlFor="shipping_method_from_branch"
            className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">
                {t('checkout.pick_from_branch')}
              </div>
            </div>
          </label>
        </li>
      </ul>
      {shipping_method === 'Branch' ? (
        <div className="w-1/2 mt-5">
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.choose_branch')}</label>
          <div className="mt-1">
            <SelectInput
              value={watch('pick_from_branch')} // Assuming you're using react-hook-form's watch function
              options={[
                { label: t('checkout.choose_branch'), value: '' },
                { label: `${t('cities.cairo')} ${t('common.branch')}`, value: 'cairo_branch' },
                { label: `${t('cities.giza')} ${t('common.branch')}`, value: 'giza_branch' },
                { label: `${t('cities.alexandria')} ${t('common.branch')}`, value: 'alexandria_branch' },
                { label: `${t('cities.aswan')} ${t('common.branch')}`, value: 'aswan_branch' },
              ]}
              register={register('pick_from_branch', {
                required: { value: true, message: t('fields.pick_from_branch_required') }
              })}
              error={errors.pick_from_branch && errors.pick_from_branch.type === "required"}
            />
            {errors.pick_from_branch && errors.pick_from_branch.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.pick_from_branch.message}</p>)}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-5">

          <div className="col-span-2">
            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.gov')}</label>
            <div className="mt-1">
              <select className="inline-block rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full">
                <option value="">Egypt</option>
                <option value="">Saudi Arabia</option>
                <option value="">United Arab Emirates</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 capitalize">
              {t('checkout.city')}
            </label>
            {/* <div className="mt-1">
              <div>
                <SelectInput
                  value={watch('gov_id') || ''}
                  options={[
                    { label: t('checkout.select_city'), value: "" },
                    ...govs.map((gov: any) => ({ label: i18n.language === 'ar' ? gov.name_ar : gov.name_en, value: gov.id })),
                  ]}
                  register={register('gov_id', {
                    required: { value: true, message: t('fields.gov_id_required') }
                  })}
                />
              </div>
              {errors.gov_id && errors.gov_id.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.gov_id.message}</p>)}
            </div> */}
          </div>

          <div>
            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.area')}</label>
            {/* <div className="mt-1">
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
                register={register('area_id', {
                  required: { value: true, message: t('fields.area_id_required') }
                })}
              />
              {errors.area_id && errors.area_id.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.area_id.message}</p>)}
            </div> */}
          </div>
          <div className="col-span-4">
            <div>
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.street_name')}</label>
              <input
                type="text"
                id="full_address"
                {...register('full_address', {
                  required: { value: true, minLength: 10, message: t('fields.full_address_required') }
                })}
                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none sm:text-sm sm:leading-6 ${errors.full_address && 'border-red-500'}`}
              />
              {errors.full_address && errors.full_address.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.full_address.message}</p>)}
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900 capitalize">{t('checkout.property_type')}</h3>
            <div className="mt-1 space-x-5">
              <div>
                <div className="space-x-5">
                  <label htmlFor="Flat" className='inline-block text-gray-900 peer-checked:text-blue-600'>
                    <div className='relative flex items-center py-1 pl-3'>
                      <input
                        type="radio"
                        id="Flat"
                        className='hidden peer'
                        value='flat'
                        {...register('apartment_type')}
                        defaultChecked
                      />
                      <div className='absolute left-0 invisible mt-1 peer-checked:visible top-1'>
                        <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                      </div>
                      <div className='absolute left-0 visible mt-1 peer-checked:invisible top-1'>
                        <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                      </div>
                      <span className='ml-2 text-base font-medium'>{t('checkout.apartment')}</span>
                    </div>
                  </label>
                  <label htmlFor="Villa" className='inline-block text-gray-900 peer-checked:text-blue-600'>
                    <div className='relative flex items-center py-1 pl-3'>
                      <input
                        type="radio"
                        id="Villa"
                        className='hidden peer'
                        value='villa'
                        {...register('apartment_type')}
                      />
                      <div className='absolute left-0 invisible mt-1 peer-checked:visible top-1'>
                        <RiRadioButtonLine className='peer-checked:bg-gray-700' />
                      </div>
                      <div className='absolute left-0 visible mt-1 peer-checked:invisible top-1'>
                        <RiCheckboxBlankCircleLine className='peer-checked:bg-gray-700' />
                      </div>
                      <span className='ml-2 text-base font-medium'>{t('checkout.villa')}</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {apartment_type === 'flat' ? (
            <>
              <div>
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.building_number')}</label>
                <input
                  type="text"
                  placeholder="12A"
                  className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none sm:text-sm sm:leading-6 ${errors.building_number && 'border-red-500'}`}
                  {...register('building_number', {
                    required: { value: true, message: t('fields.building_number_required') }
                  })}
                />
                {errors.building_number && errors.building_number.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.building_number.message}</p>)}
              </div>
              <div>
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.floor')}</label>
                <input
                  type="text"
                  id="floor"
                  placeholder="3"
                  className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none ${errors.floor && 'border-red-500'}`}
                  {...register('floor', {
                    required: { value: true, message: t('fields.floor_required') }
                  })}
                />
                {errors.floor && errors.floor.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.floor.message}</p>)}
              </div>
              <div>
                <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.apartment')}</label>
                <input
                  type="text"
                  placeholder="34"
                  {...register('apartment', {
                    required: { value: true, message: t('fields.apartment_required') }
                  })}
                  className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none sm:text-sm sm:leading-6 ${errors.apartment && 'border-red-500'}`}
                />
                {errors.apartment && errors.apartment.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.apartment.message}</p>)}
              </div>
            </>
          ) : (
            <div>
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900 capitalize">{t('checkout.building_number')}</label>
              <input
                type="text"
                placeholder="12A"
                className={`w-full py-2 border border-gray-300 rounded-md text-gray-900 outline-none sm:text-sm sm:leading-6 ${errors.building_number && 'border-red-500'}`}
                {...register('building_number', {
                  required: { value: true, message: t('fields.building_number_required') }
                })}
              />
              {errors.building_number && errors.building_number.type === "required" && (<p className="mt-1 text-xs text-red-500">{errors.building_number.message}</p>)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
