import EmployeeForm from "./Employee/Form";
import List from "./Employee/List";
import Profile from "./Employee/Profile";
import MedicineForm from "./Medicines/Form";
import MedicineList from "./Medicines/List";
import UpdateMedicineForm from "./Medicines/Update";
import StockList from "./Stocks/List";
import StockForm from "./Stocks/StockForm";

const routes = [
  {
    layout: "/admin",
    path: "/medicines/add",
    name: "Add Medicine",
    showInSidebar: true,
    component: MedicineForm,
  },
  {
    layout: "/admin",
    path: "/medicines/update",
    name: "Update Medicine",
    showInSidebar: true,
    component: UpdateMedicineForm,
  },
  {
    layout: "/admin",
    path: "/medicines/list",
    name: "Medicine list",
    showInSidebar: true,
    component: MedicineList,
  },
  {
    layout: "/admin",
    path: "/stocks/list",
    name: "Stocks",
    showInSidebar: true,
    component: StockList,
  },
  {
    layout: "/admin",
    path: "/stocks/add",
    name: "Add Stocks",
    showInSidebar: true,
    component: StockForm,
  },
  {
    layout: "/admin",
    path: "/employee/add",
    name: "Add Employee",
    showInSidebar: true,
    component: EmployeeForm,
  },
  {
    layout: "/admin",
    path: "/employee/list",
    name: "Employees",
    showInSidebar: true,
    component: List,
  },
  {
    layout: "/admin",
    path: "/employee/profile",
    name: "Profile",
    showInSidebar: false,
    component: Profile,
  },
];

export default routes;
