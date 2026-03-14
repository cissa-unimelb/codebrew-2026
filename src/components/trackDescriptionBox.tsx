type TrackDescriptionBoxProps = {
  trackNumber: string | number;
  description: string;
  trackDetailImage: string;
};

// const TrackDescriptionBox = ({
//   trackNumber,
//   description,
//   trackDetailImage,
// }: TrackDescriptionBoxProps) => {
//   return (
//     <div>
//       <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-center">
//         <p className="m-0 text-red-500 text-[50px] font-guardian-angle translate-x-[20px] translate-y-[-30px]">
//           Track {trackNumber}
//         </p>
//       </div>
//       <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-center w-[300px] translate-x-[90px]">
//         <p className="m-0 text-red-500 text-[17px] font-space-grotesk translate-x-[10px] translate-y-[70px]">
//           {description}
//         </p>
//       </div>
//       <img
//         src={trackDetailImage}
//         alt="Track details"
//         className="w-full h-auto object-contain"
//       />
//     </div>
//   );
// };

const TrackDescriptionBox = ({
  trackNumber,
  description,
  trackDetailImage,
}: TrackDescriptionBoxProps) => {
  return (
    <div className="relative w-full">
      <img
        src={trackDetailImage}
        alt="Track details"
        className="w-full h-auto object-contain block"
      />

      {/* Track number */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-center">
        <p className="m-0 text-red-500 text-[50px] font-guardian-angle translate-x-[20px] translate-y-[-700px]">
          Track {trackNumber}
        </p>
      </div>

      {/* Description box placed inside the empty area */}
      <div className="absolute z-20 top-[110px] left-[50%] -translate-x-[50px] translate-y-[20px] w-[220px]">
        <div className="text-red-500 text-[17px] font-space-grotesk whitespace-normal wrap-break-word leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default TrackDescriptionBox;
