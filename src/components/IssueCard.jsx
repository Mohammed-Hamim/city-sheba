// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { FaArrowUp } from "react-icons/fa";
 

// const IssueCard = ({ issue, onUpvote }) => {
   


//     return (
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
//             {/* Image */}
//             {issue?.images && issue.images.length > 0 && (
//                 <img
//                     src={issue.images[0]}
//                     alt={issue?.title}
//                     className="w-full h-48 object-cover"
//                 />
//             )}
//             {/* Content */}
//             <div className="p-4 space-y-2">
//                 <div className="flex justify-between items-center">
//                     <h2 className="text-lg font-semibold text-gray-800">{issue?.title}</h2>
//                     <span
//                         className={`text-sm font-medium px-2 py-1 rounded-full ${issue?.priority === "High"
//                                 ? "bg-red-100 text-red-600"
//                                 : "bg-green-100 text-green-600"
//                             }`}
//                     >
//                         {issue?.priority}
//                     </span>
//                 </div>

//                 <p className="text-gray-500 text-sm">{issue?.category}</p>

//                 <div className="flex justify-between items-center mt-2">
//                     {/* Status Badge */}
//                     <span
//                         className={`text-xs font-medium px-2 py-1 rounded-full ${issue?.status === "Resolved"
//                                 ? "bg-green-100 text-green-700"
//                                 : issue?.status === "In-Progress"
//                                     ? "bg-yellow-100 text-yellow-700"
//                                     : issue.status === "Closed"
//                                         ? "bg-gray-100 text-gray-700"
//                                         : "bg-blue-100 text-blue-700"
//                             }`}
//                     >
//                         {issue?.status}
//                     </span>

//                     {/* Location */}
//                     <span className="text-gray-500 text-sm">
//                         {issue?.location?.district}, {issue?.location.area}
//                     </span>
//                 </div>

//                 {/* Upvote & View Details */}
//                 <div className="flex justify-between items-center mt-4">
//                     <button
//                         onClick={() => onUpvote(issue?.id)}
//                         className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition"
//                     >
//                         <FaArrowUp /> {issue?.upvotes}
//                     </button>

//                     <button
                       
//                         className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm"
//                     >
//                         View Details
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default IssueCard;
