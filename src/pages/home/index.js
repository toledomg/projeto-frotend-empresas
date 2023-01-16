import { renderFooter, data } from "../../scripts/footer.js";
import { showMenu } from "../../scripts/menu.js";

import {
  renderCardsHome,
  listAllCompanies,
  renderSelect,
} from "../../scripts/render.js";

renderFooter();
showMenu();
renderCardsHome(await listAllCompanies());
renderSelect();
