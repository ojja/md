import { useEffect, useState } from "react";
import { API_ENDPOINT } from "~/config";
import { useTranslation } from "react-i18next";

export default function ShippingOptions({ formData, handleChange, errors }: any) {
  const { t, i18n } = useTranslation();

  const [pickFromStore, setPickFromStore] = useState(false);
  const [typeApartment, setTypeApartment] = useState(true);

  const [neighborhood, setNeighborhood] = useState([]);
  const [areas, setAreas] = useState<any[]>([]);
  const [street, setStreet] = useState('');
  const [selectedGovId, setSelectedGovId] = useState();
  const [building_no, setBuilding_no] = useState('');
  const [floor_no, setFloor_no] = useState('');
  const [apartment_no, setApartment_no] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');

  const handleOptionChange = (event: any) => {
    if (event.target.value === "from_branch") {
      setPickFromStore(true);
    } else {
      setPickFromStore(false);
    }
    if (neighborhood.length > 0) {
      setSelectedGovId(neighborhood[0].id);
    }
    handleChange(event);
  };
  const [isApartmentChecked, setIsApartmentChecked] = useState(true);
  const [isVillaChecked, setIsVillaChecked] = useState(false);

  const handleOptionChangeType = (event) => {
    const { value } = event.target;
    if (value === "apartment") {
      setIsApartmentChecked(true);
      setIsVillaChecked(false);
      setTypeApartment(true);
    } else if (value === "villa") {
      setIsApartmentChecked(false);
      setIsVillaChecked(true);
      setTypeApartment(false);

    }

    handleChange(event);
  };
  // const handleOptionChangeType = (event: any) => {
  //   if (event.target.value === "villa") {
  //     setTypeApartment(false);
  //   } else {
  //     setTypeApartment(true);
  //   }
  //   if (neighborhood.length > 0) {
  //     setSelectedGovId(neighborhood[0].id);
  //   }
  //   setIsChecked(event.target.checked);

  //   handleChange(event);
  // };

  const handleNeighborhoodChange = (event: any) => {
    const selectedNeighborhoodId = event.target.value;
    console.log('handleNeighborhoodChange')
    setSelectedGovId(selectedNeighborhoodId);
    handleChange(event);
  };

  const handleShippingMethodChange = (event: any) => {
    const selectedShippingMethod = event.target.value;
    // console.log('handleShippingMethodChange')
    setShippingMethod(selectedShippingMethod);
    handleChange(event);
  };
  const [isChecked, setIsChecked] = useState(false);

  // const handleOptionChangeType = (e) => {
  //   setIsChecked(e.target.checked);
  // };

  const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
    handleChange(event);
  };
  const handleBuildingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuilding_no(event.target.value);
    handleChange(event);
  };
  const handleFloorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFloor_no(event.target.value);
    handleChange(event);
  };
  const handleApartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApartment_no(event.target.value);
    handleChange(event);
  };
  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAreaId = event.target.value;
    const selectedArea = areas.find((area: any) => area.area_id === selectedAreaId);

    // Update the formData object with the selected area rate
    // const updatedFormData = {
    //   ...formData,
    //   shipping_fee: selectedArea ? selectedArea.rate : '',
    // };
    handleChange(event);
    handleChange({
      target: {
        name: "shipping_fee",
        value: selectedArea ? selectedArea.rate : 0,
      },
    });
  };

  useEffect(() => {
    fetch(`${API_ENDPOINT}/shipping/getGovs.php`)
      .then((response) => response.json())
      .then((data: any) => {
        setNeighborhood(data);
      })
      .catch((error) => {
        console.log('An error occurred while fetching neighborhood:', error);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/shipping/getAreas.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gov_id: selectedGovId }),
    })
      .then((response) => response.json())
      .then((data: any) => {
        if (data === 'Err in payload') {
          setAreas([]);
        } else {
          setAreas(data);
        }
      })
      .catch((error) => {
        console.log('An error occurred while fetching area:', error);
      });
  }, [selectedGovId]);

  return (
    <div>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        <li className="relative">
          <input
            type="radio"
            id="shipping_method_delivery"
            name="shipping_method"
            value="delivery"
            className="hidden peer absolute w-full h-full opacity-0 cursor-pointer"
            defaultChecked
            onChange={handleOptionChange}
          />
          <label
            htmlFor="shipping_method_delivery"
            className="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-gray-200 rounded-[20px] cursor-pointer peer-checked:border-green-200 border-2 peer-checked:border-[3px] hover:border-green-200 "          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 6.74139C3.5 6.24024 3.89457 5.83398 4.38129 5.83398H15.0543C15.5411 5.83398 15.9356 6.24024 15.9356 6.74139V6.87125H20.3818C20.6819 6.87125 20.9614 7.02853 21.1235 7.28863L24.3604 12.4829C24.4516 12.6291 24.5 12.7992 24.5 12.9729V19.1859C24.5 19.4266 24.4071 19.6574 24.2419 19.8276C24.0766 19.9978 23.8524 20.0934 23.6187 20.0933L22.1913 20.0933C21.7973 21.3202 20.6263 22.1673 19.313 22.1673C18.0063 22.1673 16.8403 21.3286 16.4407 20.1115L11.4974 20.1113C11.0978 21.3285 9.9318 22.1673 8.62502 22.1673C7.31177 22.1673 6.14065 21.3201 5.74676 20.0932L4.38122 20.0931C3.89453 20.0931 3.5 19.6868 3.5 19.1857V6.74139ZM5.74679 18.2784C6.14072 17.0515 7.31181 16.2044 8.62502 16.2044C9.94469 16.2044 11.1208 17.0599 11.509 18.2965H14.173L14.1729 12.986C14.1729 12.9815 14.1728 12.9771 14.1728 12.9727C14.1728 12.9682 14.1729 12.9638 14.1729 12.9594L14.1728 7.77867C14.1728 7.77215 14.1729 7.76563 14.173 7.75912V7.64879H5.26257V18.2784L5.74679 18.2784ZM15.9356 18.2966V13.8801H22.7374V18.2785L22.1913 18.2785C21.7974 17.0516 20.6263 16.2044 19.313 16.2044C17.9933 16.2044 16.8171 17.0599 16.429 18.2967L15.9356 18.2966ZM22.006 12.0653L19.9001 8.68606H15.9356V12.0653H22.006ZM8.62502 18.0192C7.88106 18.0192 7.36862 18.5916 7.36862 19.1859C7.36862 19.7801 7.88106 20.3525 8.62502 20.3525C9.36898 20.3525 9.88142 19.7801 9.88142 19.1859C9.88142 18.5916 9.36898 18.0192 8.62502 18.0192ZM19.313 18.0192C18.5691 18.0192 18.0566 18.5916 18.0566 19.1859C18.0566 19.7801 18.5691 20.3525 19.313 20.3525C20.057 20.3525 20.5694 19.7801 20.5694 19.1859C20.5694 18.5916 20.057 18.0192 19.313 18.0192Z" fill="#163300" />
            </svg>

            <div className="block">
              <div className="w-full text-xl font-semibold">{t('checkout.ship_to_me')}</div>
              <p className=" text-gray-50 text-base font-semibold">{t('checkout.message_to_me')}</p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41418 11.272C7.33297 11.3494 7.26833 11.4425 7.22417 11.5456C7.18 11.6487 7.15723 11.7598 7.15723 11.872C7.15723 11.9842 7.18 12.0952 7.22417 12.1983C7.26833 12.3015 7.33297 12.3946 7.41418 12.472L15.9852 21.043L17.1852 19.843L9.21418 11.872L17.1852 3.89997L15.9852 2.69997L7.41418 11.272Z" fill="black" />
            </svg>

          </label>
        </li>
        <li className="relative">
          <input
            type="radio"
            id="shipping_method_from_branch"
            name="shipping_method"
            value="from_branch"
            className="hidden peer absolute w-full h-full opacity-0 cursor-pointer"
            onChange={handleOptionChange}
            required
          />
          <label
            htmlFor="shipping_method_from_branch"
            className="inline-flex items-center justify-between w-full h-full px-5 py-3 text-gray-500 bg-white border-gray-200 rounded-[20px] cursor-pointer peer-checked:border-green-200 border-2 peer-checked:border-[3px] hover:border-green-200 " >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.67148 4.09221C5.85313 3.72875 6.21883 3.5 6.61823 3.5H21.2298C21.6267 3.5 21.9905 3.72586 22.1733 4.08575L24.2607 8.19419C24.3401 8.35045 24.3811 8.52409 24.3803 8.70014C24.3728 10.2077 24.0926 11.5352 23.37 12.5055C23.0605 12.921 22.6918 13.2426 22.2767 13.4781V23.4138C22.2767 24.0137 21.8008 24.5 21.2136 24.5H6.61851C6.0314 24.5 5.55545 24.0137 5.55545 23.4138V13.4826C5.13451 13.2464 4.76161 12.9224 4.45108 12.5009C3.72892 11.5206 3.47422 10.183 3.50203 8.67422C3.50507 8.5094 3.54478 8.34746 3.61815 8.20065L5.67148 4.09221ZM7.68157 13.9848V22.3275H10.8223V17.1995C10.8223 16.5996 11.2982 16.1133 11.8853 16.1133H15.9654C16.5525 16.1133 17.0285 16.5996 17.0285 17.1995V22.3275H20.1506V13.9847C18.889 13.9766 17.7893 13.5347 17.0285 12.5494C16.2724 13.5398 15.1762 13.9848 13.9157 13.9848C12.6668 13.9848 11.5792 13.548 10.8223 12.5783C10.0584 13.5539 8.9482 13.9804 7.68157 13.9848ZM11.9467 9.78059C12.0527 10.4429 12.2401 10.8955 12.4595 11.1909C12.7416 11.5707 13.1663 11.8124 13.9157 11.8124C14.6652 11.8124 15.0878 11.5707 15.3676 11.1926C15.586 10.8974 15.7721 10.4444 15.876 9.78059H11.9467ZM18.1731 9.78059H22.1789C22.0808 10.4458 21.8962 10.897 21.6781 11.1898C21.3991 11.5645 20.9665 11.8124 20.1861 11.8124C19.4061 11.8124 18.9685 11.5644 18.6841 11.186C18.4635 10.8925 18.276 10.4422 18.1731 9.78059ZM22.1733 8.20065L20.5839 5.67246H7.26901L5.67603 8.20065H22.1733ZM5.67603 9.78059C5.75881 10.454 5.93669 10.9052 6.14973 11.1944C6.41813 11.5587 6.85108 11.8124 7.66192 11.8124C8.47234 11.8124 8.91122 11.5587 9.18594 11.1898C9.40192 10.8998 9.58312 10.4497 9.67182 9.78059H5.67603ZM14.9023 22.3275V18.2858H12.9484V22.3275H14.9023Z" fill="#163300" />
            </svg>

            <div className="block">
              <div className="w-full text-xl font-semibold">
                {t('checkout.pick_from_branch')}
              </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.41418 11.272C7.33297 11.3494 7.26833 11.4425 7.22417 11.5456C7.18 11.6487 7.15723 11.7598 7.15723 11.872C7.15723 11.9842 7.18 12.0952 7.22417 12.1983C7.26833 12.3015 7.33297 12.3946 7.41418 12.472L15.9852 21.043L17.1852 19.843L9.21418 11.872L17.1852 3.89997L15.9852 2.69997L7.41418 11.272Z" fill="black" />
            </svg>

          </label>
        </li>
      </ul>
      {pickFromStore ? (
        <div className="w-1/2 mt-5">
          <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize">{t('checkout.choose_branch')}</label>
          <div className="mt-1">
            <select
              key={i18n.language} // Add key prop to force re-render on language change
              onChange={handleShippingMethodChange}
              name="pick_from_branch"
              defaultValue=''
              className={`block w-full px-3 py-3 text-gray-900 capitalize rounded-[16px] form-select border-2 border-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${errors.pick_from_branch && 'border-red-500'}`}
            >
              <option value='' disabled>{t('checkout.choose_branch')}</option>
              <option value="cairo_branch">{t('cities.cairo')} {t('common.branch')}</option>
              <option value="giza_branch">{t('cities.giza')} {t('common.branch')}</option>
              <option value="alexandria_branch">{t('cities.alexandria')} {t('common.branch')}</option>
              <option value="aswan_branch">{t('cities.aswan')} {t('common.branch')}</option>
            </select>
            {errors.pick_from_branch && <p className="mt-1 text-xs text-red-500">{errors.pick_from_branch}</p>}
          </div>
        </div>
      ) : (
        <>
          <h4 className=" text-xl text-black font-bold mt-7">عنوان التوصيل</h4>
          <div className="mt-5">
            <div className="w-full">
              <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize">{t('checkout.city')}*</label>
              <div className="mt-1">
                <select className="block w-full px-3 py-3 text-gray-900 border-2 border-gray-400 rounded-[16px] form-select placeholder:text-gray-400 sm:text-sm sm:leading-6">
                  <option value="">Egypt</option>
                  <option value="">Saudi Arabia</option>
                  <option value="">United Arab Emirates</option>
                </select>
              </div>
            </div>
            <div className="w-full flex gap-x-9 mt-8">
              <div className="w-full">
                <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize">
                  {t('checkout.neighborhood')}*
                </label>
                <div className="mt-1">
                  <select
                    key={i18n.language} // Add key prop to force re-render on language change
                    className={`block w-full px-3 py-3 text-gray-900 capitalize rounded-[16px] form-select border-2 border-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${errors.neighborhood && 'border-red-500'}`}
                    defaultValue={formData.neighborhood}
                    onChange={handleNeighborhoodChange}
                    name="neighborhood"
                  >
                    <option value='' disabled>{t('checkout.select_neighborhood')}</option>
                    {neighborhood.map((neighborhood, index): any => (
                      <option key={index} value={neighborhood.id}>
                        {i18n.language === 'ar' ? neighborhood.name_ar : neighborhood.name_en || neighborhood.name_ar}
                      </option>
                    ))}
                  </select>
                  {errors.neighborhood && <p className="mt-1 text-xs text-red-500">{errors.neighborhood}</p>}
                </div>
              </div>

              <div className="w-full">
                <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize">
                  {t('checkout.area')}*
                </label>
                <div className="mt-1">
                  <select
                    key={i18n.language} // Add key prop to force re-render on language change
                    className={`block w-full py-3 px-3 text-gray-900 capitalize rounded-[16px] form-select border-2 border-gray-400 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${errors.area && 'border-red-500'}`}
                    value={formData.area}
                    onChange={handleAreaChange}
                    name="area"
                  >
                    <option value='' disabled>{t('checkout.select_area')}</option>
                    {areas.map((area, index) => (
                      <option key={index} value={area.area_id}>
                        {i18n.language === 'ar' ? area.name_ar : area.name_en || area.name_ar}
                      </option>
                    ))}
                  </select>
                  {errors.area && <p className="mt-1 text-xs text-red-500">{errors.area}</p>}
                </div>
              </div>
            </div>
            <div className="w-full mt-8">
              <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize">{t('checkout.street_name')}*</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="street"
                  className={`w-full py-3 px-3 border-2 border-gray-400 rounded-[16px] text-gray-900 outline-none ${errors.street && 'border-red-500'}`}
                  value={street}
                  onChange={handleStreetChange}
                />
                {errors.street && <p className="mt-1 text-xs text-red-500">{errors.street}</p>}
              </div>
            </div>
            <div className="w-full mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-50 capitalize">{t('checkout.property_type')}*</h3>
              <div className="mt-1 flex gap-x-6">

                <label htmlFor="property_type_apartment" className="flex items-center relative">
                  <input
                    type="radio"
                    name="property_type"
                    id="property_type_apartment"
                    value="apartment"
                    checked={isApartmentChecked}
                    onChange={handleOptionChangeType}
                    className="hidden absolute w-full h-full opacity-0"
                  />
                  <span className=" text-xl font-semibold flex items-center gap-x-2 ">
                    {isApartmentChecked ? (
                      <svg
                        className="w-4 h-4 text-green-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="4.5" fill="#163300" />
                        <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#163300" strokeWidth="1.5" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#868685" strokeWidth="1.5" />
                      </svg>
                    )}
                    {t('checkout.apartment')}

                  </span>
                </label>

                <label htmlFor="property_type_villa" className=" flex items-center relative">
                  <input
                    type="radio"
                    name="property_type"
                    id="property_type_villa"
                    value="villa"
                    checked={isVillaChecked}
                    onChange={handleOptionChangeType}
                    className="hidden absolute w-full h-full opacity-0"
                  />
                  <span className=" text-xl font-semibold flex items-center gap-x-2">
                    {isVillaChecked ? (
                      <svg
                        className="w-4 h-4 text-green-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="4.5" fill="#163300" />
                        <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#163300" strokeWidth="1.5" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="11.25" stroke="#868685" strokeWidth="1.5" />
                      </svg>
                    )}
                    {t('checkout.villa')}

                  </span>
                </label>
              </div>
            </div>
            {typeApartment ? (
              <div className="flex gap-x-6 mt-8 mb-28">
                <div>
                  <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize">{t('checkout.building_no')}*</label>
                  <input
                    type="text"
                    name="building_no"
                    value={building_no}
                    onChange={handleBuildingChange}
                    placeholder="12A"
                    className={`w-full py-3 px-3 border-2 border-gray-400 rounded-[16px] text-gray-900 outline-none sm:text-sm sm:leading-6 ${errors.building_no && 'border-red-500'}`}
                  />
                  {errors.building_no && <p className="mt-1 text-xs text-red-500">{errors.building_no}</p>}
                </div>
                <div>
                  <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize"> {t('checkout.floor')}* </label>
                  <input
                    type="text"
                    name="floor_no"
                    value={floor_no}
                    onChange={handleFloorChange}
                    placeholder="3"
                    className={`w-full py-3 px-3 border-2 border-gray-400 rounded-[16px] text-gray-900 outline-none sm:text-sm sm:leading-6 ${errors.floor_no && 'border-red-500'}`}
                  />
                  {errors.building_no && <p className="mt-1 text-xs text-red-500">{errors.floor_no}</p>}
                </div>
                <div>
                  <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize"> {t('checkout.apartment')}* </label>
                  <input
                    type="text"
                    name="apartment_no"
                    value={apartment_no}
                    onChange={handleApartmentChange}
                    placeholder="34"
                    className={`w-full py-3 px-3 border-2 border-gray-400 rounded-[16px] text-gray-900 outline-none sm:text-sm sm:leading-6 ${errors.apartment_no && 'border-red-500'}`}
                  />
                  {errors.building_no && <p className="mt-1 text-xs text-red-500">{errors.apartment_no}</p>}
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <label htmlFor="" className="block text-base font-semibold leading-6 text-gray-50 capitalize">{t('checkout.building_no')}*</label>
                <input
                  type="text"
                  name="building_no"
                  value={building_no}
                  onChange={handleBuildingChange}
                  placeholder="12A"
                  className={`w-full py-3 px-3 border-2 border-gray-400 rounded-[16px] text-gray-900 outline-none sm:text-sm sm:leading-6 ${errors.building_no && 'border-red-500'}`}
                />
                {errors.building_no && <p className="mt-1 text-xs text-red-500">{errors.building_no}</p>}
              </div>
            )}
          </div>
        </>

      )}
    </div>
  );
}
