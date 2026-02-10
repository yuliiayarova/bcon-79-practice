//! Libs scripts
// import izitoast from "izitoast";

//? Custom scripts
import { showErrorToast } from "./izitoast";

//* Styles
// import "izitoast/dist/css/iziToast.min.css";

export let userSelectDate = null;

export const flatpickerOptions = {
  dateFormat: "d-m-Y",
  defaultDate: new Date(),
  onClose(data) {
    const today = Date.now();
    userSelectDate = Date.parse(data[0]);

    if (userSelectDate < today) {
      // izitoast.error({ ...defaultToastOptions, title: "New title" });
      showErrorToast({ title: "Custom toast title" });

      return;
    }
  },
};
