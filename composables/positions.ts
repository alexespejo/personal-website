export const useTopBrkPt = () => useState<number>("topBP", () => 0);
export const useRightBrkPt = () => useState<number>("rightBP", () => 0);
export const useBottomBrkPt = () => useState<number>("bottomBP", () => 0);
export const useDrag = () => useState<number>("dragPos", () => 10);
