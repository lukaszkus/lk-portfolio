import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Wrapper, Content, Image, Emoji } from "./Avatar.style";

import IMAGES from "../../utils/images";
gsap.registerPlugin(useGSAP);

const Avatar = () => {
  const images = [IMAGES.me_1, IMAGES.me_2, IMAGES.me_3];
  const imgAlts = [
    "My photo where I'm smiling",
    "My photo where I'm proud",
    "A photo of me doing the rock on gesture",
  ];

  const icons = [
    { name: "Waving hand", icon: "👋" },
    { name: "Smiling face", icon: "😎" },
    { name: "Rock on", icon: "🤘" },
  ];

  useGSAP(() => {
    let tl = gsap.timeline({ repeat: -1 });
    let imgs = gsap.utils.toArray(".myimg");
    let emojis = gsap.utils.toArray(".emoji");

    for (let i = 0; i <= 2; i++) {
      tl.fromTo(
        imgs[i],
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 1.2,
          ease: "elastic.out(0.9,0.23)",
        }
      )
        .fromTo(
          emojis[i],
          {
            opacity: 0,
            yPercent: -50,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.2,
            ease: "elastic.out(0.9,0.23)",
          },
          "<"
        )
        .to(
          imgs[i],
          {
            opacity: 0,
            xPercent: 100,
            duration: 0.2,
          },
          "+=2,5"
        )
        .to(
          emojis[i],
          {
            yPercent: -50,
            opacity: 0,
            duration: 0.2,
          },
          "<"
        );
    }
  });

  return (
    <Wrapper>
      <Content>
        <Image
          src={images[0]}
          alt={imgAlts[0]}
          key={images[0]}
          className="myimg"
        />
        <Image
          src={images[1]}
          alt={imgAlts[1]}
          key={images[1]}
          className="myimg"
        />
        <Image
          src={images[2]}
          alt={imgAlts[2]}
          key={images[2]}
          className="myimg"
        />
        <Image src={IMAGES.me_black} alt="" />
      </Content>
      <Image src={IMAGES.me_shadow} alt="" />
      <Emoji key={images[0]} className="emoji">
        <span role="img" aria-label={icons[0].name}>
          {icons[0].icon}
        </span>
      </Emoji>
      <Emoji key={images[1]} className="emoji">
        <span role="img" aria-label={icons[1].name}>
          {icons[1].icon}
        </span>
      </Emoji>
      <Emoji key={images[2]} className="emoji">
        <span role="img" aria-label={icons[2].name}>
          {icons[2].icon}
        </span>
      </Emoji>
    </Wrapper>
  );
};

export default Avatar;
