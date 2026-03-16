import menuPageTrackDescriptionBox from "../assets/images/menuTrackDescriptionBox.png";

type TrackDescriptionBoxMenuPageProps = {
  title: string | number;
  trackDescription: string;
};

const TrackDescriptionBoxMenuPage = ({
  title,
  trackDescription,
}: TrackDescriptionBoxMenuPageProps) => {
  return (
    <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden">
      <img
        src={menuPageTrackDescriptionBox}
        alt={`track description box for track ${title}`}
        className="block w-full py-[50px]"
      />

      <div className="w-full translate-y-[-265px] translate-x-[43px]">
        <h2 className="m-0 text-textBright text-[15px] uppercase tracking-[0.2em] font-guardian-angle">
          {title}
        </h2>
      </div>

      <div className="w-[270px] translate-y-[-250px] translate-x-[10px] whitespace-normal wrap-break-word leading-relaxed">
        <h2 className="m-0 text-white text-[12px] uppercase tracking-[0.2em] font-space-grotesk">
          {trackDescription}
        </h2>
      </div>

      {/*<div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-end p-6 bg-black/40">
        <h2 className="m-0 text-white text-[100px] uppercase tracking-[0.2em]">
          Track {trackNumber}
        </h2>

        <p className="mt-4 m-0 text-white text-[18px] leading-relaxed">
          {trackDescription}
        </p>
      </div>*/}
    </div>
  );
};

export default TrackDescriptionBoxMenuPage;
