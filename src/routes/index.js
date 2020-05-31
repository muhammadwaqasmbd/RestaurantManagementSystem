import React from "react";
import { Redirect } from "react-router-dom";

// Pages Component
import Chat from "../pages/Chat/Chat";

// Pages Calendar
import Calendar from "../pages/Calendar/index";

//Tasks
import TasksList from "../pages/Tasks/tasks-list";
import TasksKanban from "../pages/Tasks/tasks-kanban";
import TasksCreate from "../pages/Tasks/tasks-create";

//Projects
import ProjectsGrid from "../pages/Projects/projects-grid";
import ProjectsList from "../pages/Projects/projects-list";
import ProjectsOverview from "../pages/Projects/projects-overview";
import ProjectsCreate from "../pages/Projects/projects-create";

//Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProductDetail";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceShops from "../pages/Ecommerce/EcommerceShops";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct";

//Email
import EmailInbox from "../pages/Email/email-inbox";
import EmailRead from "../pages/Email/email-read";

//Invoices
import InvoicesList from "../pages/Invoices/invoices-list";
import InvoiceDetail from "../pages/Invoices/invoices-detail";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";

// Charts
import ChartApex from "../pages/Charts/Apexcharts";
import ChartistChart from "../pages/Charts/ChartistChart";
import ChartjsChart from "../pages/Charts/ChartjsChart";
import EChart from "../pages/Charts/EChart";
import SparklineChart from "../pages/Charts/SparklineChart";
import ToastUIChart from "../pages/Charts/ToastUIChart";

// Maps
import MapsGoogle from "../pages/Maps/MapsGoogle";
import MapsVector from "../pages/Maps/MapsVector";

//Icons
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconDripicons from "../pages/Icons/IconDripicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconFontawesome from "../pages/Icons/IconFontawesome";

//TablesAssignment
import BasicTables from "../pages/TablesExample/BasicTables";
import DatatableTables from "../pages/TablesExample/DatatableTables";
import ResponsiveTables from "../pages/TablesExample/ResponsiveTables";
import EditableTables from "../pages/TablesExample/EditableTables";

// Forms
import FormElements from "../pages/Forms/FormElements";
import FormAdvanced from "../pages/Forms/FormAdvanced";
import FormEditors from "../pages/Forms/FormEditors";
import FormValidations from "../pages/Forms/FormValidations";
import FormMask from "../pages/Forms/FormMask";
import FormRepeater from "../pages/Forms/FormRepeater";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";
import FormXeditable from "../pages/Forms/FormXeditable";

//Ui
import UiAlert from "../pages/Ui/UiAlert";
import UiButtons from "../pages/Ui/UiButtons";
import UiCards from "../pages/Ui/UiCards";
import UiCarousel from "../pages/Ui/UiCarousel";
import UiColors from "../pages/Ui/UiColors";
import UiDropdown from "../pages/Ui/UiDropdown";
import UiGeneral from "../pages/Ui/UiGeneral";
import UiGrid from "../pages/Ui/UiGrid";
import UiImages from "../pages/Ui/UiImages";
import UiLightbox from "../pages/Ui/UiLightbox";
import UiModal from "../pages/Ui/UiModal";
import UiProgressbar from "../pages/Ui/UiProgressbar";
import UiSweetAlert from "../pages/Ui/UiSweetAlert";
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions";
import UiTypography from "../pages/Ui/UiTypography";
import UiVideo from "../pages/Ui/UiVideo";
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout";
import UiRating from "../pages/Ui/UiRating";
import UiRangeSlider from "../pages/Ui/UiRangeSlider";

//Pages
import PagesStarter from "../pages/Utility/pages-starter";
import PagesMaintenance from "../pages/Utility/pages-maintenance";
import PagesComingsoon from "../pages/Utility/pages-comingsoon";
import PagesTimeline from "../pages/Utility/pages-timeline";
import PagesFaqs from "../pages/Utility/pages-faqs";
import PagesPricing from "../pages/Utility/pages-pricing";
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";

//Contacts
import ContactsGrid from "../pages/Contacts/contacts-grid";
import ContactsList from "../pages/Contacts/contacts-list";
import ContactsProfile from "../pages/Contacts/contacts-profile";

// App
import Dashboard from "../pages/ResturantDashboard/index";
import AdminDashboard from "../pages/Dashboard/index";
import Resturants from "../pages/Resturants/index";
import Products from "../pages/Products/index";
import TableAssignments from "../pages/TablesAssignment/index";
import Menus from "../pages/Menus/index";
import AddMenu from "../pages/AddMenu/index";
import AddProduct from "../pages/AddProduct/index";
import AddRestaurant from "../pages/AddRestaurant/index";
import Tables from "../pages/Tables/index";
import AddTable from "../pages/AddTable/index";
import QRCodes from "../pages/QRCodes/index";
import AddQRCode from "../pages/AddQRCode/index";

const authProtectedRoutes = [
	{ path: "/admindashboard", component: AdminDashboard },
	{ path: "/resturants", component: Resturants },
	{ path: "/restaurant/:id", component: AddRestaurant },
	{ path: "/dashboard", component: Dashboard },
	{ path: "/dashboard/:id", component: Dashboard },
	{ path: "/products", component: Products },
	{ path: "/product/:id", component: AddProduct },
	{ path: "/tables-assignments", component: TableAssignments },
	{ path: "/tables", component: Tables },
	{ path: "/table/:id", component: AddTable },
	{ path: "/menus", component: Menus },
	{ path: "/menu/:id", component: AddMenu },
	{ path: "/qrcodes", component: QRCodes },
	{ path: "/qrcode/:id", component: AddQRCode },

	//chat
	{ path: "/chat", component: Chat },

	//calendar
	{ path: "/calendar", component: Calendar },

	//Ecommerce
	{ path: "/ecommerce-products", component: EcommerceProducts },
	{ path: "/ecommerce-product-detail", component: EcommerceProductDetail },
	{ path: "/ecommerce-orders", component: EcommerceOrders },
	{ path: "/ecommerce-customers", component: EcommerceCustomers },
	{ path: "/ecommerce-cart", component: EcommerceCart },
	{ path: "/ecommerce-checkout", component: EcommerceCheckout },
	{ path: "/ecommerce-shops", component: EcommerceShops },
	{ path: "/ecommerce-add-product", component: EcommerceAddProduct },

	//Email
	{ path: "/email-inbox", component: EmailInbox },
	{ path: "/email-read", component: EmailRead },

	//Invoices
	{ path: "/invoices-list", component: InvoicesList },
	{ path: "/invoices-detail", component: InvoiceDetail },

	//Tasks
	{ path: "/tasks-list", component: TasksList },
	{ path: "/tasks-kanban", component: TasksKanban },
	{ path: "/tasks-create", component: TasksCreate },

	//Projects
	{ path: "/projects-grid", component: ProjectsGrid },
	{ path: "/projects-list", component: ProjectsList },
	{ path: "/projects-overview", component: ProjectsOverview },
	{ path: "/projects-create", component: ProjectsCreate },

	//Contacts
	{ path: "/contacts-grid", component: ContactsGrid },
	{ path: "/contacts-list", component: ContactsList },
	{ path: "/contacts-profile", component: ContactsProfile },

	//Charts
	{ path: "/apex-charts", component: ChartApex },
	{ path: "/chartist-charts", component: ChartistChart },
	{ path: "/chartjs-charts", component: ChartjsChart },
	{ path: "/e-charts", component: EChart },
	{ path: "/sparkline-charts", component: SparklineChart },
	{ path: "/tui-charts", component: ToastUIChart },

	// Icons
	{ path: "/icons-boxicons", component: IconBoxicons },
	{ path: "/icons-dripicons", component: IconDripicons },
	{ path: "/icons-materialdesign", component: IconMaterialdesign },
	{ path: "/icons-fontawesome", component: IconFontawesome },

	// TablesAssignment
	{ path: "/tables-basic", component: BasicTables },
	{ path: "/tables-datatable", component: DatatableTables },
	{ path: "/tables-responsive", component: ResponsiveTables },
	{ path: "/tables-editable", component: EditableTables },

	// Maps
	{ path: "/maps-google", component: MapsGoogle },
	{ path: "/maps-vector", component: MapsVector },

	//Forms
	{ path: "/form-elements", component: FormElements },
	{ path: "/form-advanced", component: FormAdvanced },
	{ path: "/form-editors", component: FormEditors },
	{ path: "/form-mask", component: FormMask },
	{ path: "/form-repeater", component: FormRepeater },
	{ path: "/form-uploads", component: FormUpload },
	{ path: "/form-wizard", component: FormWizard },
	{ path: "/form-validation", component: FormValidations },
	{ path: "/form-xeditable", component: FormXeditable },

	// Ui
	{ path: "/ui-alerts", component: UiAlert },
	{ path: "/ui-buttons", component: UiButtons },
	{ path: "/ui-cards", component: UiCards },
	{ path: "/ui-carousel", component: UiCarousel },
	{ path: "/ui-colors", component: UiColors },
	{ path: "/ui-dropdowns", component: UiDropdown },
	{ path: "/ui-general", component: UiGeneral },
	{ path: "/ui-grid", component: UiGrid },
	{ path: "/ui-images", component: UiImages },
	{ path: "/ui-lightbox", component: UiLightbox },
	{ path: "/ui-modals", component: UiModal },
	{ path: "/ui-progressbars", component: UiProgressbar },
	{ path: "/ui-sweet-alert", component: UiSweetAlert },
	{ path: "/ui-tabs-accordions", component: UiTabsAccordions },
	{ path: "/ui-typography", component: UiTypography },
	{ path: "/ui-video", component: UiVideo },
	{ path: "/ui-session-timeout", component: UiSessionTimeout },
	{ path: "/ui-rating", component: UiRating },
	{ path: "/ui-rangeslider", component: UiRangeSlider },


	//Utility
	{ path: "/pages-starter", component: PagesStarter },
	{ path: "/pages-timeline", component: PagesTimeline },
	{ path: "/pages-faqs", component: PagesFaqs },
	{ path: "/pages-pricing", component: PagesPricing },


	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/admindashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forget-password", component: ForgetPwd },
	{ path: "/register", component: Register },

	{ path: "/pages-maintenance", component: PagesMaintenance },
	{ path: "/pages-comingsoon", component: PagesComingsoon },
	{ path: "/pages-404", component: Pages404 },
	{ path: "/pages-500", component: Pages500 },

	//Authentication Inner
	{ path: "/pages-login", component: Login1 },
	{ path: "/pages-register", component: Register1 },
	{ path: "/pages-forget-pwd", component: ForgetPwd1 }
];

export { authProtectedRoutes, publicRoutes };
