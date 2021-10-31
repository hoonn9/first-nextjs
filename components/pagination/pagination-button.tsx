import { Dispatch, FC, SetStateAction, useCallback } from "react";

interface Props {
  setPage: Dispatch<SetStateAction<number>>;
}

const PaginationButton: FC<Props> = ({ setPage }) => {
  const onClickPrev = useCallback(() => {
    setPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const onClickNext = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return (
    <div>
      <button onClick={onClickPrev}>이전</button>
      <button onClick={onClickNext}>이전</button>
    </div>
  );
};

export default PaginationButton;
