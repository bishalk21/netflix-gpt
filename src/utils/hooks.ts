// typed versions of the useDispatch and useSelector hooks
// for use throughout the app instead of plain `useDispatch` and `useSelector`

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// to ensure type safety when dispatching actions and selecting state
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
