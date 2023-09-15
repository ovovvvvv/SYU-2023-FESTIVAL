interface LineupBoxProps {
  imgUrl: string;
  altText: string;
}

const LineupBox = ({ imgUrl, altText }: LineupBoxProps) => {
  return (
    <div>
      <div className="w-[143px] h-[143px]  border-solid border-[3px] border-[#0026ff] rounded-[9px] mx-auto my-5">
        <img src={imgUrl} alt={altText} />
      </div>
    </div>
  );
};

export default LineupBox;
