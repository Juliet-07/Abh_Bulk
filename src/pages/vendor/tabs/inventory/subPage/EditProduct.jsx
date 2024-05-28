import { MenuIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeftIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import { FiBell, FiUploadCloud, FiUser } from "react-icons/fi";
import Select from 'react-select';

const EditProduct = ({ productId }) => {
  const router = useRouter();
  const [showPreview, setPreview] = React.useState(false);

  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const options = [
    { value: 'Fruits & Vegetables', label: 'Fruits & Vegetables' },
    { value: 'oil and paint', label: 'oil and paint' },
    { value: 'merch', label: 'merch' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'orange', label: 'Orange' },
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  //

  return (
    <>
      {showPreview && (
        <div
          // onClick={()=> setPreview(false)}
          className="w-full h-[100vh]  bg-[#000000a8] z-[10000] fixed top-0 left-0 flex flex-col items-center  justify-center"
        >
          <div className="w-[90%] max-w-[498px] h-[344px] bg-white rounded-[10px] flex flex-col items-center  justify-center">
            <div className="w-[50px] h-[50px] rounded-[100px] border-[#08932E] border-[1px] flex flex-col items-center  justify-center">
              <CheckIcon width={30} height={30} color="#08932E" />
            </div>
            <br />
            <p>Product updated successfully</p>
            <br />
            <button
              onClick={() => setPreview(false)}
              className="w-[186px] h-[46px] rounded-[6px] bg-[#4CBD6B] text-white"
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <header className="w-full h-[70px] flex  bg-white  flex-row items-center justify-between p-[20px]">
        <div className="flex flex-row gap-[10px] items-center ">
          <ArrowNarrowLeftIcon
            width={20}
            height={20}
            onClick={() => router.back()}
          />
          <p className="text-[16px]">Edit Product</p>
        </div>
      </header>

      <div className="w-full h-[90vh] xl:p-[40px] p-[20px] flex flex-col overflow-y-scroll ">
        <div className="w-full  flex flex-row justify-evenly  flex-wrap md:flex-nowrap gap-[20px] ">
          <div
            className="w-full p-[20px] min-h-[100vh] md:rounded-[10px]
           border-[1px] border-[#CFCBCB] md:max-w-[426px]"
          >
            <b className="text-[16px]">Featured Image</b>
            <p className="text-[16px]">
              Upload your product featured image here. Image size should not be
              more than 2 MB
            </p>
            <br />
            <div className="w-full min-h-[221px] bg-white p-[20px] flex flex-col">
              <div
                className="w-full h-[94px] border-[2px] border-dashed border-[#CFCBCB]
          flex flex-col items-center justify-center  p-[10px]"
              >
                <FiUploadCloud size={24} />
                <p className="max-w-[217px]">
                  <span className="text-[#359E52] cursor-pointer active:opacity-5">
                    Upload an Image
                  </span>{" "}
                  or drag and drop PNG ,JPG
                </p>
              </div>
              <br />
              <div className="w-full flex flex-row flex-wrap gap-5">
                {[{}].map((image, index) => {
                  return (
                    <div
                      style={{
                        background:
                          "url(/vendor_assets/apple.png) center no-repeat",
                        backgroundSize: "cover",
                      }}
                      className="w-[71px] h-[56px] border-[0.94px] bordeer-[#359E52] relative"
                    >
                      <div className="w-[20px] h-[20px] bg-[#eaeaea] cursor-pointer active:opacity-5 rounded-[100px] flex items-center justify-center absolute right-[-5px] top-[-5px]">
                        <XIcon width={12} height={12} color="red" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <br />
            <b className="text-[16px]">Gallery</b>
            <p className="text-[16px]">
              Upload your product image gallery here. Image size should not be
              more than  2 MB
            </p>
            <br />
            <div className="w-full min-h-[221px] bg-white p-[20px] flex flex-col">
              <div
                className="w-full h-[94px] border-[2px] border-dashed border-[#CFCBCB]
          flex flex-col items-center justify-center  p-[10px]"
              >
                <FiUploadCloud size={24} />
                <p className="max-w-[217px]">
                  <span className="text-[#359E52] cursor-pointer active:opacity-5">
                    Upload an Image
                  </span>{" "}
                  or drag and drop PNG ,JPG
                </p>
              </div>
              <br />
              <div className="w-full flex flex-row flex-wrap gap-5">
                {[{}, {}, {}].map((image, index) => {
                  return (
                    <div
                      style={{
                        background:
                          "url(/vendor_assets/apple.png) center no-repeat",
                        backgroundSize: "cover",
                      }}
                      className="w-[71px] h-[56px] border-[0.94px] bordeer-[#359E52] relative"
                    >
                      <div className="w-[20px] h-[20px] bg-[#eaeaea] cursor-pointer active:opacity-5 rounded-[100px] flex items-center justify-center absolute right-[-5px] top-[-5px]">
                        <XIcon width={12} height={12} color="red" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <br />
            </div>
            <br />
            <b className="text-[16px]">Video</b>
            <p className="text-[16px]">Add Video link</p>
            <br />
            <div className="w-full min-h-[221px] bg-white p-[20px] flex flex-col">
              <b>Video Embed 1</b>
              {[{}].map((input, index) => {
                return (
                  <div className="flex flex-row gap-[20px] items-center">
                    <textarea
                      name=""
                      className="w-full h-[94px] border-[1px] border-[#CFCBCB] resize-none mt-[5px]"
                    ></textarea>
                    <p className="text-[red] active:opacity-5 text-[12px] cursor-pointer">
                      Remove
                    </p>
                  </div>
                );
              })}

              <div className="w-full flex justify-center items-center mt-4">
                <button className="text-[white] bg-[#4CBD6B] w-[186px] h-[46px] rounded-[6px] active:opacity-5 ">
                  Add Video
                </button>
              </div>
            </div>
          </div>
          <div className="w-full p-[20px] md:max-w-[596px] min-h-[100vh] md:rounded-[10px] border-[1px] bg-white">
            <p className="text-[16px] w-full">Product Name</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] border-[#CFCBCB]">
              <input
                type="text"
                name=""
                id=""
                className="flex w-full h-[35px] border-none"
              />
            </div>
            <br />
            <p className="text-[16px] w-full">Quantity</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="number"
                name=""
                id=""
                style={{ outline: "none" }}
                className="flex w-[90%] h-[35px] border-none"
              />
              <select name="" id="" className="border-none">
                <option value="Units" selected disabled>
                  Units
                </option>
              </select>
            </div>
            <br />
            <p className="text-[16px] w-full">Size</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="number"
                name=""
                id=""
                style={{ outline: "none" }}
                className="flex w-[90%] h-[35px] border-none"
              />
              <select name="" id="" className="border-none">
                <option value="KG" selected disabled>
                  KG
                </option>
              </select>
            </div>
            <br />
            <p className="text-[16px] w-full">Manufacturer</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] border-[#CFCBCB]">
              <input
                type="text"
                name=""
                id=""
                className="flex w-full h-[35px] border-none"
              />
            </div>
            <br />
            <p className="text-[16px] w-full">Category</p>
            <Select
             value={selectedOptions}
             isMulti
             name="colors"
             options={options}
             className="basic-multi-select"
             classNamePrefix="select"
             onChange={handleChange}
            />
            <br />
            <p className="text-[16px] w-full">Price</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="number"
                name=""
                id=""
                style={{ outline: "none" }}
                className="flex w-[90%] h-[35px] border-none"
              />
              <select name="" id="" className="border-none">
                <option value="Units" selected disabled>
                  $
                </option>
              </select>
            </div>
            <br />
            <p className="text-[16px] w-full">Product Description</p>
            <div className="w-full h-[180px] border-[1px] mt-[10px]">
              <textarea
                name=""
                id=""
                className="w-full h-full border-none"
                placeholder="Enter product description"
              ></textarea>
            </div>
            <br />
            <p className="text-[16px] w-full">Discount</p>
            <select className="w-full h-[40px] border-[1px] mt-[10px] border-[#CFCBCB]">
              <option value="Select one" selected disabled>
                Select one
              </option>
            </select>
            <br />
          </div>
        </div>
        <div className="w-full h-[200px] flex flex-row items-center justify-end md:p-[40px] p-[20px]">
          <button
            onClick={() => setPreview(true)}
            className="w-[221px] h-[46px] bg-white rounded-[6px] border-[1px] border-[#359E52] text-[#359E52]"
          >
            <b>Update product</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
