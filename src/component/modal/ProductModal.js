import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiMinus, FiPlus } from "react-icons/fi";
import axios from "axios";

//internal import
import Price from "@component/common/Price";
import { notifyError } from "@utils/toast";
import useAddToCart from "@hooks/useAddToCart";
import MainModal from "@component/modal/MainModal";
import Discount from "@component/common/Discount";
import { SidebarContext } from "@context/SidebarContext";
import { handleLogEvent } from "@utils/analytics";

const ProductModal = ({
  modalOpen,
  setModalOpen,
  product,
  attributes,
  currency,
}) => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const { setIsLoading, isLoading } = useContext(SidebarContext);
  const { handleAddItem, setItem, item } = useAddToCart();
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleAddToCart = async () => {
    if (product.quantity < 1) return notifyError("Insufficient stock!");

    const { categories, description, ...updatedProduct } = product;

    console.log("product info in modal", product);

    const newItem = {
      ...updatedProduct,
      title: product?.name,
      id: product.id,
      price: product.price,
    };

    try {
      const response = await axios.put(`${apiURL}/cart/add`, {
        productId: product.id,
        quantity: item,
      });

      if (response.status === 200) {
        handleAddItem(newItem);
        notifySuccess("Item added to cart successfully!");
      } else {
        notifyError("Failed to add item to cart!");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      notifyError("Error adding item to cart!");
    }
  };

  // const handleMoreInfo = (slug) => {
  //   setModalOpen(false);

  //   router.push(`/product/${slug}`);
  //   setIsLoading(!isLoading);
  //   handleLogEvent("product", `opened ${slug} product details`);
  // };

  return (
    <>
      <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className="inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl font-primaryRegular">
          <div className="font-primarySemibold my-4">Product Details</div>
          <div className="flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden">
            <div
              onClick={() => setModalOpen(false)}
              className="flex-shrink-0 flex items-center justify-center h-auto cursor-pointer"
            >
              <Discount product={product} discount={discount} modal />
              <img
                src={product.featured_image}
                width={420}
                height={420}
                alt="Product Image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            <div className="w-full flex flex-col px-5 py-2 text-left">
              <div className="mb-2 md:mb-2.5 -mt-1.5 grid gap-3">
                <div>
                  <h1
                    onClick={() => setModalOpen(false)}
                    className="text-heading font-primaryBold hover:text-black cursor-pointer"
                  >
                    {product?.name}
                  </h1>
                  <p>{product?.category?.name}</p>
                </div>

                <div className="flex gap-4">
                  <p className=" font-primaryBold">Brand</p>
                  <p>Top wears</p>
                </div>

                {/* <div
                  className={`${
                    stock <= 0 ? "relative py-1 mb-2" : "relative"
                  }`}
                >
                  <Stock stock={product?.quantity} />
                </div> */}
              </div>
              <p className="text-sm leading-6">{product?.description}</p>
              <div className="flex items-center my-4">
                <Price
                  product={product}
                  price={price}
                  currency={currency}
                  originalPrice={originalPrice}
                />
              </div>

              <div className="flex items-center mt-4">
                <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                  <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                    <button
                      onClick={() => setItem(item - 1)}
                      disabled={item === 1}
                      className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500"
                    >
                      <span className="text-dark text-base">
                        <FiMinus />
                      </span>
                    </button>
                    <p className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8  md:w-20 xl:w-24">
                      {item}
                    </p>
                    <button
                      onClick={() => setItem(item + 1)}
                      disabled={
                        product.quantity < item || product.quantity === item
                      }
                      className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500"
                    >
                      <span className="text-dark text-base">
                        <FiPlus />
                      </span>
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.quantity < 1}
                    className="text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-[#4CBD6B]  w-full h-12"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainModal>
    </>
  );
};

export default ProductModal;
