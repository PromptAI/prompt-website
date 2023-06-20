import { useRouter } from "next/router";

interface NavLinkProps {
  name: string;
  href?: string;
  target?: string;
  match?: string;
}
const NavLink = ({ name, href, target, match }: NavLinkProps) => {
  const router = useRouter();
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className="hover:text-[#00BCFF] hover:cursor-pointer hover:underline"
      >
        {name}
      </a>
    );
  }
  return (
    <span className="hover:text-[#00BCFF] hover:cursor-pointer hover:underline">
      {name}
    </span>
  );
};

export default NavLink;
