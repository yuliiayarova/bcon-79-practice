import izitoast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const defaultToastOptions = {
  title: "Please choose a date in the future",
  // message: "The date you selected is in the past. Please choose a valid date.",
  position: "topRight",
  timeout: 3000,
  close: false,
};

export function showErrorToast(customOptions = {}) {
  izitoast.error({ ...defaultToastOptions, ...customOptions });
}
