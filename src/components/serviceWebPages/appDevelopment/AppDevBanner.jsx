const WebDevBanner = ({ caseStudyDetails }) => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${caseStudyDetails?.bannerImage})` }}
    ></div>
  );
};

export default WebDevBanner;
