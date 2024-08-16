import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SidebarContext } from "@context/SidebarContext";
import axios from "axios";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import CardTwo from "@component/cta-card/CardTwo";
import StickyCart from "@component/cart/StickyCart";
import Loading from "@component/preloader/Loading";
import ProductCard from "@component/product/ProductCard";
import FeatureCategory from "@component/category/FeatureCategory";
import CMSkeleton from "@component/preloader/CMSkeleton";
import MainCarousel from "@component/carousel/MainCarousel";
import OfferCard from "@component/offer/OfferCard";
import Banner from "@component/banner/Banner";
import { ArrowRightIcon, ChevronRightIcon, MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";

const ProductInfo = ({ params }) => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error, storeCustomizationSetting } = useGetSetting();
  const [products, setProducts] = useState([]);
  const [buyNowModal, setbuyNowModal] = useState(false);

  const [quantity, setquantity] = useState(0);

  return (
    <>
       
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
             {
      buyNowModal &&
      <div className="w-full flex items-center justify-center bg-[#00000080] fixed top-0 left-0 z-[200000] h-[100vh]">
        <div className="w-[90%] max-w-[700px] min-h-[400px] rounded-xl bg-white p-8 flex flex-col relative px-[10vw]">
            <p className="w-full text-center">Buy now</p>
            <XIcon width={20} height={20} color="red" onClick={()=> setbuyNowModal(false)}
            className="absolute top-[20px] right-[20px] active:opacity-[0.5] cursor-pointer" />
            <br />
            <br />
            <div className="w-full h-[50px] border-[1px] px-4 flex flex-row items-center gap-4 rounded-xl">
                <input type="radio" id="pwo" /> <option id="pwo">Process wholesale order</option>
            </div>
            <br />
            <div className="w-full h-[50px] border-[1px] px-4 flex flex-row items-center gap-4 rounded-xl">
                <input type="radio" id="pwo" /> <option id="pwo">Opt for drop-shipping</option>
            </div>
            <br />
            <div className="w-full flex flex-row items-center gap-[20px] justify-between">
                <Link href={`payment-summary/${id}`} className=" flex flex-[50] ">
                <button className="text-white text-[14px] rounded-xl bg-[#4CBD6B] flex flex-1 h-[45px] items-center justify-center max-w-[180px] active:opacity-[0.5]">continue</button>
                </Link>
                <button className=" text-[14px] rounded-xl text-black border flex flex-[50] h-[45px] items-center justify-center max-w-[180px]  active:opacity-[0.5]" onClick={()=> setbuyNowModal(false)}>Cancel</button>
            </div>

        </div>
      </div>
    }
          <div className="min-h-screen  mx-auto max-w-screen-2xl ">
            {/* Exclusive Deals */}
            <div className="w-full h-[100px] flex flex-row items-center px-3 sm:px-10 gap-2 ">
              <div className="text-[14px]">Home</div>{" "}
              <ChevronRightIcon width={14} height={14} />{" "}
              <div className="text-[#10B981] text-[14px]">Product Details</div>
            </div>
            <div className="bg-white w-full min-h-[100vh] flex md:flex-row flex-col flex-wrap min-h-[900px] px-3 sm:px-10">
              <div className="flex flex-[50] flex-col px-3 sm:px-10 py-10">
                <div className="flex flex-[70] w-full min-h-[210px] bg-[#E8F1E9] bg-[url(/dummy_products/tablet.png)] bg-contain bg-no-repeat bg-center" />
                <div className="flex flex-[30] w-full"></div>
              </div>
              <div className="flex flex-[50] flex-col px-3 sm:px-10 md:py-10 py-4">
                <strong>C Idea 8 Inches Andriod Tablet</strong>
                <div>Electronics</div>
                <br />
                <div>
                  <b>Brand:</b> itel
                </div>
                <div>
                  <b>sku:</b> 221
                </div>
                <br />
                <strong>Description:</strong>
                <p>
                  Most fresh vegetables are low in calories and have a water
                  content in excess of 70 percent, with only about 3.5 percent
                  protein and less than 1 percent fat. ... The root vegetables
                  include beets, carrots, radishes, sweet potatoes, and turnips.
                  Stem vegetables include asparagus and kohlrabi.{" "}
                </p>
                <p className="text-[#4CBD6B] cursor-pointer active:opacity-[0.5]">More</p>
                <b>15000.00 Per Carton</b>
                <p>14 units in carton</p>
                <p className="text-[red]">Minimum order 2 cartons</p>
                <br />
                <div className="flex md:flex-row flex-col flex-wrap gap-[20px] md:items-center min-h-[60px]">
                <div className="flex flex-row flex-wrap gap-[20px] items-center flex-[30] bg-[#4F4F4F] min-h-[54px] px-4 justify-between max-w-[200px]">
                    <PlusIcon onClick={()=>{
                        quantity >=0 ? setquantity(quantity + 1) : null
                    }}
                    width={16} height={16} color="white" className="cursor-pointer active:opacity-[0.5]" />
                     <div className="flex items-center justify-center bg-white min-w-[60px] h-[30px] flex-1"> <p>{quantity}</p> </div> 
                     <MinusIcon onClick={()=>{
                        quantity > 0 ? setquantity(quantity - 1) : null
                    }}
                    width={16} height={16} color="white" className="cursor-pointer active:opacity-[0.5]" />
                </div>
                    
                <div className="flex flex-row flex-wrap gap-[20px] items-center flex-[70]">
                    <button className="flex flex-[40] h-[50px] rounded-[5px] text-[14px] p-2 bg-[#4CBD6B] items-center justify-center text-white">Add to cart</button>
                    <button className="flex flex-[60] h-[50px] rounded-[5px] text-[14px] p-2 bg-[#455A64] items-center justify-center text-white">Add For drop-shipping</button>
                    

                </div>
                </div>
                <br />
                <button className="flex w-full max-w-[500px] h-[50px] rounded-[5px] text-[14px] p-2 bg-[#F58634] items-center justify-center text-white" onClick={()=> setbuyNowModal(true)}>Buy now</button>
              </div>
            </div>

            {/* discounted products */}
            {storeCustomizationSetting?.home?.discount_product_status &&
              discountProducts?.length > 0 && (
                <div
                  id="discount"
                  className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
                >
                  <div className="mb-10 flex justify-center">
                    <div className="text-center w-full lg:w-2/5">
                      <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                        <CMSkeleton
                          count={1}
                          height={30}
                          // error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_title
                          }
                        />
                      </h2>
                      <p className="text-base font-sans text-gray-600 leading-6">
                        <CMSkeleton
                          count={5}
                          height={20}
                          // error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_description
                          }
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-full">
                      {loading ? (
                        <CMSkeleton
                          count={20}
                          height={20}
                          error={error}
                          loading={loading}
                        />
                      ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                          {discountProducts
                            ?.slice(
                              0,
                              storeCustomizationSetting?.home
                                ?.latest_discount_product_limit
                            )
                            .map((product) => (
                              <ProductCard
                                key={product._id}
                                product={product}
                                attributes={attributes}
                              />
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </Layout>
      )}
    </>
  );
};

export default ProductInfo;