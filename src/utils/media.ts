import { breakPoints } from "./breakPoints";

const createMediaQuery = (width: number) =>
  `@media screen and (max-width: ${width}px)`;

export const media = {
  tablet: createMediaQuery(breakPoints.md),
  custom: createMediaQuery,
};
