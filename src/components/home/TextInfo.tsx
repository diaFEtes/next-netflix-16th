import { ITextInfo } from "../../interface";

export default function TextInfo({ name, isPreview }: ITextInfo) {
  return (
    <>
      <div className={isPreview ? "isPreview" : ""}>{name}</div>
      <style jsx>{`
        div {
          font-weight: 700;
          margin-bottom: 14px;
          font-size: 20.92px;
          margin-left: 16px;
        }
        .isPreview {
          font-size: 26.75px;
        }
      `}</style>
    </>
  );
}
