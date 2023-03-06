import PAGES from "./pageModel.js";
import { onChangePage } from "./router.js";
import {
  HOME_PAGE_LINK,
  IL_PAGE_LINK,
  EU_PAGE_LINK,
  USA_PAGE_LINK,
  SIGNUP_PAGE_LINK,
  LOGIN_PAGE_LINK,
} from "../services/domService.js";

// ********* האזנה לאירועים **********

HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME_PAGE));
IL_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.IL_PAGE));
EU_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.EU_PAGE));
USA_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.USA_PAGE));
SIGNUP_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.SIGNUP_PAGE)
);
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN_PAGE));
