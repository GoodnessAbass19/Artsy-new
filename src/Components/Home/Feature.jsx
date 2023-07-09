import React from "react";

// product image
import Pic_1 from "../../assets/Home-image/image-1.png";
import Pic_2 from "../../assets/Home-image/image-2.png";
import Pic_3 from "../../assets/Home-image/image-3.jpg";

// creators image
import Creator_1 from "../../assets/Creator-image/image-1.png";
import Creator_2 from "../../assets/Creator-image/image-2.png";
import Creator_3 from "../../assets/Creator-image/image-3.png";
import Creator_4 from "../../assets/Creator-image/image-4.png";
import Creator_5 from "../../assets/Creator-image/image-5.png";

const product = [
  {
    image: Pic_1,
  },
  {
    image: Pic_2,
  },
  {
    image: Pic_3,
  },
];

const Feature = () => {
  return (
    <>
      <section className="mx-auto lg:max-w-screen-2xl">
        <div className="mx-auto overflow-hidden">
          <h1 className="lg:text-4xl text-3xl font-[Poppins] font-semibold">
            Featured products
          </h1>
          <div className="mx-auto overflow-hidden">
            {product.map((img, i) => (
              <div
                key={i}
                className="flex lg:odd:flex-row lg:even:flex-row-reverse flex-col justify-between mx-5 md:mx-auto md:my-20 my-10 overflow-hidden"
              >
                <div className="relative overflow-hidden mx-auto">
                  <img
                    src={img.image}
                    alt=""
                    className="w-full h-full block transition ease-in-out delay-150"
                  />
                  <div className="inset-0  absolute text-xl bg-black/50 text-white transition ease-in-out  text-center items-center opacity-0 hover:opacity-100">
                    <div className="flex justify-center gap-10 absolute inset-y-2/4 inset-x-10">
                      <h2 className="md:text-2xl lg:text-4xl text-xl font-sans font-medium">
                        View product
                      </h2>
                      <div className="lg:text-5xl md:text-4xl text-xl text-center">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-2xl flex flex-col lg:space-y-14 text-center mx-auto overflow-hidden">
                  <h2 className="font-serif font-bold xl:text-4xl lg:text-3xl text-2xl">
                    The Boolean Egyptian
                  </h2>
                  <div className="">
                    <p className="md:text-lg lg:text-xl xl:text-2xl  text-sm font-normal font-sans">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nisi fugiat quis expedita pariatur non alias sunt repellat
                      neque delectus! Eius provident minima doloremque cumque?
                      Autem.
                    </p>
                  </div>
                  <div className="justify-center overflow-hidden items-center">
                    <div className="relative flex ">
                      <img
                        src={Creator_1}
                        alt=""
                        className="absolute md:w-10 w-7"
                      />
                      <img
                        src={Creator_2}
                        alt=""
                        className="absolute md:left-6 left-3 md:w-10 w-7"
                      />
                      <img
                        src={Creator_3}
                        alt=""
                        className="absolute md:left-12 left-6 md:w-10 w-7"
                      />
                      <img
                        src={Creator_4}
                        alt=""
                        className="absolute md:left-[72px] left-9 md:w-10 w-7"
                      />
                      <img
                        src={Creator_5}
                        alt=""
                        className="absolute md:left-24 md:w-10 left-12 w-7"
                      />
                    </div>

                    <div className=" text-center  flex justify-center mx-auto items-center">
                      <h2 className="md:text-2xl px-2 text-lg font-semibold font-sans">
                        64 Major Creators
                      </h2>
                      <div className="md:text-4xl text-2xl px-2">
                        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
