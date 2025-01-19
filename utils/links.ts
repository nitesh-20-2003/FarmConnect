type NavLink = {
  href: string;
  label: string;
};
export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/products", label: "products" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
  { href: "/admin/sales", label: "dashboard" },
  {href:"/crops",label:"crops"}
];
export const adminLinks: NavLink[] = [
  { href: "/admin/products", label: "my products" },
  { href: "/admin/products/create", label: "create product" },
];