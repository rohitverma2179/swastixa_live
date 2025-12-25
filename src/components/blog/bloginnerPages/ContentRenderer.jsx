// // import { img } from "framer-motion/client";

// // export default function ContentRenderer({ block }) {

// //   switch (block.type) {
// //     case "heading":
// //       return (
// //         <h2 className="text-2xl font-semibold mt-8 mb-4">
// //           {block.text}
// //         </h2>
// //       );
// //     case "subHeading":
// //       return (
// //         <h2 className="text-xl font-semibold mt-8 mb-4">
// //           {block.text}
// //         </h2>
// //       );
// //     case "subHeading":
// //       return (
// //         <h3 className="text-xl font-semibold mt-8 mb-4">
// //           {block.text}
// //         </h3>
// //       );
// //     case "subsubheading":
// //       return (
// //         <h3 className="text-xl font-semibold mt-8 mb-4">
// //           {block.text}
// //         </h3>
// //       );

// //     case "paragraph":
// //       return (
// //         <p className="text-gray-300 mb-4">
// //           {block.text}
// //         </p>
// //       );
// //     case "leftSideImg+paragraph":
// //       return (
// //         <>
// //           <p className="text-gray-300 mb-4">
// //             {block.text}
// //           </p>
// //           <img src={block.image} alt={block.text} />
// //         </>
// //       );
// //     case "RightSideImg+paragraph":
// //       return (
// //         <>
// //           <img src={block.image} alt={block.text} />
// //           <p className="text-gray-300 mb-4">
// //             {block.text}
// //           </p>
// //         </>
// //       );
// //     case "RightSideImg+paragraph":
// //       return (
// //         <>
// //           <img src={block.image} alt={block.text} />
// //           <p className="text-gray-300 mb-4">
// //             <span className="font-bold-">{block.boldText}</span>   {block.text}
// //           </p>
// //         </>
// //       );

// //     case "list":
// //       return block.variant === "ordered" ? (
// //         <ol className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
// //           {block.items.map((item, i) => (
// //             <li key={i}>{item}</li>
// //           ))}
// //         </ol>
// //       ) : (
// //         <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
// //           {block.items.map((item, i) => (
// //             <li key={i}>{item}</li>
// //           ))}
// //         </ul>
// //       );
// //     case "boldList":
// //       return block.variant === "boldOrdered" ? (
// //         <ol className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
// //           {block.items.map((item, i) => (
// //             <li key={i} className="font-bold"><span>{bolditem} </span>{item}  </li>
// //           ))}
// //         </ol>
// //       ) : (
// //         <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
// //           {block.items.map((item, i) => (
// //           <li key={i} className="font-bold"><span>{bolditem} </span>{item}  </li>
// //             // <li key={i}>{item}</li>
// //           ))}
// //         </ul>
// //       );

// //     default:
// //       return null;
// //   }
// // }



// import { Link } from "react-router-dom";

// export default function ContentRenderer({ block }) {
//   switch (block.type) {
//     case "heading":
//       return (
//         <h2 className="text-2xl font-semibold mt-8 mb-4">
//           {block.text}
//         </h2>
//       );

//     case "subHeading":
//       return (
//         <h3 className="text-xl font-semibold mt-6 mb-3">
//           {block.text}
//         </h3>
//       );

//     case "subSubHeading":
//       return (
//         <h4 className="text-lg font-semibold mt-5 mb-2">
//           {block.text}
//         </h4>
//       );

//     case "paragraph":
//       return (
//         <p className="text-gray-300 mb-4 leading-relaxed">
//           {renderTextWithLinks(block.text)}
//         </p>
//       );

//     case "imageLeftText":
//       return (
//         <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
//           <img src={block.image} alt="" className="rounded-lg" />
//           <p className="text-gray-300">
//             {renderTextWithLinks(block.text)}
//           </p>
//         </div>
//       );

//     // case "imageRightText":
//     //   return (
//     //     <div className="grid md:grid-cols-2 text-center items-center mb-6">
//     //       {/* <p className="text-gray-300">
//     //         {renderTextWithLinks(block.text)}
//     //       </p> */}
//     //       <img src={block.image} alt={block.alt} className="rounded-lg" />
//     //     </div>
//     //   );

//     case "imageRightText":
//       return (
//         <div className="flex justify-center items-center mb-6">
//           <img
//             src={block.image}
//             alt={block.alt || "image"}
//             className="rounded-lg max-w-[600px]"
//           />
//         </div>
//       );


//     case "list":
//       return block.variant === "ordered" ? (
//         <ol className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
//           {block.items.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ol>
//       ) : (
//         <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
//           {block.items.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       );

//     case "boldList":
//       return (
//         <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
//           {block.items.map((item, i) => (
//             <li key={i}>
//               <span className="font-semibold text-white">
//                 {item.bold}
//               </span>{" "}
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       );
//     case "unorderedBoldListdecimal":
//       return (
//         <ul className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
//           {block.items.map((item, i) => (
//             <li key={i}>
//               <span className="font-semibold text-white">
//                 {item.bold}
//               </span>{" "}
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       );

//     default:
//       return null;
//   }
// }




// // function renderTextWithLinks(text) {
// //   const regex = /\{\{link:(.*?)\|(.*?)\}\}/g;
// //   const result = [];

// //   let lastIndex = 0;
// //   let match;

// //   while ((match = regex.exec(text)) !== null) {
// //     // Normal text
// //     result.push(text.slice(lastIndex, match.index));

// //     // React Router Link
// //     result.push(
// //       <Link
// //         key={match.index}
// //         to={match[2]}
// //         className="text-blue-400 hover:underline font-medium"
// //       >
// //         {match[1]}
// //       </Link>
// //     );

// //     lastIndex = regex.lastIndex;
// //   }

// //   result.push(text.slice(lastIndex));
// //   return result;
// // }


// // import { Link } from "react-router-dom";

// function renderTextWithLinks(text) {
//   const regex = /\{\{link:([^|]+)\|([^}]+)\}\}/g;

//   return text.split(regex).map((part, index) => {
//     // text
//     if (index % 3 === 0) return part;

//     // label
//     if (index % 3 === 1) return null;

//     // slug
//     if (index % 3 === 2) {
//       const label = text.split(regex)[index - 1];
//       const slug = part;

//       return (
//         <Link
//           key={index}
//           to={`/blog/${slug}`}
//           className="text-blue-400 hover:underline"
//         >
//           {label}
//         </Link>
//       );
//     }
//   });
// }






// -------------------------------










import { Link } from "react-router-dom";

export default function ContentRenderer({ block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {block.text}
        </h2>
      );

    case "subHeading":
      return (
        <h3 className="text-xl font-semibold mt-6 mb-3">
          {block.text}
        </h3>
      );

    case "subSubHeading":
      return (
        <h4 className="text-lg font-semibold mt-5 mb-2">
          {block.text}
        </h4>
      );

    case "paragraph":
      return (
        <p className="text-gray-300 mb-4 leading-relaxed">
          {renderTextWithLinks(block.text)}
        </p>
      );
    case "paragraphbold": {
      const [heading, ...rest] = block.text.split("\n");
      const bodyText = rest.join("\n");

      return (
        <p className="text-gray-300 mb-4 leading-relaxed">
          {heading && (
            <span className="block text-center font-bold text-white mb-2">
              {heading}
            </span>
          )}
          {renderTextWithLinks(bodyText)}
        </p>
      );
    }



    case "imageLeftText":
      return (
        <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
          <img src={block.image} alt="" className="rounded-lg" />
          <p className="text-gray-300">
            {renderTextWithLinks(block.text)}
          </p>
        </div>
      );

    // case "imageRightText":
    //   return (
    //     <div className="grid md:grid-cols-2 text-center items-center mb-6">
    //       {/* <p className="text-gray-300">
    //         {renderTextWithLinks(block.text)}
    //       </p> */}
    //       <img src={block.image} alt={block.alt} className="rounded-lg" />
    //     </div>
    //   );

    case "imageRightText":
      return (
        <div className="flex justify-center items-center mb-6">
          <img
            src={block.image}
            alt={block.alt || "image"}
            className="rounded-lg max-w-[600px]"
          />
        </div>
      );


    case "list":
      return block.variant === "ordered" ? (
        <ol className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            // <li key={i}>{item}</li>
            // <li key={i}>{item}{item.text}</li>
            <li key={i}> {typeof item === "string" ? item : item.text}</li>
            
          ))}
        </ol>
      ) : (
        <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}> {typeof item === "string" ? item : item.text}</li>
          ))}
        </ul>
      );
    // case "listitem":
    //   return block.variant === "ordered" ? (
    //     <ol className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
    //       {block.items.map((item, i) => (
    //         // <li key={i}>{item}</li>
    //         <li key={i}>{item}</li>
    //       ))}
    //     </ol>
    //   ) : (
    //     <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
    //       {block.items.map((item, i) => (
    //         <li key={i}>{item}</li>
    //       ))}
    //     </ul>
    //   );


    case "linkList":
      return (
        <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>
              {renderTextWithLinks(item)}
            </li>
          ))}
        </ul>
      );
      

    case "boldList":
      return (
        <ul className="list-disc ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold text-white">
                {item.bold}
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      );
    case "boldListpara":
      return (
        <ul className="list-none list-inside   ml-0 text-gray-400 mb-6 ">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold text-white">
                {item.bold}
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      );
    case "unorderedBoldListdecimal":
      return (
        <ul className="list-decimal ml-6 text-gray-400 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>
              <span className="font-semibold text-white">
                {item.bold}
              </span>{" "}
              {item.text}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}




// function renderTextWithLinks(text) {
//   const regex = /\{\{link:(.*?)\|(.*?)\}\}/g;
//   const result = [];

//   let lastIndex = 0;
//   let match;

//   while ((match = regex.exec(text)) !== null) {
//     // Normal text
//     result.push(text.slice(lastIndex, match.index));

//     // React Router Link
//     result.push(
//       <Link
//         key={match.index}
//         to={match[2]}
//         className="text-blue-400 hover:underline font-medium"
//       >
//         {match[1]}
//       </Link>
//     );

//     lastIndex = regex.lastIndex;
//   }

//   result.push(text.slice(lastIndex));
//   return result;
// }


// import { Link } from "react-router-dom";

function renderTextWithLinks(text) {
  if (!text) return null;

  // Step 1: split by link pattern
  const linkRegex = /\{\{link:([^|]+)\|([^}]+)\}\}/g;
  const parts = text.split(linkRegex);

  return parts.map((part, index) => {
    // Normal text OR bold handling
    if (index % 3 === 0) {
      // Handle **bold** inside normal text
      return part.split(/(\*\*.*?\*\*)/g).map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={`${index}-${i}`} className="font-semibold text-white">
              {p.replace(/\*\*/g, "")}
            </strong>
          );
        }
        return <span key={`${index}-${i}`}>{p}</span>;
      });
    }

    // Label (ignore, used with slug)
    if (index % 3 === 1) return null;

    // Slug → Link
    if (index % 3 === 2) {
      const label = parts[index - 1];
      const slug = part;

      return (
        <Link
          key={index}
          to={`/blog/${slug}`}
          className="text-blue-400 hover:underline"
        >
          {label}
        </Link>
      );
    }

    return null;
  });
}