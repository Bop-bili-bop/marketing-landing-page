import youtubeIcon from "../assets/SocialsIcons/youtube-line.svg";
import instagramIcon from "../assets/SocialsIcons/instagram-line.svg";
import facebookIcon from "../assets/SocialsIcons/facebook-box-line.svg";
import ghIcon from "../assets/SocialsIcons/github-line.svg";
import twitterIcon from "../assets/SocialsIcons/twitter-x-line.svg";

const SocialMediaIcons = () => {
  const socialsIcons = [
    youtubeIcon,
    instagramIcon,
    facebookIcon,
    ghIcon,
    twitterIcon,
  ];
  return (
    <div className="flex flex-row gap-6">
      {socialsIcons.map((icon, key) => (
        <img
          key={key}
          src={icon}
          className="cursor-pointer"
          alt="socials-icon"
        />
      ))}
    </div>
  );
};

export default SocialMediaIcons;
