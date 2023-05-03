import { useState } from "react";

export default function ShippingOptions() {
  const [pickFromStore, setPickFromStore] = useState(false);
  const [typeApartment, setTypeApartment] = useState(true);

  const handleOptionChange = (event: any) => {
    if (event.target.value === "option_1") {
      setPickFromStore(true);
    } else {
      setPickFromStore(false);
    }
  };
  const handleOptionChangeType = (event: any) => {
    if (event.target.value === "property_type_villa") {
      setTypeApartment(false);
    } else {
      setTypeApartment(true);
    }
  };
  console.log('typeApartment', typeApartment)
  return (
    <div>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        <li>
          <input
            type="radio"
            id="option_2"
            name="shipping_method"
            value="option_2"
            className="hidden peer"
            defaultChecked
            onChange={handleOptionChange}
          />
          <label
            htmlFor="option_2"
            className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">Ship to me</div>
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="option_1"
            name="shipping_method"
            value="option_1"
            className="hidden peer"
            onChange={handleOptionChange}
            required
          />
          <label
            htmlFor="option_1"
            className="inline-flex items-center justify-between w-full h-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">
                Pick from store
              </div>
            </div>
          </label>
        </li>
      </ul>
      {pickFromStore ? (
        <div className="w-1/2 mt-5">
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Choose Store </label>
          <div className="mt-1">
            <select className="block w-full py-2 pl-3 pr-20 text-gray-900 border-0 rounded-md form-select ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option value="">Cairo</option>
              <option value="">Giza</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-5">

          <div className="col-span-2">
            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> City </label>
            <div className="mt-1">
              <select className="block w-full py-2 pl-3 pr-20 text-gray-900 border-0 rounded-md form-select ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                <option value="">Cairo</option>
                <option value="">Giza</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Neighborhood </label>
            <div className="mt-1">
              <select className="block w-full py-2 pl-3 pr-20 text-gray-900 border-0 rounded-md form-select ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                <option value="">Heliopolis</option>
                <option value="">Maadi</option>
                <option value="">Zamalek</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Areas</label>
            <div className="mt-1">
              <select className="block w-full py-2 pl-3 pr-20 text-gray-900 border-0 rounded-md form-select ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                <option value="">Heliopolis 1</option>
                <option value="">Heliopolis 2</option>
                <option value="">Heliopolis 3</option>
              </select>
            </div>
          </div>
          <div className="col-span-4">
            <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Street name </label>
            <div className="mt-1">
              {/* <textarea placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" /> */}
              <input type="text" placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Property Type</h3>
            <div className="mt-1 space-x-5">
              <label htmlFor="property_type_apartment">
                <input type="radio" name="property_type" id="property_type_apartment" value="property_type_apartment" defaultChecked onChange={handleOptionChangeType} />
                <span className="ml-2 text-sm font-medium capitalize">apartment</span>
              </label>
              <label htmlFor="property_type_villa">
                <input type="radio" name="property_type" id="property_type_villa" value="property_type_villa" onChange={handleOptionChangeType} />
                <span className="ml-2 text-sm font-medium capitalize">villa</span>
              </label>
            </div>
          </div>
          {typeApartment ? (
            <>
            <div>
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Building No.</label>
              <input type="text" placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Floor </label>
              <input type="text" placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Apartment </label>
              <input type="text" placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
            </>
          ) : (
            <div>
              <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Building No. </label>
              <input type="text" placeholder="" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
