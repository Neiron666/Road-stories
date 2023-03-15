import PAGES from "./pageModel.js";
import {
  HOME_PAGE,
  IL_PAGE,
  EU_PAGE,
  USA_PAGE,
  SIGNUP_PAGE,
  LOGIN_PAGE,
  ERROR404_PAGE,
  CREATE_PIC_PAGE,
} from "../services/domService.js";

export const onChangePage = (page) => {
  CREATE_PIC_PAGE.className = "d-none";
  HOME_PAGE.className = "d-none";
  IL_PAGE.className = "d-none";
  EU_PAGE.className = "d-none";
  USA_PAGE.className = "d-none";
  SIGNUP_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  ERROR404_PAGE.className = "d-none";
  if (page === PAGES.HOME_PAGE) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.IL_PAGE) return (IL_PAGE.className = "d-block");
  if (page === PAGES.EU_PAGE) return (EU_PAGE.className = "d-block");
  if (page === PAGES.USA_PAGE) return (USA_PAGE.className = "d-block");
  if (page === PAGES.SIGNUP_PAGE) return (SIGNUP_PAGE.className = "d-block");
  if (page === PAGES.LOGIN_PAGE) return (LOGIN_PAGE.className = "d-block");
  if (page === PAGES.CREATE_PIC_PAGE)
    return (CREATE_PIC_PAGE.className = "d-block");
  return (ERROR404_PAGE.className = "d-block");
};
