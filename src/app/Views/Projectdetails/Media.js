import ImageView from "../../Components/ImageView";

const media = "/assets/images/media.png";

export default function Media({ details }) {
  return (
    <div className="flex flex-col  items-start px-[5%]">
      <p className="text-[30px] text-left font-semibold text-[#101828] font-syne">
        Media
      </p>
      <p className="text-[16px] mt-4 text-left font-normal text-[#475467] font-inter">
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in
        volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames
        arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
        risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
        sodales id est ac volutpat. <br /> <br />
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis
        at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce
        augue enim. Quis at habitant diam at. Suscipit tristique risus, at
        donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales
        id est ac volutpat.
      </p>
      <ImageView
        src={media}
        alt="coverpic"
        width={900}
        height={900}
        className="w-full mt-6 object-cover h-[70vh]"
      />
      <p className="text-[12px] mt-3 text-left font-normal text-[#475467] font-inter">
        Image courtesy of Laura Davidson via{" "}
        <span className="underline decoration-[#475467]">Unsplash</span>
      </p>
      <div className="mt-8 border-l-2 flex flex-col items-start border-[#EC8000] pl-3">
        <p className="text-[30px]  text-left font-medium text-[#101828] font-syne">
          “In a world older and more complete than ours they move finished and
          complete, gifted with extensions of the senses we have lost or never
          attained, living by voices we shall never hear.”
        </p>
        <p className="text-[14px] mt-5 text-left font-normal text-[#475467] font-inter">
          — Olivia Rhye, Product Designer
        </p>
      </div>
      <p className="text-[14px] mt-10 text-left font-normal border-b-2  border-[#EAECF0] pb-8 text-[#475467] font-inter">
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
        scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit
        elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque
        amet nulla purus habitasse. <br /> <br /> Nunc sed faucibus bibendum
        feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt
        pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed
        et. Quis lobortis at sit dictum eget nibh tortor commodo cursus. <br />{" "}
        <br /> Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
        aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
        morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum.
        Donec posuere pharetra odio consequat scelerisque et, nunc tortor.{" "}
        <br /> <br /> Nulla adipiscing erat a erat. Condimentum lorem posuere
        gravida enim posuere cursus diam.
      </p>
    </div>
  );
}
