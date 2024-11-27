"use client";
import ImageView from "../../Components/ImageView";
import { LuArrowUpRight } from "react-icons/lu";
import { nexaflowPageObj } from "../../utils/constants";
import nexaflowApi from "../../services/nexaflow";
import Link from "next/link";
import { Loader } from "../../Components/Loader";
import { useEffect, useState } from "react";
import buttonConfig from "../../utils/button";


export const colors = [
  "text-[#EC8000] bg-[#FFFCF8]", "bg-[#EEF4FF] text-[#3538CD]", "bg-[#FDF2FA] text-[#C11574]", "text-[#EC8000] bg-[#FFFCF8]", "bg-[#EEF4FF] text-[#3538CD]",
]

export default function Media() {
  const [media, setMedia] = useState([]);
  const [post, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const category = [
    {
      section: "All",
    },
    {
      section: "Articles",
    },
    {
      section: "Videos",
    },
    {
      section: "Podcasts",
    },
  ];

 
  useEffect(() => {
    const getPageByID = async () => {
      const page = await nexaflowApi.getPageByID({
        pageId: nexaflowPageObj.mediaPage,
        websiteId: nexaflowPageObj.website,
      });
      // const highlightedPosts = page?.Posts.filter(
      //   (post) => post.highlight === "true"
      // );
      setMedia(page?.Media);
      setPosts(page?.Posts);

    };

    getPageByID();
  }, []);

   const filteredPosts =
    selectedCategory === "All"
      ? post?.filter((post) => post?.name)
      : post?.filter((post) => post?.name && post.category === selectedCategory);

 
  const hasContent = media.length > 0 || post.length > 0;
  return (
    <div>
      <div className="mt-32 w-full max-w-screen-2xl mx-auto px-4 sm:px-[6%] flex gap-10 flex-col items-center pb-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#EC8000] font-semibold text-center text-[14px] font-inter">
            Media
          </p>
          <p className="text-[#101828] font-semibold text-center text-[30px] sm:text-[40px] font-syne">
            Explore $EARTH
          </p>
        </div>
        {media && media.length ? (
          <div className="grid grid-flow-col grid-rows-3 gap-6 mt-8 sm:grid-rows-2">
            {media.filter(card => card?.name).map((card, index) => (
              <Link
                href={card?.link || ''}
                target="_blank"
                className={`flex flex-col sm:flex-row gap-6 ${index === 0 ? "sm:row-span-2 row-span-1 !flex-col" : ""
                  }`}
                key={index}
              >
                <ImageView
                  src={card.img}
                  alt={card.name}
                  width={200}
                  height={200}
                  className={`w-full h-[200px] object-cover ${index === 0
                    ? "sm:h-[13rem]"
                    : "sm:w-[50%] sm:h-auto"
                    }`}
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[#EC8000] font-inter font-semibold text-[12px]">
                    {card?.name}
                  </p>
                  <div className="flex items-center justify-between">
                  <p
                      className={`text-[#101828] font-inter font-semibold text-[16px] ${
                        index === 0
                          ? "font-syne text-[22px]"
                          : ""
                      }`}
                    >
                      {card?.title}
                    </p>
                    {/* {index === 0 && ( */}
                    <LuArrowUpRight size={22} color="#101828" />
                    {/* )} */}
                  </div>
                  <p className="text-[#475467] font-inter w-[90%] font-normal text-[14px] overflow-hidden text-ellipsis line-clamp-3">
                    {card?.description}
                  </p>
                  <div className="flex items-center gap-2">
                    {card?.tags.map((tag, i) => (
                      <p
                        className={`rounded-full flex py-[2px] px-2 font-inter text-[12px] font-medium ${colors[i]}`}
                        key={i}
                      >
                        {tag?.tag}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="h-[60vh] w-full flex items-center justify-center">
            <Loader />
          </div>
        )}

         {/* Filter Section */}
         <p className="text-[#101828] mt-8 font-syne text-center font-semibold text-[22px]">
          All Posts
        </p>
        <div className="w-full cursor-pointer gap-4 sm:gap-12 border-y border-[#F2F4F7] flex px-2 items-center justify-center h-16">
          {category.map((option, index) => (
            <p
              key={index}
              onClick={() => setSelectedCategory(option?.section)}
              className={`font-inter text-[14px] sm:text-[14px] px-1 sm:px-4 font-semibold text-[#475467] ${
                selectedCategory === option.section ? " text-[#EC8000]" : ""
              }`}
            >
              {option.section}
            </p>
          ))}
        </div>

       {/* Posts Section */}
       {post.length > 0 ? (
         filteredPosts && filteredPosts.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredPosts.map((post, index) => (
              <Link
                href={post?.link || ""}
                target="_blank"
                className="flex flex-col gap-4 group"
                key={index}
              >
                <div className="relative">
                  <ImageView
                    src={post.img}
                    alt={post.name}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {/* Orange Text at Bottom */}
                <p className="text-[#EC8000] font-inter text-[12px] font-medium">
                  {post?.name}
                </p>
                  <p className="text-[#101828] font-syne text-[16px] font-semibold">
                    {post?.title}
                  </p>
                  <p className="text-[#475467] font-inter text-[14px] font-normal line-clamp-3">
                    {post?.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                    {post?.tags.map((tag, i) => (
                      <p
                        className={`rounded-full flex py-[2px] px-2 font-inter text-[12px] font-medium ${colors[i]}`}
                        key={i}
                      >
                        {tag?.tag}
                      </p>
                    ))}
                  </div>

              </Link>
            ))}
          </div>
         ) : (
          <div className="h-[60vh] w-full flex items-center justify-center">
            <p className="font-syne text-md">No Posts</p>
          </div>
         )
       ) : null}

        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center w-full p-8 rounded-md">
          {hasContent && (
            <Link
              className="w-[100px] mt-6 text-white font-inter flex h-10 items-center justify-center rounded-md bg-[#EC8000] p-2 text-sm"
              href={buttonConfig?.media_get_started?.link || ""}
              target={
                buttonConfig?.media_get_started?.external ? "_blank" : "_self"
              }
            >
              {buttonConfig?.media_get_started?.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}