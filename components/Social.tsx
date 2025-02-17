// import React from "react";
// import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
// import Link from "next/link";



// const socials = [
//     {icon: <FaGithub />, path: ""},
//     {icon: <FaLinkedinIn />, path: ""},
//     {icon: <FaYoutube />, path: ""},
//     {icon: <FaTwitter />, path: ""},
// ];

// const Social = ({ containerStyles, iconStyles }) => {
//     return (
//         <div className={containerStyles}>
//         {socials.map((item, index) =>{
//             return ( <Link key={index} href={item.path} className={iconStyles}>
//                 {item.icon}
//             </Link>
//             );
//         })}
//         </div>
//     );
// };

// export default Social;

import React from "react";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

import Link from "next/link";
import { JSX } from "react/jsx-runtime";


// Define the type for each social media item

interface SocialItem {

    icon: JSX.Element; // The icon component

    path: string; // The URL for the social media link

}


// Define the props for the Social component

interface SocialProps {

    containerStyles?: string; // Optional styles for the container

    iconStyles?: string; // Optional styles for the icons

}


// Define the social media items

const socials: SocialItem[] = [

    { icon: <FaGithub />, path: "https://github.com/antfats" },

    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/yourusername" },

    // { icon: <FaYoutube />, path: "https://youtube.com/yourchannel" },

    // { icon: <FaTwitter />, path: "https://twitter.com/yourusername" },

];


// Define the Social component

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {

    return (

        <div className={containerStyles}>

            {socials.map((item, index) => (

                <Link key={index} href={item.path} className={iconStyles}>

                    {item.icon}

                </Link>

            ))}

        </div>

    );

};


export default Social;


